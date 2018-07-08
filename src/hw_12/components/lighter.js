import './hw_12.scss'


// const LIGHTER_LIGHT_CLASS_NAME = 'main-container__lamps_box-lamp';
// const LIGHTER_LIGHT_ACTIVE_CLASS_NAME = 'main-container__lamps_box-lamp-active';

//class Lighter {
//     constructor(targetElement) {
//         this.targetElement = targetElement;
//         this.lights = this.targetElement.querySelectorAll('.' + LIGHTER_LIGHT_CLASS_NAME);
//         console.log(this);
//         this.isEnabled = false;
//         this.attachEvents();
//     }
//     switchOffLights() {
//         this.lights.forEach((light) => {
//             light.classList.remove(LIGHTER_LIGHT_ACTIVE_CLASS_NAME);
//         });
//     }
//     switchOnLight(element) {
//
//         element.classList.add(LIGHTER_LIGHT_ACTIVE_CLASS_NAME);
//         this.isEnabled = true;
//         console.log(this.isEnabled);
//     }
//     attachEvents() {
//         this.lights.forEach(light => {
//             light.addEventListener('click', () => {
//               this.switchOffLights();
//               this.switchOnLight(light);
//             });
//         });
//     }
// }
//
// class LighterManager {
//     constructor(button, arrayOfLighters) {
//         this.button = button;
//         this.lighters = arrayOfLighters;
//
//         this.button.addEventListener('click', () => {
//             console.log(this.lighters[0].isEnabled);
//         })
//
//     }
// }



//const Lighter2 = new LighterManager(document.querySelector('button'),[Lighter2]);

export class Lighter {
    constructor(targetEl) {
        this.target = targetEl;
        //this.control = targetEl.querySelector('.bulb__control');
        // this.lighter = targetEl.querySelector('.bulb__lighter_green');
        // this.lighter = targetEl.querySelector('.bulb__lighter_yellow');
        // this.lighter = targetEl.querySelector('.bulb__lighter_orange');
        // this.lighter = targetEl.querySelector('.bulb__lighter_blue');
        // this.lighter = targetEl.querySelector('.bulb__lighter_violet');
        this.isEnabled = false;
        console.log(this);
        this.render();
        this.control.addEventListener('click', () => this.toggle());
    }

    switchOn() {
        this.target.classList.add('bulb_active');
        this.isEnabled = true;

    }
    switchOff() {
        this.target.classList.remove('bulb_active');
        this.isEnabled = false;
    }
    toggle() {
        if(this.isEnabled) {
            this.switchOff();
        } else {
            this.switchOn()
        }
    }

     render() {
        this.control = document.createElement('button');
        this.lighter = document.createElement('div');

        this.control.classList.add('bulb__control');

         this.lighter.classList.add('bulb__lighter_green');


         this.control.textContent = 'Toggle';

        this.target.appendChild(this.lighter);
         this.target.appendChild(this.control);
         this.target.classList.add('bulb');


    }


}

export class Garland {
    constructor(targetEl) {
        this.target = targetEl;
        this.bulbs = [];
        this.render();
        // this.control.addEventListener('click', () => this.toggleAll());

    }
    render() {
        this.control = document.createElement('button');
        this.output = document.createElement('div');

        this.output.classList.add('garland__output');
        this.control.classList.add('garland__control');

        this.control.textContent = 'Add';

        this.target.appendChild(this.output);
        this.target.appendChild(this.control);




    }


add() {
        const bulbContainer = document.createElement('div');
        const bulb = new Bulb(bulbContainer);
        this.bulbs.push(bulb);

        this.output.appendChild(bulbContainer);
}


}










