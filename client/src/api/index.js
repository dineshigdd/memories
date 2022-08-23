import axios from 'axios';

const url = '/posts';

export const fetchPosts = () => axios.get( url );
export const createPost = ( newPost ) => {
    // console.log( newPost )
    return axios.post( url, newPost );
    // .then( res => console.log( res.data ))
}

export const updatePost = ( id, updatedPost ) => {   
    return axios.patch( `${ url }/${ id }`, updatedPost );
}