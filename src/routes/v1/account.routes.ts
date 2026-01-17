import { Router } from 'express';
import {
  importAccounts,
  getAccounts,
} from '../../controllers/account.controller';

const router = Router();

router.post('/import', importAccounts);
router.get('/', getAccounts);

export default router;
