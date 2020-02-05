import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IValidationEntity } from './domain/entities/i-validation-entity';
import { BankTypeableBilletLine } from './domain/entities/bank-typeable-line/bank-typeable-billet-line';

@Injectable()
export class BilletValidationService {
  public validateBillet(typeableLine: string) {
    const validationEntity = this.getValidationEntity(typeableLine);

    return {
      isValid: validationEntity.isValid(),
      dueDate: validationEntity.getDueDate(),
      value: validationEntity.getBilletValue(),
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
