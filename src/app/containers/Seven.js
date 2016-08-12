import $ from 'jquery';
import * as _ from 'lodash';
import * as faker from 'faker';
import StringFilters from '../constants/StringFilters';

export class SevenController {
    constructor($state, $interval) {
        this.input = Array.from({
            length: 3
        }, () => 0);
        this.result = 0;
    }

    handleKeypress($event) {
        if (!/Digit/.test($event.code) && !/Arrow/.test($event.code) &&
            !/Backspace/.test($event.code) && !/Tab/.test($event.code))
            $event.preventDefault();
        if ($event.code == "ArrowUp" || $event.code == "ArrowRight")
            $event.target.value = parseInt($event.target.value) + 1;
        if ($event.code == "ArrowDown" && $event.target.value !== "0" ||
            $event.code == "ArrowLeft" && $event.target.value !== "0")
            $event.target.value = parseInt($event.target.value) - 1;
    }

    handleChange($index) {
        if ($index == this.input.length) {
            let result = _.sum(this.input);
            for (var item in this.input) {
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