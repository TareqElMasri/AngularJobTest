import * as faker from 'faker';
import Polyfill from '../constants//Polyfill';

export class TwoController {
    constructor($state) {
        this.input = "";
        this.$state = $state;
        this.placeholder = "Enter an input data and press enter.";
    }

    handleSubmit($event) {
        localStorage.setItem("input", this.input);
        if ($event.key == "Enter")
            this.$state.go('app', {
                controller: "twohalf",
                input: this.input
            });
    }
}

export const Two = {
    templateUrl: 'app/containers/Two.html',
    controller: TwoController
};