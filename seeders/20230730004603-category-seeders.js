"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("category", [
      {
        name: "Aqidah",
      },
      {
        name: "Al-Qur'an",
      },
      {
        name: "Hadist",
      },
      {
        name: "Qurban",
      },
      {
        name: "Thaharah",
      },
      {
        name: "Sholat",
      },
      {
        name: "Puasa",
      },
      {
        name: "Zakat",
      },
      {
        name: "Haji & Umrah",
      },
      {
        name: "Makanan & Minuman",
      },
      {
        name: "Dzkir & Doa",
      },
      {
        name: "Waris",
      },
      {
        name: "Fiqih Muamalah",
      },
      {
        name: "Pernikahan & Keluarga",
      },
      {
        name: "Lain - lain",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("category", null, {});
  },
};
