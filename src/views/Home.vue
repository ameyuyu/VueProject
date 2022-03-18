<template>
<h3>Have a look...</h3>
<ul>
                  <li><a href="#" @click="prePage">  ← </a></li>
                   <li v-for="(value,index) in pageNumber" :key="index"><a href="#" @click="thisPage(index)"> {{index + 1}} </a>
                   </li>
                   <li><a href="#" @click="nextPage"> → </a></li>
              </ul><br><br>
  <div class="us__nav">
    <div id="app2">
              <table id="users1">           
                      <tr class="alt">
                        <td>ID</td>
                          <td>FULL NAME</td>
                          <td>NAME</td>
                          <td>EMAIL</td>
                          <td>PROFILE</td>
                          <td>ADDRESS</td>
                      </tr>
                      <tr v-for="user in users" :key="user.id" >
                        <td>{{ user.id  }}</td>
                          <td>{{ user.name  }}</td>
                          <td>{{ user.username  }}</td>
                          <td><button><router-link to="/emails" exact>email</router-link></button></td>
                          <td><button><router-link to="/profile" exact>profile</router-link></button></td>
                          <td><button><router-link to="/profile" exact>address</router-link></button></td>
                      </tr>             
              </table>    
         </div>
  </div>
</template>

<!-- SCRIPT / JS -->
<script>
// import axios from 'axios'
export default {
    el:"#app",
  data() {
    return {
        message: 'Hello Axios',
      users: [],
      pageSize: 3,
      currentPage: 0,
    }
  },
      mounted() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => this.users = response.data)
            .catch(error => console.log(error))
    },
  methods: {
      nextPage:function(){
          if (this.currentPage == this.pageNumber -1)return;
          this.currentPage++;
      },
      prePage:function(){
          if (this.currentPage == 0)return;
          this.currentPage--;
      },
      thisPage:function(index){
          
          this.currentPage = index;
      },
  },
  computed: {
     users: function() {
       let left = this.currentPage * this.pageSize;
       let right = Math.min((this.currentPage+1)*this.pageSize, this.users.length) 
       return this.users.slice(left, right);
     },
     pageNumber: function() {
         if(this.users.length<=this.pageSize){
             return 1;
         }
       return Math.ceil(this.users.length / this.pageSize);
     }
   }
}
</script>

<!-- STYLE / CSS -->
<style scoped>
[v-cloak]{
     display: inline-block;
}
ul{
  position: relative;
  /* margin: 20px 20px 20px 20px; */
    margin: 20px 50px 20px 50px
  
}
ul li{
    float: left;
    list-style: none;
    background-color: #A7C942;
}
ul li a{
    text-decoration: none;
    padding: 5px 25px;
    color: black;
    border: 1px solid white;
}
a:hover{
    background: tomato;
}
#users1
{
	font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
	width:100%;
	border-collapse:collapse;
}
#users1 td, #users1 th 
{
	font-size:1em;
	border:1px solid #98bf21;
	padding:3px 7px 2px 7px;
}
#users1 th 
{
	font-size:1.1em;
	text-align:left;
	padding-top:5px;
	padding-bottom:4px;
	background-color:#A7C942;
	color:#ffffff;
}
#users1 tr.alt td 
{
	color:#000000;
	background-color:#EAF2D3;
}
</style>
