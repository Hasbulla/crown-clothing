import React from "react";
import "./Collection-Overview.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../Redux/Shop/Shop.Selectors";
import CollectioPreview from "../Collection-Preview/collection-preview";

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
    {
        collections.map(({id, ...otherCollectionProps}) => (<CollectioPreview key={id} {...otherCollectionProps}></CollectioPreview>))
    }
    </div>
);

const mapStatetoProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStatetoProps)(CollectionOverview);