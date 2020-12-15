import List from '../components/List';
import react from 'react';
import request from "../lib/request";


class Sneakers extends react.Component {

    constructor() {
        super();
        this.state = {
            sneakers: []

        }
    }

    async componentDidMount() {


        this.setState({
            sneakers: await request.getSneakers()
        })


    }

    render() {
        if (this.state.sneakers.length === 0) {
            return (
                <>
                    <h3 className='menu_h3'>Sneakers List</h3>
                    <h4 className='menu_h4'> List is empty.</h4>
                </>
            )
        } else {
            return (
                <>
                    <h3 className='menu_h3'>Sneakers List</h3>
                    <List data={this.state.sneakers}/>
                </>
            )
        }
    }
}

export default Sneakers;