
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Demo1', ver: '1.0' });
};

exports.perfil = function(req, res){
  res.render('perfil', { title: 'Perfil1', ver: '1.0' });
};

exports.search = function(req, res){
  res.render('search', { title: 'Busqueda1', ver: '1.0', palabra: req.body.palabra });
};