const areIntlLocalesSupported = require('intl-locales-supported');

const localesMyAppSupports = [
    'en-US'
];

if (window.Intl) {
    if (!areIntlLocalesSupported(localesMyAppSupports)) {
        const IntlPolyfill = require('intl');
        Intl.NumberFormat = IntlPolyfill.NumberFormat;
        Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
} else {
    window.Intl = require('intl');
}

if (!window.localStorage) {
    window.localStorage = {
        _data: {},
        setItem: function(id, val) {
            this._data[id] = String(val);
        },
        getItem: function(id) {
            return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
        },
        removeItem: function(id) {
            return delete this._data[id];
        },
        clear: function() {
            this._data = {};
        }
    };
}