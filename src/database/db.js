// importar a dependencia do sqlite
const sqlite3 = require("sqlite3").verbose()

// iniciar o objeto de operação no bd
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto para operações
db.serialize(()=>{
//     // criar tabelas
//         db.run(`
//             CREATE TABLE IF NOT EXISTS places (
//                 id INTEGER PRIMARY KEY AUTOINCREMENT,
//                 image TEXT,
//                 name TEXT,
//                 address TEXT,
//                 address2 TEXT,
//                 state TEXT,
//                 city TEXT,
//                 item TEXT
//             );
//         `)
//     // inserir dados
//         const query = `
//             INSERT INTO places (
//                 image,
//                 name,
//                 address,
//                 address2,
//                 state,
//                 city,
//                 item
//             ) VALUES (?,?,?,?,?,?,?);
//         `
//         const values = [
//             "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//             "Papersider",
//             "Guilherme Gemballa, Jardim América", 
//             "N 260",
//             "Santa Catarina",
//             "Rio do Sul",
//             "Resíduos Eletrônicos, Lâmpadas"
//         ]
        
//         function afterInsertData(err){
//             if(err){
//                 return console.log(err)
//             }
//             console.log("Cadastrado com sucesso")
//             console.log(this)
//         }

//         db.run(query, values, afterInsertData)

    // consultar dados
        // db.all(`SELECT address2 FROM places`, function(err, rows){
        //     if(err){
        //         return console.log(err)
        //     }
        //     console.log("Aqui estão seus registros")
        //     console.log(rows)
        // })


    // deletar dados
        // db.run(`DELETE FROM places WHERE id = ?`, [2], function(err){
        //     if(err){
        //         return console.log(err)
        //     }
        //     console.log("Registro deletado com sucesso")
        // })
})