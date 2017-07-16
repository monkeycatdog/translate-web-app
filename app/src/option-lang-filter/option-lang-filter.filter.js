angular.module('optionLangFilter').filter('langfilter', optionLangFilter);

function optionLangFilter() {
    return (arr, field) => {
        let result = {};
        angular.forEach(arr, (value, key) => {
            if (!value.hasOwnProperty(field) && key !== '0') {
                result[key] = value;
            }
        });
        return result;
    }
}