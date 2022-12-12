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
    <br />
    <hr />
    <br />
    <!-- v-show kullanımı -->
    <!-- v-show ile v-if farkı v-if filtrelediğimiz değeri direkt olarak domdan kaldırırken v-show
     domda tutarak sadece visibilitysini değiştiriyor -->
    <button @click="showParagh = !showParagh">Göster/Gizle</button>
    <p v-show="showParagh">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eaque qui
      illo cupiditate vel sint voluptate asperiores maiores, nihil corporis
      blanditiis quod nemo laboriosam ullam distinctio obcaecati voluptatibus
      rerum recusandae?
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      number: 0,
      showParagh: false,
    };
  },
};
</script>
