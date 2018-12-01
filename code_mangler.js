function webpage_output(){
    var original_code = ""
    var mangled_code = mangle_code(original_code)
    document.write(original_code);
    document.write(mangled_code);
}

function mangle_code(code) {
    var code_array = code.split("\n")
    for (code_string in code_array) {
        code_string.trim()
    }
    
}

function generateRandomNumber(min_value , max_value) {
    return Math.random() * (max-min) + min ;
} 