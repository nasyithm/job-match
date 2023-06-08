const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

const pelamar = require("./router/pelamar")
app.use("/loker/pelamar", pelamar)

const loker = require("./router/loker")
app.use("/loker/loker", loker)

const petugas =require("./router/petugas")
app.use("/loker/petugas", petugas)

const regional = require("./router/regional")
app.use("/loker/regional", regional)

const pendaftaran = require("./router/pendaftaran")
app.use("/loker/pendaftaran", pendaftaran)

app.listen(8000, () => {
    console.log("Server run on port 8000")
})