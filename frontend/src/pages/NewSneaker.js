import React from 'react';
import Form from "../components/Form";
import request from "../lib/request";

class NewSneaker extends React.Component{
    render(){
        return(
            <>
                <Form onSubmit={request.createSneaker} />
            </>
        )
    }
}

export default NewSneaker;