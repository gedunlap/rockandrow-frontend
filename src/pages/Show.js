import React from 'react'

export default function Show(props) {
    const id = props.match.params.id
    const workouts = props.workouts
    const workout = workouts.find(w => w._id === id)

    return (
        <div>
            <h1 className="workoutitem">Date: {workout.date}</h1>
            <h1 className="workoutitem">Time: {workout.time}</h1>
            <h1 className="workoutitem">Distance: {workout.distance}</h1>
            <h1 className="workoutitem">Drag: {workout.drag}</h1>
        </div>
    )
}
