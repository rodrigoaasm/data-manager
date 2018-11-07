import { Router } from 'express';
import requestExport from '../services/requestExport';

const router = Router();

router.get('/export', (req, res) => {
  requestExport()
    .then((exportData) => {
      res.json(exportData);
    });
});

export default router;
