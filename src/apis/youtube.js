import axios from 'axios';

const KEY = "AIzaSyAYJ697R0n222F8Qmd-mKzHGcgGJjZOeVU";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY,
    }
});


