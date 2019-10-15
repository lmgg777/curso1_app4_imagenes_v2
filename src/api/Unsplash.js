import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 12b555abbaf406f152bdb8f53f303ff2efc94af2b81c2c88f3031d00be0c3592'
    }
  });