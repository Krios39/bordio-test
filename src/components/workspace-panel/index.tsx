import styled from "styled-components";
import {
    ColumnFlexbox,
    ColumnFlexWithPadding, Flexbox,
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
        <WorkspacePanelComponent>
            <PanelHeader spacing={'26px'}>
                <Logo/>
                <StyledInput value={'Search...'} onChange={() => {
                }}/>
            </PanelHeader>

            <WorkspaceMenu spacing={'13px'}>
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

const PanelHeader = styled(ColumnFlexWithPadding)`  
  width: 100%;
  padding: 26px 16px 20px;
`

const WorkspacePanelComponent = styled(ColumnFlexbox)`
  max-width: 219px;
  background-color: ${Color.MainDark};
  height: 100%;
  font-size: 14px;
  width: 100%;
`

const StyledInput = styled(Input)`
  background-color: ${Color.SecondaryDark};
  padding: 8px 10px;
  line-height: 17px;
  border-radius: 4px;
  color: ${Color.MainGray};
`
const Logo = () =>
    <LogoComponent>
        <img src={'/assets/bordio-logo.png'}/>
    </LogoComponent>


const LogoComponent = styled.div`
  width: 132px;
  height: 32px;
`

const WorkspaceMenu = styled(ColumnFlexWithPadding)``

const WorkspaceTitle = styled(FlexWithSpacing)`
  background-color: ${Color.SecondaryDark};
  color: ${Color.MainBackground};
  width: 100%;
  padding: 5px 16px;
`

interface Category {
    title: string,
    chapters: string[]
}

const CategoriesWrapper = styled(ColumnFlexWithPadding)`
  padding: 0 16px;
`


const WokrkspaceCategory = (props: Category) => {
    return (
        <ColumnFlexWithPadding spacing={'10px'}>
            <CategoryWrapper spacing={'8px'}>
                <StyledIcon icon={IconType.ArrowUp}/>
                <CategoryTitle>{props.title}</CategoryTitle>
            </CategoryWrapper>
            <StyledFlex spacing={'18px'}>
                {props.chapters.map(chapter => <div key={chapter}>{chapter}</div>)}
            </StyledFlex>
        </ColumnFlexWithPadding>
    )
}

const CategoryWrapper = styled(FlexWithSpacing)`
  align-items: center;
`

const StyledIcon = styled(Icon)`
  color: ${Color.MainBackground}
`

const CategoryTitle = styled.div`
  color: ${Color.MainBackground}
`

const StyledFlex = styled(ColumnFlexWithPadding)`
  color: ${Color.MainGray};
`
