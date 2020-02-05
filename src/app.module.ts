import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BilletValidationService } from './billet-validation.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [BilletValidationService]
})
export class AppModule {}
