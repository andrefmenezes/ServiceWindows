<template>

    <div class="menu">
<a class="logo" target="blank">
        <img src="" />
      </a>
    </div>
   

</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 
.hello{
  display: flex;
} */
a{
text-decoration:none; 
}
.social-icons {
      margin-top: 25%;
    font-size: 1.5em;
    color: #5CDCF7;    
    float: left;
    display: flex;
        width: 90%;
   
     }
     .social-icons span{
       flex-direction: row;
       color:white;
       padding-left: 5% ;
     }
     .social-icons span:hover{
       
       color:#5CDCF7;
      
     }
.menu{
  margin-top: 0%;
  display: flex;
  height: 15vh;
  width: 100%;
  background-color: #14578c;
  flex-direction: row;
  justify-content: flex-start;
  /* position: absolute; */
}
.menu strong{
  font-size: 2em;
margin-top: 15%;
color:aqua;
}
.logo {
    height: 100%;
    width: 20%;
     /* margin-top: 8%; */
    /* margin-left: -6%;   */ 
        background: url(../assets/logo.png) center center/100px no-repeat;
}
@media screen and (max-width: 860px) {
.social-icons {
      margin-top: 25%;
    font-size: 1em;
    color: #5CDCF7;    
    float: left;
    display: flex;
        width: 90%;
   
     }
     .menu strong{
        font-size: 1em;
margin-top: 25%;
color:aqua;
}
.logo {
  
        background: url(../assets/logo.png) center center/75px no-repeat;
}
}

</style>
