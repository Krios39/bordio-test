import {CenteredFlex, FlexWithSpacing, HorizontalCenteredFlexWithSpaceBetween} from "../../../shared";
import {Avatar, Button, Icon, Input} from "../../../shared";
import {Option, Select} from "../../../shared";
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
            <StyledInput value={'Search...'} onChange={()=>{}}/>
            <NotificationWrapper>
                <NotificationIcon icon={IconType.Notification}/>
                <NotificationCounter>+99</NotificationCounter>
            </NotificationWrapper>
            <StyledAvatar/>
        </FlexWithSpacing>
    </HeaderComponent>
}

const NotificationWrapper = styled.div`
  position: relative;
`
const NotificationIcon = styled(Icon)`
  height: 32px;
  width: 32px;
`
const NotificationCounter = styled.div`
  position: absolute;
  background-color: ${Color.MainRed};
  color: ${Color.MainBackground};
  padding: 4px 3px;
  border: 1px ${Color.MainBackground} solid;
  top: -2px;
  left: 14px;
  border-radius: 5px;
  font-size: 10px;
  line-height: 10px;
`

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
