import { Router } from 'express';
import requests from '../services/requestsTemplate';

const router = Router();

router.get('/template', (req, res) => {
  requests.getTemplate()
    .then((templates) => {
      res.json(templates);
    });
});


router.post('/template', (req, res) => {
  requests.postTemplate(req.body)
    .then((ret) => {
      res.json(ret);
    })
    .catch((err) => {
      res.json(err);
    });
});

export default router;
