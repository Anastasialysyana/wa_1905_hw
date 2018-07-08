import {Bulb} from "../bulb/bulb.js";


export class Garland {
    constructor(targetEl) {
        this.target = targetEl;
        this.bulbs = [];
        this.render();
        this.control.addEventListener('click', () => this.add());
    }
    render() {
        this.control = document.createElement('button');
        this.output = document.createElement('div');

        this.output.classList.add('garland__output');
        this.control.classList.add('garland__control');

        this.control.textContent = 'Add';

        this.target.appendChild(this.output);
        this.target.appendChild(this.control);

        this.target.classList.add('garland');
    }

    add() {
        const bulbContainer = document.createElement('div');
        const bulb = new Bulb(bulbContainer);

        this.bulbs.push(bulb);

        this.output.appendChild(bulbContainer);

    }
}
