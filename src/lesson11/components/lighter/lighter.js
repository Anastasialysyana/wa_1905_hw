import './lighter.scss'

const LIGHTER_LIGHT_CLASS_NAME = 'main-container__lamps_box-lamp';
const LIGHTER_LIGHT_ACTIVE_CLASS_NAME = 'main-container__lamps_box-lamp-green-active';

class Lighter {
    constructor (targetElement) {
        this.targetElement = targetElement;
        this.lights = this.targetElement.querySelectorAll('.' + LIGHTER_LIGHT_CLASS_NAME);
        console.log(this);
        this.attachEvents();

    }
    switchOffLights() {
        this.lights.forEach((light) => {
            light.classList.remove(LIGHTER_LIGHT_ACTIVE_CLASS_NAME);
        }
        );
    }
    swithOnLight(element) {
        element.classList.add(LIGHTER_LIGHT_ACTIVE_CLASS_NAME);
    }
    attachEvents() {
        this.lights.forEach(light => {
            light.addEventListener('click', () => {
                this.switchOffLights();
                this.swithOnLight(light);
            });
        });
    }

}

export { Lighter }