import User from "./user.controller.js";


export const user=async(req,res)=>{
    const {name, email ,password }= req.body;
    const user = new User({ name, email ,password});
    await user.save();
    return "create user";
}