<template>
  <div>
    <div class="logs">
      <div id="page-create">
        <div class="table">
          <!-- <h2>Logs de processamento</h2> -->
          <fieldset>
            <div class="field">
              <table id="tbl" border="1">
                <thead>
                  <tr>
                    <th>Serviço</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(service, index) in services"
                    :key="index"
                    v-bind:value="service.name"
                  >
                    <td>{{ service.name }}</td>
                    <td ><div class="center">
                      <div v-if="service.status" class="bola-green" id="bola">
                      </div> <div v-else class="bola-red" id="bola"></div>
                      </div>
                      </td>
                    <td><div class="icons">
                      <button class="btn-icons" @click="start(service.name)">
                        <i class="material-icons">
                          <font-awesome-icon :icon="['far', 'play-circle']" />
                        </i>
                      </button>
                      <button class="btn-icons" @click="stop(service.name)">
                        <i class="material-icons">
                          <font-awesome-icon :icon="['far', 'pause-circle']" />
                        </i>
                      </button>
                      <button class="btn-icons" @click="restart(service.name)">
                        <i class="material-icons">
                          <font-awesome-icon :icon="['fas', 'sync']" />
                        </i>
                      </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Notas from "../services/notas"
import axios from "axios";
//import moment from "moment";
export default {
  name: "Home",
  components: {},
  data() {
    return {    
      services: [],
    };
  },
  mounted() {
    this.listar();   
    this.teste();
  },
  methods: {
    async listar() {       
      const response = await axios.get("http://localhost:5555/services")
      //console.log(response)
      this.services = response.data
      //console.log(this.services)
      // for (var i = 0; i < response.data.services.length; i++) {
      //   this.services.push(response.data.services[i]);
      // }
      return response.data
    },
     teste: async function(){
       
this.services= setInterval(() => {
        this.listar()
    },5000);
       
    
},
    async start(service) {
      try {
        await axios.get(`http://localhost:5555/start/${service}`);
        
        this.services.map((item)=>{
          if(item.name == service){
            item.status = true
          }
        })
      } catch (error) {
        this.services.map((item)=>{
          if(item.name == service){
            item.status = false
          }
        })
        console.log(error);
      }
    },
    async stop(service) {
      try {
        await axios.get(`http://localhost:5555/stop/${service}`);
        //  const status = await axios.get(
        //   `http://localhost:5555/status/${service}`
        // );
        this.services.map((item)=>{
          if(item.name == service){
            item.status = false
          }
        })
        //  const bola = document.getElementById("bola");
        // if (status.data.status == "Parado") {
        //   bola.style.backgroundColor = "red";
        // }
      } catch (error) {
          this.services.map((item)=>{
          if(item.name == service){
            item.status = true
          }
        })
        console.log(error);
      }
    },
    async restart(service) {
      try {
        await axios.get(`http://localhost:5555/restart/${service}`);
        // await this.stop(service);
        // await this.start(service);
        // const f = setInterval(async function () {
        //   clearInterval(f);
        //   await axios.get(`http://localhost:5555/start/${service}`);
        // }, 5000);
        
      } catch (error) {
        console.log(error);
      }
    },
    async status() {
      // try {
      //   console.log('entrou')
      //   const status = await axios.get(
      //     `http://localhost:5555/status/${service}`
      //   );
      //   // console.log(status.data.status);
      //    const bola = document.getElementById("bola");
      //   if (status.data.status == "Disponivel") {
      //     bola.style.backgroundColor = "green";
      //   } else {
      //    bola.style.backgroundColor = "red";
      //   }
       
      // } catch (error) {
      //   console.log(error);
      // }
    },
   
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
div#page-create {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
}
.table {
  background-color: white;
  padding: 64px;
  margin: 0 auto;
  margin-top: 0px;
  border-radius: 8px;
  
}

.table h2 {
  color: #ed7a01;
  /* margin-left: 30%; */
}
.table fieldset {
  margin-top: 64px;
  border: 0;
}
.table .field {
  flex: 1; /*prencher o espaço que falta*/
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}
.table label {
  font-size: 14px;
  margin-bottom: 8px;
  color: black;
  font-weight: bold;
  padding: 1%;
}
.logs {
  width: 100%;
  display: flex;
  justify-content: center;
  /* margin-top: 30vh;  */
  height: 100%;
}
.btn {
  margin-left: 57%;
}
.field table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
.field th,
td {
  color: black;
  padding: 15px;
}
.field th {
  text-align: center;
}
.field table {
  border-spacing: 5px;
}
.btn button {
  width: 113px;
  height: 30px;
  background-color: #14578c;
  border-radius: 80px;
  color: #ed7a01;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  margin-top: 10px;
  margin-right: 5%;
}
.material-icons {
  font-size: 20px;
}
.btn-icons {
  margin-left: 15%;
  background: transparent;
  border: none !important;
}
.bola-red {
  border-radius: 50%;
  display: inline-block;
  height: 30px;
  width: 30px;
  border: 1px solid #000000;
  background-color: red;
 
}
.bola-green {
  border-radius: 50%;
  display: inline-block;
  height: 30px;
  width: 30px;
  border: 1px solid #000000;
  background-color: green;
  
}
.icons{
  display: flex;
  flex-direction: row;
}
.center{
  display: flex;
  justify-content: center;
}
</style>