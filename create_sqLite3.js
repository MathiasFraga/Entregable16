const { sqLite3 } = require("./database/sqlite3")
const knex = require("knex")(sqLite3)

knex.schema.createTable("mensajes", table => {
    table.increments("id")
    table.string("author")
    table.string("text")
    table.string("date")
})
    .then(() => console.log("Tabla creada"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    })

