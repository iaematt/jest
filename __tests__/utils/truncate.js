const { sequelize } = require('../../src/app/models');

module.exports = () => {
  return Promise.all(
    Object.keys(sequelize.models).map((key) => {
      return sequelize.models[key].destroy({ truncate: 1, force: 1 });
    })
  );
};
