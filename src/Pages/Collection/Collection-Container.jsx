import { connect } from "react-redux";
import CollectionPage from "./Collection";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../Components/With-Spinner/With-Spinner";
import { selectIsCollectionLoaded } from "../../Redux/Shop/Shop.Selectors";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionPageContainer;