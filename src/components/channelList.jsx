import React from "react";
import Channel from "./channel";
import channels from "./list of channels"

function createChannel(channelItem){
    return (<Channel
    key = {channelItem.id}
    name = {channelItem.name}
    />    );
}



function ChannelList(){
    return (
        <ul>
            {channels.map(createChannel)}
        </ul>
    )
}

export default ChannelList;