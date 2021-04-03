import mongoose from 'mongoose';

const roundSchema = mongoose.Schema({
    PlayerName: { type: String, required: true },
    CourseName: { type: String, required: true },
    PlayerName: { type: String, required: true },
    LayoutName: { type: String, required: true },
    Dato: { type: String, required: true, unique: true },
    Total: { type: String, required: true, unique: true },
    Result: { type: String, required: true},
    Hole1: { type: String, required: true, unique: true },
    Hole2: { type: String, required: true, unique: true },
    Hole3: { type: String, required: true, unique: true },
    Hole4: { type: String, required: true, unique: true },
    Hole5: { type: String, required: true, unique: true },
    Hole6: { type: String, required: true, unique: true },
    Hole7: { type: String, required: true, unique: true },
    Hole8: { type: String, required: true, unique: true },
    Hole9: { type: String, required: true, unique: true },
    Hole10: { type: String, required: true, unique: true },
    Hole11: { type: String },
    Hole12: { type: String },
    Hole13: { type: String },
    Hole14: { type: String },
    Hole15: { type: String },
    Hole16: { type: String },
    Hole17: { type: String },
    Hole18: { type: String },
    Hole18: { type: String }
})

const Round = mongoose.model('Round', roundSchema);

export default Round;