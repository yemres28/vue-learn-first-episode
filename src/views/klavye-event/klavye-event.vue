<template>
  <div>
    <h2>Bu Dersin Konuları</h2>
    <h5>-> Klavye Event Dinlemek</h5>
    <h5>-> Template içerisinde javascript kodu yazdırmak</h5>
    <!-- Template içerisinde yazdığımız js codu max 1 satır olmak zorunda !!  -->
    <input type="text" @keyup.enter="showAlert" />

    <h5>Counter</h5>
    <!-- Counter için gerekli js kodlarını template içerisinde yazacağız  -->
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <br />
    <!-- Counter için templatte if else yazalım bunun için ? : kullanıcaz -->
    <p>
      <!-- Tek satırda if else aşağıdaki gibi kullanılıyor -->
      {{
        counter > 10 ? "Counter 10 dan büyük" : "Counter 10'dan küçük veya eşit"
      }}
    </p>
    <b>{{ counter }}</b>
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
    showAlert: function (event) {
      alert(event.target.value);
    },
  },
};
</script>
