let testDataRound1 = "PlayerName,CourseName,LayoutName,Dato,Totalt,+/-,Hole1,Hole2,Hole3,Hole4,Hole5,Hole6,Hole7,Hole8,Hole9,Hole10,Hole11,Hole12,Hole13,Hole14,Hole15,Hole16,Hole17,Hole18 \n" +
"Par,Dragvoll Diskgolfarena,Dragvoll 2021,2021-03-27 10:36,56,,3,4,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3 \n" +
"Tormod,Dragvoll Diskgolfarena,Dragvoll 2021,2021-03-27 10:36,64,8,4,4,3,3,3,2,5,4,4,4,2,3,4,3,3,5,4,4 \n" +
"Andreas,Dragvoll Diskgolfarena,Dragvoll 2021,2021-03-27 10:36,70,14,4,4,3,4,3,3,5,5,5,4,4,3,4,4,4,4,4,3 \n" +
"Martin,Dragvoll Diskgolfarena,Dragvoll 2021,2021-03-27 10:36,68,12,3,6,2,4,5,4,3,4,3,4,3,3,4,4,3,4,6,3 \n" +
"Morten,Dragvoll Diskgolfarena,Dragvoll 2021,2021-03-27 10:36,70,14,3,5,3,3,3,5,5,4,4,3,7,3,3,4,3,4,4,4";

let testDataRound2 = "PlayerName,CourseName,LayoutName,Dato,Totalt,+/-,Hole1,Hole2,Hole3,Hole4,Hole5,Hole6,Hole7,Hole8,Hole9,Hole10,Hole11 \n" +
"Par,Rotvoll Diskgolfpark,Good tees,2021-04-03 13:23,34,,3,3,3,3,3,3,4,3,3,3,3 \n" +
"Andreas,Rotvoll Diskgolfpark,Good tees,2021-04-03 13:23,42,8,3,4,4,4,5,3,5,3,3,4,4 \n" +
"Tormod,Rotvoll Diskgolfpark,Good tees,2021-04-03 13:23,39,5,3,4,3,4,5,4,4,3,3,3,3 \n" +
"Martin,Rotvoll Diskgolfpark,Good tees,2021-04-03 13:23,39,5,3,4,3,3,5,3,5,2,5,3,3"

let testDataRound3 = "PlayerName,CourseName,LayoutName,Dato,Totalt,+/-,Hole1,Hole2,Hole3,Hole4,Hole5,Hole6,Hole7,Hole8,Hole9,Hole10,Hole11 \n" +
"Par,Rotvoll Diskgolfpark,Good tees,2021-04-03 14:31,34,,3,3,3,3,3,3,4,3,3,3,3 \n" +
"Andreas,Rotvoll Diskgolfpark,Good tees,2021-04-03 14:31,46,12,4,4,4,4,5,6,5,4,4,4,2 \n" +
"Martin,Rotvoll Diskgolfpark,Good tees,2021-04-03 14:31,42,8,3,4,4,4,5,3,7,3,3,3,3 \n" +
"Tormod,Rotvoll Diskgolfpark,Good tees,2021-04-03 14:31,45,11,3,3,4,4,4,6,8,3,3,4,3"

const csvJsonReader = (csv) =>{

    var lines=csv.split("\n");
  
    var roundDocumentJson = {round: 1, par: {}, results: []};
    var headers=lines[0].split(",");

    for(var i=1;i<lines.length;i++){
        
        var obj = { };
        var currentline=lines[i].split(",");
  
        if (i == 1) {
            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }
            roundDocumentJson.par = obj
        }
        else {
            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }
            roundDocumentJson.results.push(obj)
        }
    }

    return JSON.stringify(roundDocumentJson);
  }

let result = csvJsonReader(testDataRound3);
console.log(result)

export default csvJsonReader;