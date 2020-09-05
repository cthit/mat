import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import EditMenuItem from "./elements/edit-menu-item";

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ColumnHeader = styled.div`
    width: 200px;
    height: 50px;
    text-align: center;
    background-color: aqua;
    margin: 8px;
`;

const EditMenuCategoryList = ({ droppableId, items }) => (
    <Droppable droppableId={droppableId} direction="vertical">
        {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
                {Object.keys(items).map((itemId, index) => (
                    <EditMenuItem
                        key={itemId}
                        itemId={itemId}
                        index={index}
                        {...items[itemId]}
                    />
                ))}
            </div>
        )}
    </Droppable>
);

const EditMenuCategory = ({
    name_sv,
    name_en,
    description_sv,
    description_en,
    items,
    index
}) => {
    return (
        <Draggable index={index} draggableId={name_sv}>
            {provided => (
                <ColumnContainer
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    <ColumnHeader {...provided.dragHandleProps}>
                        {name_sv}
                    </ColumnHeader>
                    <EditMenuCategoryList droppableId={name_sv} items={items} />
                </ColumnContainer>
            )}
        </Draggable>
    );
};

export default EditMenuCategory;
