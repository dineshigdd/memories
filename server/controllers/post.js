import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async ( req,res ) => {
    try{
        const postMessages = await PostMessage.find();
        res.status( 200 ).json( postMessages );
    }catch( error ){
        res.status( 404 ).json( { message: error.message } );
    }
}

export const createPost = async ( req, res ) => {
  

    const post = new PostMessage(  req.body );
    
    try{
        const newPost = await post.save();
        res.json( newPost );
  

    }catch( error ){
        res.status( 409 ).json( { message: error.message } );
    }
}

export const updatePost = async ( req, res ) => {
    console.log( " Updating");
    const { id  } = req.params;
    const post = req.body;
    console.log( post)
    if( !mongoose.Types.ObjectId.isValid( id )) return res.status( 404 ).send( 'No post with that id');
    
    
    const updatedPost = await PostMessage.findByIdAndUpdate( id, post , { new: true });
   
    res.json( updatedPost );
    //   PostMessage.findByIdAndUpdate( _id, post ,{ new: true }, ( error, updatedPost ) =>{
    //     if( error ){
    //         console.log( error );
    //     }else{
    //         console.log( updatedPost)
    //         res.json( updatedPost );
    //     }
    // });
}

export const deletePost = async( req, res ) => {
    console.log( req.params)
    const { id } = req.params;
  
    

    if( !mongoose.Types.ObjectId.isValid( id )) return res.status( 404 ).send( 'No post with that id');

    const deletePost = await PostMessage.findByIdAndDelete( id )
    res.json( deletePost );
}

export const updateLikeCount = async( req, res ) => {
    
    const { id } = req.params;
    let { likeCount } = req.body;
    console.log( req.body );
    
    if( !mongoose.Types.ObjectId.isValid( id )) return res.status( 404 ).send( 'No post with that id');
    
    likeCount = await PostMessage.findByIdAndUpdate( id, likeCount , { new: true });
    res.json( likeCount );
}