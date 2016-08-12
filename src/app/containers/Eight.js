import $ from 'jquery';
import * as _ from 'lodash';
import * as faker from 'faker';
import StringFilters from '../constants/StringFilters';

export class EightController {
    constructor($state, $interval) {
        this.input = Array.from({
            length: 3
        }, () => "");
        this.selectedInput = 0;
    }

    handleChange($event, $index) {
        if ($event.target.value.length === 5 && !/Backspace/.test($event.code) &&
            !/Arrow/.test($event.code) && !/Tab/.test($event.code))
            $event.preventDefault();
        if ($event.target.value.length === 5 && $event.code != "Backspace" ||
            $event.target.value.length === 5 && $event.code == "ArrowRight")
            if (this.selectedInput !== 2)
                this.selectedInput++;
        if ($event.target.value.length === 0 && $event.code == "Backspace" ||
            $event.target.value.length === 0 && $event.code == "ArrowLeft")
            if (this.selectedInput !== 0)
                this.selectedInput--;
    }
}

export const Eight = {
    templateUrl: 'app/containers/Eight.html',
    controller: EightController
};