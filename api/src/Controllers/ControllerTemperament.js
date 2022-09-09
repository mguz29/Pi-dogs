const{API_KEY} = process.env
const { Temperamento} = require('../db')
const axios = require('axios')


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getTemperamentos = async (req, res, next) => {
    const response = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
       let temperamentos = response.data.map((el) => el.temperament).join(",").split(",")
       temperamentos.forEach(e => {
         if (e) {
             Temperamento.findOrCreate({
               where:{nombre:e}
           })
         }
       });
       
//      const temperamento = response.data.map(e=> e.temperament)
//     let nuevostemperamentos = temperamentos.map((el) => el && el.split(",")).flat()
     
//     // ;
      const allTemperamentos = await Temperamento.findAll({order:[['nombre','ASC']]})
      res.send(allTemperamentos)
    
         
            
// //             // nuevostemperamentos.forEach((el) => {
// //             //     if(temperamentosfinal.indexOf(el) < 0) temperamentosfinal.push(el)
// //             // })
// //             // for (let i = 0; i < 100; i++) {
// //             //     await Temperamento.create({
// //             //         nombre: temperamentosfinal[i]
// //             //     }) 
// //             // }
// //         //    // res.send(temperamentosfinal.slice(0, 19))
// //         //    res.send(temperamentos)

  }

  module.exports = {
    getTemperamentos
}