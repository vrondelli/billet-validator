## Description

An API that validates billets typeable lines.

You can find the validation rules in:

https://storage.googleapis.com/slite-api-files-production/files/b8def5e9-f732-4749-88ea-25270cb71c4d/Titulo.pdf

## Endpoint

| Method | Endpoint         | Usage                           | Returns         | Body                     |
| ------ | ---------------- | ------------------------------- | --------------- | ------------------------ |
| Post   | /validate-billet | validate a billet typeable line | response object | `{typeableLine: string}` |

Response object

```
{
    "isValid": true,
    "dueDate": "2020/01/25",
    "value": "R$54.11",
    "billetDigits": "00191814500000054110000002832093002358408917"
}
```

## Installation

```bash
$ npm install
```

## Running the app

To run the app you need to create a .env file in root directory with the following variables:

```
DUE_DATE_FACTOR_BASE_DATE=
DUE_DATE_BASE_FACTOR=
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```
