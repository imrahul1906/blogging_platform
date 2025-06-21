# Blogging Platform

A lightweight blogging platform built with Node.js, Express, and MongoDB. This application allows users to create, read, update, and delete blog posts via a RESTful API and a CLI tool.

## Features

- **Create a Blog Post**: Add new posts with title, content, category, and tags.
- **Read Blog Posts**: Fetch all posts or a specific post by ID.
- **Update a Blog Post**: Edit existing posts.
- **Delete a Blog Post**: Remove posts by ID.
- **REST API**: Clean and intuitive endpoints.
- **Command-Line Interface (CLI)**: Manage blogs directly from the terminal.

## Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Axios (for CLI HTTP requests)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/) (running locally on default port)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/imrahul1906/blogging_platform.git
   cd blogging_platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start MongoDB**  
   Ensure you have a MongoDB instance running locally:
   ```
   mongod --dbpath <your_db_path>
   ```

## Usage

### CLI Commands

All commands are run via `node cli.js <command> [options]`.

#### Create a Blog
```bash
node cli.js createBlog --title "My Title" --content "Blog content" --category "General" --tags tag1,tag2
```

#### Get All Blogs
```bash
node cli.js getAllBlogs
```

#### Get Blog By ID
```bash
node cli.js getBlogById --id <blog_id>
```

#### Update a Blog
```bash
node cli.js updateBlog --id <blog_id> [--title "New Title"] [--content "New Content"] [--category "New Category"] [--tags tag1,tag2]
```

#### Delete a Blog
```bash
node cli.js deleteBlogById --id <blog_id>
```

### API Endpoints

- `POST /posts` - Create a blog post
- `GET /posts` - Get all blog posts
- `GET /posts/:id` - Get a post by ID
- `PUT /posts/:id` - Update a post by ID
- `DELETE /posts/:id` - Delete a post by ID

## Configuration

- **MongoDB URI**: By default, the server connects to `mongodb://localhost:27017/blogdb`. Edit in `server/server.js` if needed.

---
https://roadmap.sh/projects/blogging-platform-api
