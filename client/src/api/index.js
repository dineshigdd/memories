import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get( url );
export const createPost = ( newPost ) => {
    // console.log( newPost )
    return axios.post( url, newPost );
    // .then( res => console.log( res.data ))
}

export const updatePost = ( id, updatedPost ) => {   
    return axios.patch( `${ url }/${ id }`, updatedPost );
}

export const deletePost = ( id ) => {
    return axios.delete( `${ url }/${ id }`);
}

export const updateLikeCount = ( id) => {
    console.log("testing axios")
    // console.log( updateLikeCount)
    return axios.patch( `${ url }/${ id }/likecount`);
}