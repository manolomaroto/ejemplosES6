// cuando una promesa entra en estado de error se invoca a su método catch, el equivalente a then
// la funcion ejecutora de una promise utiliza el segundo parámetro para pasar la promise a estado de error

var errored = new Promise(function(r,j){
    j(new Error('Some error hapened'));
});

errored.catch(function(err){
    console.log(err);
});