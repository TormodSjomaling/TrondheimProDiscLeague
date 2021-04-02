import express from 'express';

import { getPlayers, createPlayer } from '../controllers/players.js'

const router = express.Router();

router.get('/players', getPlayers);
router.post('/player', createPlayer);

export default router;