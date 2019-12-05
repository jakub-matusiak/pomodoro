import React from 'react';
import ReactDOM from 'react-dom';

import ProgressBar from '../../components/ProgressBar';

let root;

test('sets a ProgressBar className', () => {
    root = document.createElement('div');
    ReactDOM.render(<ProgressBar />, root);
    expect(root.childNodes[0].childNodes[0].className).toMatch(/progress__bar/);
});