const express =require('express')
const path =require('path')
const hbs =require('hbs')
const port =8000

const app =express();         

const viewsPath =path.join(__dirname, '/templates/views')
const partialsPath =path.join(__dirname, '/templates/partials')
console.log(viewsPath)

app.set("view engine", 'hbs')
app.set("views", viewsPath);
hbs.registerPartials(partialsPath)
app.use(express.static('public'))


app.get('/' , (req, res)=>{
    res.render("homePage")
})

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`)
})