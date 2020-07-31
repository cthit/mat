import React from "react";
import {
    DigitDesign,
    DigitSelect,
    useDigitTranslations
} from "@cthit/react-digit-components";
import styled from "styled-components";

const CardContainer = styled.div`
    @media (max-width: 767px) {
        max-width: calc(100vw - 32px);
        width: 400px;
        justify-self: center;
    }
`;

const LanguageSelection = () => {
    const [, activeLanguage, setActiveLanguage] = useDigitTranslations();

    return (
        <CardContainer>
            <DigitDesign.Card size={{ height: "fit-content" }}>
                <DigitDesign.CardHeader>
                    <DigitDesign.CardTitle text={"Language / Språk"} />
                </DigitDesign.CardHeader>
                <DigitDesign.CardBody>
                    <DigitSelect
                        alignSelf={"center"}
                        value={activeLanguage}
                        onChange={e => {
                            setActiveLanguage(e.target.value);
                            localStorage.setItem("language", e.target.value);
                        }}
                        valueToTextMap={{
                            sv: "Swedish/Svenska",
                            en: "English/Engelska"
                        }}
                        outlined
                    />
                </DigitDesign.CardBody>
            </DigitDesign.Card>
        </CardContainer>
    );
};

export default LanguageSelection;
