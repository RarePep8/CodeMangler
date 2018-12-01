function mangle_code(code) {
    var code_array = code.split("\n");
    for (code_string in code_array) {
        code_string.trim();
    }
    for (i = 0; i < code_array.length; i++) {
        swap_to = generateRandomNumber(i, code_array.length-1);
        temp_var = code_array[i];
        code_array[i] = code_array[swap_to];
        code_array[swap_to] = temp_var;
        document.getElementById("mangled_code").innerHTML += '<li class="code" draggable="true"><header>' + code_array[i] + '<//header></li>';
        //document.getElementById("mangled code").innerHTML += ("<br>");
    }
}

function generateRandomNumber(min, max) {
    return Math.round(Math.random() * (max-min) + min);
};

var original_code = "function mangle_code(code) {\n    var code_array = code.split(\"\\n\");\n    for (code_string in code_array) {\n        code_string.trim();\n    }\n    for (i = 0; i < code_array.length; i++) {\n        swap_to = generateRandomNumber(i, code_array.length-1);\n        temp_var = code_array[i];\n        code_array[i] = code_array[swap_to];\n        code_array[swap_to] = temp_var;\n    }\n}";
"\
function mangle_code(code) {\
    var code_array = code.split(\"\\n\");\
        for (code_string in code_array) {\
            code_string.trim();\
        }\
        for (i = 0; i < code_array.length; i++) {\
            swap_to = generateRandomNumber(i, code_array.length-1);\
            temp_var = code_array[i];\
            code_array[i] = code_array[swap_to];\
            code_array[swap_to] = temp_var;\
        }\
}";

var mangled_code = mangle_code(original_code);
document.getElementById("original code").innerHTML = original_code;