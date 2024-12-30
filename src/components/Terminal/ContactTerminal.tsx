"use client";

import { TerminalContextProvider, ReactTerminal } from "react-terminal-plus";

const commands = {
  whoami: "pcarter",
  cd: (directory: string) => `changed path to ${directory}`,
};

export function ContactTerminal() {
  return (
    <TerminalContextProvider>
      <ReactTerminal
        commands={commands}
        showControlBar={false}
        showControlButtons={false}
        theme="material-dark"
      />
    </TerminalContextProvider>
  );
}
