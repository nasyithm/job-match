const express = require("express")
const app = express()
const loker = require("../models/index").loker
const auth = require("../auth")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", auth, async (req, res) => {
  loker.findAll({
    include: ["regional"]
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
    id_loker: req.params.id
  }
  loker.findOne({
    include: ["regional"],
    where: param })
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
  loker.findAll({
    include: ["regional"],
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
    nama: req.body.nama_industri,
    alamat: req.body.alamat,
    id_regional: req.body.id_regional,
    img: req.file.fileName,
    pendidikan_terakhir: req.body.pen_min,
    bidang: req.body.bidang,
    gaji: req.body.gaji,
    deskripsi: req.body.deskripsi
  }
  loker.create(data)
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
    id_loker: req.body.id_loker
  }
  let data = {
    nama: req.body.nama_industri,
    alamat: req.body.alamat,
    id_regional: req.body.id_regional,
    img: req.file.fileName,
    pendidikan_terakhir: req.body.pen_min,
    bidang: req.body.bidang,
    gaji: req.body.gaji,
    deskripsi: req.body.deskripsi
  }
  loker.update(data, { where: param })
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
    id_loker: req.params.id
  }
  loker.destroy({ where: param })
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