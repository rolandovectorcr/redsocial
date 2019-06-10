module.exports = app => {
    //settings
    app.set('port', process.env.port || 3002);

    return app;
}