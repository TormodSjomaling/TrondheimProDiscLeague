import express from 'express';

import { getRounds, getRoundsByPlayerName, addNewRound } from '../controllers/rounds.js'

const router = express.Router();

router.get('/rounds', getRounds)
router.get('/rounds/player', getRoundsByPlayerName)
router.post('/round', addNewRound)

export default router;