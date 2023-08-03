const { User } = require("../../../models");

module.exports = async (req, res) => {
  const userId = req.body.user_id;
  const user = await User.findByPk(userId);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "user not found",
    });
  }

  return res.json({
    status: "success",
    message: "success logout",
  });
};
