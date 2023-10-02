"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          description: "Study for exam",
          status: "pending",
          createdby: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Meet with friends",
          status: "pending",
          createdby: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Go to class",
          status: "completed",
          createdby: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Ask your crush out!",
          status: "pending",
          createdby: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Tasks", null, {});
  },
};
