const router = require('express').Router();
const { application } = require('express');
const multer = require('multer');
const upload = multer({ dest: 'upload' });
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  const { page, total } = req.query;
  res.send({
    status: 'Succesfully',
    message: 'welcom to express JS belajar',
    page,
    total,
  });
});

router.get('/product/:id', (req, res) => {
  res.json({
    id: req.params.id,
  });
});

router.post('/product/', upload.single('image'), (req, res) => {
  const { name, price, stock, status } = req.body;
  const { image } = req.file;
  if (image) {
    const target = path.join(__dirname, 'uploads', image.originalname);
    fs.renameSync(image.path, target);
    // res.json({
    //   name,
    //   price,
    //   stock,
    //   status,
    //   image,
    // });

    res.sendFile(target);
  }
});

// router.get('/:category/:tag', (req, res) => {
//   const { category, tag } = req.params;
//   res.json({ category, tag });
// });

// app.post('/cover', upload.single('image'), function (req, res, next) {
//   //req.file is the 'avatar' file
//   //req.body will hold the next fields, if there were any
// });

module.exports = router;
