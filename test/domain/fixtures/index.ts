import { Digit } from '../../../src/domain/value-objects/digit';
import { getDigitsByPosition } from '../../../src/utils';
import { BankTypeableLineFifthFieldPositions } from '../../../src/domain/entities/bank-typeable-line/enums/bank-typeable-line-positions';

export const createDigitsFromString = (string: string) => {
  const stringDigits = string.split('');

  return stringDigits.map((stringDigit, index) => {
    const value = parseInt(stringDigit, 10);
    const position = index + 1;

    return new Digit(value, position);
  });
};

export const testDigits = createDigitsFromString(
  '00190000090283209300523584089173181450000005411'
);

export const testDigitsWithoutDueDateFactor = createDigitsFromString(
  '00190000090283209300523584089173101450000005411'
);

export const fifthFieldDigits = getDigitsByPosition(
  testDigits,
  BankTypeableLineFifthFieldPositions.start
);

export const fifthFieldDigitsWithoutDueDateFactor = getDigitsByPosition(
  testDigitsWithoutDueDateFactor,
  BankTypeableLineFifthFieldPositions.start
);
