var vars = {"u":0, "v":0, "w":0, "x":0, "y":0, "z":0};
var varNames = Object.keys(vars);
function createCodeBlocks(numOfBlocks){
    // var testFunc = function(){
    //     document.getElementById("test").innerHTML = Date();
    // }
    // var listOfCodeBlocks = [{text:"lmao?", function : function(){testFunc()}}];
    var listOfCodeBlocks = [];
    for(var i = 0; i < numOfBlocks; i++){
        var randomVar = varNames[Math.floor((Math.random() * varNames.length))];
        var randomValue = Math.floor((Math.random() * 4)+1);
        listOfCodeBlocks.push(createArithmeticBlock(randomVar, randomValue));
    }
    var allText = "";
    for(var i = 0 ; i < listOfCodeBlocks.length; i++){
        allText += listOfCodeBlocks[i].text +"\n";
    }
    document.getElementById("test").innerHTML = allText;

    var input = 1;
    var vars = {"u":0, "v":0, "w":0, "x":0, "y":0, "z":0};
    vars["x"] = input;
    for(var i = 0; i < listOfCodeBlocks.length; i++){
        var currFunc = listOfCodeBlocks[i].function;
        var params = listOfCodeBlocks[i].params;
        var addValue = 0;
        if(params[1] in vars){
            addValue = vars[params[1]];
        }else{
            addValue = params[1];
        }
        vars[params[0]] = currFunc(vars[params[0]], addValue);
    }
    output = vars["x"];
    return {"text":allText, "samples":[{"input":input, "output":output}]};
}


function createArithmeticBlock(varToChangeName, valueName){
    var createdBlock = function(varToChange, value){
        if(isNumeric(value)){
            value = parseInt(value);
        }
        return varToChange += value;
    };
    var createdBlockName = varToChangeName + " += " + valueName + ";";

    return {"text":createdBlockName, "function":function(varToChange,value){return createdBlock(varToChange,value);}, "params":[varToChangeName, valueName]};
}


var list = createCodeBlocks(10);


function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
