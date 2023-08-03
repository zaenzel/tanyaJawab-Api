const { Post, User } = require("../../../models");

module.exports = async (req, res) => {
  const id = req.params.id;

  const post = await Post.findByPk(id);

  if (!id) {
    return res.status(404).json({
      status: "error",
      message: "post not found",
    });
  }

  await post.destroy()

  return res.json({
    status: "success",
    message: "pertanyaan berhasil di hapus",
  });
};
