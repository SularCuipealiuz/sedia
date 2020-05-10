<template>
  <div class="main-view" :class="{ loaded: loaded }">
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

    <div id="loader-wrapper">
      <div id="loader"></div>
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
    </div>
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
    const _this = this;
    loginDo({ name: "fcacbt0001", pass: "123456" }).then(() => {
      checkislogin().then(res => {
        _this.$store.dispatch("views/setUserName", res.data.username);
        _this.$store.dispatch("views/setLogUrl", res.betsRecordURL);
        _this.$store.dispatch("views/setRedirectHailURL", res.redirectHailURL);
        _this.$store.dispatch("views/setBalance", res.data.balance);
        console.log("準備完成");

        _this.loaded = true;
      });
    });
  },
  mounted() {},
  data() {
    return {
      cloneDesktopView: [],
      loaded: false
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

#loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  overflow: hidden;

  // Modernizr no-js fallback
  .no-js & {
    display: none;
  }
}

#loader {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #16a085;
  animation: spin 1.7s linear infinite;
  z-index: 11;

  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #e74c3c;
    animation: spin-reverse 0.6s linear infinite;
  }

  &:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #f9c922;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

#loader-wrapper .loader-section {
  position: fixed;
  top: 0;
  width: 50%;
  height: 100%;
  background: #222;
  opacity: 0.7;
  z-index: 10;
}

#loader-wrapper .loader-section.section-left {
  left: 0;
}

#loader-wrapper .loader-section.section-right {
  right: 0;
}

/* Loaded styles */

.loaded #loader-wrapper .loader-section.section-left {
  transform: translateX(-100%);
  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.loaded #loader-wrapper .loader-section.section-right {
  transform: translateX(100%);
  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.loaded #loader {
  opacity: 0;
  transition: all 0.3s ease-out;
}

.loaded #loader-wrapper {
  visibility: hidden;
  transform: translateY(-100%);
  transition: all 0.3s 1s ease-out;
}
</style>
