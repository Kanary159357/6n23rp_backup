const {
	initializeApp,

	backups,
} = require('firestore-export-import');

const fs = require('fs');

require('dotenv').config();

initializeApp({
	type: process.env.TYPE,
	project_id: process.env.PROJECT_ID,
	private_key_id: process.env.PRIVATE_KEY_ID,
	private_key: process.env.PRIVATE_KEY,
	client_email: process.env.CLIENT_EMAIL,
	client_id: process.env.CLIENT_ID,
	auth_uri: process.env.CLIENT_ID,
	token_uri: process.env.CLIENT_ID,
	auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
	client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
});

const date = new Date();
const cur =
	date.getFullYear().toString() +
	(date.getMonth() + 1).toString() +
	date.getDate().toString();
backups() // Array of collection's name is OPTIONAL
	.then((collections) => {
		// You can do whatever you want with collections
		const sentence = JSON.stringify(collections);
		fs.writeFile(__dirname + `/json/${cur}.json`, sentence, (err) => {
			if (err) console.log(err);
		});
	});
