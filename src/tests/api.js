const express = require('express');
const device = require('./device');
const template = require('./template');
const postTemplate = require('./postTemplate');
const postDevice = require('./postDevice');
const postFlow = require('./postFlow');
const flow = require('./flow');
const node = require('./node');
const cron = require('./cron');

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

app.post('/import', (req, res) => {
  res.json({message: "data imported!"});
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

app.get('/v1/node', (req, res) => {
  res.json(node);
});

app.post('/v1/node', (req, res) => {
  res.json({message: "ok"});
});

app.delete('/v1/node', (req, res) => {
  res.json({message: "ok"});
});

app.get('/cron/v1/jobs', (req, res) => {
  res.status(200).json(cron.jobs);
});

app.delete('/cron/v1/jobs', (req, res) => {
  res.status(204).send();
});

app.put('/cron/v1/jobs/:id', (req, res) => {
  res.status(201).json({status: 'success', jobId: req.params.id});
});


app.listen(3030, () => {
  console.log('server test running');
});
