import * as faker from 'faker';
import StringFilters from '../constants/StringFilters';

export class FourController {
    constructor($filter) {
        this.data = Array.from({
            length: 50
        }, () => {});
        for (var item in this.data) {
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