import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Index(props) {
    const [newForm, setNewForm] = useState({
        date: "",
        time: "",
        distance: "",
        drag: "",
    })

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createWorkouts(newForm)
        setNewForm({
            date: "",
            time: "",
            distance: "",
            drag: "",
        })
    }

    const loaded = () => {
        return props.workouts.map((workout) => (
            <div key={workout._id} className='workout'>
                <Link to={`/workouts/${workout._id}`} style={{ textDecoration: "none" }}><h1><button>{workout.date}</button></h1></Link>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section className="index">
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    value={newForm.date}
                    name="date"
                    onChange={handleChange}
                    className="formitem"
                />
                <label htmlFor="time">Time</label>
                <input
                    type="text"
                    value={newForm.time}
                    name="time"
                    placeholder="00:00"
                    onChange={handleChange}
                    className="formitem"
                />
                <label htmlFor="distance">Distance</label>
                <input
                    type="number"
                    value={newForm.distance}
                    name="distance"
                    placeholder="0"
                    onChange={handleChange}
                    className="formitem"
                />
                <label htmlFor="drag">Drag</label>
                <input
                    type="number"
                    value={newForm.drag}
                    name="drag"
                    placeholder="0"
                    onChange={handleChange}
                    className="formitem"
                />
                <input type="submit" value="SUBMIT" className="formitem" id="submit" />
            </form>
            {props.workouts ? loaded() : loading()}
        </section>
    )
}
