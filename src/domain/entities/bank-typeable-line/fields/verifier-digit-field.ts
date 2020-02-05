import { Digit } from '../../../value-objects/digit';

export class VerifierDigitField {
  constructor(private readonly digit: Digit) {}

  public getVerifierDigit() {
    return this.digit;
  }

  public isValid(billetDigits: Digit[]) {
    if (this.digit.value === 0) {
      return false;
    }

    const calculatedVerifierDigit = this.calculateVerifierDigit(billetDigits);

    return calculatedVerifierDigit === this.digit.value;
  }

  private calculateVerifierDigit(billetDigits: Digit[]) {
    const multipliedDigitValues = this.getMultipliedDigitsValues(billetDigits);

    const multipliedValuesSum = this.getMultipliedValuesSum(
      multipliedDigitValues
    );

    const divisionRemainder = multipliedValuesSum % 11;

    const verifierDigitCandidate = 11 - divisionRemainder;

    if (
      verifierDigitCandidate === 0 ||
      verifierDigitCandidate === 10 ||
      verifierDigitCandidate === 11
    ) {
      return 1;
    }

    return verifierDigitCandidate;
  }

  private getMultipliedValuesSum(multipliedValues: number[]) {
    return multipliedValues.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  }

  private getMultipliedDigitsValues(billetDigits: Digit[]) {
    const billetDigitsWithoutVerifierDigit = this.removeVerifierDigitFromBilletDigits(
      billetDigits
    );

    const firstMultiplier = 2;
    const lastMultiplier = 9;

    let multiplier = firstMultiplier;

    const multipliedValues: number[] = [];

    billetDigitsWithoutVerifierDigit.reverse().forEach(digit => {
      const multipliedValue = digit.value * multiplier;
      multipliedValues.push(multipliedValue);

      multiplier =
        multiplier === lastMultiplier ? firstMultiplier : multiplier + 1;
    });

    return multipliedValues;
  }

  private removeVerifierDigitFromBilletDigits(billetDigits: Digit[]) {
    const billetDigitsWithoutVerifierDigit = [...billetDigits];

    const verifierDigitIndex = billetDigits.findIndex(
      digit => digit.position === this.digit.position
    );

    billetDigitsWithoutVerifierDigit.splice(verifierDigitIndex, 1);

    return billetDigitsWithoutVerifierDigit;
  }
}
