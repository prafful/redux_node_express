import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import increaseLikeActionCreateAndDispatch from '../actions/increaseLikeAction'

class Friends extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            stateFriends: [],
            newState:0
        }
       
    }

    UNSAFE_componentWillMount(){
        this.getFriendsFromPropsOfPromise()
    }
    

    /* static getDerivedStateFromProps(nextProps, prevState){
        console.log(nextProps);
        console.log(nextProps.friendprops);
        if(nextProps.friendprops != null){
            nextProps.friendprops.then(response=>{
                console.log(response);
                return {
                    stateFriends:response
                }
            })
        }else{
            return null
        }
        
      
        
    } */

    getFriendsFromPropsOfPromise(){
        this.props.friendprops.then(response => {
            console.log(response);
            this.setState({
                stateFriends:response
            })
            console.log("Props from Store is converted to State for Friends Container!");
            console.log(this.state.stateFriends);

        })
    }

  
    renderFriendState = function(){
        return this.state.stateFriends.map( friend => {
            return (
                <tr key={friend.id}>
                    <td>{friend.id}</td>
                    <td>{friend.name}</td>
                    <td>{friend.location}</td>
                    <td>{friend.likes}</td>
                    <td>{friend.dislikes}</td>
                    <td>
                        <button>Edit</button>
                    </td>
                    <td>
                        <button>Delete</button>
                    </td>
                    <td>
                        <button onClick={()=>this.props.changeLike(friend)}>Like</button>
                    </td>
                    <td>
                        <button>Dislike</button>
                    </td>
                </tr>       
            )
        })
    }

    render() { 
        return (  
                <div>
                    <h4>Friends:</h4>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Likes</th>
                                <th>Dis Likes</th>
                                <th colSpan='4'>Actions</th>
                            </tr>
                        </thead> 
                        <tbody>
                            {this.renderFriendState()}
                        </tbody>   

                        
                    </table>
                </div>
        );
    }
}
 
function convertStoreToProps(friendStore){
    console.log(friendStore);
    return {
        friendprops: friendStore.friends
    }
}

function mapPropsFunctionToActionAndDispatch(dispatch){
    return bindActionCreators({
        changeLike: increaseLikeActionCreateAndDispatch
    }, dispatch)
}

export default connect(convertStoreToProps, mapPropsFunctionToActionAndDispatch)(Friends);