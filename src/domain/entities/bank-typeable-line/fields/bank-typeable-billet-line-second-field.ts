import { FieldWithVerifierDigit } from './field-with-verifier-digit';
import { BankTypeableLineSecondFieldPositions } from '../enums/bank-typeable-line-positions';

export class BankTypeableBilletLineSecondField extends FieldWithVerifierDigit {
  public getBillet25to34Positions() {
    return this.getDigitsByPosition(
      BankTypeableLineSecondFieldPositions.billet25to34PositionsStart,
      BankTypeableLineSecondFieldPositions.billet25to34PositionsEnd
    );
  }
}
