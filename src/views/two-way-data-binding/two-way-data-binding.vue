<template>
  <div>
    <h2>Bu dersin konuları</h2>
    <h5>-> Two-Way Data Binding İşlemleri</h5>
    <!-- Two-Way Data Binding iki yönlü veri bağlama demek kullanmak için aşağıdaki 
    örnekteki gibi v-model kullanıcaz 
    -->
    <hr />
    <br />
    <input type="text" v-model="name" />
    <p>{{ name }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Yunus",
    };
  },
};
</script>
