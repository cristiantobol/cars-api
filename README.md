# Cars API

## Getting Started

Install dependencies (I'm using yarn):

```bash
yarn
```

Start the project:

```bash
yarn dev
```

## Testing

To run the tests, use:

```bash
yarn test
```

You can test the API using the `api-test.http` file with the REST Client extension for VS Code. Alternatively, you can use Postman to test the API endpoints.

## Features

- **Filters and Pagination**: The cars response includes pagination to manage large sets of data efficiently, as well as filtering for fuel type, min & max price
- **Unit Tests**: Currently, unit tests are implemented for filtering functionality. These tests can be extended to cover more features in the future.

