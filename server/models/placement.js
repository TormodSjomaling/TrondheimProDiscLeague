import mongoose from 'mongoose';

const placementSchema = mongoose.Schema({
    Tormod: {type: Number},
    Martin: {type: Number},
    Andreas: {type: Number},
})

export const Placement = mongoose.model('Placement', placementSchema);
export default placementSchema;
