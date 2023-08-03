const { Post, User } = require("../../../models");

module.exports = async (req, res) => {
  const id = req.params.id;

  const post = await Post.findByPk(id);

  if (!post) {
    return res.status(404).json({
      status: "error",
      message: "the question is not found ",
    });
  }

  const id_questioner = post.id_questioner;
  const questioner = await User.findByPk(id_questioner, {
    attributes: ["id", "name", "role", "city"],
  });

  const id_answer = post.id_answer;
  const answer = await User.findByPk(id_answer, {
    attributes: ["id", "name", "role", "city"],
  });

  return res.json({
    status: "success",
    data: post,
    questioner: questioner,
    answer
  });
};
