const express = require("express")
const app = express()
const moment = require("moment")
const pendaftaran = require("../models/index").pendaftaran
const auth = require("../auth")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", auth, async (req, res) => {
  pendaftaran.findAll({
    include: ["loker", "pelamar"]
  })
    .then(result => {
      res.json({
        data: result
      })
    })
    .catch(error => {
      res.json({
        message: error.message
      })
    })
})

app.get("/:id", auth, async (req, res) => {
  let param = {
    id_pendaftaran: req.params.id
  }
  pendaftaran.findOne({
    include: ["loker", "pelamar"],
    where: param
  })
    .then(result => {
      res.json({
        data: result
      })
    })
    .catch(error => {
      res.json({
        message: error.message
      })
    })
})

app.get("/loker/:id", auth, async (req, res) => {
  let param = {
    id_loker: req.params.id
  }
  pendaftaran.findAll({
    include: ["loker", "pelamar"],
    where: param
  })
    .then(result => {
      res.json({
        data: result
      })
    })
    .catch(error => {
      res.json({
        message: error.message
      })
    })
})

app.get("/pelamar/:id", auth, async (req, res) => {
  let param = {
    nik: req.params.id
  }
  pendaftaran.findAll({
    include: ["loker", "pelamar"],
    where: param
  })
    .then(result => {
      res.json({
        data: result
      })
    })
    .catch(error => {
      res.json({
        message: error.message
      })
    })
})

app.get("/regional/:id", auth, async (req, res) => {
  let param = {
    id_regional: req.params.id
  }
  pendaftaran.findAll({
    include: ["loker", "pelamar"],
    where: param
  })
    .then(result => {
      res.json({
        data: result
      })
    })
    .catch(error => {
      res.json({
        message: error.message
      })
    })
})

app.post("/", auth, async (req, res) => {
  let data = {
    nik: req.body.nik,
    id_loker: req.body.id_loker,
    id_regional: req.body.id_regional,
    tgl_daftar: moment().format("YYYY-MM-DD")
  }
  pendaftaran.create(data)
    .then(result => {
      res.json({
        message: "Data Berhasil Ditambahkan",
        data: result
      })
    })
    .catch(error => {
      res.json({
        message: error.message
      })
    })
})

app.put("/", auth, async (req, res) => {
  let param = {
    id_pendaftaran: req.body.id_pendaftaran
  }
  let data = {
    nik: req.body.nik,
    id_loker: req.body.id_loker,
    id_regional: req.body.id_regional,
    tgl_daftar: moment().format("YYYY-MM-DD")
  }
  pendaftaran.update(data, { where: param })
    .then(result => {
      res.json({
        message: "Data Berhasil Diupdate"
      })
    })
    .catch(error => {
      res.json({
        message: error.message
      })
    })
})

app.delete("/:id", auth, async (req, res) => {
  let param = {
    id_pendaftaran: req.params.id
  }
  pendaftaran.destroy({ where: param })
    .then(result => {
      res.json({
        message: "Data Berhasil Dihapus"
      })
    })
    .catch(error => {
      res.json({
        message: error.message
      })
    })
})
module.exports = app