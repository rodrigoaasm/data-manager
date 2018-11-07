import { Router } from 'express';
import requests from '../services/requestsDevice';

const router = Router();

router.get('/device', (req, res) => {
  requests.requestDevice()
    .then((devices) => {
      res.json(devices);
    });
});

router.post('/device', (req, res) => {
  requests.postDevice(req.body)
    .then((ret) => {
      res.json(ret);
    })
    .catch((err) => {
      res.status(400).json(err.data);
    });
});

export default router;
