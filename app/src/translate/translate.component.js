var config = require('../../../config');

angular
    .module('translate')
    .component('translate', {
        templateUrl: '/src/translate/translate.temp.html',
        controller: ['Lang', translator]
    });


function translator(Lang) {
    var self = this;
    this.lang = {};
    this.result = {};
    this.error = null;

    Lang.get({
        yandex: 'getLangs',
        key: config.api_key,
        ui: 'en'
    }, (data) => {
        var data = data.langs;
        var stat = { '0': 'Auto' };

        this.lang = Object.assign({}, stat, data);
    });

    this.query = {
        text: null,
        inLang: '',
        toLang: null,
        temp: {
            text: '',
            toLang: null
        }
    };

    this.submit = () => {
        if (!self.query.text || !self.query.toLang) {
            self.error = true;
            return
        } else if (self.query.text === self.query.temp.text &&
            self.query.toLang === self.query.temp.toLang) {
            return
        }

        self.error = false;
        self.query.temp = {
            text: self.query.text,
            toLang: self.query.toLang
        };

        Lang.get({
            yandex: 'translate',
            text: self.query.text,
            lang: langConversion(),
            format: 'plain',
            key: config.api_key
        }, (data) => {
            self.result = data;
        });
    }

    function langConversion() {
        if (self.query.inLang.trim().length && self.query.inLang !== '0') {
            return `${self.query.inLang}-${self.query.toLang}`
        } else {
            return self.query.toLang
        }
    }
}