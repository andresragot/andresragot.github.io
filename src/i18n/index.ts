import type { Locale } from './config';
import { es } from './es';
import { en } from './en';
import { fr } from './fr';

export type Dict = typeof es;

const dicts: Record<Locale, Dict> = { es, en, fr: fr as Dict };

export function t(locale: Locale): Dict {
  return dicts[locale] ?? dicts.es;
}
