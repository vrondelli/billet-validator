export enum BankTypeableLineFirstFieldPositions {
  start = 1,
  end = 10,
  bankCodeStart = 1,
  bankCodeEnd = 3,
  currencyCodeStart = 4,
  currencyCodeEnd = 4,
  billet20to24PositionsStart = 5,
  billet20to24PositionsEnd = 9
}

export enum BankTypeableLineSecondFieldPositions {
  start = 11,
  end = 21,
  billet25to34PositionsStart = 11,
  billet25to34PositionsEnd = 20
}

export enum BankTypeableLineThirdFieldPositions {
  start = 22,
  end = 32,
  billet35to44PositionsStart = 22,
  billet35to44PositionsEnd = 31
}

export enum BankTypeableLineVerifierDigitFieldPositions {
  start = 33,
  end = 33
}

export enum BankTypeableLineFifthFieldPositions {
  start = 34,
  dueDateFactorStart = 34,
  dueDateFactorEnd = 37,
  billetValueDigitsStart = 38
}
