  'use strict';

  module.exports = {
      up: (queryInterface, Sequelize) => {
          let data = [
        {
          name: 'Web development',
          imagepath: 'images/Courses/Web-Development/web-development-banner.jpg',
          summary: "Master the laguages of the web"
        },
        {
          name: 'Programming and Computer Science',
          imagepath: 'images/Courses/Programming-and-Computer-Science/Programming-and-Computer-Science-banner.jpg',
          summary: "Learn Python, one of hottest and fastest growing programming languages"
        },
        { 
          name: 'Data Science',
          imagepath: 'images/Courses/Data-Science/data-science-banner.png',
          summary: "Learn SQL and Python and build the skills you need to analyze data" 
        }
          ];
          data.map(item => {
              item.createdAt = Sequelize.literal('NOW()');
              item.updatedAt = Sequelize.literal('NOW()');
              return item;
          });
          return queryInterface.bulkInsert('Categories', data, {});
      },

      down: (queryInterface, Sequelize) => {
          return queryInterface.bulkDelete('Categories', null, {});

      }
  };