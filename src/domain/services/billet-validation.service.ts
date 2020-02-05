import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IValidationEntity } from '../entities/i-validation-entity';
import { BankTypeableBilletLine } from '../entities/bank-typeable-line/bank-typeable-billet-line';

@Injectable()
export class BilletValidationService {
  public validateBillet(typeableLine: string) {
    const validationEntity = this.getValidationEntity(typeableLine);

    const isValid = validationEntity.isValid();

    return {
      isValid,
      dueDate: isValid ? validationEntity.getDueDate() : null,
      value: isValid ? validationEntity.getBilletValue() : null,
      billetDigits: validationEntity.getBilletLine()
    };
  }

  private getValidationEntity(typeableLine: string): IValidationEntity {
    const concessionairesPaymentTypeableLineLength = 48;

    if (typeableLine.length === concessionairesPaymentTypeableLineLength) {
      throw new InternalServerErrorException(
        'Concessionaires payment billets not implemented'
      );
    }

    return new BankTypeableBilletLine(typeableLine);
  }
}
