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
                <Link to={`/workouts/${workout._id}`}><h1>{workout.date}</h1></Link>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    value={newForm.date}
                    name="date"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.time}
                    name="time"
                    placeholder="00:00"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    value={newForm.distance}
                    name="distance"
                    placeholder="Distance"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    value={newForm.drag}
                    name="drag"
                    placeholder="Drag"
                    onChange={handleChange}
                />
                <input type="submit" value="SUBMIT" />
            </form>
            {props.workouts ? loaded() : loading()}
        </section>
    )
}
