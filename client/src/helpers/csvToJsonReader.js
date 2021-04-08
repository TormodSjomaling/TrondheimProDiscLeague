const csvJsonReader = (csv, roundsCount) =>{
    var lines=csv.split("\n");

    var roundDocumentJson = {round: roundsCount + 1, placements:{}, par: {}, results: []};
    var headers=lines[0].split(",");

    for(var i=1;i<lines.length;i++){
        
        var obj = { };
        var currentline=lines[i].split(",");
  
        if (i === 1) {
            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }
            roundDocumentJson.par = obj
        }
        else {
            for(var x=0;x<headers.length;x++){
                obj[headers[x]] = currentline[x];
            }
            roundDocumentJson.results.push(obj)
        }
    }
    roundDocumentJson.results.pop();

    var obj = { };
    for(var i=0;i<roundDocumentJson.results.length;i++){

        var currentPlayer = roundDocumentJson.results[i].PlayerName
        var currentThrows = roundDocumentJson.results[i]["+/-"]
        
        obj[currentPlayer] = currentThrows
    }
    
    const sortable = Object.fromEntries(
        Object.entries(obj).sort(([,a],[,b]) => a-b)
    );
    var placements = {}
    for(var i=0;i<Object.keys(sortable).length;i++){
        placements[Object.keys(sortable)[i]] = i+1
    }
    var placementKeys = Object.keys(placements)
    for(var i=0;i<=placementKeys.length-1;i++){
        for(var j=placementKeys.length-1;j> i;j--){
            if(sortable[placementKeys[i]] === sortable[placementKeys[j]]){
                var highestPlace = Math.min(placements[placementKeys[i]], placements[placementKeys[j]])

                placements[placementKeys[i]] = highestPlace
                placements[placementKeys[j]] = highestPlace
            }
        }
    }
    roundDocumentJson['placements'] = placements

    return JSON.stringify(roundDocumentJson);
  }

export default csvJsonReader;