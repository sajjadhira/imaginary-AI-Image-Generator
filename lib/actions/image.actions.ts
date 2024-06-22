"use server"

import { connectToDatabase } from "../database/mongoose"
import { handleError } from "../utils"

// Add Image

export async function addImage( { image, userId, path} : AddImageParams) {
    try{
        //
        await connectToDatabase();
    }
    catch(error){
        handleError(error)
    }
}