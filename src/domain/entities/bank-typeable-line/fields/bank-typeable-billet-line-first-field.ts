import { FieldWithVerifierDigit } from './field-with-verifier-digit';
import { BankTypeableLineFirstFieldPositions } from '../enums/bank-typeable-line-positions';

export class BankTypeableBilletLineFirstField extends FieldWithVerifierDigit {
  public getBankCode() {
    return this.getDigitsByPosition(
      BankTypeableLineFirstFieldPositions.bankCodeStart,
      BankTypeableLineFirstFieldPositions.bankCodeEnd
    );
  }

  public getCurrencyCode() {
    return this.getDigitsByPosition(
      BankTypeableLineFirstFieldPositions.currencyCodeStart,
      BankTypeableLineFirstFieldPositions.currencyCodeEnd
    );
  }

  public getBillet20to24Positions() {
    return this.getDigitsByPosition(
      BankTypeableLineFirstFieldPositions.billet20to24PositionsStart,
      BankTypeableLineFirstFieldPositions.billet20to24PositionsEnd
    );
  }
}
