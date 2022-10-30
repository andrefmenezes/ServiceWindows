const { Router } = require('express');
const routes = Router();

const servico = require('./controllers')
routes.get('/start/:service', async (req, res) => {
    req.setTimeout(5000000);
    try {
        await servico.iniciar(req.params.service);
        // console.log("fim")
        return res.status(201).json({ msg: "sucesso" });
    } catch (e) {
        console.log("ERRO", e.message)
        res.status(400).json({ msg: e.message });
    }
});

routes.get('/stop/:service', async (req, res) => {
    req.setTimeout(5000000);
    try {
        await servico.stop(req.params.service);
        // console.log("fim")
        res.status(201).json({ msg: "sucesso" });
    } catch (e) {
        console.log("ERRO", e.message)
        res.status(400).json({ msg: e.message });
    }
});

routes.get('/restart/:service', async (req, res) => {
    req.setTimeout(5000000);
    try {
        await servico.reiniciar(req.params.service);
        // console.log("fim")
        return res.status(201).json({ msg: "sucesso" });
    } catch (e) {
        console.log("ERRO", e.message)
        res.status(400).json({ msg: e.message });
    }
});
routes.get('/status/:service', async (req, res) => {
    req.setTimeout(5000000);
    try {
        const status = await servico.verStatus(req.params.service);
        //console.log(status)
        return res.status(201).json({ status: status });
    } catch (e) {
        console.log("ERRO", e.message)
        res.status(400).json({ msg: e.message });
    }
});

routes.get('/services', async (req, res) => {
    req.setTimeout(5000000);
    try {
        const services = servico.services();
        var array = []
        for (let index = 0; index < services.length; index++) {
            var status = await servico.verStatus(services[index]);
            array.push({
                name: services[index],
                status: status == 'Disponivel' ? true : false
            })
        }

        // console.log("fim")
        return res.status(201).json(array);
    } catch (e) {
        console.log("ERRO", e.message)
        res.status(400).json({ msg: e.message });
    }
});
module.exports = routes;