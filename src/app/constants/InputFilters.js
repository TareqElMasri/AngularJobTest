import $ from 'jquery';
import * as _ from 'lodash';
import Polyfill from './Polyfill';
const dateFormat = require('dateformat');

String.prototype.capitilize = function() {
    if (this && typeof this == 'string' && this.length > 0)
        return this.charAt(0).toUpperCase() + this.substr(1, this.length);
};

String.prototype.range = function(start, end) {
    var result = "";
    for (let n of Array(end - start + 1).keys()) {
        if (_.isString(this[start + n]))
            result += this[start + n];
    }
    return result;
};

String.prototype.allReplace = function(input = "", output = "") {
    var result = this;
    if (_.isString(input)) input = [input];
    if (input == "invalid")
        return result.replace(/\D/g, '');
    for (var x in input) {
        if (_.isObject(input))
            result = result.replace(new RegExp(x, 'g'), input[x]);
        else if (_.isArray(input))
            console.log(input[x], result.replace(new RegExp(input[x], 'g'), output));
        result = result.replace(new RegExp(input[x], 'g'), output);
    }
    return result;
};

String.prototype.priceFormat = function() {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    return formatter.format(parseInt(this));
};

String.prototype.dateFormat = function(format = "yyyy-mm-dd") {
    return dateFormat(new Date(this), format);
};

Date.prototype.dateFormat = function(format = "yyyy-mm-dd") {
    return dateFormat(this, format);
};

$.fn.getCursorPosition = function() {
    var $el = $(this)[0];
    if (!$el || $el.type == 'number') return 0;
    if ('selectionStart' in $el) {
        return $el.selectionStart;
    } else if (document.selection) {
        $el.focus();
        var sel = document.selection.createRange();
        var selLen = document.selection.createRange().text.length;
        sel.moveStart('character', -$el.value.length);
        return sel.text.length - selLen;
    }
};

$.fn.setCursorPosition = function(pos) {
    var $el = $(this)[0];
    if (!$el || $el.type == 'number') return 0;
    if ('selectionStart' in $el) {
        $el.setSelectionRange(pos, pos);
    }
};