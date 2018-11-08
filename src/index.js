import express from 'express';
import bodyParser from 'body-parser';
import Export from './routers/export';
import Import from './routers/import';

const app = express();

app.use(bodyParser.json());
app.use(Export);
app.use(Import);
app.listen(3000, () => {
  console.log('server running on port 3000');
});
