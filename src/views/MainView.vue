<template>
  <div class="main-view">
    <horizontal-cover
      class="layout-5"
      v-show="horizontalCover"
    ></horizontal-cover>
    <hint-layout class="layout-4" v-show="hintLayout"></hint-layout>
    <black-cover class="layout-3" v-show="blackCover"></black-cover>
    <hall-view class="layout-2" v-show="hallView"></hall-view>
    <float-user-interface
      class="layout-2"
      v-show="floatUI"
    ></float-user-interface>
    <desktop-view
      v-for="(e, i) in desktopView"
      :key="i"
      :desk-info="e"
      class="layout-1"
      v-show="desktopView[i].visible"
    ></desktop-view>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import HorizontalCover from "@/components/HorizontalCover.vue";
import HintLayout from "@/views/HintLayout";
import BlackCover from "@/views/BlackCover";
import HallView from "@/views/HallView";
import DesktopView from "@/views/DesktopView";
import FloatUserInterface from "@/views/FloatUI";
import { loginDo } from "@/api";

export default {
  name: "Home",
  components: {
    FloatUserInterface,
    HallView,
    HintLayout,
    DesktopView,
    BlackCover,
    HorizontalCover
  },
  computed: {
    ...mapGetters([
      "horizontalCover",
      "desktopView",
      "hintLayout",
      "blackCover",
      "hallView",
      "floatUI"
    ])
  },
  created() {
    loginDo({ name: "fcacbt0001", pass: "123456" }).then(e => {
      console.log(e);
    });
  },
  mounted() {
    console.log(this.$store);
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
$main-color: #34185d;

.main-view {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 500;
  overflow: hidden;

  background-color: $main-color;
}

.layout-1 {
  z-index: 1000;
}

.layout-2 {
  z-index: 2000;
}

.layout-3 {
  z-index: 3000;
}

.layout-4 {
  z-index: 4000;
}
</style>
