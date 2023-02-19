const fetch = require('node-fetch');

let countriesController = {
    list: async (req, res) => {

        let countries = await fetch('https://restcountries.com/v3.1/all').then(response => response.json());
        let provinces = await fetch('https://apis.datos.gob.ar/georef/api/provincias').then(response => response.json());
        
        return res.render('countries',{countries, provinces: provinces.provincias});
    }
}

module.exports = countriesController;