import './hw_12.scss'

const LIGHTER_LIGHT_CLASS_NAME = 'main-container__lamps_box-lamp';
const LIGHTER_LIGHT_ACTIVE_CLASS_NAME = 'main-container__lamps_box-lamp-active';

class Lighter {
    constructor(targetElement) {
        this.targetElement = targetElement;
        this.lights = this.targetElement.querySelectorAll('.' + LIGHTER_LIGHT_CLASS_NAME);
        console.log(this);
        this.isEnabled = false;
        this.attachEvents();
    }
    switchOffLights() {
        this.lights.forEach((light) => {
            light.classList.remove(LIGHTER_LIGHT_ACTIVE_CLASS_NAME);
        });
    }
    switchOnLight(element) {

        element.classList.add(LIGHTER_LIGHT_ACTIVE_CLASS_NAME);
        this.isEnabled = true;
        console.log(this.isEnabled);
    }
    attachEvents() {
        this.lights.forEach(light => {
            light.addEventListener('click', () => {
              this.switchOffLights();
              this.switchOnLight(light);
            });
        });
    }
}

class LighterManager {
    constructor(button, arrayOfLighters) {
        this.button = button;
        this.lighters = arrayOfLighters;

        this.button.addEventListener('click', () => {
            console.log(this.lighters[0].isEnabled);
        })

    }
}

const Lighter2 = new LighterManager(document.querySelector('button'),[Lighter2]);

export { Lighter }