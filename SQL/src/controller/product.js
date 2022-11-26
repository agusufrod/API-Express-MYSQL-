const model = require('../model/index');
const controller = {};
controller.listProduct = async function (req, res) {
  try {
    let product = await model.product.findAll();
    if (product.length > 0) {
      res.json({
        status: 200,
        message: 'Get List product',
        data: product,
      });
    } else {
      res.json({
        status: 200,
        message: 'Cannot Get List product',
        data: [],
      });
    }
  } catch (error) {
    res.json({
      status: 400,
      message: error.message,
    });
  }
};
controller.detailProduct = async function (req, res) {
  try {
    let product = await model.product.findAll({
      where: {
        id: req.params.id,
      },
    });
    if (product.length > 0) {
      res.json({
        status: 200,
        message: 'Get Detail Product',
        data: product,
      });
    } else {
      res.json({
        status: 200,
        message: 'Cannot Get Detail Product',
        data: [],
      });
    }
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};
controller.createProduct = async function (req, res) {
  try {
    const product = await model.product.create({
      id: req.body.id,
      name: req.body.name,
      stock: req.body.stock,
    });
    res.json({
      status: 201,
      message: 'Create Data Product Success !',
      data: product,
    });
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};
controller.updateProduct = async function (req, res) {
  try {
    let product = await model.product.update(
      {
        id: req.body.id,
        name: req.body.name,
        stock: req.body.stock,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json({
      status: 200,
      message: 'Update Data Product Success',
    });
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};
controller.deleteProduct = async function (req, res) {
  try {
    let product = await model.product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      status: 200,
      message: 'Success Delate Product',
      data: [],
    });
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};

module.exports = controller;
