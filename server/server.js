const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'c4b183eb179c42208b6e70e4ba0187bb',
        clientSecret:''
    })

    spotifyApi.authorizeCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(()=>{
        res.sendStatus(400)
    })
})