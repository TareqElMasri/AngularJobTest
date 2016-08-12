import $ from 'jquery';
import angular from 'angular';

export class HomeController {
    constructor() {
        this.navigations = [
            {
                title: "1st Task: Use ui-route to create dynamic and load views/controllers.",
                controller: "two"
            },
            {
                title: "2nd Task: Provide example on how to pass data between controllers.",
                controller: "two"
            },
            {
                title: "3rd Task: Have page transition animations.",
                controller: "two"
            },
            {
                title: "4th Task: Create an array of 50 items, each item having 3 properties.",
                controller: "four"
            },
            {
                title: "5th Task: Have a directive that auto formats the input as a phone number.",
                controller: "five"
            },
            {
                title: "6th Task: Have a directive that auto formats the input as a currency.",
                controller: "six"
            },
            {
                title: "7th Task: Create 3 number inputs that sum up into an additional field.",
                controller: "seven"
            },
            {
                title: "8th Task: Create 3 inputs each with maximum characters, length 5.",
                controller: "eight"
            },
        ];
    }
}

export const Home = {
    templateUrl: 'app/containers/Home.html',
    controller: HomeController
};