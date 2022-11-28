import React, {memo, ReactNode} from "react";
import styled from 'styled-components'
import { Color } from "../../../constants/colors";

interface ButtonProps {
    onClick: () => void,
    children: ReactNode,
    className?: string
}

export const Button = memo((props: ButtonProps) =>
    (<ButtonComponent className={props.className} onClick={props.onClick}>
        {props.children}
    </ButtonComponent>))

const ButtonComponent = styled.button`
  background-color: ${Color.MainBlue};
  color: ${Color.MainBackground};

  border-radius: 50px;
  width: 100%;
  padding: 8px 20px;
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
`
