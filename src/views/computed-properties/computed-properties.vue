<template>
  <div>
    <h2>Bu dersin konuları</h2>
    <h5>-> Computed Properties</h5>
    <h5>-> Watch Properties</h5>
    <h5>-> Computed ve Watch property arasındaki fark</h5>
    <!-- 
    *** Reactivite nedir bir değişken değiştiğinde diğer değişkenide etkilemesi 
    *** ÖNEMLİ : Bir kodu birden fazla kez aynı şekilde kullanıyorsan clean code
         yazmıyorsun demektir kodun duplicate olmaması gerekir 
    *** ÖNEMLİ : Methods içerisinde yazdığımız her kod template kısmı render olduğunda
    renderlanır ve kodun performans ve stabilitede düşürür 
    bunun için computed property kullanıyoruz 
    *** Computed Property : Data gibi davranır
        methods gibi çalışır bir obje ve içine fonkisyon alıyor !! 
    *** Computed kodu analiz edip çalışır herhangi bir şey çalışırsa ve bu computed içerisindeki
        veriyi etkilemiyorsa içindeki değişken çalışmaz 
    *** Computed kullanımı aşağıda
    *** Computed Property'e alternatif olan property WATCH ***
    *** Computed property senkron çalışır ***
    *** Watch ise async çalışır ***
    *** Watch çalışma prensibi data içerisindeki veriyi izlemeye yarar ***


    *** ÇOK ÖNEMLİ ***
    watch içerisinde this komutu direk olarak kullanılmıyor kullanabilmek 
    için öncelikle this komutunu başka bir değişkene atıyoruz ondan sonra kullanıyoruz

    örn:
    this.counter yerine
    var vm = this
    vm.counter

    -->
    <hr />
    <button @click="counter++">Arttır</button>
    <button @click="counter--">Eksilt</button>
    <p>Counter : {{ counter }}</p>
    <p>{{ result() }} || {{ output }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter: function () {
      var vm = this;
      setTimeout(function () {
        vm.counter = 0;
      }, 1500);
    },
  },
  methods: {
    result: function () {
      return this.counter > 10
        ? "Counter 10 dan büyük "
        : "Counter 10 dan küçük";
    },
  },
  computed: {
    output: function () {
      return this.counter > 10
        ? "Sayaç 10 dan büyüktür"
        : "Sayaç 10 dan küçüktür";
    },
  },
};
</script>
