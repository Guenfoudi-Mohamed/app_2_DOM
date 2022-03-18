// app_2

    //select Nodes
const btn_left = document.querySelector('body section .container a.btn_left');
const btn_right = document.querySelector('body section .container a.btn_right');
const boxs = document.querySelector('body section .container div.boxs');
boxs.style.background = 'black';
const points = document.querySelectorAll('body section .container div.points div.point');
const arr = [0,-640,-1280];
let conteur = Math.round(Math.random() * 2);
let transition_duration = 0;
//function load
function pointsFun(value,time_Duration){
    points[value].style.cssText = `background-color:rgb(116, 75, 0);border-color:black;`;
    for(let i = 0 ;i<points.length;i++){
        if(i == value){
            continue;
        }
        points[i].style.cssText = `background-color:grey;border-color:transparent;`;
    }
    boxs.style.cssText = `transform:translateX(${arr[value]}px);transition:transform ${time_Duration}s;`;
    conteur=value;                                    
};
    //button left
btn_left.onclick = function(){
    conteur--;
    if(conteur < 0){
        transition_duration = 0;
        conteur = points.length-1;
        boxs.style.cssText = `transform:translateX(${arr[conteur]}px);transition-duration: ${transition_duration}s;`;
        pointsFun(conteur,transition_duration);
    }
    else{
        transition_duration = .5;
        boxs.style.cssText = `transform:translateX(${arr[conteur]}px);transition-duration: ${transition_duration}s;`;
        pointsFun(conteur,transition_duration);
    };
};
    //function button right
btn_right.onclick = function(){
    conteur++;
    if(conteur > points.length-1){
        transition_duration = 0;
        conteur = ((points.length-1) - (points.length-1));
        boxs.style.cssText = `transform: translateX(${arr[conteur]}px);transition-duration: ${transition_duration}s;`;
        pointsFun(conteur,transition_duration);
    }
    else{
        transition_duration = .5;
        boxs.style.cssText = `transform: translateX(${arr[conteur]}px);transition-duration: ${transition_duration}s;`;
        pointsFun(conteur,transition_duration);
    };
};
    //add functions for points
for(let i = 0;i<points.length;i++){
    points[i].addEventListener('click',function(){pointsFun(i,transition_duration = 0)});
};
    //event load
window.onload = function(){
    boxs.style.cssText = `transform: translateX(${arr[conteur]}px);transition-duration: 0s;`;    
    pointsFun(conteur,transition_duration = 0);                               
};
