import { BankTypeableBilletLine } from '../../../../src/domain/entities/bank-typeable-line/bank-typeable-billet-line';

describe('BankTypeableBilletLine entity', () => {
  describe('isValid()', () => {
    describe('when typeable line is valid', () => {
      test('returns true', () => {
        const typeableLine = '00190000090283209300523584089173181450000005411';
        const bankTypeableLine = new BankTypeableBilletLine(typeableLine);

        const result = bankTypeableLine.isValid();

        expect(result).toBe(true);
      });
    });

    describe('when typeable line is not valid', () => {
      describe('when first field is not valid', () => {
        test('returns false', () => {
          const typeableLine =
            '02190400090283209300523584089173181450000005411';
          const bankTypeableLine = new BankTypeableBilletLine(typeableLine);

          const result = bankTypeableLine.isValid();

          expect(result).toBe(false);
        });
      });

      describe('when second field is not valid', () => {
        test('returns false', () => {
          const typeableLine =
            '00190000090284509300523584089173181450000005411';
          const bankTypeableLine = new BankTypeableBilletLine(typeableLine);

          const result = bankTypeableLine.isValid();

          expect(result).toBe(false);
        });
      });

      describe('when third field is not valid', () => {
        test('returns false', () => {
          const typeableLine =
            '00190000090283209300523596089173181450000005411';
          const bankTypeableLine = new BankTypeableBilletLine(typeableLine);

          const result = bankTypeableLine.isValid();

          expect(result).toBe(false);
        });
      });

      describe('when verifier digit is not valid', () => {
        test('returns false', () => {
          const typeableLine =
            '00190000090283209300523584089173181450000002911';
          const bankTypeableLine = new BankTypeableBilletLine(typeableLine);

          const result = bankTypeableLine.isValid();

          expect(result).toBe(false);
        });
      });
    });
  });

  describe('getBilletLine()', () => {
    test('returns billet line string', () => {
      const typeableLine = '00190000090283209300523584089173181450000005411';
      const bankTypeableLine = new BankTypeableBilletLine(typeableLine);

      const expected = '00191814500000054110000002832093002358408917';

      const result = bankTypeableLine.getBilletLine();

      expect(result).toBe(expected);
    });
  });
});
