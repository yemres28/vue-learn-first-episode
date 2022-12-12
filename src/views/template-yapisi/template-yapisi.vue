<template>
  <div class="about">
    <h2>{{ title }}</h2>
    <hr />
    <b>{{ hello() }}</b>
    <hr />
    <b>{{ learn() }}</b>
    <hr />
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Yemre",
      learns: "Datadaki veriyi methods ta alıp interpolution ile yazdırmak",
    };
  },
  methods: {
    hello: function () {
      return "Methods içerisindeki veriyi interpolution içerisinde göstermek";
    },
    learn: function () {
      return this.learns;
    },
  },
};
</script>
