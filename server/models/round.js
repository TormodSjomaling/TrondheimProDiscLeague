import mongoose from 'mongoose';

import playerResultSchema from './playerResult.js';

const roundSchema = mongoose.Schema({
    round: { type: Number, required: true, unique: true },
    par: { type: playerResultSchema },
    results: [ playerResultSchema ]
})

const Round = mongoose.model('Round', roundSchema);

export default Round;