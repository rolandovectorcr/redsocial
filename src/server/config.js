module.exports = app => {
    //settings
    app.set('port', process.env.port || 3001);

    return app;
}