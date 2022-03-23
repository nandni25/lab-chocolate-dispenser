
var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

function addChocolates(chocolates,color, count){
    for(var i=1;i<=count;i++){
        chocolates.unshift(color);
    }
    document.getElementById("1").innerHTML=chocolates;
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,numbers){
    var i;
    for(i=1;i<=numbers;i++){
        chocolates.shift();

    }
    document.getElementById("2").innerHTML=chocolates;
}

//Progression 3: Dispense ___ chocolates
function dispensed(chocolates, number){
    var i;
    var n=[];
    for(i=chocolates.length-1;i>=number;i--){
        n.push(chocolates[i]);
    }
    document.getElementById("3").innerHTML=n;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, color){
    var i;
    var n=[];
    for(i=chocolates.length-1;i>=0;i--){
       if(chocolates[i]==color){
        n.push(chocolates[i]);
       }
    }
    document.getElementById("4").innerHTML=n;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates){
    var c=[0,0,0,0,0,0,0];
    var i;
    for(i=0;i<chocolates.length;i++){
        if(chocolates[i]=='green'){
            c[0]++;
        }else if(chocolates[i]=='silver'){
            c[1]++;
        }else if(chocolates[i]=='blue'){
            c[2]++;
        }else if(chocolates[i]=='crimson'){
            c[3]++;
        }else if(chocolates[i]=='purple'){
            c[4]++;
        }else if(chocolates[i]=='red'){
            c[5]++;
        }else if(chocolates[i]=='pink'){
            c[6]++;
        }
    }
    document.getElementById("5").innerHTML=c;
    }
//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates){
    var c=[0,0,0,0,0,0,0];
    var i;
    for(i=0;i<chocolates.length;i++){
        if(chocolates[i]=='green'){
            c[0]++;
        }else if(chocolates[i]=='silver'){
            c[1]++;
        }else if(chocolates[i]=='blue'){
            c[2]++;
        }else if(chocolates[i]=='crimson'){
            c[3]++;
        }else if(chocolates[i]=='purple'){
            c[4]++;
        }else if(chocolates[i]=='red'){
            c[5]++;
        }else if(chocolates[i]=='pink'){
            c[6]++;
        }
    }
    c.sort(function(a,b){return b-a});
    document.getElementById("6").innerHTML=c;

}

//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates,number, color, finalColor){
    var i;
    for(i=0;i<chocolates.length;i++){
        if(chocolates[i]==color){
            chocolates[i]=finalColor;
            number=number-1;
        }else{
            continue;
        }
        if(number==0){
            break;
        }
    }
    document.getElementById("7").innerHTML=chocolates; 

}
//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color, finalColor){
    var i, count=0;
    var result=[];
    for(i=0;i<chocolates.length;i++){
        if(chocolates[i]==color){
            chocolates[i]=finalColor;
            count++;
        }else{
            continue;
        }  
    }
    result.push(count);
    result.push(chocolates);
    document.getElementById("8").innerHTML=result; 

}

//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor(chocolates,color){
    var i;
let c;
    for(i=0;i<chocolates.length;i++){
        if(chocolates[i]==color){
            c=chocolates[i];
            break;
        }
    }
    document.getElementById("c1").innerHTML=c;
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(chocolates, number){

    let dict = {
        "green": 0,
        "silver": 0,
        "blue": 0,
        "crimson": 0,
        "purple": 0,
        "red": 0,
        "pink": 0,
    }
   
    for(let i=0; i<chocolates.length; i++){
        if(chocolates[i] == "green")
            dict["green"]++;
        if(chocolates[i] == "silver")
            dict["silver"]++;
        if(chocolates[i] == "blue")
            dict["blue"]++;
        if(chocolates[i] == "crimson")
            dict["crimson"]++;
        if(chocolates[i] == "purple")
            dict["purple"]++;
        if(chocolates[i] == "red")
            dict["red"]++;
        if(chocolates[i] == "pink")
            dict["pink"]++;
    }
    
    let res = [];
    res.push(`green dispensed: ${~~(dict["green"]/number)}`);
    res.push(` silver dispensed: ${~~(dict["silver"]/number)}`);
    res.push(` blue dispensed: ${~~(dict["blue"]/number)}`);
    res.push(` crimson dispensed: ${~~(dict["crimson"]/number)}`);
    res.push(` purple dispensed: ${~~(dict["purple"]/number)}`);
    res.push(` red dispensed: ${~~(dict["red"]/number)}`);
    res.push(` pink dispensed: ${~~(dict["pink"]/number)}`);
    document.getElementById("c2").innerHTML=res;
   
}