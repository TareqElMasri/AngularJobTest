import * as faker from 'faker';

export class TwoHalfController {
    constructor($state) {
        this.state = $state;
        this.selectedFilter = 0;
        this.URLData = $state.params.input;
        this.LocalData = localStorage.input;
        this.input = [
            this.URLData,
            this.LocalData
        ];
    }

    handleChange(filter) {
        this.selectedFilter = filter;
    }
}

export const TwoHalf = {
    templateUrl: 'app/containers/TwoHalf.html',
    controller: TwoHalfController
};