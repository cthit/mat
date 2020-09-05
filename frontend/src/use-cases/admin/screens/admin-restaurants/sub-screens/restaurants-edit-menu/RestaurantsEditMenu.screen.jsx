import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd/";
import {
    getMenu,
    getRestaurant
} from "../../../../../../api/restaurants/get.restaurants.api";
import EditMenuCategory from "./views/edit-menu-category";
import styled from "styled-components";

const ColumnsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const RestaurantsEditMenu = ({ match }) => {
    const { id } = match.params;

    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        Promise.all([getRestaurant(id), getMenu(id)]).then(
            ([restaurantResponse, menuResponse]) => {
                setRestaurant(restaurantResponse.data);
                setMenu(menuResponse.data);
            }
        );
    }, [id]);

    if (restaurant == null || menu == null) {
        return null;
    }

    return (
        <DragDropContext>
            <Droppable
                droppableId="menuBoard"
                type="column"
                direction="horizontal"
            >
                {provided => (
                    <ColumnsContainer
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {Object.keys(menu.categories).map(
                            (categoryId, index) => (
                                <EditMenuCategory
                                    key={categoryId}
                                    index={index}
                                    {...menu.categories[categoryId]}
                                />
                            )
                        )}
                        {provided.placeholder}
                    </ColumnsContainer>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default RestaurantsEditMenu;
