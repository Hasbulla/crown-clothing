import React from 'react';
import { Route} from "react-router-dom";
import CategoryPage from "../Collection/Collection";
import CollectionOverview from "../../Components/Collection-Overview/Collection-Overview";

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
);

export default ShopPage;