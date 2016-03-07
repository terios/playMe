/**
 * Created by terios on 3/7/16.
 */


import AppDispatcher from  '../core/Dispatcher';

import appConstants from '../constants/ActionTypes';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

// Define the store as an empty array
let _store = {
    list: [],
    editing: false
};

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
class playlistStoreClass extends EventEmitter {

    addChangeListener(cb) {
        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    }

    getList() {
        return _store;
    }

}

// Initialize the singleton to register with the
// dispatcher and export for React components
const PlaylistStore = new playlistStoreClass();

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register((payload) => {
    const action = payload.action;

    console.log('appConstants')
    console.log(appConstants)
    switch (action.actionType) {

        case appConstants.NEW_ITEM:

            // Add the data defined in the TodoActions
            // which the View will pass as a payload
            _store.editing = true;
            console.log(CHANGE_EVENT)
            PlaylistStore.emit(CHANGE_EVENT);
            break;

        case appConstants.SAVE_ITEM:

            // Add the data defined in the TodoActions
            // which the View will pass as a payload
            _store.list.push(action.text);
            _store.editing = false;
            PlaylistStore.emit(CHANGE_EVENT);
            break;

        case appConstants.REMOVE_ITEM:

            // View should pass the text's index that
            // needs to be removed from the store
            _store.list = _store.list.filter((item, index) => {
                return index !== action.index;
            });
            PlaylistStore.emit(CHANGE_EVENT);
            break;

        case appConstants.GET_RANDOM_RESPONSE:

            // Construct the new todo string
            const firstName = action.response.results[0].user.name.first;
            const city = action.response.results[0].user.location.city;
            const newTodo = `Call ${firstName} about real estate in ${city}`;

            // Add the new todo to the list
            _store.list.push(newTodo);
            PlaylistStore.emit(CHANGE_EVENT);
            break;

        default:
            return true;
    }
});

export default PlaylistStore;