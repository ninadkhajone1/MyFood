const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    await data.splice(0, 0, { Order_date: req.body.order_date });

    let eId = await Order.findOne({ 'email': req.body.email });
    if (eId === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            });
            res.json({ success: true });
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error: " + error.message);
        }
    } else {
        try {
            await Order.findOneAndUpdate(
                { email: req.body.email },
                { $push: { order_data: data } }
            );
            res.json({ success: true });
        } catch (error) {
            res.status(500).send("Server Error: " + error.message);
        }
    }
});


router.post('/myOrderData', async (req, res) => {
    try {
        console.log(req.body.email)
        let myData = await Order.findOne({ 'email': req.body.email })
        //console.log(eId)
        res.json({orderData:myData})
    } catch (error) {
        res.send("Error",error.message)
    }
    

});

module.exports = router;  // ✅ This must be here
