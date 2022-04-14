import {useLocale} from '../hooks/useLocale';
import {useCallback} from 'react';

interface Return {
  format: (value: number) => string;
}

export function useCurrencyFormat(): Return {
  const {locale} = useLocale();

  const format = useCallback(
    (value: number) => {
      if (locale === 'en') {
        return new Intl.NumberFormat('us-EN', {
          style: 'currency',
          currency: 'USD',
        }).format(value);
      }

      return new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: 'JPY',
      }).format(value);
    },
    [locale]
  );

  return {format};
}
