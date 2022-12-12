<template>
  <div>
    <h3>Bu dersin konuları</h3>
    <h5>-> V-FOR ile listeleri render etmek</h5>
    <h5>-> V-FOR ile belirli sayıda döngü kurmak</h5>
    <h5>->V-FOR kullanırken elementlerin izini sürmek v-bind:key</h5>
    <hr />
    <div>
      <ul>
        <!-- v-for kullanımı aşağıdaki gibi reactteki gibi listeleme yaparken key probunu girmek zorunlu -->
        <!-- ÖNEMLİ NOT template elementi vue js e özeldir ve vuejs tarafından render edilmez-->

        <!-- PUSH FUNCTİON -->
        <li v-for="(product, index) in products" :key="product">
          {{ index }}-{{ product }}
        </li>
      </ul>
      <button @click="products.push('Hoparlör')">EKLE</button>
      <hr />
      <ul v-for="person in persons" :key="person">
        <li>{{ person.name }} {{ person.surname }}</li>
      </ul>
      <br />
      <!-- Belirlenen sayıya kadar listeleme işlemi  -->
      <span v-for="i in 10" :key="i">{{ i }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: ["Monitör", "Klavye", "Mouse", "Adaptör"],
      persons: [
        {
          name: "Yunus Emre ",
          surname: "Çakır",
        },
        {
          name: " Bayram",
          surname: "Alaçam",
        },
        {
          name: "İbrahim",
          surname: "Işık",
        },
        {
          name: "EmirHan",
          surname: "Kocaer",
        },
      ],
    };
  },
};
</script>
