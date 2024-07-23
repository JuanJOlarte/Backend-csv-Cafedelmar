const Shopping = require('./../models/Shopping')

const createShopping = async (req, res) =>{

    const {name, products, total, table, state } = req.body;
    try {
        const shop = await Shopping.findOne({ name : name})
        if(shop) return res.status(400).json({
            ok:false,
            msg: `Your Shop is already exist`
        })
        const newShopping = new Shopping({
            name: name,
            products: products,
            total: total,
            table: table,
            state: state,
        })
        
        await newShopping.save()
        res.status(201).json({
            ok: true,
            msg: `Your Shopping is created successfuly`
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg: `contact to developer internal error`
        })
        
    }
}

const getShoppById = async(req,res) => {
    const { id }= req.params
    try {
        const shop = await Shopping.findById(id)
        if(shop) return res.status(200).json({
            ok:true,
            shop: shop
        })
        return res.status(404).json({
            ok: false,
            msg: `Shop is not found!!`
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: `please contact to developer, internal error`
        })
        
    }
}



module.exports= {
    createShopping,
    getShoppById
}