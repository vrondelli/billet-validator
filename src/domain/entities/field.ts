import { Digit } from '../value-objects/digit';
import { getDigitsByPosition } from '../../utils';

export class Field {
  constructor(protected digits: Digit[]) {}

  protected getDigitsByPosition(start: number, end?: number) {
    return getDigitsByPosition(this.digits, start, end);
  }
}
