import { Field } from '../../field';
import { Digit } from '../../../value-objects/digit';

export class FieldWithVerifierDigit extends Field {
  private verifierDigit: Digit;

  constructor(
    digits: Digit[],
    private readonly firstVerifierDigitMultiplier: number
  ) {
    super(digits);

    this.verifierDigit = digits.pop();
  }

  public isValid() {
    const calculatedVerifierDigit = this.calculateVerifierDigit();

    return this.verifierDigit.value === calculatedVerifierDigit;
  }

  private calculateVerifierDigit() {
    const multipliedDigitsSum = this.getMultipliedDigitsSum();

    const sumRoundedNearestTen =
      10 - (multipliedDigitsSum % 10) + multipliedDigitsSum;

    return sumRoundedNearestTen - multipliedDigitsSum;
  }

  private getMultipliedDigitsSum() {
    const multipliedDigitsValues = this.getMultipliedDigitsValues();

    return multipliedDigitsValues.reduce((accumulator, currentValue) => {
      if (currentValue > 9) {
        return this.sumDigits(currentValue) + accumulator;
      }

      return currentValue + accumulator;
    }, 0);
  }

  private sumDigits(number: number) {
    return ((number - 1) % 9) + 1;
  }

  private getMultipliedDigitsValues() {
    let multiplier = this.firstVerifierDigitMultiplier;
    const multipliedDigitsValues: number[] = [];

    this.digits.forEach(digit => {
      const multipliedValue = digit.value * multiplier;

      multipliedDigitsValues.push(multipliedValue);

      multiplier = multiplier === 2 ? 1 : 2;
    });

    return multipliedDigitsValues;
  }
}
