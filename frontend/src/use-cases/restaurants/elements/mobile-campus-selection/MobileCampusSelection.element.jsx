import React, { useContext } from "react";
import {
    DigitDesign,
    DigitSelect,
    useDigitTranslations
} from "@cthit/react-digit-components";
import styled from "styled-components";
import FilterContext, { UPDATE_CAMPUS } from "../filters/Filter.context";

const CardContainer = styled.div`
    @media (max-width: 767px) {
        max-width: calc(100vw - 32px);
        width: 400px;
        justify-self: center;
    }
`;
const MobileCampusSelection = () => {
    const [state, dispatch] = useContext(FilterContext);
    const [text] = useDigitTranslations();

    return (
        <CardContainer>
            <DigitDesign.Card size={{ height: "fit-content" }}>
                <DigitDesign.CardHeader>
                    <DigitDesign.CardTitle text={text.CampusLocation} />
                </DigitDesign.CardHeader>
                <DigitDesign.CardBody>
                    <DigitSelect
                        alignSelf={"center"}
                        value={state.campus}
                        onChange={e =>
                            dispatch({
                                type: UPDATE_CAMPUS,
                                value: e.target.value
                            })
                        }
                        valueToTextMap={{
                            johanneberg: "Johanneberg",
                            lindholmen: "Lindholmen"
                        }}
                        outlined
                    />
                </DigitDesign.CardBody>
            </DigitDesign.Card>
        </CardContainer>
    );
};

export default MobileCampusSelection;
