import * as _ from 'lodash';

export class EightController {
    constructor() {
        this.input = _.fill(Array(3), '');
        this.selectedInput = 0;
    }

    handleChange($event) {
        const valueLength = $event.target.value.length;
        const containsBackspace = /Backspace/.test($event.code);
        const containsArrow = /Arrow/.test($event.code);
        const containsTab = /Tab/.test($event.code);
        const isBackspace = $event.code === 'Backspace';
        const isArrowRight = $event.code === 'ArrowRight';
        const isArrowLeft = $event.code === 'ArrowLeft';
        const isFirstInput = this.selectedInput === 0;
        const isLastInput = this.selectedInput === 2;

        if (valueLength === 5) {
            if (!containsBackspace && !containsArrow && !containsTab) $event.preventDefault();
            if ((!isBackspace || isArrowRight) && !isLastInput) this.selectedInput++;
        }

        if (valueLength === 0 && (isBackspace || isArrowLeft) && !isFirstInput) {
            this.selectedInput--;
        }
    }
}

export const Eight = {
    templateUrl: 'app/containers/Eight.html',
    controller: EightController
};
