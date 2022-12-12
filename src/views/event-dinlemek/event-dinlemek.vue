<template>
  <div>
    <h3>VueJs ile Event Dinlemek</h3>
    <br />
    <hr />
    <br />
    <h4>Butona basıldığında alert gösteren method</h4>
    <button @click="showAlert('yunus')">Alert Göster</button>
    <hr />
    <h4>Arttır ve azalt butonlarına basıldığında sayıyı değiştir</h4>
    <button @click="counter++">Arttır</button>
    <button @click="decreaseCounter(3)">Azalt</button>
    <p>{{ counter }}</p>
    <hr />
    <h4>Mouse ile üzerinde gezdiğinde koordinatları gösterir</h4>
    <!-- event gönderirken ki sıra alırken de aynı olmalı -->
    <p @mousemove="updateCoords(200, $event)">
      Koordinatlar : {{ x }},{{ y }}
      <b @mousemove.stop>Burda koordinat alma mouse move durdur</b>
    </p>
    <hr />
    <h4>Event içerisine argüman göndermek yukarda var</h4>
    <h4>Event Modifier mousemove.stop</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
      x: 0,
      y: 0,
    };
  },
  methods: {
    showAlert: function (name) {
      alert(name);
    },
    decreaseCounter: function (step) {
      this.counter = this.counter - step;
    },
    updateCoords: function (sayi, event) {
      this.counter = this.counter + sayi;
      this.x = event.clientX;
      this.y = event.clientY;
    },
  },
};
</script>
