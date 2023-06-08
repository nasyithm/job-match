const express = require("express")
const app = express()
const pelamar = require("../models/index").pelamar
const pendaftaran = require("../models/index").pendaftaran
const md5 = require("md5")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "LOWONGANKERJANIH"
const auth = require("../auth")

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", auth, async (req, res) => {
  pelamar.findAll()
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

app.get("/:id", auth, async(req,res) => {
    let param = {
        nik : req.params.id
    }
    pelamar.findOne({where:param})
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
    nama_pelamar: req.body.nama_pelamar,
    username_pelamar: req.body.username_pelamar,
    password_pelamar: md5(req.body.password_pelamar),
    no_telpon: req.body.no_telp,
    alamat: req.body.alamat,
    img: req.file.fileName
  }
  pelamar.create(data)
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
    nik: req.body.nik
  }
  let data = {
    nama_pelamar: req.body.nama_pelamar,
    username_pelamar: req.body.username_pelamar,
    password_pelamar: md5(req.body.password_pelamar),
    no_telpon: req.body.no_telp,
    alamat: req.body.alamat,
    img: req.file.fileName
  }
  pelamar.update(data, { where: param })
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
    nik: req.params.id
  }
  pelamar.destroy({ where: param })
    .then(result => {
      pendaftaran.destroy({where: param})
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

// login pelamar
app.post("/auth", async(req, res) => {
  let param = {
    username_pelamar: req.body.username_pelamar,
    password_pelamar: md5(req.body.password_pelamar)
  }
  let result = await pelamar.findOne({where: param})
  if(result) {
    let payload = JSON.stringify(result)
    let token = jwt.sign(payload, SECRET_KEY)
    res.json({
      logged: true,
      data: result,
      token: token
    })
  } else {
    res.json({
      logged: false,
      message: "Invalid NIK or Password"
    })
  }
})
module.exports = app