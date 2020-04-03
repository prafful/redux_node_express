import React from 'react';
import Friends from './containers/friends';


class RootComponent extends React.Component {
    
    render() { 
        return ( 
            <div>
                <h1>Friends Redux Node Express App!!!!</h1>
                <hr />
                <Friends></Friends>
            </div>
         );
    }
}
 
export default RootComponent;