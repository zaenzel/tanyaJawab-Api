"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "ardi",
        role: "admin",
        city: "depok",
        email: "ardi@gmail.com",
        password: await bcrypt.hash("qwerty", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "yuni",
        role: "client",
        city: "bogor",
        email: "yuni@gmail.com",
        password: await bcrypt.hash("qwe", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
