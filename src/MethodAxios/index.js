import axios from "axios";

export const post =  (URL,item) => axios.post(URL,item).then(res => console.log(res)).catch(err => console.log(err))