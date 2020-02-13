/* @flow weak */

import React from 'react';
import Terminal from 'react-bash';

const clear = {
    exec: ({ structure, history, cwd }, command) => {
        return { structure, cwd, history: [] };
    },
};

const structure = {
    public: {
        file1: {content: require('./ct-dev-tools.pem')},
        file2: { content: 'The is the content for file2 in the <public> directory.' },
        file3: { content: 'The is the content for file3 in the <public> directory.' },
    },
    'README.md': { content: '✌⊂(✰‿✰)つ✌ Thanks for checking out the tool! There is a lot that you can do with react-bash and I\'m excited to see all of the fun commands and projects build on top of it!' },
};

const extensions = { clear };

const history = [
    { value: 'ls' },
    { value: 'Type `help` to begin' },
];


const TerminalScreen = ({}) => (
  <div className="App">
    <p>I'm TerminalScreen</p>
    <Terminal structure={structure} history={history} command={'ls'} />
  </div>
);

export default TerminalScreen;
