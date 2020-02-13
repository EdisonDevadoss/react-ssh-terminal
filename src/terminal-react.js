/* @flow weak */

import React from 'react';
import Terminal from 'terminal-in-react';
import pseudoFileSystem from 'terminal-in-react-pseudo-file-system-plugin';
import NodeEvalPlugin from 'terminal-in-react-node-eval-plugin';
const FileSystemPlugin = pseudoFileSystem();

const TerminalScreen = ({}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}
    >
    <Terminal
      // plugins={[
      //   FileSystemPlugin,
      //   {
      //     class: NodeEvalPlugin,
      //     config: {
      //        filesystem: FileSystemPlugin.displayName
      //      }
      //   }
      // ]}
    />
  </div>
);

export default TerminalScreen;
