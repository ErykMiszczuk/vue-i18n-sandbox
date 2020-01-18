<template>
  <div id="app">
    <header>
      <nav id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <div class="header__globalLanguageChanger">
        <button @click="changeLanguage('en')">EN</button>
        <button @click="changeLanguage('de')">DE</button>
        <button @click="changeLanguage('pl')">PL</button>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18n.i18next.changeLanguage(lang);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
