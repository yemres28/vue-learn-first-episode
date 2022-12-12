<template>
  <div class="home">
    <h1>Hello Vue</h1>
    <h2>{{ title }}</h2>
    <hr />
    <input type="text" @input="changeTitle" />
    <h3>{{ description }}</h3>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      title: "yunus emre ",
      description: "açıklama",
    };
  },
  methods: {
    changeTitle: function (event) {
      this.description = event.target.value;
    },
  },
};
</script>
