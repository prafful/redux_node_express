import getFriends from "./reducer-getfriends";
import axios from 'axios'

export default function increaseLikeActionReceived(state = null, action){
    console.log("Dispatched increase like action is received!")
    console.log(action)
    var friends = []
    if(action != null){
        switch(action.type){
            case 'INCREASE_LIKE':
                var likesbody = {
                    likes:  action.payload.likes + 1
                }
                
                axios.put('http://localhost:1234/update/likes/' + action.payload.id, likesbody)
                    .then(response =>{
                         console.log(response);   
                         friends = getFriends()
                         return friends   
                    }, error =>{
                        console.log(error);
                    })
        }
        //update likes in database

        
    }
    friends = getFriends()
    return friends
}