<template>
<div id="app">
  <div class="homeText">
    <h1 class='animated bounceInUp'>what's it worth</h1>
    <h4 class='animated fadeInDown'>an easy way to keep track of the going market price for your shoes</h4>
  </div>
  <div class="nike1" key='nike'>
    <img class="animated slideInLeft" src="./assets/nike.png">
    <h1 class="animated slideInLeft"></h1>
    <hr class="animated fadeInUpBig">
    <button v-on:click="seen=!seen" type="button" class="animated slideInDown">Click Me</button>
    <br>
    <section v-if="seen">
      <nike></nike>
      <br>
      <h6 class='animated fadeInLeft'>Got some new kicks? Keep them in your database</h6>
      <br>
      <submitNike class='animated fadeInUpBig'></submitNike>
    </section>
  </div>
  <div class="adidas1" key='adidas'>
    <img class="animated slideInRight" src="./assets/adidas.png">
    <h1 class="animated slideInRight"></h1>
    <hr class="animated fadeInUpBig">
    <button v-on:click="toggle()" type="button" class="animated slideInDown">Click Me</button>
    <br>
    <section v-show="isOpen">
      <adidas></adidas>
      <br>
      <h6 class='animated fadeInRight'>Got some new kicks? Keep them in your database</h6>
      <br>
      <submitAdidas class='animated fadeInUpBig'></submitAdidas>
    </section>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      seen: false,
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F8FAFF;
  height: 100%;
}

section {
  width: 100%;
}

.nike1 {
  float: left;
  width: 50%;
}
.adidas1 {
  float: left;
  width: 50%;
}
li{
  list-style: none;
}

img{
  height:250px;
  width:250px;
  max-width: 100%;
}
.homeText{
  padding: 50px;
}
button {
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 8px;
  width: 80%;
  max-width: 200px;
  background: white; /* fallback color for old browsers */background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  color: black;
  text-align: center;
  text-decoration: none;
  letter-spacing: 1px;
  transition: all 0.7s ease-in;
}
button:active {
  box-shadow: 0 7px 0 #DCD8D8;
     bottom:-4px;
     top:
}
</style>
