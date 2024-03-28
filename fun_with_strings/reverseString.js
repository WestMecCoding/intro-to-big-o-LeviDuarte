cl = console.log
// initialize a variable called someStr to some string of your choice


// create a named function that takes an argumet 'str'

function stringNamer(str){
    str = str.split("").reverse().join("");
    return str
}

cl(stringNamer("Domain Expansion"));
// in the fucntion reverse str 

// rerturn str

// outside of the function log the fucntion and pass someStr