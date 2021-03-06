import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import playerRoutes from './routes/players.js';
import roundsRoutes from './routes/rounds.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "200mb", exteded: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use('/api', roundsRoutes);
app.use('/api', playerRoutes);

const CONNECTION_URL = 'mongodb+srv://admin:admin@trondheimprodiscleague.jrk2w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

