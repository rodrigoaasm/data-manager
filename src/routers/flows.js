import { Router } from 'express';
import requestFlow from '../services/requestsFlow';

const router = Router();

router.get('/flow', (req, res) => {
  requestFlow.get()
    .then((flows) => {
      res.json(flows);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post('/flow', (req, res) => {
  requestFlow.post(req.body)
    .then((flows) => {
      res.status(200).json(flows.data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

export default router;
