import React, { useContext } from "react";
import { DigitDesign } from "@cthit/react-digit-components";
import FilterMobileOpenContext from "../../../../common/contexts/filter-mobile-open";
import styled from "styled-components";
import Filters from "../filters";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

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
            <SwipeableDrawer
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <div style={{ padding: "0.5rem" }}>{filters}</div>
            </SwipeableDrawer>
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
