import axios from 'axios';
import * as api from '../api';

//Action creators
export const getPosts = () => async( dispatch ) => {
    try{
        const { data }  = await api.fetchPosts();
        dispatch( { type: "FETCH-ALL", payload: data } );
        
    }catch( error ){
        console.log( error.message );
    }
}

export const createPost = ( newPost ) => async( dispatch ) => {
    try{
        const { data } = await api.createPost( newPost );
   
        dispatch( { type : "CREATE", payload: data });
    }catch(error){
        console.log( error );
    }
}

export const updatePost = ( id, post ) => async( dispatch ) => {
    try{
        const { data } =  await api.updatePost( id, post );
        console.log( data );
        dispatch( { type : "UPDATE", payload: data });

    }catch(error){
        console.log( error);
    }
}

