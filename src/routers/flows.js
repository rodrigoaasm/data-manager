import { Router } from 'express';
import requestFlow from '../services/requestsFlow';

const router = Router();

router.get('/flow', (req, res) => {
  requestFlow()
    .then((flows) => {
      res.json(flows);
    });
});

router.post('/flow', (req, res) => {
  requestFlow.postFlow(req.body)
    .then((flows) => {
      res.status(200).json(flows.data);
    });
});

export default router;
