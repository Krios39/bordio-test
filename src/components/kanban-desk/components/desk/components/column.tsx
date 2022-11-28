import {useDrop} from "react-dnd";
import styled from "styled-components";
import {CenteredFlex, CenteredFlexWithSpacing, ColumnFlexbox} from "../../../../shared/typography/flex";
import React, {ReactNode} from "react";
import {DND_TYPE} from "../constants/dnd-type";
import {Color} from "../../../../../constants/colors";
import {ColumnType, columnTypeName} from "../constants/column-type.enum";

interface ColumnProps {
    children: ReactNode,
    title: ColumnType,
    taskCount: number
}

export const Column = ({children, title, taskCount}: ColumnProps) => {
    const [, drop] = useDrop({
        accept: DND_TYPE,
        drop: () => ({name: title}),
    });

    return (
        <ColumnWrapper
            ref={drop}
        >
            <ColumnTitle spacing={'10px'}>
                <ColumnName>{columnTypeName[title]} </ColumnName>
                <TaskCounter>{taskCount}</TaskCounter>
            </ColumnTitle>

            {children}
        </ColumnWrapper>
    );
};

const ColumnTitle = styled(CenteredFlexWithSpacing)`
  align-items: baseline;
`

const TaskCounter = styled(CenteredFlex)`
  padding: 2px 9px;
  background-color: #E8EBEF;
  border-radius: 50px;
  color: ${Color.MainGray}
`

const ColumnName = styled(CenteredFlex)`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  padding: 27px 0 15px;

`

const ColumnWrapper = styled(ColumnFlexbox)`
  max-width: 300px;
  font-weight: 500;
  font-size: 14px;
  width: 100%;
`
