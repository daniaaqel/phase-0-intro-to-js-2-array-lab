// Write your solution here!
const  cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}
function  destructivelyRemoveFirstCat(){
    cats.shift();
}
function  appendCat(name){
    var newArray = cats.slice();
    
    newArray.push(name)
    return newArray
}
/***** */
function prependCat(name){
    return ["Arnold",...cats]

}

function removeLastCat(){
    var newArray = cats.slice();
    
    newArray.pop()
    return newArray
}
//****** */
function removeFirstCat(){
    var arr2 = cats.slice().splice(1, 2);
    return arr2;
}