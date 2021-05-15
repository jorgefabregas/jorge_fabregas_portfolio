const express = require("express");
const exphbs  = require('express-handlebars');
const path = require('path');

const app = express();
app.use(express.static('public'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
})); 
app.set('view engine', 'handlebars');

//Routes
app.get("/",(req,res)=>{

    res.render("index",{
        tittle: "Home Page"
    });
});

app.get("/about",(req,res)=>{

    res.render("about",{
        tittle: "About Me"
    });
});

app.get("/resume",(req,res)=>{

    res.render("resume",{
        tittle: "Resume"
    });
});

app.get("/design",(req,res)=>{

    res.render("design",{
        tittle: "Graphic Design"
    });
});

app.get("/web",(req,res)=>{

    res.render("web",{
        tittle: "Web Design"
    });
});

app.get("/motion",(req,res)=>{

    res.render("motion",{
        tittle: "Motion Graphic"
    });
});

app.get("/contact",(req,res)=>{

    res.render("contact",{
        tittle: "Contact Me"
    });
});

app.get("/advertising",(req,res)=>{

    res.render("advertising",{
        tittle: "Contact Me"
    });
});

app.get("/labels",(req,res)=>{

    res.render("labels",{
        tittle: "Contact Me"
    });
});

app.get("/packaging",(req,res)=>{

    res.render("packaging",{
        tittle: "Contact Me"
    });
});



//sets up server
app.set ('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
    console.log('Web sever is up and running', app.get('port'));
});