import { BankTypeableBilletLineFifthField } from '../../../../../src/domain/entities/bank-typeable-line/fields/bank-typeable-billet-line-fifth-field';
import {
  fifthFieldDigits,
  testDigits,
  fifthFieldDigitsWithoutDueDateFactor
} from '../../../fixtures';
import { getDigitsByPosition } from '../../../../../src/utils';
import { BankTypeableLineFifthFieldPositions } from '../../../../../src/domain/entities/bank-typeable-line/enums/bank-typeable-line-positions';

describe('BankTypeableBilletLineFifthField entity', () => {
  describe('getDueDateFactor()', () => {
    test('returns due date factor digits', () => {
      const fifthField = new BankTypeableBilletLineFifthField(fifthFieldDigits);

      const result = fifthField.getDueDateFactor();

      const expected = getDigitsByPosition(
        testDigits,
        BankTypeableLineFifthFieldPositions.dueDateFactorStart,
        BankTypeableLineFifthFieldPositions.dueDateFactorEnd
      );

      expect(result).toStrictEqual(expected);
    });
  });

  describe('getBilletValueDigits()', () => {
    test('returns billet value digits', () => {
      const fifthField = new BankTypeableBilletLineFifthField(fifthFieldDigits);

      const result = fifthField.getBilletValueDigits();

      const expected = getDigitsByPosition(
        testDigits,
        BankTypeableLineFifthFieldPositions.billetValueDigitsStart
      );

      expect(result).toStrictEqual(expected);
    });
  });

  describe('getDueDate()', () => {
    describe('when due date exists', () => {
      test('returns due date string', () => {
        const fifthField = new BankTypeableBilletLineFifthField(
          fifthFieldDigits
        );

        const baseFactor = 1000;
        const baseDate = '2000-07-03';

        const result = fifthField.getDueDate(baseDate, baseFactor);

        const expected = '2020/01/25';

        expect(result).toStrictEqual(expected);
      });
    });

    describe('when due date does not exist', () => {
      test('returns null', () => {
        const fifthField = new BankTypeableBilletLineFifthField(
          fifthFieldDigitsWithoutDueDateFactor
        );

        const baseFactor = 1000;
        const baseDate = '2000-07-03';

        const result = fifthField.getDueDate(baseDate, baseFactor);

        expect(result).toStrictEqual(null);
      });
    });
  });

  describe('getBilletValue()', () => {
    test('returns billet value string', () => {
      const fifthField = new BankTypeableBilletLineFifthField(fifthFieldDigits);

      const result = fifthField.getBilletValue();

      const expected = 'R$54.11';

      expect(result).toBe(expected);
    });
  });
});
