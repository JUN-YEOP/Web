import './App.css';
import React from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import request from "../lib/request";


class SneakerCalendar extends React.Component {

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

        const event = [];
        var count = 0;
        var end = this.state.sneakers.length;
        for (count; count < end; count++) {
            event.push(
                {
                    title: this.state.sneakers[count].name,
                    date: this.state.sneakers[count].date,
                    url: this.state.sneakers[count].link
                }
            )
        }

        if (this.state.sneakers.length === 0) {
            return (
                <div className="App">
                    <FullCalendar
                        defaultView="dayGridMonth"
                        plugins={[dayGridPlugin]}
                        on
                    />
                </div>
            );
        } else {
            return (
                <div className="App">
                    <FullCalendar
                        defaultView="dayGridMonth"
                        plugins={[dayGridPlugin]}
                        events={event}
                        on
                    />
                </div>
            );
        }

    }
}

export default SneakerCalendar