import Pekerja from "../models/PekerjaModel.js";
import path from "path";
import fs from "fs";

export const getPekerja = async (req, res) => {
  try {
    const response = await Pekerja.findAll();
    res.json({ pekerja: response });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPekerjaById = async (req, res) => {
  try {
    const response = await Pekerja.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json({ pekerja: response });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPekerjaByUuid = async (req, res) => {
  try {
    const response = await Pekerja.findOne({
      where: {
        uuid: req.params.uuid,
      },
    });
    res.json({ pekerja: response });
  } catch (error) {
    console.log(error.message);
  }
};

export const savePekerja = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const uuid = req.body.uuid;
  const name = req.body.name;
  const email = req.body.email;
  const address = req.body.address;
  const placeDateBirth = req.body.placeDateBirth;
  const religion = req.body.religion;
  const gender = req.body.gender;
  const skill = req.body.skill;
  const education = req.body.education;
  const description = req.body.description;
  const phoneNumber = req.body.phoneNumber;

  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Pekerja.create({
        uuid: uuid,
        name: name,
        email: email,
        address: address,
        placeDateBirth: placeDateBirth,
        religion: religion,
        gender: gender,
        skill: skill,
        education: education,
        description: description,
        phoneNumber: phoneNumber,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Pekerja Created Successfully" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updatePekerja = async (req, res) => {
  const pekerja = await Pekerja.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!pekerja) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = pekerja.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];
    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    const filepath = `./public/images/${pekerja.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const uuid = req.body.uuid;
  const name = req.body.name;
  const email = req.body.email;
  const address = req.body.address;
  const placeDateBirth = req.body.placeDateBirth;
  const religion = req.body.religion;
  const gender = req.body.gender;
  const skill = req.body.skill;
  const education = req.body.education;
  const phoneNumber = req.body.phoneNumber;
  const description = req.body.description;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Pekerja.update(
      {
        uuid: uuid,
        name: name,
        email: email,
        address: address,
        placeDateBirth: placeDateBirth,
        religion: religion,
        gender: gender,
        skill: skill,
        education: education,
        description: description,
        phoneNumber: phoneNumber,
        image: fileName,
        url: url,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Pekerja Updated Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePekerja = async (req, res) => {
  const pekerja = await Pekerja.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!pekerja) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${pekerja.image}`;
    fs.unlinkSync(filepath);
    await Pekerja.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pekerja Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
