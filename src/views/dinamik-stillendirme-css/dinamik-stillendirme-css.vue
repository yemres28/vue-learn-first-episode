<template>
  <div>
    <h3>Bu dersin konuları</h3>
    <h5>-> CSS ile dinamik stillendirme işlemleri</h5>
    <h5>-> CSS ile dinamik stillendirme işlemleri - Name işlemleri</h5>
    <h5>-> CSS ile dinamik stillendirme işlemleri - Array Syntax Kullanma</h5>
    <h5>-> CSS olmadan dinamik stillendirme işlemleri - inline kullanımı</h5>
    <h5>-> Elementleri array Syntax ile şekillendirme</h5>
    <hr />
    <div class="css">
      <div
        class="box"
        :class="{ yellow: attachedClass, blue: !attachedClass }"
        @click="attachedClass = !attachedClass"
      ></div>
      <div class="box" :class="divClass"></div>
      <div class="box" :class="[color, { yellow: attachedClass }]"></div>
      <br />
      <input type="text" v-model="color" />
    </div>
    <hr />
    <hr />
    <div>
      <br />
      <div class="boxes" :style="{ backgroundColor: colors }"></div>
      <div class="boxes" :style="customStyle"></div>
      <div class="boxes" :style="[customStyle, { width: height + 'px' }]"></div>
      <br />
      <input type="text" v-model="colors" />
      <input type="text" v-model="height" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attachedClass: false,
      color: "green",
      colors: "orange",
      height: 100,
    };
  },
  computed: {
    divClass: function () {
      return {
        yellow: this.attachedClass,
        blue: !this.attachedClass,
      };
    },
    customStyle: function () {
      return {
        backgroundColor: this.colors,
        height: this.height + "px",
      };
    },
  },
};
</script>

<style>
.boxes {
  height: 100px;
  width: 100px;
  background-color: gray;
  margin-right: 10px;
  display: inline-block;
}
.orange {
  background-color: orange;
}
.pink {
  background-color: pink;
}
.box {
  height: 100px;
  width: 100px;
  background-color: gray;
  margin-right: 10px;
  display: inline-block;
}
.yellow {
  background-color: yellow;
}
.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
</style>
