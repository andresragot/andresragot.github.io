// Real benchmarks from esp32_3d_engine (averages over 1000+ frames per row).
// FPS = frames per second; mem = free heap (bytes) after PSRAM allocator.

export interface BenchRow {
  device: 'ESP32-P4' | 'ESP32-S3';
  meshes: number;
  fps: number;
  mem: number;
}

export interface BenchTable {
  id: string;
  rows: BenchRow[];
}

export const benchmarks: BenchTable[] = [
  {
    id: 'baseline',
    rows: [
      { device: 'ESP32-P4', meshes: 10, fps: 5.87, mem: 27_829_028 },
      { device: 'ESP32-S3', meshes: 10, fps: 9.09, mem: 8_012_640 },
      { device: 'ESP32-P4', meshes: 6, fps: 6.69, mem: 27_839_524 },
      { device: 'ESP32-S3', meshes: 6, fps: 10.22, mem: 8_022_570 },
      { device: 'ESP32-P4', meshes: 1, fps: 10.13, mem: 27_866_896 },
      { device: 'ESP32-S3', meshes: 1, fps: 17.27, mem: 8_049_026 }
    ]
  },
  {
    id: 'optimized-meshes',
    rows: [
      { device: 'ESP32-P4', meshes: 10, fps: 6.71, mem: 27_829_028 },
      { device: 'ESP32-S3', meshes: 10, fps: 9.68, mem: 8_012_640 },
      { device: 'ESP32-P4', meshes: 6, fps: 7.44, mem: 27_839_524 },
      { device: 'ESP32-S3', meshes: 6, fps: 10.80, mem: 8_022_620 },
      { device: 'ESP32-P4', meshes: 1, fps: 10.16, mem: 27_867_408 },
      { device: 'ESP32-S3', meshes: 1, fps: 17.54, mem: 8_049_643 }
    ]
  },
  {
    id: 'painter',
    rows: [
      { device: 'ESP32-P4', meshes: 10, fps: 12.89, mem: 30_319_400 },
      { device: 'ESP32-S3', meshes: 10, fps: 16.48, mem: 8_323_940 },
      { device: 'ESP32-P4', meshes: 6, fps: 14.39, mem: 30_329_896 },
      { device: 'ESP32-S3', meshes: 6, fps: 18.78, mem: 8_333_846 },
      { device: 'ESP32-P4', meshes: 1, fps: 18.36, mem: 30_357_780 },
      { device: 'ESP32-S3', meshes: 1, fps: 28.52, mem: 8_360_508 }
    ]
  },
  {
    id: 'parallel',
    rows: [
      { device: 'ESP32-P4', meshes: 10, fps: 13.16, mem: 30_308_160 },
      { device: 'ESP32-S3', meshes: 10, fps: 17.54, mem: 8_307_034 },
      { device: 'ESP32-P4', meshes: 6, fps: 14.35, mem: 30_318_744 },
      { device: 'ESP32-S3', meshes: 6, fps: 18.89, mem: 8_317_064 },
      { device: 'ESP32-P4', meshes: 1, fps: 18.57, mem: 30_346_676 },
      { device: 'ESP32-S3', meshes: 1, fps: 29.0, mem: 8_343_720 }
    ]
  }
];

/** Improvement % in FPS for a given config vs baseline, same MCU and same mesh count. */
export function improvement(configId: string, device: BenchRow['device'], meshes: number): number | null {
  const base = benchmarks[0].rows.find(r => r.device === device && r.meshes === meshes);
  const cfg = benchmarks.find(b => b.id === configId);
  const row = cfg?.rows.find(r => r.device === device && r.meshes === meshes);
  if (!base || !row) return null;
  return Math.round(((row.fps / base.fps) - 1) * 100);
}
