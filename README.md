## Description

An API that validates billets typeable lines.

You can find the validation rules in:

https://storage.googleapis.com/slite-api-files-production/files/b8def5e9-f732-4749-88ea-25270cb71c4d/Titulo.pdf

## Endpoint

| Method | Endpoint  | Usage                        | Returns | Body                     |
| ------ | --------- | ---------------------------- | ------- | ------------------------ |
| Post   | /download | get all images in zip format | zip     | `{typeableLine: string}` |

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
