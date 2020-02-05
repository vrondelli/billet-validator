import { Digit } from './domain/value-objects/digit';

export const getDigitsByPosition = (
  digits: Digit[],
  start: number,
  end?: number
) => {
  const startFilter = digits.filter(digit => digit.position >= start);

  if (end) {
    const endFilter = startFilter.filter(digit => digit.position <= end);

    return endFilter;
  }

  return startFilter;
};
