import { Post } from "./BlogSchema.js"

export class BloggingModel {

    async createPost(request) {
        try {
            const post = await Post.create({
                "title": request.body.title,
                "content": request.body.content,
                "category": request.body.category,
                "tags": request.body.tags,
            })

            console.log(`Blog is created sucessfully.`);
            return post;
        } catch (error) {
            console.log(`Error while creating post: ${error}`);
        }
    }

    async getAllPost(request) {
        return await Post.find()
    }

    async getPost(id) {
        return await Post.findById(id);
    }

    async deletePost(id) {
        return await Post.findByIdAndDelete(id);
    }

    async updatePost(request) {
        return await Post.findByIdAndUpdate(request.params.id, request.body, {
            new: true,          // return the updated document
            runValidators: true // re-run schema validators
        });
    }
}