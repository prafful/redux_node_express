import React from 'react';

import ReactDOM from 'react-dom';
import RootComponent from './root';

import { createStore } from "redux";
import { Provider } from "react-redux";
import allFriends from './reducers/combine-reducers';



const friendsStore = createStore(allFriends)

console.log(friendsStore);

ReactDOM.render(    <Provider store={friendsStore}>
                        <RootComponent></RootComponent>
                    </Provider>
                    , document.getElementById('root'))