module.exports = (sequelize, Sequelize) => {
	const thiscanbeanything = sequelize.define('transactions', {
	  symbol: {
		    type: Sequelize.STRING(6)
	  },
	  shares: {
		    type: Sequelize.INTEGER
	  },
	  price: {
		  type: Sequelize.DECIMAL(6,2)
      },
      buydate: {
          type: Sequelize.DATEONLY
      },
      transaction: {
          type: Sequelize.BOOLEAN
	  },
	  total: {
		type: Sequelize.DECIMAL(15,2)
	}
    });
	
	return thiscanbeanything;
}