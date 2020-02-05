export interface IValidationEntity {
  isValid(): boolean;
  getBilletLine(): string;
  getBilletValue(): string;
  getDueDate(): string;
}
