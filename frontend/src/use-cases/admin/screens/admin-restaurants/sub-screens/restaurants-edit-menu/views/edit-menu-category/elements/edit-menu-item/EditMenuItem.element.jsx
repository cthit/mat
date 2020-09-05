import React from "react";
import { Draggable } from "react-beautiful-dnd";

const EditMenuItem = ({
    name_sv,
    name_en,
    description_sv,
    description_en,
    price,
    itemId,
    index
}) => {
    return (
        <Draggable index={index} draggableId={itemId}>
            {provided => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <h3>
                        {name_sv} - {price}
                    </h3>
                </div>
            )}
        </Draggable>
    );
};

export default EditMenuItem;
