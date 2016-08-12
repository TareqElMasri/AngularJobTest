import $ from 'jquery';
import * as faker from 'faker';
import InputFilters from '../constants/InputFilters';

export class FiveController {
    constructor($state, $interval) {
        let currentState = $state.current.params ? $state.current.params.controller : "";
        this.input = "";
        this.ptext = "Enter a phone number, e.g: 541 754 3010.";
        this.placeholder = "";
        $interval(()=>{
            this.placeholder = this.ptext.substr(26, this.placeholder.length + 1);
        }, 240);
    }

    mobileFormat($event) {
        const containsDigit = /Digit/.test($event.code);
        const isBackspace = $event.code === 'Backspace';

        $event.preventDefault();
        if (containsDigit || isBackspace) {
            this.strip = this.input.allReplace("invalid");
            this.strip = $event.key != "Backspace" ? this.strip + $event.key : this.strip.substr(0, this.strip.length - 1);
            this.input = `${this.strip.length > 0 ? "(" + this.strip.range(0,2) + ")" : ""}${this.strip.length > 2 ? " " + this.strip.range(3,5) : ""}${this.strip.length > 5 ? "-" + this.strip.range(6,9) : ""}`;
        }
    }

    onInputFocus($event) {
        $($event.target).setCursorPosition($event.target.value.length);
    }
}

export const Five = {
    templateUrl: 'app/containers/Five.html',
    controller: FiveController
};