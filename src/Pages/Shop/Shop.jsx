import React from 'react';
import { connect } from "react-redux";
import { Route} from "react-router-dom";
import WithSpinner from "../../Components/With-Spinner/With-Spinner";
import CollectionPage from "../Collection/Collection";
import { updateCollections } from "../../Redux/Shop/Shop.Action";
import CollectionOverview from "../../Components/Collection-Overview/Collection-Overview";
import { firestore, convertCollectionsSnapshotToMap } from "../../Firebase/Firebase.utils";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component{
    state = {
        loading: true
    }
    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({loading: false});
        });
    }
    render(){
        const { match } = this.props;
        const { loading } = this.state; 
        console.log(loading);
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} 
                    render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route exact path={`${match.path}/:collectionId`} 
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);