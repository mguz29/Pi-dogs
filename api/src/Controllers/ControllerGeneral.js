const{API_KEY} = process.env

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios')
const {Dog, Temperamento} = require('../db')



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => { 
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const apiInfo  = await response.data.map(d=>{
        return {
            id:d.id,
            nombre:d.name,
            altura_min: d.height.metric.split(" - ")[0] && d.height.metric.split(" - ")[0],
            altura_max:d.height.metric.split(" - ")[1] && d.height.metric.split(" - ")[1],
            peso_max: d.weight.metric.split(" - ")[1] && d.weight.metric.split(" - ")[1],
            peso_min: d.weight.metric.split(" - ")[0] && d.weight.metric.split(" - ")[0],
            añosDeVida: d.life_span,
            Temperamento:d.temperament? d.temperament.split(', ') :["Temperamento no encontrado"],
            imagen:d.image.url,
            criado_para:d.bred_for
        }
    })
    return apiInfo


}


const getDbInfo = async () => {
  return await Dog.findAll({
      includes:{
          model:Temperamento,
          attributes:['name'],
          through:{attributes: [],}
      }
  })
}


const getAllDogs = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal
}


module.exports = {
    getAllDogs
}