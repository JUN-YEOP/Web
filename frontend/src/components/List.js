import React from 'react';
import SneakerItem from './SneakerItem';
import ReactDOM from 'react-dom';
import App from '../pages/App'
import {withRouter} from 'react-router-dom';



class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sneakers: this.props.data
        }
    }

    deleteSneakerById(id) {

        var result = [];
        result = this.state.sneakers.filter(sneakers => sneakers._id !== id)
        // console.log("삭제된 스니커 리스트에 반영"+result);


        this.setState(
            {sneakers:result}
        )
    }

    render() {
        if (this.props.data.length !== 0) {
            const sneakerList = this.state.sneakers.map(s => {
                return (
                    <li className='slist'>
                        < SneakerItem sneaker={s} onDelete={this.deleteSneakerById.bind(this)}/>
                    </li>
                )
            })
            return (
                <ul>
                    {sneakerList}
                </ul>
            )
        }
    }
}

export default List