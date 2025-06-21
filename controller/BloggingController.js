import { BloggingModel } from "../model/BloggingModel.js";

export class BloggingController {
    constructor() {
        this.model = new BloggingModel();
    }

    async createPost(request, response) {
        try {
            const post = await this.model.createPost(request);
            const message = "Post created successfully";
            this.setResponseData(201, post, message, response);
        } catch (error) {
            this.setErrorResponse(500, "Failed to create post", error, response);
        }
    }

    async getAllPost(request, response) {
        try {
            const posts = await this.model.getAllPost();
            const message = "All the posts fetched successfully";
            this.setResponseData(200, posts, message, response);
        } catch (error) {
            this.setErrorResponse(500, "Failed to fetch posts", error, response);
        }
    }

    async getPostById(request, response) {
        try {
            const post = await this.model.getPost(request.params.id);
            if (!post) {
                return this.setErrorResponse(404, "Post not found", null, response);
            }
            const message = "Post fetched successfully";
            this.setResponseData(200, post, message, response);
        } catch (error) {
            this.setErrorResponse(500, "Failed to fetch post", error, response);
        }
    }

    async deletePostById(request, response) {
        try {
            const post = await this.model.deletePost(request.params.id);
            if (!post) {
                return this.setErrorResponse(404, "Post not found", null, response);
            }
            const message = "Post deleted successfully";
            this.setResponseData(200, post, message, response);
        } catch (error) {
            this.setErrorResponse(500, "Failed to delete post", error, response);
        }
    }

    async updatePost(request, response) {
        try {
            const post = await this.model.updatePost(request);
            if (!post) {
                return this.setErrorResponse(404, "Post not found or update failed", null, response);
            }
            const message = "Post updated successfully";
            this.setResponseData(200, post, message, response);
        } catch (error) {
            this.setErrorResponse(500, "Failed to update post", error, response);
        }
    }

    setResponseData(status, data, message, response) {
        response.status(status).json({
            success: true,
            message,
            data
        });
    }

    setErrorResponse(status, message, error, response) {
        response.status(status).json({
            success: false,
            message,
            error: error ? error.message : undefined
        });
    }
}
