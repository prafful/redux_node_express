const increaseLikeActionCreateAndDispatch = function(friend){
    console.log("In increaselike action - will be dispatched!");
    console.log(friend);
    return({
        type:"INCREASE_LIKE",
        payload: friend
    })
}

export default increaseLikeActionCreateAndDispatch