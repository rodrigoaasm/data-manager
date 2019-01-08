import express from 'express';
import bodyParser from 'body-parser';
import Export from './routers/export';
import Import from './routers/import';
import config from './config';
import Auth from './utils/auth';

const app = express();
app.use(bodyParser.json());
app.use(Auth.authParse);
app.use(Export);
app.use(Import);
app.listen(config.port, () => {
  console.log(`server running on port ${config.port}`);
});
