const express = require("express")
const app = express()
const regional = require("../models/index").regional
const loker = require("../models/index").loker
const auth = require("../auth")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", auth, async (req, res) => {
  regional.findAll()
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
    id_regional: req.params.id
  }
  regional.findOne({ where: param })
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
    nama_kota: req.body.nama_kota,
    nama_provinsi: req.body.nama_provinsi
  }
  regional.create(data)
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
    id_regional: req.body.id_regional
  }
  let data = {
    nama_kota: req.body.nama_kota,
    nama_provinsi: req.body.nama_provinsi
  }
  regional.update(data, { where: param })
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
    id_regional: req.params.id
  }
  regional.destroy({ where: param })
    .then(result => {
      loker.destroy({where: param})
    })
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