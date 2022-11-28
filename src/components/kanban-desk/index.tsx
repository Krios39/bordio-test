import {ColumnFlexbox} from "../shared";
import {Header} from "./components/footer";
import styled from "styled-components";
import {Desk} from "./components/desk";

export const KanbanDesk = () => {
    return (
        <DeskComponent>
            <Header/>
            <Desk/>
        </DeskComponent>
    )
}

const DeskComponent = styled(ColumnFlexbox)`
  width: 100%;
`
