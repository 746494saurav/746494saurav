import {user} from "./user.controller.js";
import express from "express";
const router = express.Router();
router.post('/',user)