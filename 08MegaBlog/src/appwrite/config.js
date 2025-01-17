import conf from "../conf/conf";

import { Client ,ID , Databases , Storage , Query } from "appwrite";

export class Service{
client =new Client();
databases;
bucket;

constructor()
{
    this.client
         .setEndpoint(conf.appwriteURL)
         .setProject(conf.appwriteProjectId);

         this.databases = new Databases(this.client);
         this.bucket = new Storage(this.client);
}

async createPost({title ,slug ,content ,featuredImage ,status , userId})
{
    try{
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,
            }
        )
    }catch(error){
        console.log(error);
    }
}

async updatePost(slug , {title  , content , featuredImage , status , userId})
{
    try{
        
        return this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
            }
        )
    }catch(error)
    {
        console.log(error)
    }
}

async deleteDocument(slug){
    
    try{
         await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
          
        )
        return true
    }catch(error)
    {
        console.log(error)
    }
}

async getPost(slug)
{
    try{
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
    }
    catch(error)
    {
        console.log(error)
    }
}

async getPosts()
{
    try{
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            [
                Query.equal("status" , "active")
            ],
        )
    }catch(error)
    {
        console.log(error);
    }
}


// file upload service

async uploadFile(file)
{
    try{
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
        )  

    }
    catch(error)
    {
        console.log(error)
    }
}

async deletFile(fileId)
{
    try{
await this.bucket.deleteFile(
    conf.appwriteBucketId,
    fileId
)
return true
    }
    catch(error){
console.log(error)
    }
}

getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
}
}



const service = new Service();

export default service