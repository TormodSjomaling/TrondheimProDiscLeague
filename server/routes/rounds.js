import express from 'express';

import { getRounds, getRoundsByPlayerName} from '../controllers/rounds.js'

const router = express.Router();

router.get('/rounds', getRounds)
router.get('/rounds/player', getRoundsByPlayerName)

export default router;