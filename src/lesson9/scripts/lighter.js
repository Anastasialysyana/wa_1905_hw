import '../styles/lighter.scss';



export function lighter(LighterElement) {

    const lights = LighterElement.querySelectorAll('.traffic-light__lamp');
    console.log(lights);

    function swithOff() {
        for(let i=0; i < lights.length; i++) {
            const light = lights[i];
            light.classList.remove('traffic-light__lamp-active');


        }
        console.log('switched');
    }

    function swithOn(element) {
        console.log('enabled');
        element.classList.add('traffic-light__lamp-active');
    }

    function clickHandler(element) {
        swithOff();
        swithOn(element)
    }

    for(let i=0; i < lights.length; i++) {
        const light = lights[i];
        light.addEventListener('click', function () {
            clickHandler(light);

        });
    }


}
