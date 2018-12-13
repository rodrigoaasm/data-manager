const express = require('express');
const device = require('./device');
const template = require('./template');
const postTemplate = require('./postTemplate');
const postDevice = require('./postDevice');
const postFlow = require('./postFlow');
const flow = require('./flow');

const app = express();

app.get('/device', (req, res) => {
  res.json(device);
});

app.post('/device', (req, res) => {
  res.json({ devices: postDevice });
});

app.delete('/device', (req, res) => {
  res.sendStatus(200);
});

app.get('/template', (req, res) => {
  res.json(template);
});

app.post('/template', (req, res) => {
  res.json({ template: postTemplate });
});

app.delete('/template', (req, res) => {
  res.sendStatus(200);
});

app.get('/v1/flow', (req, res) => {
  res.json(flow);
});

app.post('/v1/flow', (req, res) => {
  res.json(postFlow);
});

app.delete('/v1/flow', (req, res) => {
  res.sendStatus(200);
});

app.listen(3030, () => {
  console.log('server test running');
});
