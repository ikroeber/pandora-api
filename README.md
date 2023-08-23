# Pandora API

The API for the Pandora project management application.

*Still under active development...*

## System Requirements

- Installed Docker
- NodeJS v16 or later

## Installation

To have a full working environment you will need to follow some steps. Of course all starts with `npm install` to install the dependencies.

Now, to spin up a *postgresql* instance in your machine and run the API, use:

```
npm run start:dev
```

Be aware that before running this command, if you use a docker release without support for *Compose V2*, you will need to run:

```
docker-compose up --no-recreate --detach dev-db
```

The latest step is the migration of the database schema. *Prisma* makes it pretty easy. Just run:

```
npx prisma migrate deploy
```

Now your everything should be running. If you find any problem while trying to spin up your environment, feel free to contact me through my email. I will consider using GH Issues to manage this properly in a near future.

**Happy CODING! :)**

# License

Copyright 2023 Igor Kroeber

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.