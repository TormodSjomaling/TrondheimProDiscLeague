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
        //const testData = {"round":5,"par":{"PlayerName":"Par","CourseName":"Rotvoll Diskgolfpark","LayoutName":"Good tees","Dato":"2021-04-03 14:31","Totalt":"34","+/-":"","Hole1":"3","Hole2":"3","Hole3":"3","Hole4":"3","Hole5":"3","Hole6":"3","Hole7":"4","Hole8":"3","Hole9":"3","Hole10":"3","Hole11 ":"3 "},"results":[{"PlayerName":"Andreas","CourseName":"Rotvoll Diskgolfpark","LayoutName":"Good tees","Dato":"2021-04-03 14:31","Totalt":"46","+/-":"12","Hole1":"4","Hole2":"4","Hole3":"4","Hole4":"4","Hole5":"5","Hole6":"6","Hole7":"5","Hole8":"4","Hole9":"4","Hole10":"4","Hole11 ":"2 "},{"PlayerName":"Martin","CourseName":"Rotvoll Diskgolfpark","LayoutName":"Good tees","Dato":"2021-04-03 14:31","Totalt":"55","+/-":"8","Hole1":"3","Hole2":"4","Hole3":"4","Hole4":"4","Hole5":"5","Hole6":"3","Hole7":"7","Hole8":"3","Hole9":"3","Hole10":"3","Hole11 ":"3 "},{"PlayerName":"Tormod","CourseName":"Rotvoll Diskgolfpark","LayoutName":"Good tees","Dato":"2021-04-03 14:31","Totalt":"45","+/-":"11","Hole1":"3","Hole2":"3","Hole3":"4","Hole4":"4","Hole5":"4","Hole6":"6","Hole7":"8","Hole8":"3","Hole9":"3","Hole10":"4","Hole11 ":"3"}]}

        //TODO: Clean opp her, for løkke? separat funksjon?
        const round = new Round({
            round: testData.round,
            par: {
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
            },
            results: [{
                PlayerName: testData.results[0].PlayerName,
                CourseName: testData.results[0].CourseName,
                LayoutName: testData.results[0].LayoutName,
                Dato: testData.results[0].Dato,
                Totalt: testData.results[0].Totalt,
                '+/-': testData.results[0]['+/-'],
                Hole1: testData.results[0].Hole1,
                Hole2: testData.results[0].Hole2,
                Hole3: testData.results[0].Hole3,
                Hole4: testData.results[0].Hole4,
                Hole5: testData.results[0].Hole5,
                Hole6: testData.results[0].Hole6,
                Hole7: testData.results[0].Hole7,
                Hole8: testData.results[0].Hole8,
                Hole9: testData.results[0].Hole9,
                Hole10: testData.results[0].Hole10,
                Hole11: testData.results[0].Hole11,
                Hole12: testData.results[0].Hole12,
                Hole13: testData.results[0].Hole13,
                Hole14: testData.results[0].Hole14,
                Hole15: testData.results[0].Hole15,
                Hole16: testData.results[0].Hole16,
                Hole17: testData.results[0].Hole17,
                Hole18: testData.results[0].Hole18,
            },
            {
                PlayerName: testData.results[1].PlayerName,
                CourseName: testData.results[1].CourseName,
                LayoutName: testData.results[1].LayoutName,
                Dato: testData.results[1].Dato,
                Totalt: testData.results[1].Totalt,
                '+/-': testData.results[1]['+/-'],
                Hole1: testData.results[1].Hole1,
                Hole2: testData.results[1].Hole2,
                Hole3: testData.results[1].Hole3,
                Hole4: testData.results[1].Hole4,
                Hole5: testData.results[1].Hole5,
                Hole6: testData.results[1].Hole6,
                Hole7: testData.results[1].Hole7,
                Hole8: testData.results[1].Hole8,
                Hole9: testData.results[1].Hole9,
                Hole10: testData.results[1].Hole10,
                Hole11: testData.results[1].Hole11,
                Hole12: testData.results[1].Hole12,
                Hole13: testData.results[1].Hole13,
                Hole14: testData.results[1].Hole14,
                Hole15: testData.results[1].Hole15,
                Hole16: testData.results[1].Hole16,
                Hole17: testData.results[1].Hole17,
                Hole18: testData.results[1].Hole18,
            },
            {
                PlayerName: testData.results[2].PlayerName,
                CourseName: testData.results[2].CourseName,
                LayoutName: testData.results[2].LayoutName,
                Dato: testData.results[2].Dato,
                Totalt: testData.results[2].Totalt,
                '+/-': testData.results[2]['+/-'],
                Hole1: testData.results[2].Hole1,
                Hole2: testData.results[2].Hole2,
                Hole3: testData.results[2].Hole3,
                Hole4: testData.results[2].Hole4,
                Hole5: testData.results[2].Hole5,
                Hole6: testData.results[2].Hole6,
                Hole7: testData.results[2].Hole7,
                Hole8: testData.results[2].Hole8,
                Hole9: testData.results[2].Hole9,
                Hole10: testData.results[2].Hole10,
                Hole11: testData.results[2].Hole11,
                Hole12: testData.results[2].Hole12,
                Hole13: testData.results[2].Hole13,
                Hole14: testData.results[2].Hole14,
                Hole15: testData.results[2].Hole15,
                Hole16: testData.results[2].Hole16,
                Hole17: testData.results[2].Hole17,
                Hole18: testData.results[2].Hole18,
            }]

        })

        const newRound = await round.save();
        res.status(200).json(newRound)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
