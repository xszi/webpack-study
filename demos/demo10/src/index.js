import _ from 'lodash';
// import Print from './print';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack111222'], ' ');
  // element.onclick = Print.bind(null, 'Hello webpack!');

  return element;
}

document.body.appendChild(component());