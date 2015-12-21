console.log(1)
app.get('/home', homePage)
app.get('/', function(req, res){
	res.redirect('http://localhost:3000/home')
})
app.get('/inspectorPage', function(req, res){
    res.render('inspectorPage.ejs')
})

app.get('/vistoriasRealizadas', function(req,res){
	console.log('bateu')
	res.render('vistoriasRealizadas')
})
app.get('/veiculosLacrados', function(req,res){
	res.render('veiculosLacrados')
})
app.get('/veiculosConvocados', function(req,res){
	res.render('veiculosConvocados')
})

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
})




