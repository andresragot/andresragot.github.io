// Tiny software 3D renderer: vertex transform → projection → line rasterization.
// Mirrors the spirit of esp32_3d_engine but in vanilla JS on a 2D canvas.

type Vec3 = [number, number, number];
type Edge = [number, number];

interface Demo {
  start(): void;
  stop(): void;
}

export function createWireframeDemo(canvas: HTMLCanvasElement, hud: HTMLElement): Demo {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const ctx = canvas.getContext('2d')!;
  let raf = 0;
  let running = false;
  let t = 0;
  let lastT = 0;
  let frames = 0;
  let fpsTimer = 0;
  let fps = 0;

  // Cube vertices and edges (and a small tetrahedron orbiting it)
  const cube: Vec3[] = [
    [-1, -1, -1], [ 1, -1, -1], [ 1,  1, -1], [-1,  1, -1],
    [-1, -1,  1], [ 1, -1,  1], [ 1,  1,  1], [-1,  1,  1]
  ];
  const cubeEdges: Edge[] = [
    [0,1],[1,2],[2,3],[3,0],
    [4,5],[5,6],[6,7],[7,4],
    [0,4],[1,5],[2,6],[3,7]
  ];
  const tetra: Vec3[] = [
    [ 0,  0.8,  0], [ 0.7, -0.4,  0.7], [-0.7, -0.4,  0.7], [ 0, -0.4, -0.9]
  ];
  const tetraEdges: Edge[] = [
    [0,1],[0,2],[0,3],[1,2],[2,3],[3,1]
  ];

  function resize() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(2, Math.floor(rect.width * dpr * 0.6));   // pixelated
    canvas.height = Math.max(2, Math.floor(rect.height * dpr * 0.6));
  }
  const onResize = () => resize();
  resize();
  window.addEventListener('resize', onResize, { passive: true });

  function rotate(v: Vec3, ax: number, ay: number): Vec3 {
    // rotate around Y then X
    const [x0, y0, z0] = v;
    const cy = Math.cos(ay), sy = Math.sin(ay);
    const x1 = x0 * cy + z0 * sy;
    const z1 = -x0 * sy + z0 * cy;
    const cx = Math.cos(ax), sx = Math.sin(ax);
    const y2 = y0 * cx - z1 * sx;
    const z2 = y0 * sx + z1 * cx;
    return [x1, y2, z2];
  }

  function project(v: Vec3, w: number, h: number, dist = 4, scale = 1): [number, number, number] {
    const z = v[2] + dist;
    const f = (h * 0.55) * scale / Math.max(0.1, z);
    return [w / 2 + v[0] * f, h / 2 - v[1] * f, z];
  }

  function drawShape(verts: Vec3[], edges: Edge[], ax: number, ay: number, color: string, glow: string, scale = 1, offset: Vec3 = [0, 0, 0]) {
    const w = canvas.width, h = canvas.height;
    const projected: Array<[number, number, number]> = verts.map(v => {
      const r = rotate(v, ax, ay);
      const moved: Vec3 = [r[0] + offset[0], r[1] + offset[1], r[2] + offset[2]];
      return project(moved, w, h, 5, scale);
    });
    ctx.lineWidth = Math.max(1, w * 0.0025);
    ctx.shadowColor = glow;
    ctx.shadowBlur = 12;
    ctx.strokeStyle = color;
    for (const [a, b] of edges) {
      const pa = projected[a], pb = projected[b];
      ctx.beginPath();
      ctx.moveTo(pa[0], pa[1]);
      ctx.lineTo(pb[0], pb[1]);
      ctx.stroke();
    }
    ctx.shadowBlur = 0;
    // vertex dots
    ctx.fillStyle = color;
    for (const p of projected) {
      ctx.beginPath();
      ctx.arc(p[0], p[1], Math.max(1.5, w * 0.004), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawGrid() {
    const w = canvas.width, h = canvas.height;
    ctx.strokeStyle = 'rgba(124,242,192,0.08)';
    ctx.lineWidth = 1;
    const step = Math.max(20, Math.floor(w / 24));
    for (let x = 0; x < w; x += step) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += step) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }
  }

  function tick(now: number) {
    if (!running) return;
    const dt = lastT ? (now - lastT) / 1000 : 0;
    lastT = now;
    t += dt;
    frames++;
    fpsTimer += dt;
    if (fpsTimer >= 0.5) {
      fps = Math.round(frames / fpsTimer);
      frames = 0; fpsTimer = 0;
    }

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid();

    drawShape(cube, cubeEdges, t * 0.7, t * 0.9, '#7cf2c0', 'rgba(124,242,192,0.7)', 1);
    const orbitX = Math.cos(t * 1.3) * 2.2;
    const orbitZ = Math.sin(t * 1.3) * 2.2;
    drawShape(tetra, tetraEdges, -t * 1.1, t * 1.7, '#6aa6ff', 'rgba(106,166,255,0.8)', 0.6, [orbitX, Math.sin(t * 2) * 0.4, orbitZ]);

    hud.querySelector<HTMLElement>('[data-fps]')!.textContent = String(fps);
    hud.querySelector<HTMLElement>('[data-frame]')!.textContent = String((Math.floor(t * 60)).toString().padStart(5, '0'));

    raf = requestAnimationFrame(tick);
  }

  return {
    start() {
      if (running) return;
      running = true;
      lastT = 0;
      raf = requestAnimationFrame(tick);
    },
    stop() {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };
}
