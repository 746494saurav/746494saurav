import express from 'express';

const app= express();
 export const  getuser= (req , resp)=>{
    resp.send("this is a controller file");
 }
 