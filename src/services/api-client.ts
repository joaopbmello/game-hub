import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a1d7edc0dd3c4c1ba78c9a6034ae6e83'
  }
})