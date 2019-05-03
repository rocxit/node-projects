const vehicalModel = require('../../models/vehicalModel');
const queries = require('../../config/mongoQuery/queries')

const addVehical =(req, resp) => {
    const userId = req.payload.id;
    console.log(userId)
    const vehical = new vehicalModel(req.payload.model, req.payload.number, req.payload.brand);
    console.log(vehical)
    queries.findById('users', userId).then((result) => {
        console.log(result);
        const veh = result.vehical
        // if(veh.filter(res => res.vNumber === req.payload.number)){
        //     return console.log("bada yesssssssssssssssss")
        // }
        veh.push(vehical)
        console.log(veh)
        queries.addVehical('users', userId, veh).then((result) => {
            resp(result)
        })
    }).catch((err) => {
        console.log(err)
    });
}

vehicalRouter = [{
        method: 'POST',
        path: '/addVehical',
        handler: addVehical
    }
]

module.exports = vehicalRouter