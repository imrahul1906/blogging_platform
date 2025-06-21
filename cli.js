import { Command } from "commander"
import { AxiosClient } from "./AxiosClient.js"
import { Server } from "./server/server.js"


const program = new Command();

program
    .command('createBlog')
    .requiredOption('--title <string>', 'Title of the content')
    .requiredOption('--content <string>', 'Content of the blog')
    .requiredOption('--category <string>', 'Category of the content')
    .requiredOption('--tags <items>', 'Comma-separated tags', (value) => value.split(','))
    .action(async (options) => {
        const server = new Server();
        await server.init();
        server.startServer();

        const client = new AxiosClient();
        await client.createBlog({
            title: options.title,
            content: options.content,
            category: options.category,
            tags: options.tags
        });
    });

program
    .command('updateBlog')
    .option('--id <string>', 'Id of the blog')
    .option('--title <string>', 'Title of the content')
    .option('--content <string>', 'Content of the blog')
    .option('--category <string>', 'Category of the content')
    .option('--tags <items>', 'Comma-separated tags', (value) => value.split(','))
    .action(async (options) => {
        const server = new Server();
        await server.init();
        server.startServer();

        const data = {};
        if (options.title) data.title = options.title;
        if (options.content) data.content = options.content;
        if (options.category) data.category = options.category;
        if (options.tags) data.tags = options.tags;
        console.log(data)
        const client = new AxiosClient();
        await client.updateBlog(options.id, data);
    });

program
    .command('getAllBlogs')
    .action(async (options) => {
        const server = new Server();
        await server.init();
        server.startServer();

        const client = new AxiosClient();
        await client.getAllBlogs();
    });

program
    .command('getBlogById')
    .requiredOption('--id <string>', 'Id of the blog')
    .action(async (options) => {
        const server = new Server();
        await server.init();
        server.startServer();

        const client = new AxiosClient();
        await client.getBlogById(options.id);
    });

program
    .command('deleteBlogById')
    .requiredOption('--id <string>', 'Id of the blog')
    .action(async (options) => {
        const server = new Server();
        await server.init();
        server.startServer();

        const client = new AxiosClient();
        await client.deleteBlogById(options.id);
    });
program.parse();