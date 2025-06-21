const createBlog = (url, data) => {
    return {
        'method': 'post',
        url,
        data
    }
}

const updateBlog = (baseUrl, id, data) => {
    return {
        'method': 'put',
        'url': `${baseUrl}/${id}`,
        data
    }
}

const getBlogById = (baseUrl, id) => {
    return {
        'method': 'get',
        'url': `${baseUrl}/${id}`
    }
}

const deleteBlogById = (baseUrl, id) => {
    return {
        'method': 'delete',
        'url': `${baseUrl}/${id}`
    }
}

const getAllBlogs = (url) => {
    return {
        'method': 'get',
        url
    }
}

export { createBlog, getBlogById, getAllBlogs, updateBlog, deleteBlogById }