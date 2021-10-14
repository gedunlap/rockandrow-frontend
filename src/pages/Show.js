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
        props.history.push('/list')
    }

    const removeWorkout = () => {
        props.deleteWorkouts(workout._id)
        props.history.push('/list')
    }

    return (
        <div className="show">
            <h1 className="workoutitem">Date: {workout.date}</h1>
            <h1 className="workoutitem">Time: {workout.time}</h1>
            <h1 className="workoutitem">Distance: {workout.distance}</h1>
            <h1 className="workoutitem">Drag: {workout.drag}</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="date"
                    value={editForm.date}
                    name="date"
                    onChange={handleChange}
                    className="formitem"
                />
                <input
                    type="text"
                    value={editForm.time}
                    name="time"
                    placeholder="00:00"
                    onChange={handleChange}
                    className="formitem"
                />
                <input
                    type="number"
                    value={editForm.distance}
                    name="distance"
                    placeholder="Distance"
                    onChange={handleChange}
                    className="formitem"
                />
                <input
                    type="number"
                    value={editForm.drag}
                    name="drag"
                    placeholder="Drag"
                    onChange={handleChange}
                    className="formitem"
                />
                <input type="submit" value="UPDATE" className="formitem" id="submit" />
            </form>
            <button id="delete" onClick={removeWorkout} style={{ backgroundColor:"red", borderRadius:"5px", border:"solid black 1px", color:"white", marginBottom:"30px"}}>DELETE WORKOUT</button>
        </div>
    )
}
