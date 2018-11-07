import { Router } from 'express';
import { body, validationResult } from 'express-validator/check';
import requestImport from '../services/requestsImport';

const router = Router();

router.post('/import', [
  body('templates', 'Not exist').exists(),
  body('templates', 'Need to be array').isArray(),
  // check object into array;
  body('templates.*.id').exists().isInt(),
  body('templates.*.label').exists().isString(),
  body('templates.*.attrs').exists().isArray(),
  body('templates.*.attrs.*.label').exists().isString(),
  body('templates.*.attrs.*.type').exists().isString(),
  body('templates.*.attrs.*.value_type').exists().isString(),
  // check devices;
  body('devices', 'Not exist').exists(),
  body('devices', 'Need to be array').isArray(),
  // check object into array;
  body('devices.*.id').exists().isString(),
  body('devices.*.label').exists().isString(),
  body('devices.*.templates').exists().isArray(),
  // check flows
  body('flows', 'Not exist').exists(),
  body('flows', 'Need to be array').isArray(),
  // check object into array;
  body('flows.*.name').exists().isString(),
  body('flows.*.enabled').exists().isBoolean(),
  body('flows.*.flow').exists().isArray(),
  // check object into array;
  body('flows.*.flow.*.type').exists().isString(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  return requestImport.postImport(req.body)
    .then((ret) => {
      res.status(200).json(ret);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

export default router;
