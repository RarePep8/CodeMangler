var varObj = {"X":0, "Y":0, "Z":1};
var list = Object.keys(varObj);

class CodeBlock{
    constructor(functionRef, params, string){
        this.functionRef = functionRef;
        this.params = params;
        this.string = string;
    }
    runCode(varObj){
        var paramList = [].concat([varObj], this.params);
        try{
            this.functionRef.apply(null, paramList);
        }
        catch(err){
            alert("Error: something went wrong when running the function " + this.functionRef.string);
        }
    }
}
class Program{
    constructor(){
        this.codeBlockList = [];
    }
    addBlocks(numOfBlocks){
        for(var i = 0 ; i < numOfBlocks ; i++){
            this.codeBlockList.push(createRandomBlock(list));
        }
    }
    runAllCode(varObj){
        for(var i = 0 ; i < this.codeBlockList.length; i++){
            this.codeBlockList[i].runCode(varObj);
        }
    }
}
function createRandomBlock(listOfVars){
    var randNum = Math.random();
    if(randNum < 0.5){
        return createAssignBlock(listOfVars);
    } else {
        return createArithmeticBlock(listOfVars);
    }
}
function createAssignBlock(listOfVars){
    // Pick two random variables for assign statement
    var pickResult = pickNonRepeatVar(listOfVars);
    var assignedTo = pickResult.pick;
    listOfVars = pickResult.remaining;
    pickResult = pickNonRepeatVar(listOfVars);
    var assignedFrom = pickResult.pick;
    // Create function reference that takes in an object with all mutable variables, and 2 variables to mutate
    var createdFunction = function(varObj, assignedToName, assignedFromName){
        varObj[assignedToName] = varObj[assignedFromName];
    } 
    var codeBlock = new CodeBlock(functionRef = createdFunction, params = [assignedTo, assignedFrom], string = assignedTo + " = " + assignedFrom + ";");
    return codeBlock;
}

function createArithmeticBlock(listOfVars){
    var pickResult = pickNonRepeatVar(listOfVars);
    var addedTo = pickResult.pick;
    listOfVars = pickResult.remaining;
    if(Math.random < 0.5){
        pickResult = pickNonRepeatVar(listOfVars);
        var addedFrom = pickResult.pick;
    } else{
        var addedFrom = Math.round(Math.random()*5);
    }
    var createdFunction = function(varObj, addedToName, addedFromName){
        var parsedInt = parseInt(addedFromName);
        if(isNaN(parsedInt)){
            varObj[addedToName] += varObj[addedFromName];
        } else {
            varObj[addedToName] += parsedInt;
        }
    } 
    var codeBlock = new CodeBlock(functionRef = createdFunction, params = [addedTo, addedFrom], string = addedTo + " += " + addedFrom + ";");
    return codeBlock;
}

function pickNonRepeatVar(listOfElements){
    var randI = Math.round(Math.random()*(listOfElements.length-1));
    return {"pick": listOfElements[randI], "remaining": [].concat(listOfElements.slice(0, randI), listOfElements.slice(randI+1))};
}
var p = new Program();
p.addBlocks(10)
p.runAllCode(varObj);
alert(varObj.X);
// for(var i = 0; i < p.codeBlockList.length; i++){
//     alert(p.codeBlockList[i].string);
// }
