<template>
  <div>
    <h3>HTML Kodunu Vue.js ile ekrana basmak</h3>
    <p v-once>{{ title }}</p>
    <p>{{ hello() }}</p>
    <p>
      <a :href="link">Siteme Git</a>
    </p>
    <!-- script kısmında yazılan html kodunu template kısmında göstermek için aşağıdaki kodu yazıyoruz -->
    <p v-html="blogLink"></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Selam HTML Kodları",
      message: "Vue'ya hoşgeldin Yunus",
      link: "https://www.yunusemrecakir.com.tr",
      blogLink: "<a href='https://www.yemre.com.tr'>Yemre</a>",
    };
  },
  methods: {
    hello: function () {
      this.title = "Merhaba !!!";
      return this.title;
    },
  },
};
</script>
