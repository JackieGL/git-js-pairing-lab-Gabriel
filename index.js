//Code your solutions in this file
function fiveToOneHundred(){
    for(let i = 5; i <= 100 ; i++){
        console.log(i);
    }
}


function multiplesOfThree(){
    for(let i = 0; i < 100;i += 3){
        console.log(i);
    }
}

function multiplesOfThreeOrFive(){
    for(let i = 0 ; i < 100; i ++){
       if(i % 3 == 0 || i % 5 == 0){
           console.log(i)
       }
    }
}

function untilNum(num){
    for(let i = 0; i < num; i++){
        console.log(i);
    }
}


function add(num1,num2){
    let sum = num1 + num2;
    if(num1 === num2){
        return sum * 3;
    }else{
        return sum;
    }
}


function isNegative(num){
    if(num < 0){
        return true
    }else{
        return false
    }
}


function multiply(a,b){
    let mul = a * b;
    if(a === b){
        return mul * 3;
    }else{
        return mul;
    }
}

function triangleArea(height,base){
    let multiply = height * base;
    return multiply * 0.5;
}
console.log(triangleArea(4,5));