import Enterprise from '../../../models/Enterprise.js';
import Vendor from '../../../models/Vendor';
import connectDb from './../../../middleware/mongoose';

const handler = async (req, res) => {
    if (req.method === "POST") {
     
        const vendorPhone = req.body.phone;
        const enterprisePhone = req.body.enterprise_phone;
  
        // Check if a vendor with the given phone number exists in the database
        var vendor = await Vendor.findOne({ phone: vendorPhone });
  
        if (!vendor) {
          res.status(400).json({ err: "Vendor does not exist" });
            
          } else {
           

            const enterprise = await Enterprise.findOne({ phone: enterprisePhone }); // Retrieve the existing Enterprise document
            
            // Check if the vendor is already present in the employee array
            const isVendorAlreadyAdded = enterprise.employee.includes(vendor);
            
            if (isVendorAlreadyAdded) {
              res.status(400).json({ err: "Vendor already added" }); // Return an error response
            } else {
              enterprise.employee.push(vendor); // Add the new vendor to the employee array
              await enterprise.save(); // Save the updated document
              res.status(200).json({ success: "Vendor added successfully" }); // Return a success response
            }
            
        }

  
      res.status(200).json({ success: "success" });
      return enterprise;
    } else {
      res.status(400).json({ err: "This method is not allowed" });
    }
  };
  

export default connectDb(handler);