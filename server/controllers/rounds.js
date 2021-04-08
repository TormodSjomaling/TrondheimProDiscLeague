import { PlayerResult } from '../models/playerResult.js';
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
        const rounds = await Round.aggregate([
            {
              $unwind: "$results"
            },
            {
              $group: {
                _id: "$results.PlayerName",
                throws: {
                  $sum: {
                    $toInt: "$results.Totalt"
                  }
                },
                "total+/-": {
                  $sum: {
                    $toInt: "$results.+/-"
                  }
                }
              }
            },
          ])

        res.status(200).json(rounds)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addNewRound = async (req, res) => {
    try {
        const newRoundJson = req.body;
        const playerResults = [];
        
        for(var i=0;i<newRoundJson.results.length;i++){
            const playerResult = new PlayerResult()
            playerResult.PlayerName = newRoundJson.results[i].PlayerName,
            playerResult.PlayerName = newRoundJson.results[i].PlayerName,
            playerResult.CourseName = newRoundJson.results[i].CourseName,
            playerResult.LayoutName = newRoundJson.results[i].LayoutName,
            playerResult.Dato = newRoundJson.results[i].Dato,
            playerResult.Totalt = newRoundJson.results[i].Totalt,
            playerResult['+/-'] = newRoundJson.results[i]['+/-'],
            playerResult.Hole1 = newRoundJson.results[i].Hole1,
            playerResult.Hole2 = newRoundJson.results[i].Hole2,
            playerResult.Hole3 = newRoundJson.results[i].Hole3,
            playerResult.Hole4 = newRoundJson.results[i].Hole4,
            playerResult.Hole5 = newRoundJson.results[i].Hole5,
            playerResult.Hole6 = newRoundJson.results[i].Hole6,
            playerResult.Hole7 = newRoundJson.results[i].Hole7,
            playerResult.Hole8 = newRoundJson.results[i].Hole8,
            playerResult.Hole9 = newRoundJson.results[i].Hole9,
            playerResult.Hole10 = newRoundJson.results[i].Hole10,
            playerResult.Hole11 = newRoundJson.results[i].Hole11,
            playerResult.Hole12 = newRoundJson.results[i].Hole12,
            playerResult.Hole13 = newRoundJson.results[i].Hole13,
            playerResult.Hole14 = newRoundJson.results[i].Hole14,
            playerResult.Hole15 = newRoundJson.results[i].Hole15,
            playerResult.Hole16 = newRoundJson.results[i].Hole16,
            playerResult.Hole17 = newRoundJson.results[i].Hole17,
            playerResult.Hole18 = newRoundJson.results[i].Hole18

            playerResults.push(playerResult)
        }
        
        const playerResult = new PlayerResult({
            PlayerName: newRoundJson.par.PlayerName,
            CourseName: newRoundJson.par.CourseName,
            LayoutName: newRoundJson.par.LayoutName,
            Dato: newRoundJson.par.Dato,
            Totalt: newRoundJson.par.Totalt,
            '+/-': newRoundJson.par['+/-'],
            Hole1: newRoundJson.par.Hole1,
            Hole2: newRoundJson.par.Hole2,
            Hole3: newRoundJson.par.Hole3,
            Hole4: newRoundJson.par.Hole4,
            Hole5: newRoundJson.par.Hole5,
            Hole6: newRoundJson.par.Hole6,
            Hole7: newRoundJson.par.Hole7,
            Hole8: newRoundJson.par.Hole8,
            Hole9: newRoundJson.par.Hole9,
            Hole10: newRoundJson.par.Hole10,
            Hole11: newRoundJson.par.Hole11,
            Hole12: newRoundJson.par.Hole12,
            Hole13: newRoundJson.par.Hole13,
            Hole14: newRoundJson.par.Hole14,
            Hole15: newRoundJson.par.Hole15,
            Hole16: newRoundJson.par.Hole16,
            Hole17: newRoundJson.par.Hole17,
            Hole18: newRoundJson.par.Hole18
        })

        const round = new Round({
            round: newRoundJson.round,
            par: playerResult,
            results: playerResults
        })

        const newRound = await round.save();
        res.status(200).json(newRound)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
