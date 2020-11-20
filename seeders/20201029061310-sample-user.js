'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
      {
        name: 'Taro',
        pass: 'yamada',
        mail: 'Taro@yamada.jp',
        age: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hanako',
        pass: 'flower',
        mail: 'hanako@flower.com',
        age: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jiro',
        pass: 'change',
        mail: 'Jiro@change.com',
        age: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sachiko',
        pass: 'happy',
        mail: 'Sachiko@happy.jp',
        age: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      }
   ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
