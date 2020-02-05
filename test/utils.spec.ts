import { getDigitsByPosition } from '../src/utils';
import { testDigits } from './domain/fixtures';

describe('getDigitsByPosition()', () => {
  describe('when end parameter exists', () => {
    test('returns digits from start position to end position', () => {
      const expected = [testDigits[0], testDigits[1], testDigits[2]];

      const result = getDigitsByPosition(testDigits, 1, 3);

      expect(result).toStrictEqual(expected);
    });
  });

  describe('when end parameter does not exist', () => {
    test('returns digits from start position to last position', () => {
      const result = getDigitsByPosition(testDigits, 1);

      expect(result).toStrictEqual(testDigits);
    });
  });
});
