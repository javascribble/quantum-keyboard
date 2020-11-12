import { Component, define } from '../import.js';

export class Input extends Component {
    #gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads();
    #keys = {};

    connectedCallback() {
        const parent = this.parentElement;

        parent.addEventListener('keydown', event => {
            if (!event.repeat) {
                this.#keys[event.key] = true;
            }
        });

        parent.addEventListener('keyup', event => {
            if (!event.repeat) {
                this.#keys[event.key] = false;
            }
        });

        parent.addEventListener('mousedown', event => { });
        parent.addEventListener('mousemove', event => { });
        parent.addEventListener('mouseup', event => { });
        parent.addEventListener('mousewheel', event => { });
        parent.addEventListener('contextmenu', event => event.preventDefault());

        parent.addEventListener('touchstart', event => { });
        parent.addEventListener('touchmove', event => { });
        parent.addEventListener('touchend', event => { });
        parent.addEventListener('touchcancel', event => { });

        parent.addEventListener('ongamepadconnected', event => this.#gamepads.add(event.gamepad));
        parent.addEventListener('ongamepaddisconnected', event => this.#gamepads.delete(event.gamepad));
    }

    getKey(key) {
        return this.#keys[key];
    }
}

define('quantum-input', Input);