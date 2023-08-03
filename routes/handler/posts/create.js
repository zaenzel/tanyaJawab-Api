const { Post } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    title: "string|empty:false",
    id_category: "number|empty:false",
    id_questioner: "number|empty:false",
    question: "string|empty:false",
    id_answer: "number|optional",
    answer: "string|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const data = {
    title: req.body.title,
    id_category: req.body.id_category,
    id_questioner: req.body.id_questioner,
    question: req.body.question,
    id_answer: req.body.id_answer,
    answer: req.body.answer,
  };

  const createdPost = await Post.create(data);

  return res.status(200).json({
    status: "success",
    data: createdPost,
  });
};
