import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "31aeca33f6a44a07811b7a1bfb0982ea"
    }
})