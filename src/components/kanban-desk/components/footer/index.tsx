import {CenteredFlex, FlexWithSpacing, HorizontalCenteredFlexWithSpaceBetween} from "../../../shared/typography/flex";
import {Avatar, Button, Icon, Input} from "../../../shared";
import {Option, Select} from "../../../shared/select";
import {IconType} from "../../../../constants/icon-type";
import styled from "styled-components";
import {Color} from "../../../../constants/colors";

const options:Option<string>[] =[
    {value:'133', label:'123'},
    {value:'222', label:'222'},    {value:'333', label:'333'}

]

export const Header = ()=>{
    return <HeaderComponent>
        <FlexWithSpacing spacing={'16px'}>
            <Button onClick={()=>{}}>
                <CenteredFlex>
                    <StyledIcon icon={IconType.Plus}/>
                    <ButtonText>Add new</ButtonText>
                </CenteredFlex>

            </Button>
            <Select value={options[0].value} options={options}/>
            <Select value={options[1].value} options={options}/>
        </FlexWithSpacing>
        <FlexWithSpacing spacing={'16px'}>
            <StyledInput value={'asd'} onChange={()=>{}}/>
            <Icon icon={IconType.Notification}/>
            <StyledAvatar/>
        </FlexWithSpacing>
    </HeaderComponent>
}

const StyledAvatar = styled(Avatar)`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`

const StyledInput = styled(Input)`
  background-color: ${Color.SecondaryBackground};
  color: ${Color.MainGray};
  border-radius: 50px;
  padding: 12px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`

const StyledIcon = styled(Icon)`
    height: 24px;
  width: 24px;
`

const ButtonText = styled.div`
  white-space: nowrap;
  font-size: 14px;
`

const HeaderComponent = styled(HorizontalCenteredFlexWithSpaceBetween)`
  box-shadow: 0 2px 4px #F0F1F2;
  width: 100%;
  align-items: center;
  padding: 20px;
`
