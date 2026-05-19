export type Locale = 'es' | 'en' | 'fr';

export const locales: Locale[] = ['es', 'en', 'fr'];
export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français'
};

export const localeHtml: Record<Locale, string> = {
  es: 'es-ES',
  en: 'en-US',
  fr: 'fr-FR'
};

export function localizedPath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  if (locale === defaultLocale) return '/' + clean;
  return `/${locale}/${clean}`;
}
