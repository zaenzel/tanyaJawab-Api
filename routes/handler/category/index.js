const { Category } = require("../../../models");

module.exports = async (req, res) => {
  const category = await Category.findAll({ attributes: ["id", "name"] });

  return res.json({
    status: "success",
    data: category,
  });
};
