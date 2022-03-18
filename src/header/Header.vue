<template>
<nav>

        <h1>Vue read json</h1>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/emails" exact>Emails</router-link></li>
        <li><router-link to="/profile" exact>Profile</router-link></li>
        <li><router-link to="/details" exact>Details</router-link></li>
        
    </nav>
  
</template>

<!-- SCRIPT / JS -->
<script>
export default {
}
</script>

<!-- STYLE / CSS -->
<style scoped>
h1 {
    list-style: none;
    text-align: center;
    margin: 0;
    color: aqua;
    font-size: 40;
}
ul {
    list-style: none;
    text-align: center;
    margin: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav {
   
    background: #444; 
    padding: 18px 0;
    margin-bottom: 40px;
}
.router-link-active {
    background: #eee;
    color: #444;
}
</style>
