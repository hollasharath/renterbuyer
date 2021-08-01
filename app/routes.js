module.exports = function (app) {
	require('./controllers/usercontroller')(app);
	app.get('*', function (req, res) {
		res.sendfile('./public/index.html'); 
	});
}