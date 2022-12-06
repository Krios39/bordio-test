import styled from "styled-components";
import {ColumnFlexbox, FlexWithSpacing} from "../shared";
import {Color} from "../../constants/colors";
import {Icon} from "../shared";
import { IconType } from "../../constants/icon-type";

enum Tool {
    Roadmap='roadmap',
    Schedule='schedule',
    Tasks='tasks',
    Notes='notes',
    Files='files'
}

const toolName = {
    [Tool.Roadmap]: 'Roadmap',
    [Tool.Schedule]: 'Schedule',
    [Tool.Tasks]: 'Tasks',
    [Tool.Notes]: 'Notes',
    [Tool.Files]: 'Files',
}


export const Toolbar = () => {
    return (
        <ToolbarComponent>
            <ToolbarTitle>Tools</ToolbarTitle>
            <ColumnFlexbox>
                {Object.values(Tool).map((tool, index) => <ToolCard key={tool} active={index === 1} tool={tool}/>)}
            </ColumnFlexbox>
        </ToolbarComponent>
    )
}

const ToolbarTitle = styled.div`
  font-size: 18px;
  padding: 24px;
`

const ToolCard = ({tool, active}: { tool: Tool, active: boolean }) => {
    return (
        <ToolComponent active={active} spacing={'10px'}>
            <StyledIcon active={active} icon={tool}/>
            <ToolTitle active={active}>{toolName[tool]} </ToolTitle>
        </ToolComponent>)
}

const ToolComponent = styled(FlexWithSpacing)<{ active?: boolean }>`
  background-color: ${({active}) => (active && Color.MainBackground)};
  border-radius: 0 8px 8px 0;
  padding: 10px;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 138px;
  
  ${({active}) => active && `
   ::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid ${Color.MainBlue};
    box-sizing: border-box;
    border-radius: 6px;
    top: 0;
    left: calc(-100% + 3px);
  }
  ` }
`

const ToolTitle = styled.div<{ active?: boolean }>`
  color: ${({active}) => (active&& Color.MainBlue)};
`

const StyledIcon = styled(Icon)<{ active?: boolean }>`
  color: ${({active}) => (active ? Color.MainBlue : Color.MainGray)};
  height: 28px;
  width: 28px;
`

const ToolbarComponent= styled(ColumnFlexbox)`
  background-color: ${Color.SecondaryBackground};
  min-width: 154px;
`
