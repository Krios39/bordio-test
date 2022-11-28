import React from 'react';
import 'sanitize.css/sanitize.css';
import {Flexbox} from "./components/shared";
import {WorkspacePanel} from "./components/workspace-panel";
import {Toolbar} from "./components/toolbar";
import {KanbanDesk} from "./components/kanban-desk";
import {GlobalStyle} from "./styles/global-styles";
import styled from "styled-components";

function App() {
    return (
        <AppContainer>
            <WorkspacePanel/>
            <Toolbar/>
            <KanbanDesk/>
            <GlobalStyle/>
        </AppContainer>

    );
}

const AppContainer = styled(Flexbox)`
  height: 100vh;
`
export default App;
