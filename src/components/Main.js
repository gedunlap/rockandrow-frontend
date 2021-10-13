import React from 'react'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'

export default function Main(props) {
    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index />
                </Route>
                <Route
                    path='/workouts/:id'
                    render={(rp) => (<Show {...rp} />)}
                />
            </Switch>
        </main>
    )
}
