module.exports = (sequelize, Sequelize) => {
	const owners = sequelize.define('owners', {
	  owner: {
		    type: Sequelize.STRING(128)
	  },
	  deposits: {
		  type: Sequelize.DECIMAL(12,2)
      },
      withdrawls: {
        type: Sequelize.DECIMAL(12,2)
      }
    });
	
	return owners;
}