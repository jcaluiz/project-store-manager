const salesService = require('../services/sales.service');

const insertSales = async (req, res) => {
  const sale = req.body;
  const result = await salesService.insertSales(sale);

  if (result.status !== 201) return res.status(result.status).json({ message: result.message });
  if (!result.type) {
    return res.status(201).json(result.insert);
  }
};

const findAllSales = async (_req, res) => {
  const { type, message } = await salesService.findAllSales();
  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

const findSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findSalesById(id);
  console.log(type);
  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

module.exports = {
  insertSales,
  findAllSales,
  findSalesById,
};