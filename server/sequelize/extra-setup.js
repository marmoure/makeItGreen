function applyExtraSetup(sequelize) {
	const { tree, clipping , watering , pic, task , user, donation} = sequelize.models;
	console.log("============================")
	console.log(sequelize.models)
	console.log("============================")
	tree.hasMany(clipping);
	clipping.belongsTo(tree);
	
    tree.hasMany(watering);
	watering.belongsTo(tree);

    tree.hasMany(pic);
	pic.belongsTo(tree);

    tree.hasMany(task);
	task.belongsTo(tree);

    user.hasMany(donation);
    donation.belongsTo(user);
}

module.exports =  { applyExtraSetup } ;