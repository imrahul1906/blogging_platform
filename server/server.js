import express from "express"
import mongoose from "mongoose";
import { BloggingController } from "../controller/BloggingController.js";

export class Server {


    async init() {
        this.app = express();
        this.app.use(express.json());
        await this.initDB();

        this.controller = new BloggingController();
        this.setupRoutes();
    }

    async initDB() {
        await mongoose.connect('mongodb://localhost:27017/blogdb', {
        }).then(() => {
            console.log("connection to mongo database is successfull");
        }).catch((error) => console.error(`Error while connecting to mongo db : ${error}`));
    }

    setupRoutes() {
        // 1. express matches routes
        // 2. runs middle ware
        // 3. callback method is called.
        this.app.post('/posts', (request, response) => {
            this.controller.createPost(request, response);
        })

        this.app.get('/posts', (request, response) => {
            this.controller.getAllPost(request, response);
        })

        this.app.get('/posts/:id', (request, response) => {
            this.controller.getPostById(request, response);
        })

        this.app.delete('/posts/:id', (request, response) => {
            this.controller.deletePostById(request, response);
        })

        this.app.put('/posts/:id', (request, response) => {
            this.controller.updatePost(request, response);
        })
    }

    startServer(port = 3000, host = '0.0.0.0') {
        this.app.listen(port, host, () => {
            console.log(`Server is started successfully on port: ${port}`);
        })

        this.app.on('error', (error) => {
            console.log(`error in connecting with server : ${error}`);
        })
    }
}