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
        console.log( data.likeCount );
        dispatch( { type : "UPDATE", payload: data });

    }catch(error){
        console.log( error);
    }
}

export const deletePost = ( id ) => async( dispatch ) => {
    try{
        console.log( "I am in delete");
        await api.deletePost( id );
        
        dispatch( { type: "DELETE", payload: id })
    }catch( error ){
        console.log( error );
    }
}

export const updateLikeCount = ( id ) => async( dispatch ) => {
    try{
       
       const { data } = await api.updateLikeCount( id );
       console.log( "return value")
        console.log( data )
       dispatch( { type: "UPDATE_LIKE_COUNT", payload:data })     
    }catch( error ){
        console.log( error );
    }
}