const { Post } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    id_answer: "number|empty:false",
    answer: "string|empty:false",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const id = req.params.id;

  const post = await Post.findByPk(id);

  if (!post) {
    return res.status(404).json({
      status: "error",
      message: "post not found",
    });
  }

  const data = {
    id_answer: req.body.id_answer,
    answer: req.body.answer,
  };

  const selector = {
    where: {
      id,
    },
  };

  const updatedPost = await Post.update(data, selector);

  return res.status(200).json({
    status: "success",
    message: "berhasil mengirim jawaban",
  });
};
