import type {Dictionary} from '../locales/types';
import ja from '../locales/ja';
import en from '../locales/en';
import {useRouter} from 'next/router';

function getLanguageDictionary(locale: string): Dictionary {
  switch (locale) {
    case 'en':
      return en;
    default:
      return ja;
  }
}

interface Return {
  t: Dictionary;
  locale: string;
}

export function useLocale(): Return {
  const {locale: routerLocale} = useRouter();
  const locale = routerLocale || 'ja';
  const t = getLanguageDictionary(locale);

  return {t, locale};
}
