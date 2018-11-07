import express from 'express';
import bodyParser from 'body-parser';
import Users from './routers/users';
import Flows from './routers/flows';
import Devices from './routers/devices';
import Templates from './routers/template';
import Export from './routers/export';
import Import from './routers/import';

const app = express();

app.use(bodyParser.json());
app.use(Users);
app.use(Flows);
app.use(Devices);
app.use(Templates);
app.use(Export);
app.use(Import);
app.listen(3000, () => {
  console.log('server running on port 3000');
});
