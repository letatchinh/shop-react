import axios from "axios";

export const POST =  (URL,item) => axios.post(URL,item).then(res => console.log(res)).catch(err => console.log(err))
export const PUT =  (URL,id) => axios.put(URL,id).then(res => console.log(res)).catch(err => console.log(err))
export const DELETE =  (URL,id) => axios.delete(URL,id).then(res => console.log(res)).catch(err => console.log(err))