const trafficLight1 = document.querySelector('#traffic1');
const trafficLight2 = document.querySelector('#traffic2');
const trafficLight3 = document.querySelector('#traffic3');
trafficLight1.addEventListener('click', eventMaker);
trafficLight2.addEventListener('click', eventMaker);
trafficLight3.addEventListener('click', eventMaker);
let greenLight=yellowLight=redLight=0;

function eventMaker(){
    if(greenLight==0 && yellowLight==0 && redLight==0){
        trafficLight1.style.background=('green');
        greenLight=1;
    }
    else if(greenLight==1 && yellowLight==0 && redLight==0){
        trafficLight1.style.background=('black');
        trafficLight2.style.background=('yellow');
        greenLight=0;
        yellowLight=1;
    }
    else if(greenLight==0 && yellowLight==1 && redLight==0){
        trafficLight2.style.background=('black');
        trafficLight3.style.background=('red');
        yellowLight=0;
        redLight=1;
    }
    else if(greenLight==0 && yellowLight==0 && redLight==1){
        trafficLight3.style.background=('black');
        trafficLight1.style.background=('green');
        redLight=0;
        greenLight=1;
    }
}
