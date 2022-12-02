const express = require("express");
const app = express()

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/:nome/:lang", (req, res) => {
    res.render("index");
});

app.listen(3000, () => {
    console.log("App rodando!")
});