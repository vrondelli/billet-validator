import { FieldWithVerifierDigit } from './field-with-verifier-digit';
import { BankTypeableLineThirdFieldPositions } from '../enums/bank-typeable-line-positions';

export class BankTypeableBilletLineThirdField extends FieldWithVerifierDigit {
  public getBillet35to44Positions() {
    return this.getDigitsByPosition(
      BankTypeableLineThirdFieldPositions.billet35to44PositionsStart,
      BankTypeableLineThirdFieldPositions.billet35to44PositionsEnd
    );
  }
}
