import { Router } from 'express';
import requestUser from '../services/requestUsers';

const router = Router();

router.get('/user', (req, res) => {
  requestUser()
    .then((users) => {
      res.send(users);
    });
});

export default router;
