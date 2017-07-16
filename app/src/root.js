require('./lib/angular/angular.js');
require('./lib/angular-resource/angular-resource.js');
require('./translate/translate.module.js');
require('./rest/rest.module.js');
require('./font-resize/font-resize.module.js');
require('./option-lang-filter/option-lang-filter.module.js');

angular.module('app', [
    'rest',
    'fontResize',
    'optionLangFilter',
    'translate'
]);

