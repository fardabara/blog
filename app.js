let lib = require('./helpers/lib');



/*** Request Body Config ****/
lib.app.set('port', lib.port);
lib.app.use(lib.bodyParser.json());
lib.app.use(lib.bodyParser.urlencoded({extended: false}));

/***** Config Routes *****/
let routes = lib.fs.readdirSync('./routes');
routes.forEach((route) => {
	require('./routes/' + route)(lib.app);
});


/***** App Serve ******/
lib.app.listen(lib.port, (err) => {
	if (err) {
		throw  err;
	}
	console.log(`listen to port ${lib.port}`);
});