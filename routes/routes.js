console.log(1)
app.get('/home', homePage)
app.get('/', function(req, res){
	res.redirect('http://localhost:3000/home')
})
app.get('/inspectorPage', function(req, res){
    res.render('test.ejs')
})

app.get('/vistoriasRealizadas', function(req,res){
	var data = [
    { data: 1, id: "bob", linha:"R12T", placa:"ËRY-1123", itensReprovados:"freio", tipoDeVistoria:"Fiscalização", status:"Lacrado", ficha:"" },
    { data: 1, id: "bob", linha:"R12T", placa:"ËRY-1123", itensReprovados:"freio", tipoDeVistoria:"Fiscalização", status:"Lacrado", ficha:"" },
    { data: 1, id: "bob", linha:"R12T", placa:"ËRY-1123", itensReprovados:"freio", tipoDeVistoria:"Fiscalização", status:"Lacrado", ficha:"" },
];
	var json = {
		data: data
	}
	res.render('vistoriasRealizadas', json)
})
app.get('/veiculosLacrados', function(req,res){
	var lacre = [
    { data: 1, id: "bob", status:"Lacrado", motivo: "Freios", ficha:"" },
    { data: 1, id: "bob", status:"Lacrado", motivo: "Freios", ficha:"" },
    { data: 1, id: "bob", status:"Lacrado", motivo: "Freios", ficha:"" },
];
	var json = {
		lacre: lacre
	}
	res.render('veiculosLacrados', json)
})
app.get('/veiculosConvocados', function(req,res){
	res.render('veiculosConvocados')
})

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
})

app.get('/ficha', function(req,res){
	res.render('ficha')
})


app.get('/fetch', function(req, res){
	var fetch = require('node-fetch')

	fetch('http://18404842.ngrok.com/edital/prefeitura/api/getVistorias/userTest')
	.then(function(res){
		return res.json()
	}).then(function(json){console.log(json)})

})


