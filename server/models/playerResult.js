import mongoose from 'mongoose';

const playerResultSchema = mongoose.Schema({
        PlayerName: { type: String, required: true },
        CourseName: { type: String, required: true },
        LayoutName: { type: String, required: true },
        Dato: { type: String, required: true },
        Totalt: { type: String, required: true },
        '+/-': { type: String },
        Hole1: { type: String, required: true },
        Hole2: { type: String, required: true },
        Hole3: { type: String, required: true },
        Hole4: { type: String, required: true },
        Hole5: { type: String, required: true },
        Hole6: { type: String, required: true },
        Hole7: { type: String, required: true },
        Hole8: { type: String, required: true },
        Hole9: { type: String, required: true },
        Hole10: { type: String, required: true },
        Hole11: { type: String },
        Hole12: { type: String },
        Hole13: { type: String },
        Hole14: { type: String },
        Hole15: { type: String },
        Hole16: { type: String },
        Hole17: { type: String },
        Hole18: { type: String },
})

export const PlayerResult = mongoose.model('PlayerResult', playerResultSchema);
export default playerResultSchema;
