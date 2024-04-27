'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      { name: 'Front-End', position: 1, created_at: new Date(), updated_at: new Date()},
      { name: 'Blockchain', position: 2, created_at: new Date(), updated_at: new Date()},
      { name: 'Back-End', position: 3, created_at: new Date(), updated_at: new Date()},
      { name: 'Ferramentas de Desenvolvimento', position: 4, created_at: new Date(), updated_at: new Date()},
      { name: 'Soft Skills', position: 5, created_at: new Date(), updated_at: new Date()},
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {})
  }
};
