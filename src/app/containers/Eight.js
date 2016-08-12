import * as _ from 'lodash';

export class EightController {
    constructor() {
        this.selectedInput = 0;
        this.input = _.fill(Array(3), "");
    }

    handleChange($event) {
        const valueLength = $event.target.value.length;
        const containsBackspace = /Backspace/.test($event.code);
        const containsArrow = /Arrow/.test($event.code);
        const containsTab = /Tab/.test($event.code);
        const isArrowLeft = $event.key === 'ArrowLeft';
        const isArrowRight = $event.key === 'ArrowRight';
        const isFirstInput = this.selectedInput === 0;
        const isLastInput = this.selectedInput === 2;

        if (valueLength === 5) {
            if (!containsBackspace && !containsArrow && !containsTab) $event.preventDefault();
            if (!containsBackspace && !isLastInput && !containsArrow) this.selectedInput++;
        }

        if (valueLength === 0 && containsBackspace && !isFirstInput && !containsArrow) {
            this.selectedInput--;
        }
    }
}

export const Eight = {
    templateUrl: 'app/containers/Eight.html',
    controller: EightController
};
