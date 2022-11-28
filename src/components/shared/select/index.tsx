import styled from "styled-components";
import {Color} from "../../../constants/colors";
import {useOnClickOutside} from "../../../helpers/click-outside.hook";
import {ColumnFlexbox, ColumnFlexWithPadding, FlexWithSpacing} from "../typography/flex";
import {createRef, ReactNode, RefObject, useState} from "react";
import {Icon} from "../icon";
import {IconType} from "../../../constants/icon-type";

export interface Option<T> {
    label: string
    value: T,
}


export interface SelectProps<T> {
    id?: string;
    options: Option<T>[];
    onChange?: (value: T) => void;
    value?: T;
    children?: ReactNode;
    className?: string;
    error?: string;
    disabled?: boolean;
    noError?: boolean;
}

export const Select = ({
                           id,
                           options,
                           onChange,
                           value,
                           children,
                           className,
                           disabled,
                       }: SelectProps<any>) => {


    return (
        <SelectComponent className={className} spacing="0.3125rem">
            <SelectMenu disabled={disabled} fullWidth={!children} options={options}
                        onOptionClick={(value) => onChange?.(value)}>
                <AAA spacing={'8px'}>
                    <div>{value || ''}</div>
                    <Icon icon={IconType.ArrowDown}/></AAA>
            </SelectMenu>
        </SelectComponent>
    );
};


const AAA = styled(FlexWithSpacing)`
  width: 100%;
  background-color: ${Color.SecondaryBackground};
  padding: 8px 14px;
  border-radius: 50px;
`

const SelectComponent = styled(ColumnFlexWithPadding)<{ fullWidth?: boolean }>`
  width: 100%;
  position: relative;
`;


interface MenuProps<T> {
    options: Option<T>[];
    className?: string;
    children?: ReactNode;
    fullWidth?: boolean;
    disabled?: boolean;
    onOptionClick: (value: T) => void
}


export const Menu = <T, >(props: MenuProps<T>) => {
    const {className, children, fullWidth, options, disabled, onOptionClick} = props;
    const [isOpen, setIsOpen] = useState(false);
    const componentRef: RefObject<HTMLDivElement> = createRef();
    const hideMenu = () => {
        setIsOpen(false);
    };

    const clickOutsideEventHandler = ($event: MouseEvent | TouchEvent) => {
        if (isOpen && !componentRef.current!.contains($event.target as HTMLElement)) {
            hideMenu();
        }
    };


    const onClickAnchor = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    useOnClickOutside(componentRef, ($event: any) => clickOutsideEventHandler($event), isOpen);

    return (
        <MenuContainer className={className} ref={componentRef}>
            <div onClick={onClickAnchor}>{children}</div>
            <MenuComponent visible={isOpen} fullWidth={fullWidth}>
                <MenuOptionsContainer>
                    {options.map(option => (
                        <MenuOption key={option.label} onClick={() => {
                            onOptionClick(option.value)
                            hideMenu();
                        }}>
                            {option.label}
                        </MenuOption>
                    ))}
                </MenuOptionsContainer>
            </MenuComponent>
        </MenuContainer>
    );
};

const MenuContainer = styled.div`
  position: relative;

  input:read-only:not(:disabled) {
    cursor: pointer;
  }
`;

const MenuComponent = styled.div<{ visible: boolean; fullWidth?: boolean }>`
  ${props => (props.fullWidth ? 'width:100%' : '')};
  ${props => !props.visible && 'display:none'};
  background: ${Color.MainBackground};
  box-sizing: border-box;
  box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.08);
  border-radius: 0.375rem;
  margin-top: 5px;
  position: absolute;
  right: 0;
  z-index: 2;
`;

const MenuOptionsContainer = styled(ColumnFlexbox)`
  padding: 6px;
  border-radius: 8px;
`;

const MenuOption = styled.option`
  background: ${Color.MainBackground};
  display: flex;
  white-space: pre;
  cursor: pointer;
  font-size: 14px;
  padding: 12px 8px;
  border-radius: 4px;

  &:hover {
    background-color: ${Color.SecondaryBackground};
  }
`;

const SelectMenu = styled(Menu)`
  border: -1rem;
`;
