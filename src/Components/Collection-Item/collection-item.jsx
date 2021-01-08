import React from "react";
import "./collection-item.scss";
import { connect } from "react-redux";
import { addItem } from "../../Redux/Cart/Cart.Action";
import CustomButton from "../Custom-Button/Custom-Button";

const CollectionItem = ({item, addItem}) => {
    const {name, imageUrl, price} = item;
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted> Add to Cart </CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);