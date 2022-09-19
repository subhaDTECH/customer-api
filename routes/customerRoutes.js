const  express= require("express");
const { route } = require("../app");
const router=express.Router();
const {CreateCustomer,getCustomerByMobile,getAllCustomers,
    getCustomerByCompanies,updateCustomer} =require("../controllers/customerControllers")



//route
router.route('/customer/new').post(CreateCustomer);
router.route('/customer').get(getCustomerByMobile);
router.route('/customers').get(getAllCustomers);
router.route('/customer/comp').get(getCustomerByCompanies);
router.route('/customer/:id').put(updateCustomer);


module.exports=router;