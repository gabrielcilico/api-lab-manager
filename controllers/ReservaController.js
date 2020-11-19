const Pessoa = require('../models/Pessoa')
const Laboratorio = require('../models/Laboratorio')
const Reserva = require('../models/Reserva')

class ReservaController {
    
    async create(req,res) {
        let {id_pessoa, id_laboratorio, data, hora} = req.body
        
        if (!id_pessoa) {
            res.status = 400
            res.json({ err: "Pessoa não informada" })
            return
        }

        if (!id_laboratorio) {
            res.status = 400
            res.json({ err: "Laboratório não informado" })
            return
        }

        if (!data) {
            res.status = 400
            res.json({ err: "Data não informada" })
            return
        }

        if (!hora) {
            res.status = 400
            res.json({ err: "Hora não informada" })
            return
        }

        // let pessoa = await Pessoa.getById(id_pessoa)
        
        let laboratorio = await Laboratorio.getById(id_laboratorio).forEach(r => {
            r.dias_possiveis = r.dias_possiveis.split(',')
            r.horas_possiveis = r.horas_possiveis.split(',') 
        })[0]
        if (!laboratorio) {
            res.status = 400
            res.json({ err: "Laboratório informado não existe" })
            return
        }

        let diaDaSemana = 0;
        if (isNaN(data)) {
            let tmp = data.split('/');
            let date = new Date(tmp[0], tmp[1], tmp[2]);
            diaDaSemana = date.getDay()
        } else {
            diaDaSemana = data
        }

        if(!laboratorio.dias_possiveis.contains(diaDaSemana)) {
            res.status = 400
            res.json({ err: "Laboratório não permite reservas para essa data" })
            return
        }

        if (!laboratorio.horas_possiveis.contains(hora)) {
            res.status = 400
            res.json({ err: "Laboratório não permite reservas para esse horário" })
            return
        }

        let reservas = await Reserva.getByDataHora(data,hora)
        if (reservas.length > 0) {
            res.status = 400
            res.json({ err: "Laboratório já está reservado nesta data e hora" })
            return
        }

        await Reserva.create({id_pessoa, id_laboratorio, data, hora})
        res.sendStatus(200)
    }
}

module.exports = new ReservaController()