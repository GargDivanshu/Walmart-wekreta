import Reviews from "../../models/Reviews";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body)
    try {
      const review = new Reviews({
        name : req.body.name,
        vendornumber: req.body.vendornumber,
        email: req.body.email,
        msg: req.body.msg,
      });

      await review.save();

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify([
        {
          number: req.body.vendornumber,
        },
      ]);
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      // const response = await fetch("http://localhost:8100/by", requestOptions);
      // const result = await response.text();
      // console.log(result);

      res.status(200).json({ success: "success" });
    } catch (error) {
      console.error("An error occurred:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  } else {
    res.status(400).json({ err: "This method is not allowed" });
  }
};

export default connectDb(handler);
