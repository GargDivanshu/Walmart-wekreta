import Enterprise from './../../Enterprise';
import Vendor from '../../../models/Vendor';
import connectDb from './../../../middleware/mongoose';

const handler = async (req, res) => {
    if (req.method === "POST") {
      for (let i = 0; i < req.body.length; i++) {
        const vendorPhone = req.body[i].phone;
  
        // Check if a vendor with the given phone number exists in the database
        const vendor = await Vendor.findOne({ phone: vendorPhone });
  
        if (vendor) {
            const enterprise = await Enterprise.findOne(); // Retrieve the existing Enterprise document
            enterprise.employee.push(vendor); // Add the new vendor to the employee array
          
            await enterprise.save(); // Save the updated document
          } else {
            res.status(400).json({ err: "Vendor does not exist" });
        }
      }
  
      res.status(200).json({ success: "success" });
    } else {
      res.status(400).json({ err: "This method is not allowed" });
    }
  };
  

export default connectDb(handler);