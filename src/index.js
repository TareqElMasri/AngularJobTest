import $ from 'jquery';
import angular from 'angular';

import './index.sass';
import 'todomvc-app-css/index.css';
import './assets/css/navigation.css';
import 'bootstrap/dist/css/bootstrap.css';
import PageTransitions from 'pagetransitions/pagetransitions';

import StringFilters from "./app/constants/StringFilters";

import {Home} from './app/containers/Home';
import {Two} from './app/containers/Two';
import {TwoHalf} from './app/containers/TwoHalf';
import {Four} from './app/containers/Four';
import {Five} from './app/containers/Five';
import {Six} from './app/containers/Six';
import {Seven} from './app/containers/Seven';
import {Eight} from './app/containers/Eight';
import {App} from './app/containers/App';

import 'ng-focus-if';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-smart-table';
import runConfig from './run';
import routesConfig from './routes';
import modulesConfig from './modules';

angular
    .module('app', modulesConfig)
    .config(routesConfig)
    .run(runConfig)
    .component('two', Two)
    .component('twohalf', TwoHalf)
    .component('four', Four)
    .component('five', Five)
    .component('six', Six)
    .component('seven', Seven)
    .component('eight', Eight)
    .component('home', Home)
    .component('app', App)
;