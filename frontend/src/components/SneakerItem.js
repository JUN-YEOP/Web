import React from 'react';
import request from "../lib/request";


class SneakerItem extends React.Component {
    constructor(props) {
        super(props);
    }


    async deleteSneaker() {

        const id = this.props.sneaker._id;

        console.log(this.props.sneaker._id);


        await request.deleteSneaker({id});
        this.props.onDelete(id);
    }

    render() {
        const {sneaker} = this.props;


        return (
            <div className="sneaker_div">
                <fieldset className='fieldset_sneaker'>
                    <div className='right'>
                        <p> Name : {sneaker.name} </p>
                        <p> Date : {sneaker.date} </p>
                        <p> Price : {sneaker.price} </p>
                        <p> Info :<br></br> {sneaker.info} </p>
                        <p>Link to raffle : <a href={sneaker.link} target='_blank'
                                               rel='noopener noreferrer'>{sneaker.link}</a></p>
                    </div>
                    <div className='left'>
                        {/*<p> Image : </p>*/}
                        <img src={process.env.PUBLIC_URL + '/' + sneaker.url} className='image'></img>
                        <br></br>
                    </div>
                    <div className='bottom'>
                        <button onClick={this.deleteSneaker.bind(this)} className='button_delete'>Delete</button>
                    </div>
                </fieldset>
            </div>
        )
    }
}

export default SneakerItem