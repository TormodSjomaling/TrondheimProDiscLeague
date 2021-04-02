import Round from '../models/round.js';

export const getRounds = async (req, res) => {
    try {
        const rounds = await Round.find()

        res.status(200).json(rounds)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getRoundsByPlayerName = async (req, res) => {
    try {
        let playerName = "Tormod"
        const rounds = await Round.find({}, { PlayerName:1, '+/-':7})

        res.status(200).json(rounds)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}