module.exports = {
    index:function(req, res, next) {
        res.render('index', {
             title: "Pimienta & sal 'Comision 19/Grupo 3/ Cuidate' "
        });
      },
    detalle: function (req, res) {
        if (Number(req.params.id) == 1) {
              res.render("detalleMenu", { title: `Detalle ${req.params.id}` });
        } else {
              res.send("Plato Tipico");
        }
  },


}