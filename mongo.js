const mongoose = require('mongoose')

const dbOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}

module.exports = async () => {
	await mongoose.connect('mongodb+srv://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASS + '@cluster0.u1nan.mongodb.net/lodeko?retryWrites=true&w=majority', dbOptions)
	return mongoose
}