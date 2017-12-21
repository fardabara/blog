let lib = require('./helpers/lib');


/*** Request Body Config ****/
// lib.app.use(lib.morgan(':method :url :status :res[content-length] - :response-time ms'));
let accessLogStream = lib.fs.createWriteStream(lib.path.join(__dirname, 'access.log'), {flags: 'a'});
lib.app.use(lib.morgan('combined', {stream: accessLogStream}));
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
	console.log(`listen to port ${lib.port}`);
});