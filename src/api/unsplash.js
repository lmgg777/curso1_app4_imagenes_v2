import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID de2ae1755d61570664e747f97484acc5ab47c22becd7402e877719b4e3a96991"
  }
});
