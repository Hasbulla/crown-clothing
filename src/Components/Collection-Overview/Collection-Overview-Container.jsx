import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../With-Spinner/With-Spinner";
import CollectionOverview from "./Collection-Overview";
import { selectIsCollectionFetching } from "../../Redux/Shop/Shop.Selectors";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default CollectionOverviewContainer;