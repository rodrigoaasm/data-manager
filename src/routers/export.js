import { Router } from 'express';
import requestExport from '../services/requestExport';

const router = Router();

router.get('/export', (req, res) => {
  requestExport()
    .then((exportData) => {
      res.json(exportData);
    })
    .catch((err) => {
      const error = {
        message: err.toString(),
      };
      res.status(400).json(error);
    });
});

export default router;
