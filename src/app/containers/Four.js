import * as _ from 'lodash';
import * as faker from 'faker';
import InputFilters from '../constants/InputFilters';

export class FourController {
    constructor($filter) {
        this.data = _.fill(Array(50), {});
        for (let item in this.data) {
            this.data[item] = {
                name: faker.name.findName(),
                email: faker.internet.email(),
                date: faker.date.past().dateFormat()
            };
        }
    }
}

export const Four = {
    templateUrl: 'app/containers/Four.html',
    controller: FourController
};