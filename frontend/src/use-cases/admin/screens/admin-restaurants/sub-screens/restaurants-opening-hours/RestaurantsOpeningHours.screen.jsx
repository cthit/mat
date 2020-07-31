import React, { useEffect, useState } from "react";
import {
    DigitEditDataCard,
    useDigitToast,
    useDigitTranslations
} from "@cthit/react-digit-components";
import EditWeekDays from "./views/edit-week-days";
import { setOpeningHours } from "../../../../../../api/restaurants/put.restaurants.api";
import { useHistory } from "react-router-dom";
import { getRestaurant } from "../../../../../../api/restaurants/get.restaurants.api";
import * as yup from "yup";

const zeroBefore = n => (n < 10 ? "0" : "") + n;

const toTime = date => {
    const d = new Date(date);
    return zeroBefore(d.getHours()) + ":" + zeroBefore(d.getMinutes());
};

const toDate = time => {
    const parts = time.split(":");
    const d = new Date();
    d.setHours(parseInt(parts[0]));
    d.setMinutes(parseInt(parts[1]));
    return d;
};

const RestaurantsOpeningHours = ({ match }) => {
    const [restaurant, setRestaurant] = useState(null);
    const [text] = useDigitTranslations();
    const history = useHistory();
    const [queueToast] = useDigitToast();

    const { id } = match.params;

    useEffect(() => {
        getRestaurant(id).then(response =>
            setRestaurant({
                ...response.data,
                openingHours: response.data.openingHours.map(weekday => {
                    if (weekday.opens == null || weekday.closes == null) {
                        return {
                            open: false,
                            opens: null,
                            closes: null,
                            weekday: weekday.weekday
                        };
                    }
                    return {
                        open: true,
                        opens: toDate(weekday.opens),
                        closes: toDate(weekday.closes),
                        weekday: weekday.weekday
                    };
                })
            })
        );
    }, [id]);

    if (restaurant == null) {
        return null;
    }

    return (
        <DigitEditDataCard
            margin={"auto"}
            size={{ height: "100%" }}
            initialValues={{
                openingHours: restaurant.openingHours
            }}
            keysOrder={["openingHours"]}
            onSubmit={values => {
                const openingHours = values.openingHours.map(weekday =>
                    weekday.open
                        ? {
                              opens: toTime(weekday.opens),
                              closes: toTime(weekday.closes)
                          }
                        : {
                              opens: null,
                              closes: null
                          }
                );

                setOpeningHours(id, openingHours)
                    .then(response => {
                        queueToast({
                            text: text.EditedOpeningHours
                        });
                        history.goBack();
                    })
                    .catch(error => {
                        queueToast({
                            text: text.FailedEditOpeningHours
                        });
                    });
            }}
            keysComponentData={{
                openingHours: {
                    component: EditWeekDays,
                    componentProps: {},
                    array: true,
                    formFieldArrayOptions: {
                        inputs: ["open", "opens", "closes"]
                    }
                }
            }}
            titleText={text.EditOpeningHours}
            submitText={text.SaveOpeningHours}
            extraButton={{
                text: text.Back,
                outlined: true,
                onClick: () => history.goBack()
            }}
            validationSchema={yup.object().shape({
                openingHours: yup.array().of(
                    yup.object().shape({
                        open: yup.bool(),
                        opens: yup
                            .date()
                            .nullable()
                            .when("open", {
                                is: true,
                                then: yup.date().required()
                            }),
                        closes: yup
                            .date()
                            .nullable()
                            .when("open", {
                                is: true,
                                then: yup.date().required()
                            })
                    })
                )
            })}
            cardProps={{
                overflow: "auto"
            }}
        />
    );
};

export default RestaurantsOpeningHours;
