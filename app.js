let lib = require('./helpers/lib');


/*** Request Body Config ****/
lib.app.use(lib.morgan('combined', {
	skip: (req, res) => {
		return res.statusCode < 400;
	},
	stream: lib.fs.createWriteStream(lib.path.join(__dirname, 'access.log'), {flags: 'a'}),
}));
lib.app.set('port', lib.port);
lib.app.set('view engine', 'jade');
lib.app.use(lib.bodyParser.json());
lib.app.use(lib.bodyParser.urlencoded({extended: false}));
lib.app.use(lib.express.static(lib.path.join(__dirname, 'public')));


/***** Config Routes *****/
let routes = lib.fs.readdirSync('./routes');
routes.forEach((route) => {
	require('./routes/' + route)(lib.app);
});

/*** Middleware for Error Page****/
lib.app.use(function (req, res, next) {
	let error = new Error('Page Not Found');
	error.status = '404';
	res.status('404').render('error', {error});
	next(error);
});



/***** App Serve ******/
lib.app.listen(lib.port, () => {
	console.log(`listen to port ${lib.port}`);
});