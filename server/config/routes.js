var auth = require('./auth'),
    users = require('../controllers/users'),
    items = require('../controllers/items'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function(app) {
  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  app.get('/api/items', items.getItems);
    app.get('/api/items/:id', items.getItemById);
  
  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0], {
      title: 'ejs'
    });
  });

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout();
    res.end();
  });

  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('*', function(req, res) {
    res.render('../index', {
      title: 'ejs',
      bootstrappedUser: req.user
    });
  });
}