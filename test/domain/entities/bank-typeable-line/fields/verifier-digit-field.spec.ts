import { createDigitsFromString } from '../../../fixtures';
import { VerifierDigitField } from '../../../../../src/domain/entities/bank-typeable-line/fields/verifier-digit-field';
import { Digit } from '../../../../../src/domain/value-objects/digit';

describe('VerifierDigitField entity', () => {
  describe('isValid()', () => {
    describe('when verifier digit is valid', () => {
      test('returns true', () => {
        const stringbillet = '00191814500000054110000002832093002358408917';
        const verifierDigit = new Digit(parseInt('1', 10), 5);

        const billetDigits = createDigitsFromString(stringbillet);

        const field = new VerifierDigitField(verifierDigit);

        const result = field.isValid(billetDigits);

        expect(result).toBe(true);
      });
    });

    describe('when verifier digit is not valid', () => {
      describe('when verifier digit is 0', () => {
        test('returns false', () => {
          const stringbillet = '00190814500000054110000002832093002358408917';
          const verifierDigit = new Digit(parseInt('0', 10), 5);

          const billetDigits = createDigitsFromString(stringbillet);

          const field = new VerifierDigitField(verifierDigit);

          const result = field.isValid(billetDigits);

          expect(result).toBe(false);
        });
      });

      test('returns false', () => {
        const stringbillet = '00191814500000029110000002832093002358408917';
        const verifierDigit = new Digit(parseInt('1', 10), 5);

        const billetDigits = createDigitsFromString(stringbillet);

        const field = new VerifierDigitField(verifierDigit);

        const result = field.isValid(billetDigits);

        expect(result).toBe(false);
      });
    });
  });
});
