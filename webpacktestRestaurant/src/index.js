// import _ from 'lodash';
import myRestaurantName from './myRestaurantName';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash now imported by this script
    // element.innerHTML = _.join(['Hello','webpack'], ' ');

    element.textContent = myRestaurantName('1946');
    return element;

}

document.body.appendChild(component());