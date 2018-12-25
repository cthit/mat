import { connect } from "react-redux";
import Category from "./Category";

const mapStateToProps = (state, ownProps) => ({
    restaurants: state.app.categories[ownProps.category]
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);
