const Laboratorio = require('../models/Laboratorio')
class HomeController {

    async index(req,res) {
        res.json({ api: "API LAB MANAGER" })
    }

    async criaLaboratorios(req,res) {
        for (let x = 100; (x-100) < 20; x++) {
            let obj = {
                nome: `Laboratório ${x}`,
                capacidade: (x-100)*3,
                descricao: "Bloco 777",
                foto: "https://cms.claretiano.edu.br/upload/claretianocms/33/pagina/192/foto/56.JPG",
                dias_possiveis: "1,2,3,4,5,6",
                horas_possiveis: "08:00,09:00,10:00,11:00,16:00,17:00,18:00,19:00,20:00,21:00,22:00"
            }
            await Laboratorio.create(obj)
            console.log(obj)
        }
    }
}

module.exports = new HomeController()