import axios from 'axios';

const url = 'http://localhost:5000/api';

export const fetchRounds = () => axios.get(url + "/rounds");
export const addRound = (newRound) => axios.post(url + "/round", newRound, {headers: {"Content-Type": "application/json"}})