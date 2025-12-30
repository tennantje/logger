# @tennantje/logger

A bare-bones, Winston-based logger that outputs structured JSON logs. 100% TypeScript.

## Installation

```bash
npm install @tennantje/logger
```

## Usage

```typescript
import { logger } from "@tennantje/logger";

// Basic logging
logger({ level: "info", message: "Application started" });
// Output: {"level":"info","message":"Application started","timestamp":"2025-12-30T04:48:34.187Z"}

// With metadata
logger({
  level: "error",
  message: "Database connection failed",
  meta: { retries: 3 },
});
// Output: {"level":"error","message":"Database connection failed","timestamp":"2025-12-30T04:48:34.187Z","meta":{"retries":3}}

// Request logging example
logger({
  level: "info",
  message: "GET https://api.example.com/.well-known/security.txt",
  meta: {
    requestId: "f5f5a632-72dd-48d2-8398-30c83dd1be38",
    response: 200,
    duration: 90,
  },
});
// Output: {"level":"info","message":"GET https://api.example.com/.well-known/security.txt","timestamp":"2025-12-30T04:48:34.187Z","meta":{"requestId":"f5f5a632-72dd-48d2-8398-30c83dd1be38","response": 200, "duration":90}}
```

## Configuration

Set the `LOG_LEVEL` environment variable to control log output. Defaults to `info`

Available levels: `error`, `warn`, `info`, `debug`

## License

The MIT License
Copyright 2025 Jeremy Tennant

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
