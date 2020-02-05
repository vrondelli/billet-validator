import { createDigitsFromString } from '../../../fixtures';
import { FieldWithVerifierDigit } from '../../../../../src/domain/entities/bank-typeable-line/fields/field-with-verifier-digit';
import { FirstVerifierDigitMultiplier } from '../../../../../src/domain/entities/bank-typeable-line/enums/first-verifier-digit-multiplier-enum';

describe('FieldWithVerifierDigit entity', () => {
  describe('isValid()', () => {
    describe('when field is valid', () => {
      test('returns true', () => {
        const stringField = '0019000009';
        const digits = createDigitsFromString(stringField);

        const field = new FieldWithVerifierDigit(
          digits,
          FirstVerifierDigitMultiplier.firstField
        );

        const result = field.isValid();

        expect(result).toEqual(true);
      });
    });

    describe('when field is not valid', () => {
      test('returns false', () => {
        const stringField = '0019000006';
        const digits = createDigitsFromString(stringField);

        const field = new FieldWithVerifierDigit(
          digits,
          FirstVerifierDigitMultiplier.firstField
        );

        const result = field.isValid();

        expect(result).toEqual(false);
      });
    });
  });
});
