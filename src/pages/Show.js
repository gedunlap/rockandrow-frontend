import React from 'react'
import { useState } from 'react'

export default function Show(props) {
    const id = props.match.params.id
    const workouts = props.workouts
    const workout = workouts.find(w => w._id === id)

    const [editForm, setEditForm] = useState(workout)

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.updateWorkouts(editForm, workout._id)
        props.history.push('/')
    }

    const removeWorkout = () => {
        props.deleteWorkouts(workout._id)
        props.history.push('/')
    }

    return (
        <div>
            <h1 className="workoutitem">Date: {workout.date}</h1>
            <h1 className="workoutitem">Time: {workout.time}</h1>
            <h1 className="workoutitem">Distance: {workout.distance}</h1>
            <h1 className="workoutitem">Drag: {workout.drag}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    value={editForm.date}
                    name="date"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.time}
                    name="time"
                    placeholder="00:00"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    value={editForm.distance}
                    name="distance"
                    placeholder="Distance"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    value={editForm.drag}
                    name="drag"
                    placeholder="Drag"
                    onChange={handleChange}
                />
                <input type="submit" value="UPDATE" />
            </form>
            <button id="delete" onClick={removeWorkout}>DELETE</button>
        </div>
    )
}
