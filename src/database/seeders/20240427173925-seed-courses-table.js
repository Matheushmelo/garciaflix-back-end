'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const [categories] = await queryInterface.sequelize.query('SELECT id FROM categories;')

    await queryInterface.bulkInsert('courses', [
      { name: 'Bootstrap Avançado', synopsis: 'Aprenda os conceitos mais avançados sobre Bootstrap!', featured: true, category_id: categories[0].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Desenvolvedor Front-End', synopsis: 'Com este curso você se tornará um desenvolvedor Front-End, do zero ao profissional!', category_id: categories[0].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Dominando Smart Contracts', synopsis: 'Com este curso você aprenderá de uma vez por todas a criar smart contracts cada vez melhores e mais seguros!', featured: true, category_id: categories[1].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Web3 Fundamentals', synopsis: 'Domine todos os conceitos sobre a Web3', category_id: categories[1].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Criando APIs bem documentadas', synopsis: 'Aprenda a criar as melhores APIs e a como documentá-las corretamente!', featured: true, category_id: categories[2].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Desenvolvedor Back-End', synopsis: 'Com este curso você se tornará um desenvolvedor Front-End, do zero ao profissional!', category_id: categories[2].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Aumentando a produtividade com Visual Studio Code', synopsis: 'Domine o VS Code e torne-se mais produtivo!', category_id: categories[3].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Git e GitHub para Devs', synopsis: 'Aprenda de uma vez por todas a como versionar melhor seus códigos!', featured: true, category_id: categories[3].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Liderança para Devs', synopsis: 'Aprenda a como liderar uma equipe e um projeto de Desenvolvimento!', featured: true, category_id: categories[4].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Gerenciamento de tempo', synopsis: 'Com este curso você aprenderá de uam vez por todas a criar smart contracts cada vez melhores e mais seguros!', featured: true, category_id: categories[4].id, created_at: new Date(), updated_at: new Date() },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {})
  } 
}