
<template>
<h3>show details...</h3>
  <div class="us__nav">
    <div id="app2">
              <table  id="users1">           
                      <tr class="alt">
                        <td>ID</td>
                          <td>EMAIL</td>
                          <td>NAME</td>
                          <td>ADDRESS</td>
                      </tr>
                      <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id  }}</td>
                          <td>{{ user.name  }}</td>
                               <td>{{ user.username  }}</td>
                          <td>City: {{ user.address.city  }}<br/>street: {{ user.address.street  }}<br/>zipcode: {{ user.address.zipcode  }}</td>
                      </tr>             
              </table>
         </div>
  </div>
</template>

<!-- SCRIPT / JS -->
<script>
export default {
    data() {
        return {
            message: 'Hello Axios',
            users: [],
        }
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => this.users = response.data)
            .catch(error => console.log(error))
    },
}
</script>

<!-- STYLE / CSS -->
<style scoped>
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
