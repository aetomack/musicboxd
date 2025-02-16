const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/refresh', (req, res)=> {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'c4b183eb179c42208b6e70e4ba0187bb',
        clientSecret:'9a5168342c724eb6ad9732b9e7b4feb4',
        refreshToken
    })

    spotifyApi.refreshAccessToken().then(
        data => {
            console.log(data.body)
            }).catch(() => {
            res.senStatus(400)
        })
})
app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'c4b183eb179c42208b6e70e4ba0187bb',
        clientSecret:'9a5168342c724eb6ad9732b9e7b4feb4'
    })

    spotifyApi.authorizeCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err)=>{
        console.log(err)
        res.sendStatus(400)
    })
})

app.listen(3001);