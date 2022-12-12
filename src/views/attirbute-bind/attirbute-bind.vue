<template>
  <div>
    <h3>{{ title }}</h3>
    <b>{{ hello() }}</b>
    <hr />
    <br />
    <a :href="link">Siteye Git</a>
    <hr />
    <br />
    <h3>v-once ile re-render (gereksiz render) engellemek</h3>
    <p v-once>{{ name }}</p>
    <p>{{ once() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Attirbute Bind Yapısı",
      name: "v-once kullanımı",
      link: "https://www.yunusemrecakir.com.tr",
    };
  },
  methods: {
    hello: function () {
      return "selam methods string interpolution";
    },
    once: function () {
      this.name = "Merhaba !!!";
      return this.name;
    },
  },
};
</script>
