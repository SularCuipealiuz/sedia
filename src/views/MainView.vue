<template>
  <div class="main-view">
    <horizontal-cover
      class="layout-6"
      v-show="horizontalCover"
    ></horizontal-cover>
    <hint-layout class="layout-5" v-show="hintLayout"></hint-layout>
    <notice-layout class="layout-4" v-show="notice_view"></notice-layout>
    <black-cover class="layout-3" v-show="blackCover"></black-cover>
    <hall-view
      class="layout-2"
      v-show="hallView"
      :style="{ 'pointer-events: none': hallView }"
    ></hall-view>
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
import { checkislogin, loginDo } from "@/api";
import NoticeLayout from "@/views/NoticeLayout";

export default {
  name: "Home",
  components: {
    NoticeLayout,
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
      "floatUI",
      "stopWatchTime",
      "notice_view"
    ])
  },
  created() {
    loginDo({ name: "fcacbt0001", pass: "123456" }).then(e => {
      console.log(e);
      checkislogin().then(res => {
        this.$store.dispatch("views/setUserName", res.data.username);
        this.$store.dispatch("views/setLogUrl", res.betsRecordURL);
        this.$store.dispatch("views/setBalance", res.data.balance);
      });
    });
  },
  mounted() {},
  data() {
    return {
      cloneDesktopView: []
    };
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

.layout-5 {
  z-index: 5000;
}

.layout-6 {
  z-index: 6000;
}
</style>
