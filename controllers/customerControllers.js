const Customer = require("../models/customer");
exports.CreateCustomer = async (req, res) => {
  const { name, mobileNo, address, email, instagramID } = req.body;

  //chaeck if empty
  if (!name || !mobileNo || !address || !email || !instagramID) {
    return res.status(400).json({
      success: false,
      message: "Please fill all the fileds",
    });
  }

  try {
    //create data

    const newCustmerData = await Customer.create(req.body);
    return res.status(201).json({
      success: true,
      customer: newCustmerData,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

//get customer by mobile , email , intagramId

exports.getCustomerByMobile = async (req, res) => {
  try {
    if (req.query.email) {
      const data = await Customer.findOne({ email: req.query.email });

      //if data not found
      if (!data) {
        return res.status(400).json({
          success: false,
          message: "data not found ",
        });
      }

      //return data
      return res.status(200).json({
        success: true,
        customer: data,
      });
    } else if (req.query.mobileNo) {
      const data = await Customer.findOne({ mobileNo: req.query.mobileNo });

      //if not found
      if (!data) {
        return res.status(400).json({
          success: false,
          message: "data not found ",
        });
      }

      //return data
      return res.status(200).json({
        success: true,
        customer: data,
      });
    } else if (req.query.instagramID) {
      const data = await Customer.findOne({
        instagramID: req.query.instagramID,
      });

      //if not found
      if (!data) {
        return res.status(400).json({
          success: false,
          message: "data not found ",
        });
      }
      //return data
      return res.status(200).json({
        success: true,
        customer: data,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: " worng query data ",
      });
    }
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

//get all customer

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({});
    return res.status(200).json({
      success: true,
      customers: customers,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

//get all data by  companies

exports.getCustomerByCompanies = async (req, res) => {
  try {
    const allcompanies = req.query.companies.split(",");

    const rData = await Customer.find({ companies: { $in: allcompanies } });

    return res.status(200).json({
      message: "success",

      data: rData,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

//update customer

exports.updateCustomer = async (req, res) => {
  try {
    const updatedata = await Customer.findByIdAndUpdate(
      req.params.id,

      { $set: req.body },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Update data successfully!!",
      data: updatedata,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};
