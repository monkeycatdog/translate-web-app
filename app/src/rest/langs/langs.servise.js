var url = 'https://translate.yandex.net/api/v1.5/tr.json/';
angular.module('rest.langs').
    factory('Lang', ['$resource',
        function ($resource) {
            return $resource(url+':yandex', {});
        }]);