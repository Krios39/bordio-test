import React, {useState} from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import styled from "styled-components";
import {ColumnFlexWithPadding, Flexbox, Icon} from "../../../shared";
import {Task} from "./models/task";
import {getRandomInt} from "./helpers/get-random-int";
import {getRandomColor} from "./helpers/get-random-task-card-color";
import {ColumnType} from "./constants/column-type.enum";
import {Column} from "./components/column";
import {TaskCard} from "./components/task-card";
import {Color} from "../../../../constants/colors";
import {IconType} from "../../../../constants/icon-type";

export const tasks: Task[] = [
    {id: 1, name: 'Item 1 asdasdas asdassd ttassca asjjjc ahgc yggjccasc ahggc ajkkcbcyd yycgvhsc', durationInMinutes: getRandomInt(300), column: ColumnType.NewTask, color: getRandomColor()},
    {id: 2, name: 'Item 2', durationInMinutes: getRandomInt(300), column: ColumnType.NewTask, color: getRandomColor()},
    {id: 3, name: 'Item 3', durationInMinutes: getRandomInt(300), column: ColumnType.NewTask, color: getRandomColor()},
    {id: 4, name: 'Item 4', durationInMinutes: getRandomInt(300), column: ColumnType.NewTask, color: getRandomColor()},
    {id: 5, name: 'Item 5', durationInMinutes: getRandomInt(300), column: ColumnType.NewTask, color: getRandomColor()},
    {id: 6, name: 'Item 6', durationInMinutes: getRandomInt(300), column: ColumnType.NewTask, color: getRandomColor()},
    {id: 7, name: 'Item 7', durationInMinutes: getRandomInt(300), column: ColumnType.NewTask, color: getRandomColor()},
    {id: 8, name: 'Item 8', durationInMinutes: getRandomInt(300), column: ColumnType.NewTask, color: getRandomColor()},
];

export const Desk = () => {
    const [items, setItems] = useState<Task[]>(tasks);

    const moveCardHandler = (dragId: number, hoverId: number) => {
        const dragIndex = items.findIndex(item => item.id === dragId);
        const hoverIndex = items.findIndex(item => item.id === hoverId)

        if (dragIndex >= 0 && hoverIndex >= 0) {
            setItems((prevState) => {
                const coppiedStateArray = [...prevState];
                const tmp = coppiedStateArray[dragIndex]
                coppiedStateArray[dragIndex] = coppiedStateArray[hoverIndex]
                coppiedStateArray[hoverIndex] = tmp
                return coppiedStateArray
            });
        }
    };

    return (
        <DeskWrapper className="container">
            <DndProvider backend={HTML5Backend}>
                {Object.values(ColumnType).map((type,index) => {
                        const tasks = items
                            .filter((item) => item.column === type)
                        const isFirstColumn = index === 0

                        return (
                            <Column title={type} isFirstColumn={isFirstColumn} taskCount={tasks.length}>
                                <TasksWrapper isFirstColumn={isFirstColumn} spacing={'10px'}>
                                    {tasks.map((item) => (
                                        <TaskCard
                                            key={item.id}
                                            task={item}
                                            setItems={setItems}
                                            moveCardHandler={moveCardHandler}
                                        />
                                    ))}
                                </TasksWrapper>
                            </Column>)
                    }
                )}
            </DndProvider>
            <CreateColumn>
                <Icon icon={IconType.Plus}/>
                <div>Create status</div>
            </CreateColumn>
        </DeskWrapper>
    );
};

const CreateColumn = styled(Flexbox)`
  color: ${Color.MainGray};
  border-bottom: 1px solid #F3F3F3;
  border-left: 1px solid #F3F3F3;
  align-items: center;
  padding: 29px 36px 13px ;
  height: 59px;
  width: 100%;
`

const TasksWrapper = styled(ColumnFlexWithPadding)<{isFirstColumn: boolean}>`
  padding: ${({isFirstColumn}) => isFirstColumn ? "40px 10px 40px 20px" : "40px 10px"};
  border-top: 1px solid #F3F3F3;
  border-right: 1px solid #F3F3F3;
  height: 100%;
`

const DeskWrapper = styled(Flexbox)`
  width: 100%;
  height: 100%;
`
