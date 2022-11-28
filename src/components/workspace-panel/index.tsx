import styled from "styled-components";
import {
    ColumnCenteredFlexWithPadding,
    ColumnFlexbox,
    ColumnFlexWithPadding,
    FlexWithSpacing
} from "../shared";
import {Color} from "../../constants/colors";
import {Avatar, Icon, Input} from "../shared";
import {IconType} from "../../constants/icon-type";


const categories: Category[] = [
    {
        title: 'Favorites',
        chapters: ['Marketing', 'Mobile App']
    },
    {
        title: 'My Projects',
        chapters: ['Marketing', 'Landing Pages', 'Wedding', 'Mobile App', 'House Construction']
    }

]

export const WorkspacePanel = () => {
    return (
        <WorkspacePanelComponent className={'123'}>
            <PanelHeader spacing={'26px'}>
                <Logo/>
                <StyledInput value={'asd'} onChange={() => {
                }}/>
            </PanelHeader>

            <WorkspaceMenu spacing={'18px'}>
                <WorkspaceTitle spacing={'8px'}>
                    <StyledAvatar/>
                    <div>
                        My Workspace
                    </div>
                </WorkspaceTitle>
                <CategoriesWrapper spacing={'18px'}>
                    {categories.map(category =>
                        <WokrkspaceCategory
                            key={category.title}
                            title={category.title}
                            chapters={category.chapters}/>)
                    }
                </CategoriesWrapper>
            </WorkspaceMenu>

        </WorkspacePanelComponent>)
}

const StyledAvatar = styled(Avatar)`
  border-radius: 50%;
  height: 22px;
  width: 22px;
`

const PanelHeader = styled(ColumnCenteredFlexWithPadding)`  padding: 20px 16px;
`

const WorkspacePanelComponent = styled(ColumnFlexbox)`
  max-width: 220px;
  background-color: ${Color.MainDark};
  height: 100%;
`

const StyledInput = styled(Input)`
  background-color: ${Color.SecondaryDark};
  padding: 10px;
  border-radius: 4px;
  color: ${Color.MainGray};
`
const Logo = () =>
    <LogoComponent>
        <img src={'/assets/bordio-logo.png'}/>
    </LogoComponent>


const LogoComponent = styled.div`
  margin-top: 26px;
  width: 132px;
  height: 32px;
`

const WorkspaceMenu = styled(ColumnFlexWithPadding)``

const WorkspaceTitle = styled(FlexWithSpacing)`
  background-color: ${Color.SecondaryDark};
  color: ${Color.MainBackground};
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
`

interface Category {
    title: string,
    chapters: string[]
}

const CategoriesWrapper = styled(ColumnFlexWithPadding)`
  padding: 10px 16px;
`


const WokrkspaceCategory = (props: Category) => {
    return (
        <ColumnFlexWithPadding spacing={'10px'}>
            <FlexWithSpacing spacing={'8px'}>
                <StyledIcon icon={IconType.ArrowDown}/>
                <CategoryTitle>{props.title}</CategoryTitle>
            </FlexWithSpacing>
            <StyledFlex spacing={'18px'}>
                {props.chapters.map(chapter => <div key={chapter}>{chapter}</div>)}
            </StyledFlex>
        </ColumnFlexWithPadding>
    )
}


const StyledIcon = styled(Icon)`
  color: ${Color.MainBackground}
`

const CategoryTitle = styled.div`
  color: ${Color.MainBackground}
`

const StyledFlex = styled(ColumnFlexWithPadding)`
  color: ${Color.MainGray};
`
