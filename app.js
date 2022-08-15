var express = require('express');
var app = express();
const lngs=[
    {id:1,nm:'HTML&CSS',img:'/pics/html.jpg',info:"HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices. Along with graphics and scripting, HTML and CSS are the basis of building Web pages and Web Applications.HTML is the language for describing the structure of Web pages.CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts."},
    {id:2,nm:'JavaScript',img:'/pics/js.png',info:"JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behavior."},
    {id:3,nm:'Node js',img:'/pics/nodejs.png',info:"Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications. Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent."},
    {id:4,nm:'PHP',img:'/pics/php.png',info:"PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites. It is integrated with a number of popular databases, including MySQL, PostgreSQL, Oracle, Sybase, Informix, and Microsoft SQL Server.It was among the first server-side languages that could be embedded into HTML, making it easier to add functionality to web pages without needing to call external files for data."},
    {id:5,nm:'Python',img:'/pics/pyt.jpg',info:"Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. It is often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems."},
    {id:6,nm:'React js',img:'/pics/reactjs.jpg',info:"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality."}
];

var msgcnt=0;

var msgs=[{id:1,usrnm:'',eml:'',msgg:'--NIL--'}];

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");

app.listen(3000);

app.get('/', (req, res)=>{  
    res.send("<h1><a href='/index'>BEgiNnINg</a></h1>");
});

app.get('/index',(req,res)=>{
    res.render('index',{lngs:lngs});
});

app.get('/prog',(req,res)=>{
    res.render('prg',{lngs:lngs});
});

app.get('/lang/:id',(req,res)=>{
    res.render('lang',{lng:lngs[(req.params.id)-1]});
});

app.get('/cnct',(req,res)=>{
    res.render('cnct',{msgs:msgs});
});

app.post('/cnct',(req,res)=>{
    if(msgcnt===0){
        msgs[msgcnt].usrnm=req.body.usrnm;
        msgs[msgcnt].eml=req.body.eml;
        msgs[msgcnt].msgg=req.body.msg;
    }else{
        const msg={id:(msgcnt+1),usrnm:(req.body.usrnm),eml:(req.body.eml),msgg:(req.body.msg)};
        msgs.push(msg);
    }
    msgcnt++;
    res.redirect('/cnct');
});