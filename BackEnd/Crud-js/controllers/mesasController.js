import Mesa from "../models/Mesas.js";

const crearMesa=async(req, res)=>{
    try {
        const mesa=new Mesa(req.body)
        const mesaAlmacenada= await mesa.save()
        res.json(mesaAlmacenada)
        
    } catch (error) {
        console.log(error)
    }
}

const obtenerMesas=async(req, res)=>{
    const mesas= await Mesa.find()
    res.json({mesas})

}

const obtenerMesa=async(req, res)=>{
    const mesa= await Mesa.findById(req.params.id)
    res.json(mesa)
}

const editarMesa=async(req, res)=>{
    const mesaActualizada= await Mesa.findByIdAndUpdate(req.params.id, req.body,{
        new:true
    })

    res.json(mesaActualizada)
}

const eliminarMesa=async(req, res)=>{
    const mesaEliminada= await Mesa.findByIdAndDelete(req.params.id)
    res.json({msg:"Mesa eliminada"})

}

export {crearMesa, obtenerMesa, obtenerMesas, editarMesa, eliminarMesa}