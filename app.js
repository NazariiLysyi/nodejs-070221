const express = require("express"); //nie korzystam już z http!!

// Podpięcie css
const path = require('path')


const port = process.env.PORT || 4000;
const app = express();

app.set("view engine", "hbs");


app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/js', express.static(path.join(__dirname, "./js")));
//gdy uzytkownik wchodzi na stronę główną

const fromAnotherFile = require("./functions")
app.get('/', function (req, res) {
res.render('index', {
pageTitle: "Lekcja01",
subTitle: fromAnotherFile.someTitle
})
})

app.get('/', function (req, res) {
    res.send("about");
})

app.listen(port, (err) => {
    if (err) {return console.log ("błąd", err)}
    console.log(`serwer działa na porcie ${port}`)
})
