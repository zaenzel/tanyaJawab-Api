const { Post, Category, User } = require("../../../models");

module.exports = async (req, res) => {
  const filterId = req.query.category_id || [];

  const sqlOptions = {
    attributes: ["id", "title", "question", "created_at","id_questioner", "id_category", "id_answer"],
  };

  if (filterId.length) {
    sqlOptions.where = {
      id_category: filterId
    };
  }

  const posts = await Post.findAll(sqlOptions);

  return res.json({
    status: "success",
    data: posts,
  });
};
