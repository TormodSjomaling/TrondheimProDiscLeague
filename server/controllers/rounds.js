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
        const rounds = await Round.find({}, { round: 1, results: {PlayerName: 1, "+/-":1 }})

        res.status(200).json(rounds)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addNewRound = async (req, res) => {
    try {
        //Json fil inn her
        const testData = {"round":11,"par":{"PlayerName":"Par","CourseName":"Rotvoll Diskgolfpark","LayoutName":"Good tees","Dato":"2021-04-03 14:31","Totalt":"34","+/-":"","Hole1":"3","Hole2":"3","Hole3":"3","Hole4":"3","Hole5":"3","Hole6":"3","Hole7":"4","Hole8":"3","Hole9":"3","Hole10":"3","Hole11 ":"3 "},"results":[{"PlayerName":"Andreas","CourseName":"Rotvoll Diskgolfpark","LayoutName":"Good tees","Dato":"2021-04-03 14:31","Totalt":"46","+/-":"12","Hole1":"4","Hole2":"4","Hole3":"4","Hole4":"4","Hole5":"5","Hole6":"6","Hole7":"5","Hole8":"4","Hole9":"4","Hole10":"4","Hole11 ":"2 "},{"PlayerName":"Martin","CourseName":"Rotvoll Diskgolfpark","LayoutName":"Good tees","Dato":"2021-04-03 14:31","Totalt":"55","+/-":"8","Hole1":"3","Hole2":"4","Hole3":"4","Hole4":"4","Hole5":"5","Hole6":"3","Hole7":"7","Hole8":"3","Hole9":"3","Hole10":"3","Hole11 ":"3 "},{"PlayerName":"Tormod","CourseName":"Rotvoll Diskgolfpark","LayoutName":"Good tees","Dato":"2021-04-03 14:31","Totalt":"45","+/-":"11","Hole1":"3","Hole2":"3","Hole3":"4","Hole4":"4","Hole5":"4","Hole6":"6","Hole7":"8","Hole8":"3","Hole9":"3","Hole10":"4","Hole11 ":"3"}]}

        const playerResults = [];
        for(var i=0;i<testData.results.length;i++){
            const playerResult = new PlayerResult()
            playerResult.PlayerName = testData.results[i].PlayerName,
            playerResult.PlayerName = testData.results[i].PlayerName,
            playerResult.CourseName = testData.results[i].CourseName,
            playerResult.LayoutName = testData.results[i].LayoutName,
            playerResult.Dato = testData.results[i].Dato,
            playerResult.Totalt = testData.results[i].Totalt,
            playerResult['+/-'] = testData.results[i]['+/-'],
            playerResult.Hole1 = testData.results[i].Hole1,
            playerResult.Hole2 = testData.results[i].Hole2,
            playerResult.Hole3 = testData.results[i].Hole3,
            playerResult.Hole4 = testData.results[i].Hole4,
            playerResult.Hole5 = testData.results[i].Hole5,
            playerResult.Hole6 = testData.results[i].Hole6,
            playerResult.Hole7 = testData.results[i].Hole7,
            playerResult.Hole8 = testData.results[i].Hole8,
            playerResult.Hole9 = testData.results[i].Hole9,
            playerResult.Hole10 = testData.results[i].Hole10,
            playerResult.Hole11 = testData.results[i].Hole11,
            playerResult.Hole12 = testData.results[i].Hole12,
            playerResult.Hole13 = testData.results[i].Hole13,
            playerResult.Hole14 = testData.results[i].Hole14,
            playerResult.Hole15 = testData.results[i].Hole15,
            playerResult.Hole16 = testData.results[i].Hole16,
            playerResult.Hole17 = testData.results[i].Hole17,
            playerResult.Hole18 = testData.results[i].Hole18

            playerResults.push(playerResult)
        }
        
        const playerResult = new PlayerResult({
            PlayerName: testData.par.PlayerName,
            CourseName: testData.par.CourseName,
            LayoutName: testData.par.LayoutName,
            Dato: testData.par.Dato,
            Totalt: testData.par.Totalt,
            '+/-': testData.par['+/-'],
            Hole1: testData.par.Hole1,
            Hole2: testData.par.Hole2,
            Hole3: testData.par.Hole3,
            Hole4: testData.par.Hole4,
            Hole5: testData.par.Hole5,
            Hole6: testData.par.Hole6,
            Hole7: testData.par.Hole7,
            Hole8: testData.par.Hole8,
            Hole9: testData.par.Hole9,
            Hole10: testData.par.Hole10,
            Hole11: testData.par.Hole11,
            Hole12: testData.par.Hole12,
            Hole13: testData.par.Hole13,
            Hole14: testData.par.Hole14,
            Hole15: testData.par.Hole15,
            Hole16: testData.par.Hole16,
            Hole17: testData.par.Hole17,
            Hole18: testData.par.Hole18
        })

        const round = new Round({
            round: testData.round,
            par: playerResult,
            results: playerResults
        })

        const newRound = await round.save();
        res.status(200).json(newRound)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
