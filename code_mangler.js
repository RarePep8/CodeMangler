function mangle_code(code) {
    var code_array = code.split("\n");
    for (code_string in code_array) {
        code_string.trim();
    }
    for (i = 0; i < code_array.length; i++) {
        swap_to = generateRandomNumber(i, code_array.length - 1);
        temp_var = code_array[i];
        code_array[i] = code_array[swap_to];
        code_array[swap_to] = temp_var;
        document.getElementById("mangled_code").innerHTML += '<li class="code" draggable="true"><header>' + code_array[i] + '<//header></li>';
        //document.getElementById("mangled code").innerHTML += ("<br>");
    }
}

function generateRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

//var original_code = "function mangle_code(code) {\n    var code_array = code.split(\"\\n\");\n    for (code_string in code_array) {\n        code_string.trim();\n    }\n    for (i = 0; i < code_array.length; i++) {\n        swap_to = generateRandomNumber(i, code_array.length-1);\n        temp_var = code_array[i];\n        code_array[i] = code_array[swap_to];\n        code_array[swap_to] = temp_var;\n    }\n}";
//"\
//function mangle_code(code) {\
//    var code_array = code.split(\"\\n\");\
//        for (code_string in code_array) {\
//            code_string.trim();\
//        }\
//        for (i = 0; i < code_array.length; i++) {\
//            swap_to = generateRandomNumber(i, code_array.length-1);\
//            temp_var = code_array[i];\
//            code_array[i] = code_array[swap_to];\
//            code_array[swap_to] = temp_var;\
//        }\
//}";

var code_block_json = createCodeBlocks(10);
var original_code = code_block_json.text;
var sample_inout = code_block_json.samples;
for (var i = 0; i < sample_inout.length; i++) {
    document.getElementById("in_out").innerHTML += '<p class = "in_out">Sample Input: ' + sample_inout[i].input + '<br> Sample Output: '+
     sample_inout[i].output + '</p>';
}
var mangled_code = mangle_code(original_code);
//document.getElementById("original_code").innerHTML = original_code;