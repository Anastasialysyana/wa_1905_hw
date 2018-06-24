import './lesson9.scss'
import {lighter} from './scripts/lighter';

const LighterElement= document.querySelector('#lighter1');
const LighterElement2= document.querySelector('#lighter2');
const LighterElement3= document.querySelector('#lighter3');

lighter(LighterElement);
lighter(LighterElement2);
lighter(LighterElement3);








lighter();






















//function trafficLight() {
//    const controlRed = document.querySelector('.traffic-light__lamp_red-btn');
//    console.log(controlRed);
//
//    function toggleLight() {
//        controlRed.classList.toggle('traffic-light__lamp_red-btn-active');
//        }
//        controlRed.addEventListener('click', toggleLight);
//}
//trafficLight();
//
//
//function trafficLight2() {
//    const controlYellow = document.querySelector('.traffic-light__lamp_yellow-btn');
//    console.log(controlYellow);
//
//    function toggleLight2() {
//        controlYellow.classList.toggle('traffic-light__lamp_yellow-btn-active');
//    }
//    controlYellow.addEventListener('click', toggleLight2);
//}
//
//trafficLight2();
//
//function trafficLight3() {
//    const controlGreen = document.querySelector('.traffic-light__lamp_green-btn');
//
//    console.log(controlGreen);
//
//    function toggleLight3() {
//        controlGreen.classList.toggle('traffic-light__lamp_green-btn-active');
//    }
//    controlGreen.addEventListener('click', toggleLight3);
//}
//trafficLight3();