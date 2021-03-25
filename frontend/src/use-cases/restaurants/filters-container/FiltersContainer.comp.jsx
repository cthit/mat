import React, { useContext } from "react";
import {
    DigitDesign,
    DigitSwipeableDrawer
} from "@cthit/react-digit-components";
import FilterMobileOpenContext from "../../../common/contexts/filter-mobile-open";
import styled from "styled-components";
import Filters from "../filters";

const Sticky = styled.div`
    position: sticky;
    width: 100%;
    height: auto;
    top: 0;
`;

const Desktop = styled.div`
    @media (max-width: 767px) {
        display: none;
    }
`;

const FiltersContainer = () => {
    const [open, setOpen] = useContext(FilterMobileOpenContext);

    const filters = <Filters />;

    return (
        <>
            <DigitSwipeableDrawer
                open={open}
                onSwipe={s => setOpen(s)}
                render={() => (
                    <div style={{ padding: "0.5rem" }}>{filters}</div>
                )}
            />
            <Desktop>
                <Sticky>
                    <DigitDesign.Card size={{ width: "100%", height: "auto" }}>
                        <DigitDesign.CardBody>{filters}</DigitDesign.CardBody>
                    </DigitDesign.Card>
                </Sticky>
            </Desktop>
        </>
    );
};

export default FiltersContainer;
