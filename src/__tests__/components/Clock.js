import React from 'react';
import ReactDOM from 'react-dom';

import Clock from '../../components/Clock';

let root;

describe('<Clock />', () => {
    describe('when given minutes and seconds', () => {
        beforeEach(() => {
            root = document.createElement('div');
            ReactDOM.render(<Clock minutes={15} seconds={30} />, root);
        });
        
        it('renders a <p> element', () => {
            expect(root.childNodes[0].nodeName).toMatch('P');
        });
    
        it('sets a Clock className', () => {
            expect(root.childNodes[0].className).toMatch(/timebox__clock/);
        });
    
        it('renders time properly', () => {
            expect(root.childNodes[0].textContent).toMatch(/15:30/);
        });
    });

    it('sets className to empty string if not given anything else', () => {
        expect(<Clock minutes={15} seconds={30} />).toStrictEqual(<Clock className="" minutes={15} seconds={30} />);
    });
});