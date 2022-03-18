// app_2

    //select Nodes
const btn_left = document.querySelector('body section .container a.btn_left');
const btn_right = document.querySelector('body section .container a.btn_right');
const boxs = document.querySelector('body section .container div.boxs');
const points = document.querySelectorAll('body section .container div.points div.point');
    //
const arr = [0,-640,-1280];
let conteur = Math.round(Math.random() * 2);
//function load
function pointsFun(value){
    points[value].style.cssText = `background-color:rgb(116, 75, 0);border-color:black;`;
    for(let i = 0 ;i<points.length;i++){
        if(i == value){
            continue;
        }
        points[i].style.cssText = `background-color:grey;border-color:transparent;`;
    }
    boxs.style.left = `${arr[value]}px`;  
    console.log(value);
    conteur=value;                                    
};
    //button left
btn_left.onclick = function(){
    conteur--;
    if(conteur < 0){
        conteur = points.length-1;
        boxs.style.left = arr[conteur];
        pointsFun(conteur);
    }
    else{
        boxs.style.left = arr[conteur];
        pointsFun(conteur);
    };
};
    //function button right
btn_right.onclick = function(){
    conteur++;
    if(conteur > points.length-1){
        conteur = ((points.length-1) - (points.length-1));
        boxs.style.left = arr[conteur];
        pointsFun(conteur);
    }
    else{
        boxs.style.left = arr[conteur];
        pointsFun(conteur);
    };
};
    //add functions for points
for(let i = 0;i<points.length;i++){
    points[i].addEventListener('click',function(){pointsFun(i)});
};
    //event load
window.onload = function(){
    boxs.style.left = `${arr[conteur]}px`;     
    pointsFun(conteur);    
    console.log(conteur);                              
};