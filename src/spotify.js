// src/spotify.js

import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

// Set your Spotify Client ID
spotifyApi.setClientId('e17cd373b96f40ca955067c6c865803d');

export default spotifyApi;

