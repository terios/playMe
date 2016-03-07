/**
 * Created by terios on 3/7/16.
 */

import AppDispatcher from '../core/Dispatcher';
import appConstants from '../constants/ActionTypes';

//import { getRandomApi } from '../utils/RandomUserAPI';


export function addItem() {
    AppDispatcher.handleViewAction({
        actionType: appConstants.NEW_ITEM,
    });
}

export function saveItem(text) {

    console.log(text)
    AppDispatcher.handleViewAction({
        actionType: appConstants.SAVE_ITEM,
        text: text,
    });
}

export function removeItem(index) {
    AppDispatcher.handleViewAction({
        actionType: appConstants.REMOVE_ITEM,
        index: index,
    });
}

export function getRandom() {
    AppDispatcher.handleViewAction({
        actionType: appConstants.GET_RANDOM,
    });

    //getRandomApi();
}