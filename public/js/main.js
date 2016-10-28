import React from 'react';
import ReactDOM from 'react-dom';
import helloFactory from '../../lib/hello';

//const word = 'Chi';
const Hello = helloFactory({ React });
let word = 'world';
let mode = 'display';
let render;

const actions = {
    setWord(w) {
        word = w;
        render();
    },
    setMode(m) {
        mode = m;
        render();
    }
};

render = () => {
    ReactDOM.render(
        <Hello
            word={ word }
            mode={ mode }
            actions={ actions }
        />,
        document.getElementById('root')
    );
};

render();