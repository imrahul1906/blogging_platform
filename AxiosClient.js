import axios from "axios";
import { createBlog, getAllBlogs, getBlogById, deleteBlogById, updateBlog } from "./config/requestConfig.js";

export class AxiosClient {

    async createBlog(data) {
        const url = "http://localhost:3000/posts"
        const config = createBlog(url, data);

        await this.makeRequest(config)
    }

    async getAllBlogs() {
        const url = "http://localhost:3000/posts"
        const config = getAllBlogs(url);

        await this.makeRequest(config)
    }

    async getBlogById(id) {
        const url = "http://localhost:3000/posts"
        const config = getBlogById(url, id);

        await this.makeRequest(config)
    }

    async deleteBlogById(id) {
        const url = "http://localhost:3000/posts"
        const config = deleteBlogById(url, id);

        await this.makeRequest(config)
    }

    async updateBlog(id, data) {
        const url = "http://localhost:3000/posts"
        const config = updateBlog(url, id, data);

        await this.makeRequest(config)

    }

    async makeRequest(config) {
        try {
            const response = await axios(config);
            console.log(response.data);
        } catch (error) {
            console.error("Request failed:", error.message);
            if (error.response) {
                console.error("Server responded with:", error.response.data);
            } else {
                console.error("No response received. Is the server running?");
            }
        }
    }
}