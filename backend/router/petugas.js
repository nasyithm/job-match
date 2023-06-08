const express = require("express")
const app = express()
const petugas = require("../models/index").petugas
const md5 = require("md5")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "LOWONGANKERJANIH"
const auth = require("../auth")

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", auth, async(req, res) => {
    petugas.findAll({
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

app.get("/:id", auth, async(req,res) => {
    let param = {
        id_petugas : req.params.id
    }
    petugas.findOne({
        include: ["regional"],
        where:param
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
    petugas.findAll({
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

app.post("/", auth, async(req,res) => {
    let data = {
        username_petugas: req.body.username_petugas,
        password_petugas: md5(req.body.password_petugas),
        nama_petugas: req.body.nama_petugas,
        no_telp: req.body.no_telp,
        jabatan: req.body.jabatan,
        id_regional: req.body.id_regional
    }
    petugas.create(data)
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

app.put("/", auth, async(req,res) => {
    let param = {
        id_petugas : req.body.id_petugas
    }
    let data = {
        username_petugas: req.body.username_petugas,
        password_petugas: md5(req.body.password_petugas),
        nama_petugas: req.body.nama_petugas,
        no_telp: req.body.no_telp,
        jabatan: req.body.jabatan,
        id_regional: req.body.id_regional
    }
    petugas.update(data, {where: param})
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

app.delete("/:id", auth, async(req,res) => {
    let param = {
        id_petugas : req.params.id
    }
    petugas.destroy({where: param})
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

app.post("/admin_super", async(req,res) => {
    let param = {
        username_petugas: req.body.username_petugas,
        password_petugas: md5(req.body.password_petugas),
        jabatan: "admin super"
    }
    let result = await petugas.findOne({where: param})
    if (result) {
        let payload = JSON.stringify(result)
        let token = jwt.sign(payload, SECRET_KEY)
        res.json({
            logged: true,
            data: result,
            token: token
        })
    }else {
        res.json({
            logged: false,
            message: "Invalid Username or Password"
        })
    }
})

app.post("/admin", async(req,res) => {
    let param = {
        username_petugas: req.body.username_petugas,
        password_petugas: md5(req.body.password_petugas),
        jabatan: "admin"
    }
    let result = await petugas.findOne({where: param})
    if (result) {
        let payload = JSON.stringify(result)
        let token = jwt.sign(payload, SECRET_KEY)
        res.json({
            logged: true,
            data: result,
            token: token
        })
    }else {
        res.json({
            logged: false,
            message: "Invalid Username or Password"
        })
    }
})

module.exports = app