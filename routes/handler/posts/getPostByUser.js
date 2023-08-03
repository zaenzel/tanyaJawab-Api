const { Post, Category, User } = require("../../../models");

module.exports = async (req,res) => {
    const userId = req.params.user_id

    if (!id) {
       return res.status(404).json({
        status:"error",
        message: "The seller you are looking for does not exist"
       }) 
    }

    const post = await Post.findAll()
}