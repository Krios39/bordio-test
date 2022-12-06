import styled from "styled-components";
import {IconType} from "../../../constants/icon-type";
import {ChangeEvent} from "react";
import {ColumnFlexbox, ColumnFlexWithPadding} from "../typography/flex";
import {Icon} from "../icon";
import {Color} from "../../../constants/colors";

interface InputProps {
    value: string,
    onChange: (value: string) => void,
    placeholder?: string,
    icon?: IconType,
    className?: string
}

export const Input = (props: InputProps) => {
    const toggleChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value)
    }

    return(
        <InputComponent spacing="0.3125rem">
        <InputContainer>
            <StyledInput
                placeholder={props.placeholder}
                className={props.className}
                value={props.value}
                onChange={toggleChange}
            />
            <IconContainer>
                <StyledIcon icon={IconType.Search}/>
            </IconContainer>
        </InputContainer>
    </InputComponent>)
}


const StyledIcon = styled(Icon)`
  color: ${Color.MainGray};
  height: 16px;
  width: 16px;
`;

const InputComponent = styled(ColumnFlexWithPadding)``;
const InputContainer = styled(ColumnFlexbox)`
  position: relative;
`;

const StyledInputIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const IconContainer = styled(StyledInputIcon)`
  right: 0.625rem;
`;


const StyledInput = styled.input`
  border: none;
  outline: none;
`
