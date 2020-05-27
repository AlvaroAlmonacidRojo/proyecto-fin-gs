import 'source-map-support/register';

import bodyParser from 'body-parser';
import express from 'express';
import router from './routes';

const host = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT || '8081', 10);

const app = express();

app.use(
  bodyParser.json(),
);
app.use('/', router);


if (!module.parent) {
  // Our current version of typescript doesn't support top-level await.
  // tslint:disable-next-line: no-floating-promises
    app.listen(port, host, () => {
      // tslint:disable-next-line:no-console
    });
}

export default app;