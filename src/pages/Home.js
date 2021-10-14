import React from 'react'
import YoutubeEmbed from '../components/YoutubeEmbed'

export default function Home() {
    return (
        <div className="homepage">
            <img src="https://i.imgur.com/PgK41G7.png" alt="rock and row logo" />
            <p>Rock and Row is an app made simply to store your rowing workout stats.</p>
            <p>Check out this video for some form pointers.</p>
            <YoutubeEmbed className="youtube" />
        </div>
    )
}
