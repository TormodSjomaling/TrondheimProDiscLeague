const csvJsonReader = (csv) =>{
    var lines=csv.split("\n");

    var roundDocumentJson = {round: 4, par: {}, results: []};
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
    return JSON.stringify(roundDocumentJson);
  }

export default csvJsonReader;