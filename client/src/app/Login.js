import React from 'react';
import {Container} from "react-bootstrap";

// note the content following 'scope' in the URL-- can add others, these are what we want to interact with in our app
const AUTH_URL = 
"https://accounts.spotify.com/authorize?client_id=c4b183eb179c42208b6e70e4ba0187bb&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

// function to handle the Spotify login
export default function Login() {
    // when the user clicks the login button, redirect them to the Spotify login page
    return <Container className="d-flex justify-center align-items-center"
    style = {{minHeight:"100vh"}}> 
        <a className = "btn btn-success btn-lg" href={AUTH_URL}>   
            Login with Spotify
        </a>
    </Container>
}