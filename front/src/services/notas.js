import {api} from './config'

export default {
Status:()=>{
return api.get('/status');
},
Start :(service) =>{
    return  api.get(`/start/${service}`);

},
Stop :(service) =>{
    return  api.get(`/stop/${service}`);

},
Restart :(service) =>{
    return  api.get(`/restart/${service}`);

},
// Validate:()=>{
//     return api.get('importer/validate')
//     }
}