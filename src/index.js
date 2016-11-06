import React from 'react';
import { render } from 'react-dom';
import App from 'components/app';

/*Require CSS stuff*/
require('css/normalize.css');
require('css/skeleton.css');
require('css/custom.css');

render(<App />, document.getElementById('app'));
