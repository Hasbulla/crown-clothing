import React from 'react';
import SHOP_DATA from "./ShopData";
import CollectioPreview from "../../Components/Collection-Preview/collection-preview";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return (
        <div className="shop-page">
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectioPreview key={id} {...otherCollectionProps}></CollectioPreview>
            ))}
        </div>
        )
    }
}

export default ShopPage;