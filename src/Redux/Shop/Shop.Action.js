import ShopActionTypes from './Shop.Types';

export const updateCollections = collectionMap => ({
    type: ShopActionTypes.UPDATE_COLLECTION,
    payload: collectionMap
});
