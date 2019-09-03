import express from 'express';
import bodyParser from 'body-parser';
import Export from './routers/export';
import Import from './routers/import';
import config from './config';

const app = express();
app.use(bodyParser.json({ limit: config.request_body_limit }));
app.use(Export);
app.use(Import);
app.listen(config.port, () => {
  console.log(`server running on port ${config.port}`);
});
