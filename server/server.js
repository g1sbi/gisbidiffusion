const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');

const app = express();

//URL
frontUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://diffusion.gisbi.duckdns.org';

var corsOptions = {
	origin: frontUrl,
	credentials: true
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
	cookieSession({
		name: 'gisbi-session',
		secret: 'COOKIE_SECRET',
		httpOnly: true
	})
);

//database
const db = require('./app/models')

db.mongoose
	.connect('mongodb://192.168.3.10:8000/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then( () => {
		console.log('MongoDB connected');
	})
	.catch( err => {
		console.error('Connection error', err);
		process.exit();
	});

//routes
require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)

//set port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log('Server is running on port', PORT);
});
