import * as moment from 'moment';

import { Field } from '../../field';
import { Digit } from '../../../value-objects/digit';
import { BankTypeableLineFifthFieldPositions } from '../enums/bank-typeable-line-positions';

export class BankTypeableBilletLineFifthField extends Field {
  public getDueDateFactor() {
    return this.getDigitsByPosition(
      BankTypeableLineFifthFieldPositions.dueDateFactorStart,
      BankTypeableLineFifthFieldPositions.dueDateFactorEnd
    );
  }

  public getBilletValueDigits() {
    return this.getDigitsByPosition(
      BankTypeableLineFifthFieldPositions.billetValueDigitsStart
    );
  }

  public getDueDate(baseDate: string, baseFactor: number) {
    const dueDateFactorDigits = this.getDueDateFactor();

    if (dueDateFactorDigits[0].value === 0) {
      return null;
    }

    const dueDateFactor = this.concatDigits(dueDateFactorDigits);

    const factorDiference = dueDateFactor - baseFactor;

    return moment(baseDate)
      .add(factorDiference, 'days')
      .format('YYYY/MM/DD');
  }

  public getBilletValue() {
    const billetValueDigits = this.getBilletValueDigits();

    const billetValue = this.concatDigits(billetValueDigits);
    const billetValueWithDecimalPlaces = Number((billetValue / 100).toFixed(2));

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(billetValueWithDecimalPlaces);
  }

  private concatDigits(digits: Digit[]) {
    const digitsValues = digits.map(digit => digit.value);

    return digitsValues.reduce((previousValue, currentValue) => {
      const stringValue = previousValue.toString() + currentValue.toString();

      return parseInt(stringValue, 10);
    }, 0);
  }
}
