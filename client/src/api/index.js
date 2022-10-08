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

export const deletePost = ( id ) => {
    return axios.delete( `${ url }/${ id }`);
}

export const updateLikeCount = ( id , updateLikeCount ) => {
    console.log("testing axios")
    console.log( updateLikeCount)
    return axios.patch( `${ url }/likecount/${ id }`, updateLikeCount );
}