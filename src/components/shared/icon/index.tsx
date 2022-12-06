import styled from "styled-components";
import {IconType} from "../../../constants/icon-type";

interface IconProps {
    className?: string,
    icon: IconType | string
}

export const Icon = (props: IconProps) =>
    (<IconComponent className={props.className}>
        <use xlinkHref={`/assets/icons.svg#${props.icon}`}/>
    </IconComponent>)


const IconComponent = styled.svg`
  height: 25px;
  width: 25px;
`;
