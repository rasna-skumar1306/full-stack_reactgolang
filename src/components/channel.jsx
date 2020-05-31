import React from "react";
function Channel(props){
    function handleClick(){
        console.log("I have been Clicked");
    }

    return(<li onClick={handleClick}>{props.name}</li>);
}

export default Channel;