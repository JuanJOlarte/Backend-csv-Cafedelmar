const Event = require ('./..//models/Event')

const createEvent = async(req, res) =>{
    const { name, img, description, value } = req.body

    try {
        const event = await Event.findOne({name:name})
        if(event) return res.status(400).json({
            ok:false,
            msg: `${name} Event is already exist in database `
        })
        const dbEvent = new Event({
            name:name,
            img:img,
            description:description,
            value:value
        })
        await dbEvent.save()
        return res.status(201).json({
            ok: true,
            msg: `${name} Event created succesfuly `
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:true,
            msg: `contact to developer, internal error`
        })
    }
}



module.exports = {
    createEvent
}