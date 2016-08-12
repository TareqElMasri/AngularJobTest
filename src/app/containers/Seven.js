import $ from 'jquery';
import * as _ from 'lodash';
import * as faker from 'faker';
import InputFilters from '../constants/InputFilters';

export class SevenController {
    constructor($state, $interval) {
        this.result = 0;
        this.selectedInput = 0;
        this.input = _.fill(Array(3), 0);
    }

    handleKeypress($event) {
        const value = parseInt($event.target.value);
        const containsDigit = /Digit/.test($event.code);
        const containsBackspace = /Backspace/.test($event.code);
        const containsArrow = /Arrow/.test($event.code);
        const containsTab = /Tab/.test($event.code);
        const isArrowUp = $event.code === 'ArrowUp';
        const isArrowDown = $event.code === 'ArrowDown';

        if (!containsDigit && !containsArrow && !containsTab && (containsBackspace && value === 0))
            $event.preventDefault();
        if (isArrowUp)
            $event.target.value = value + 1;
        if (isArrowDown && value !== 0)
            $event.target.value = value - 1;
    }

    handleChange($index) {
        if ($index == this.input.length) {
            let result = _.sum(this.input);
            for (let item in this.input) {
                this.input[item] = Math.floor(this.result * this.input[item] / result);
            }
        }
        else {
            this.result = _.sum(this.input);
        }
    }
}

export const Seven = {
    templateUrl: 'app/containers/Seven.html',
    controller: SevenController
};