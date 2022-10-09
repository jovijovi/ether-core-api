# Ether Core API

[![npm](https://img.shields.io/npm/v/@jovijovi/ether-core-api.svg)](https://www.npmjs.com/package/@jovijovi/ether-core-api)
[![GitHub Actions](https://github.com/jovijovi/ether-core-api/workflows/Test/badge.svg)](https://github.com/jovijovi/ether-core-api)
[![Coverage](https://img.shields.io/codecov/c/github/jovijovi/ether-core-api?label=\&logo=codecov\&logoColor=fff)](https://codecov.io/gh/jovijovi/ether-core-api)

HTTP APIs for [@jovijovi/ether-core](https://www.npmjs.com/package/@jovijovi/ether-core).

## Philosophy

*:kiss: KISS. Keep it small and simple.*

## Features

- HTTP RESTFul APIs for [@jovijovi/ether-core](https://www.npmjs.com/package/@jovijovi/ether-core) package.

## Development Environment

- typescript `4.8.4`
- node `v16.17.1`
- ts-node `v10.9.1`
- yarn `v1.22.19`

## Install

```shell
npm install @jovijovi/ether-core-api
```

or

```shell
yarn add @jovijovi/ether-core-api
```

## Usage

```typescript
import * as eth from '@jovijovi/ether-core-api';

class privateImplHandlers implements ITaskHandler {
	RegisterHandlers(router: core.Express) {
		eth.Handler.APIs(router);
	}
}
```

## Roadmap

- Documents

## License

[MIT](LICENSE)
