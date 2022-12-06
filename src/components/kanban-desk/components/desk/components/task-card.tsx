import React, {Dispatch, SetStateAction, useRef} from "react";
import {useDrag, useDrop} from "react-dnd";
import {DND_TYPE} from "../constants/dnd-type";
import {Task} from "../models/task";
import styled from "styled-components";
import {ColumnFlexWithPadding} from "../../../../shared";
import {convertTimeFromMinutes} from "../helpers/convert-time-from-minutes";
import {ColumnType} from "../constants/column-type.enum";

interface TaskCardProps {
    task: Task,
    moveCardHandler: (dragIndex: number, hoverIndex: number) => void,
    setItems: Dispatch<SetStateAction<Task[]>>
}

export const TaskCard = (
    {
        task,
        moveCardHandler,
        setItems
    }: TaskCardProps) => {

    const changeItemColumn = (currentItem: Task, columnName: ColumnType) => {
        setItems((prevState: Task[]) => {
            return prevState.map((e: Task) => {
                return {
                    ...e,
                    column: e.name === currentItem.name ? columnName : e.column
                };
            });
        });
    };

    const ref = useRef<HTMLDivElement>(null);

    const [, drop] = useDrop<Task, Task, any>({
        accept: DND_TYPE,
        hover(item) {
            if (!ref.current) {
                return;
            }
            moveCardHandler(item.id, task.id);
        }
    });

    const [{isDragging}, drag] = useDrag<Task, Task, { isDragging: boolean }>({
        item: task,
        type: DND_TYPE,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();

            if (dropResult) {
                const {name} = dropResult;
                changeItemColumn(task, name as ColumnType);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    drag(drop(ref));

    return (
        <TaskCardWrapper spacing={'8px'} isDragging={isDragging} color={task.color.background} ref={ref} column={task.column}>
            <TaskTitle column={task.column}>{task.name}</TaskTitle>
            <TaskTime color={task.color.time} column={task.column}>{convertTimeFromMinutes(task.durationInMinutes)}</TaskTime>
        </TaskCardWrapper>
    );
};

const TaskCardWrapper = styled(ColumnFlexWithPadding)<{ color: string, isDragging: boolean, column: ColumnType }>`
  padding: 15px;
  background-color: ${({color}) => color};
  border-radius: 8px;
  opacity: ${({isDragging}) => isDragging ? 0.5 : 1};

  ${({column}) => column === ColumnType.Completed && `
    background-color: #F0F0F0;
  `}
`
const TaskText = styled.div<{ column: ColumnType }>`
  ${({column}) => column === ColumnType.Completed && `
    color:#A5A5A5 !important;
  `}
`
const TaskTitle = styled(TaskText)<{ column: ColumnType }>`
  ${({column}) => column === ColumnType.Completed && `
    text-decoration-line: line-through;
  `}

`

const TaskTime = styled(TaskText)<{ color: string }>`
  color: ${({color}) => color};
  font-size: 13px;
  line-height: 15px;
`