import styled from "styled-components";
import {ColumnFlexbox, FlexWithSpacing} from "../shared";
import {Color} from "../../constants/colors";
import {Icon} from "../shared";
import { IconType } from "../../constants/icon-type";

const tools: string[] = ['roadmap', 'schedule','tasks', 'notes','files']

export const Toolbar = () => {
    return (
        <ToolbarComponent>
            <ToolbarTitle>Tools</ToolbarTitle>
            <ColumnFlexbox>
                {tools.map((tool, index) => <Tool key={tool} active={index === 1} tool={tool}/>)}
            </ColumnFlexbox>
        </ToolbarComponent>
    )
}

const ToolbarTitle = styled.div`
  font-size: 18px;
  padding: 24px;
`

const Tool = ({tool, active}: { tool: string, active: boolean }) => {
    return (
        <ToolComponent active={active} spacing={'10px'}>
            <StyledIcon icon={tool as IconType}/>
            <div>{tool} </div>
        </ToolComponent>)
}

const ToolComponent = styled(FlexWithSpacing)<{ active?: boolean }>`
  color: ${({active}) => (active ? Color.MainBlue : Color.MainDark)};
  background-color: ${({active}) => (active && Color.MainBackground)};
  border-radius: 0 8px 8px 0;
  padding: 10px;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  ${({active}) => active && `
   ::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid ${Color.MainBlue};
    box-sizing: border-box;
    border-radius: 6px;
    top: 0;
    left: calc(-100% + 3px);
  }
  ` }
`

const StyledIcon = styled(Icon)`
  height: 28px;
  width: 28px;
`

const ToolbarComponent= styled(ColumnFlexbox)`
  background-color: ${Color.SecondaryBackground};
  min-width: 154px;
`
