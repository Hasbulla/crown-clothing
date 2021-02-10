import React from 'react';
import { connect } from "react-redux";
import { Route} from "react-router-dom";
import CollectionPageContainer from "../Collection/Collection-Container";
import { fetchCollectionsStart } from "../../Redux/Shop/Shop.Action";
import CollectionOverviewContainer from "../../Components/Collection-Overview/Collection-Overview-Container";

class ShopPage extends React.Component{
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }
    render(){
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component = { CollectionOverviewContainer } />
                <Route exact path={`${match.path}/:collectionId`} component = { CollectionPageContainer } />
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  });

export default connect(null, mapDispatchToProps)(ShopPage);