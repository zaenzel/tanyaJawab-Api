"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("posts", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_category: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_questioner: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      question: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_answer: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      answer: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint("posts", {
      type: "foreign key",
      name: "POSTS_ID_QUESTIONER",
      fields: ["id_questioner"],
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "CASCADE",
    });

    await queryInterface.addConstraint("posts", {
      type: "foreign key",
      name: "POSTS_ID_ANSWER",
      fields: ["id_answer"],
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "CASCADE",
    });

    await queryInterface.addConstraint("posts", {
      type: "foreign key",
      name: "POSTS_ID_CATEGORY",
      fields: ["id_category"],
      references: {
        table: "category",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("posts");
  },
};
