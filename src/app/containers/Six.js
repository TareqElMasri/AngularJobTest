import $ from 'jquery';
import * as faker from 'faker';
import StringFilters from '../constants/StringFilters';

export class SixController {
    constructor($interval) {
        this.input = "";
        this.ptext = "Enter a price number, e.g: 541 754 3010.";
        this.placeholder = "";
        $interval(()=>{
            this.placeholder = this.ptext.substr(26, this.placeholder.length + 1);
        }, 240);
    }

    mobileFormat($event) {
        $event.preventDefault();
        if (!/Digit/.test($event.code) && $event.code != "Backspace")
            return;
        this.strip = this.input.allReplace("invalid");
        this.strip = $event.key != "Backspace" ? this.strip + $event.key : this.strip.substr(0, this.strip.length - 1);
        this.input = `${this.strip.length > 0 ? "(" + this.strip.range(0,2) + ")" : ""}${this.strip.length > 2 ? " " + this.strip.range(3,5) : ""}${this.strip.length > 5 ? "-" + this.strip.range(6,9) : ""}`;
    }

    onInputFocus($event) {
        $($event.target).setCursorPosition($event.target.value.length);
    }
}

export const Six = {
    templateUrl: 'app/containers/Six.html',
    controller: SixController
};