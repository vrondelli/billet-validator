import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import * as Joi from '@hapi/joi';
import { BilletValidationService } from './billet-validation.service';

@Controller()
export class AppController {
  constructor(private readonly validationService: BilletValidationService) {}

  @Post('validate-billet')
  public validateBillet(@Body('typeableLine') typeableLine: string) {
    const schema = Joi.string()
      .regex(/^[0-9]+$/)
      .required();

    const { error } = schema.validate(typeableLine);

    if (error) {
      throw new BadRequestException(error.message);
    }

    return this.validationService.validateBillet(typeableLine);
  }
}
