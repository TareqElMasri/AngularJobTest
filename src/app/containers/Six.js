import $ from 'jquery';
import * as faker from 'faker';
import InputFilters from '../constants/InputFilters';

export class SixController {
    constructor($interval) {
        this.input = "";
        this.ptext = "Enter a price number, e.g: 1 000 000 000.";
        this.placeholder = "";
        $interval(()=>{
            this.placeholder = this.ptext.substr(26, this.placeholder.length + 1);
        }, 240);
    }

    priceFormat($event) {
        const containsDigit = /Digit/.test($event.code);
        const isBackspace = $event.code === 'Backspace';

        $event.preventDefault();
        if (containsDigit || isBackspace) {
            this.strip = this.input.allReplace("invalid");
            this.strip = isBackspace ? this.strip.substr(0, this.strip.length - 1) : this.strip + $event.key;
            this.input = this.strip.priceFormat();
        }
    }

    onInputFocus($event) {
        $($event.target).setCursorPosition($event.target.value.length);
    }
}

export const Six = {
    templateUrl: 'app/containers/Six.html',
    controller: SixController
};