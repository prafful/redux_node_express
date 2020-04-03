import axios from 'axios'

export default function getFriends(){
    var friends = []
    return axios.get('http://localhost:1234/all')
                .then( response =>{
                    console.log(response.data);
                    response.data.forEach(element =>{
                        friends.push(element)
                    })
                    console.log(friends)
                    return friends
                })
}