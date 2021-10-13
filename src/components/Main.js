import React from 'react'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'
import Home from '../pages/Home'

export default function Main(props) {
    const [workouts, setWorkouts] = useState(null)

    const URL = "https://rockandrow-backend.herokuapp.com/workouts/"

    const getWorkouts = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setWorkouts(data)
    }

    const createWorkouts = async (workout) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workout)
        })
        getWorkouts()
    }

    const updateWorkouts = async (workout, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(workout)
        })
        getWorkouts()
    }

    const deleteWorkouts = async id => {
        await fetch(URL + id, {
            method: "delete"
        })
        getWorkouts()
    }

    useEffect(() => getWorkouts(), [])

    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/list'>
                    <Index workouts={workouts} createWorkouts={createWorkouts} />
                </Route>
                <Route
                    path='/workouts/:id'
                    render={(rp) => (
                        <Show
                            workouts={workouts}
                            updateWorkouts={updateWorkouts}
                            deleteWorkouts={deleteWorkouts}
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </main>
    )
}
