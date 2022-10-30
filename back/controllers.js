const sc = require('windows-service-controller');
const { CronJob } = require("cron");
const util = require('util');
var exec = util.promisify(require("child_process").exec);
const iniciar = async (service) => {
    try {
        console.log('iniciar', service)
        const { stdout, stderr } = await exec(`net start ${service}`);
        // let child = require('child_process').exec(`net start ${service}`, function (error, stdout, stderr) {
        //     if (error !== null) {
        //         console.log('exec error: ' + error);

        //     }

        // });
    } catch (err) {
        throw new Error(err.message);
    }

}
const stop = async (service) => {
    try {
        console.log('stop')
        const { stdout, stderr } = await exec(`net stop ${service}`);
        // let child = require('child_process').exec(`net stop ${service}`, function (error, stdout, stderr) {
        //     if (error !== null) {
        //         console.log('exec error: ' + error);


        //     }

        // });
    } catch (err) {
        throw new Error(err.message);
    }

}
const reiniciar = async (service) => {
    try {
        await stop(service);
        await iniciar(service);

    } catch (err) {
        throw new Error(err.message);
    }


}
const verStatus = async (service) => {
    try {
        var status = ""
        const { stdout, stderr } = await exec(`wmic service where 'name like "${service}"' get state`);
        // console.log(stdout[12],stdout[13],stdout[14],stdout[15],stdout[16],stdout[17],stdout[18]);
        var string = stdout.substring(12, 19);
        //console.log('teste',string);
        if (string == "Running") {
            status = 'Disponivel'
        } else {
            status = 'Parado'
        }
        return status

    } catch (err) {
      throw new Error(err.message);
    }

}
const services = () => {
    const svcs = ['.licenseVirtual', '.TOTVS-DbAccess7890', '.TOTVS-Appserver12-Master1200', 'AnyDesk']
    return svcs
}
const atualizaStatus = async (service) => {
    var status = ''
    const job = new CronJob("* * * * *", async () => {// 05 00 00 * * 1-7
         //console.log('CRON')
        status = await verStatus(service)

    });
    job.start();
    return status;
};

module.exports = {
    iniciar, stop, verStatus, reiniciar, services, atualizaStatus,
}
