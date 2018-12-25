import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import App from "./App";
import { DigitRedirectActions } from "@cthit/react-digit-components";
import { appLoadRestaurants } from "./App.action-creator";

const mapStateToProps = (state, ownProps) => ({
    categories: state.app.categories,
    restaurants: state.app.restaurants
});

const mapDispatchToProps = dispatch => ({
    redirectTo: to => dispatch(DigitRedirectActions.digitRedirectTo(to)),
    loadRestaurants: () => dispatch(appLoadRestaurants())
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
