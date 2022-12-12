<template>
  <div>
    <h3>Bu dersin konuları</h3>
    <h5>-> V-IF ile koşul eklemek (template)</h5>
    <h5>-> V-SHOW Kullanımı</h5>
    <hr />

    <!-- v-if kullanımı aşağıdaki kod parçacığındali gibi -->
    <p v-if="show">Beni Görebilirsin</p>
    <p v-else>Beni Görebilir misin acaba ? :)</p>
    <button @click="show = !show">GOSTER/GIZLE</button>

    <hr />
    <b>{{ number }}</b
    ><br />
    <br />
    <button @click="number++">Arttır</button>
    <button @click="number--">Azalt</button>
    <br />
    <br />
    <!-- v-if v-else-if v-else kullanımı -->
    <b v-if="number < 10">Sayı 10'dan küçüktür</b>
    <b v-else-if="number == 10">Sayı 10'a eşittir</b>
    <b v-else>Sayı 10'dan büyüktür</b>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      number: 0,
    };
  },
};
</script>
