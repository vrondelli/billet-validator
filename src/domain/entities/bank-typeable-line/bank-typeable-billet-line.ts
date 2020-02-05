import { VerifierDigitField } from './fields/verifier-digit-field';
import { Digit } from '../../value-objects/digit';
import { getDigitsByPosition } from '../../../utils';
import { BankTypeableBilletLineFirstField } from './fields/bank-typeable-billet-line-first-field';
import { BankTypeableBilletLineSecondField } from './fields/bank-typeable-billet-line-second-field';
import { BankTypeableBilletLineThirdField } from './fields/bank-typeable-billet-line-third-field';
import { BankTypeableBilletLineFifthField } from './fields/bank-typeable-billet-line-fifth-field';
import { FirstVerifierDigitMultiplier } from './enums/first-verifier-digit-multiplier-enum';
import {
  BankTypeableLineFirstFieldPositions,
  BankTypeableLineSecondFieldPositions,
  BankTypeableLineThirdFieldPositions,
  BankTypeableLineFifthFieldPositions,
  BankTypeableLineVerifierDigitFieldPositions
} from './enums/bank-typeable-line-positions';
import { IValidationEntity } from '../i-validation-entity';
import config from '../../../config';

const { dueDateFactorBaseDate, dueDateBaseFactor } = config;

export class BankTypeableBilletLine implements IValidationEntity {
  private firstField: BankTypeableBilletLineFirstField;

  private secondField: BankTypeableBilletLineSecondField;

  private thirdField: BankTypeableBilletLineThirdField;

  private fourthField: VerifierDigitField;

  private fifthField: BankTypeableBilletLineFifthField;

  constructor(typeableLine: string) {
    const digits = this.createDigits(typeableLine);

    this.firstField = this.createfirstField(digits);
    this.secondField = this.createSecondField(digits);
    this.thirdField = this.createThirdField(digits);

    const VerifierDigit = getDigitsByPosition(
      digits,
      BankTypeableLineVerifierDigitFieldPositions.start,
      BankTypeableLineVerifierDigitFieldPositions.end
    )[0];
    this.fourthField = new VerifierDigitField(VerifierDigit);

    this.fifthField = this.createFifthField(digits);
  }

  public isValid() {
    if (!this.firstField.isValid()) {
      return false;
    }

    if (!this.secondField.isValid()) {
      return false;
    }

    if (!this.thirdField.isValid()) {
      return false;
    }

    if (!this.fourthField.isValid(this.getBilletDigits())) {
      return false;
    }

    return true;
  }

  public getBilletLine() {
    const billetDigitsStringValues = this.getBilletDigits().map(digit =>
      digit.value.toString()
    );

    return billetDigitsStringValues.reduce((accumulator, curentValue) => {
      return accumulator + curentValue;
    }, '');
  }

  public getBilletValue() {
    return this.fifthField.getBilletValue();
  }

  public getDueDate() {
    return this.fifthField.getDueDate(
      dueDateFactorBaseDate,
      parseInt(dueDateBaseFactor)
    );
  }

  private createDigits(typeableLine: string) {
    const stringDigits = typeableLine.split('');

    return stringDigits.map((stringDigit, index) => {
      const value = parseInt(stringDigit, 10);
      const position = index + 1;

      return new Digit(value, position);
    });
  }

  private createfirstField(digits: Digit[]) {
    const fieldDigits = getDigitsByPosition(
      digits,
      BankTypeableLineFirstFieldPositions.start,
      BankTypeableLineFirstFieldPositions.end
    );

    return new BankTypeableBilletLineFirstField(
      fieldDigits,
      FirstVerifierDigitMultiplier.firstField
    );
  }

  private createSecondField(digits: Digit[]) {
    const fieldDigits = getDigitsByPosition(
      digits,
      BankTypeableLineSecondFieldPositions.start,
      BankTypeableLineSecondFieldPositions.end
    );

    return new BankTypeableBilletLineSecondField(
      fieldDigits,
      FirstVerifierDigitMultiplier.secondField
    );
  }

  private createThirdField(digits: Digit[]) {
    const fieldDigits = getDigitsByPosition(
      digits,
      BankTypeableLineThirdFieldPositions.start,
      BankTypeableLineThirdFieldPositions.end
    );

    return new BankTypeableBilletLineThirdField(
      fieldDigits,
      FirstVerifierDigitMultiplier.thirdField
    );
  }

  private createFifthField(digits: Digit[]) {
    const fieldDigits = getDigitsByPosition(
      digits,
      BankTypeableLineFifthFieldPositions.start
    );

    return new BankTypeableBilletLineFifthField(fieldDigits);
  }

  private getBilletDigits() {
    return this.firstField
      .getBankCode()
      .concat(
        this.firstField.getCurrencyCode(),
        this.fourthField.getVerifierDigit(),
        this.fifthField.getDueDateFactor(),
        this.fifthField.getBilletValueDigits(),
        this.firstField.getBillet20to24Positions(),
        this.secondField.getBillet25to34Positions(),
        this.thirdField.getBillet35to44Positions()
      );
  }
}
