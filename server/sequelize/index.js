const Sequelize = require('sequelize');
const extraSetup = require('./extra-setup');

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'data/db.sqlite',
	logQueryParameters: true,
	benchmark: true,
	logging: console.log
});

const modelDefiners = [
	require('./models/user.model'),
	require('./models/tree.model'),
	require('./models/task.model'),
	require('./models/clipping.model'),
	require('./models/watering.model'),
	require('./models/pic.model'),
	require('./models/donation.model'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
extraSetup.applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports =  sequelize;
