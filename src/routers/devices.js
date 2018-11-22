import { Router } from 'express';
import requestDevice from '../services/requestsDevice';

const router = Router();

router.get('/device', (req, res) => {
  requestDevice.get()
    .then((devices) => {
      res.json(devices);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post('/device', (req, res) => {
  requestDevice.post(req.body)
    .then((ret) => {
      res.json(ret);
    })
    .catch((err) => {
      res.status(400).json(err.data);
    });
});

export default router;
