/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { Dispatcher } from 'flux';

class DispatcherClass extends Dispatcher {

    handleViewAction(action) {
        console.log(action)
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }

    handleServerAction(action) {
        this.dispatch({
            source: 'SERVER_ACTION',
            action: action
        });
    }
}

const AppDispatcher = new DispatcherClass();

export default AppDispatcher;


