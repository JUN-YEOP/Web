import React from 'react';
import {withRouter} from 'react-router-dom';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.form = {
            name: React.createRef(),
            date: React.createRef(),
            url: React.createRef(),
            info: React.createRef(),
            link: React.createRef(),
            price: React.createRef()

        }
        this.submit = this.submit.bind(this)
        this.cancle = this.cancle.bind(this)
    }

    async submit() {
        const data = {
            name: this.form.name.current.value,
            date: this.form.date.current.value,
            url: this.form.url.current.value,
            info: this.form.info.current.value,
            link: this.form.link.current.value,
            price:this.form.price.current.value

        }
        const echo_result = await this.props.onSubmit(data);

        this.props.history.push("/");
    }

    cancle() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <h3 className='menu_h3'>Add Sneaker</h3>
                <fieldset class='fieldset_label'>
                    <label className='label'>Sneaker Name : </label>
                    {/*<span className='label'>New</span>*/}
                    <input ref={this.form.name} placeholder="Sneaker Name" className='form_input'></input>
                    <br></br>
                    <label className='label'>Drop Date : </label>
                    <input ref={this.form.date} placeholder="YYYY-MM-DD" className='form_input'></input>
                    <br></br>
                    <label className='label'>Price : </label>
                    <input ref={this.form.price} placeholder="Price" className='form_input'></input>
                    <br></br>
                    <label className='label'>Image url : </label>
                    <input ref={this.form.url} placeholder="Image url" className='form_input'></input>
                    <br></br>
                    <label className='label'>Sneaker Info : </label>
                    <input ref={this.form.info} placeholder="Sneaker Info" className='form_input'></input>
                    {/*<textarea ref={this.form.info}placeholder="Sneaker Info" className='form_input'></textarea>*/}
                    <br></br>
                    <label className='label'>Link to raffle : </label>
                    <input ref={this.form.link} placeholder="ex) https://ajou.ac.kr" className='form_input'></input>
                    <br></br>
                </fieldset>


                <button onClick={this.submit} className='button'>OK</button>
                <button onClick={this.cancle} className='button'>Cancle</button>

                    <br></br>

            </div>
    );
    }
    }

    export default withRouter(Form)