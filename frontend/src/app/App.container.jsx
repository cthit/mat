import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import App from "./App";
import { DigitRedirectActions } from "@cthit/react-digit-components";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
    redirectTo: to => dispatch(DigitRedirectActions.redirectTo(to))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
