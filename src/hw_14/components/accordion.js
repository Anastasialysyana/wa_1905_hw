import './accordion.scss';

const BASE_CLASS_NAME = 'accordion';
const CLASS_ACTIVE_NAME = 'accordion__active';
const CLASS_BUTTON_NAME = 'accordion__button';
const CLASS_PANEL_NAME = 'accordion__panel';

export class myAccordion {
    constructor(targetElement) {
        this.target = targetElement;
        this.isEnabled = false;
        this.render();
        this.button.addEventListener('click', () => this.toggle());
    }


    myAccordionAdd() {
        this.target.classList.add(CLASS_ACTIVE_NAME);
        this.isEnabled = true;
    }

    myAccordionRemove() {
        this.target.classList.remove(CLASS_ACTIVE_NAME);
        this.isEnabled = false;
    }
    
    toggle() {
        if (this.isEnabled) {
            this.myAccordionRemove();
        } else {
            this.myAccordionAdd();
        }
    }

    render() {
        this.button = document.createElement('button');
        this.panel = document.createElement('div');

        this.button.classList.add(CLASS_BUTTON_NAME);
        this.panel.classList.add(CLASS_PANEL_NAME);

        this.button.textContent = 'Click here...';
        this.panel.textContent = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
            '  Accusamus aliquam asperiores commodi earum id ipsa ipsum iusto necessitatibus nesciunt nihil non, \n' +
            '  omnis quidem ratione temporibus unde ut vero.';

        this.target.appendChild(this.button);
        this.target.appendChild(this.panel);
        this.target.classList.add(BASE_CLASS_NAME);
    }
}

