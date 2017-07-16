
angular
    .module('fontResize')
    .directive('fontResize', fontResize);


function fontResize() {
    return {
        link: (scope, element, attrs) => {
            element.on('keypress', (e)=>{
                element[0].style.fontSize = (Math.random()*72)+'px';
            });
        }
    }
}