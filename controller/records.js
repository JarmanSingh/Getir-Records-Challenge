const mongoose = require('mongoose');

module.exports = {
  getRecords: async (req, res) => {
    try {
      // Extract parameters from request body
      let { startDate, endDate, minCount, maxCount } = req.body;
      minCount = parseInt(minCount);
      maxCount = parseInt(maxCount);
      const data = await mongoose.model("Record").aggregate([
        { $match: { createdAt: { "$gte": new Date(startDate), "$lte": new Date(endDate) } } },
        { $project: { key: 1, createdAt: { "$dateToString": { "date": "$createdAt" } }, _id: 0, totalCount: { "$sum": "$counts" } } },
        { $match: { totalCount: { "$gte": minCount, "$lte": maxCount } } }
      ]).exec();
      res.send({
        code: 0,
        message: "Success",
        records: data,
      });
    } catch (err) {
      res.send({
        code: 500,
        message: "Internal server error",
        records: [],
      });
    }
  },
};
