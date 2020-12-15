import axios from 'axios';

const API_DEFAULT = "http://localhost:5000/";
const instance = axios.create({ baseURL: API_DEFAULT });

export async function getSneakers(){
    const result = await instance.get('/');

    return result.data
}

export async function createSneaker({name, date, url, info, link, price}) {

    const result = await instance.post('/', {name, date, url, info, link, price});
    return result.data
}

export async function deleteSneaker({id}) {

    const result = await instance.post('/'+ id,{id});
    return result.data
}

export default {
    getSneakers,
    createSneaker,
    deleteSneaker
}

