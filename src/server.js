const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db.js")

//configurar public
server.use(express.static("public"))

// habilitar o req.body
server.use(express.urlencoded({extended: true}))


//utilizar tamplete engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar rotas
    //pagina inicial
    // req: requisição
    // res: resposta
    server.get("/", (req,res)=>{
         return res.render("index.html", {title: "Um título"})
    })
    server.get("/create-point", (req,res)=>{
        return res.render("create-point.html")
    })
    server.post("/savepoint", (req, res)=>{
        // console.log(req.body)
        
        // inserir dados
        const query = `
            INSERT INTO places (
                image,
                name,
                address,
                address2,
                state,
                city,
                item
            ) VALUES (?,?,?,?,?,?,?);
        `
        const values = [
            req.body.image,
            req.body.name,
            req.body.address,
            req.body.address2,
            req.body.state,
            req.body.city,
            req.body.item,

        ]
        
        function afterInsertData(err){
            if(err){
                return console.log(err)
            }
            console.log("Cadastrado com sucesso")
            console.log(this)

            return res.render("create-point.html", {saved: true})
            
        }
        db.run(query, values, afterInsertData)

        

        

    })

    server.get("/search-results", (req,res)=>{
        const search = req.query.search
        if(search == ""){
            //pesquisa vazia
            return res.render("search-results.html", {total: 0})
        }
        // pegar os dados do banco
        db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
            if(err){
                return console.log(err)
            }
            const total = rows.length
            // mostrar a página html com os dados do banco
            return res.render("search-results.html", {places: rows, total: total})
        })
        
    })


//ligar o servidor
server.listen(3000)


