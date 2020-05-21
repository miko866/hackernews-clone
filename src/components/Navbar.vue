<template>
  <div class="nav-bar">
    <div>
      <img class="nav-logo" src="https://news.ycombinator.com/y18.gif" alt="" />
    </div>

    <p>Hacker News</p>
    <router-link to="/">news</router-link>
    <router-link to="/newest">newest</router-link>
    <router-link to="/show">show</router-link>
    <router-link to="/ask">ask</router-link>
    <router-link to="/jobs">jobs</router-link>
  </div>
</template>


<style  scoped>
.nav-bar {
  display: flex;
  background-color: rgb(255, 102, 0);
  justify-content: center;
  align-items: center;
}

.nav-bar p {
  font-size: 1em;
  font-weight: bold;
}

.nav-bar a {
  margin: 10px;
  text-decoration: none;
  color: black;
}

.nav-bar a:after {
  content: "|";
  margin-left: 10px;
}
.nav-logo {
  outline: 1px solid white;
  margin: 10px;
}
</style>