<template>
  <div id="app">
    <nav>
      <h4>Bölüm 1</h4>
      <h5>Vue Cli ile Vue kurulumu ve ayağa kaldırma</h5>
      <hr />
      <h4>Bölüm 2</h4>
      <h5>Vue ile DOM Etkileşimleri</h5>
      <router-link to="/">Lesson-1</router-link> |
      <router-link to="/about">Lesson-2</router-link> |
      <router-link to="/attirbute">Lesson-3</router-link> |
      <router-link to="/html">Lesson-4</router-link> |
      <router-link to="/event">Lesson-5</router-link> |
      <router-link to="/klavye">Lesson-6</router-link> |
      <router-link to="/databinding">Lesson-7</router-link> |
      <router-link to="/computed">Lesson-8</router-link> |
      <router-link to="/css">Lesson-9</router-link>
      <br />
      <hr />
      <h4>Bölüm 3</h4>
      <h5>Koşul Kullanımı ve Listeleri Render Etmek</h5>
      <router-link to="/v-if">Lesson-1</router-link> |
      <br />
      <hr />
    </nav>
    <router-view />
  </div>
</template>
