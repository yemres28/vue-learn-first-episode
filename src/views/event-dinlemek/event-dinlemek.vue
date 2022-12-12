<template>
  <div>
    <h3>VueJs ile Event Dinlemek</h3>
    <br />
    <hr />
    <br />
    <button @click="showAlert">Alert Göster</button>
    <hr />
    <button @click="counter++">Arttır</button>
    <button @click="decreaseCounter">Azalt</button>
    <p>{{ counter }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    showAlert: function () {
      alert();
    },
    decreaseCounter: function () {
      this.counter--;
    },
  },
};
</script>
