

const userBlogGet = (req,res)=>{
    res.send("Form To Post Blog");
}

const userBlogPost = (req,res)=>{
    res.send("Blog Posted SucessFully");
}

module.exports = {
    userBlogGet : userBlogGet,
    userBlogPost : userBlogPost
}