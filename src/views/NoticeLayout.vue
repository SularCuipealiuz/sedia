<template>
  <section id="noticeLayout" class="flex center">
    <img
      :class="{ 'notice-animation': plzChose }"
      v-show="plzChose"
      :src="noticeList.plzChose"
      alt=""
    />
    <img
      :class="{ 'notice-animation': onReady }"
      v-show="onReady"
      :src="noticeList.onReady"
      alt=""
    />
    <img
      :class="{ 'notice-animation': isOpening }"
      v-show="isOpening"
      :src="noticeList.isOpening"
      alt=""
    />
    <img
      :class="{ 'notice-animation': pleasePutChip }"
      v-show="pleasePutChip"
      :src="noticeList.pleasePutChip"
      alt=""
    />
    <img
      :class="{ 'notice-animation': pleaseWaitNext }"
      v-show="pleaseWaitNext"
      :src="noticeList.pleaseWaitNext"
      alt=""
    />
    <img
      :class="{ 'notice-animation': notReady }"
      v-show="notReady"
      :src="noticeList.notReady"
      alt=""
    />
    <div
      class="results-notice"
      :class="{ 'results-animation': even }"
      v-show="even"
    >
      <span class="purple">雙</span>贏
    </div>
    <div
      class="results-notice"
      :class="{ 'results-animation': odd }"
      v-show="odd"
    >
      <span class="yellow">單</span>贏
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NoticeLayout",
  components: {},
  computed: {
    ...mapGetters([
      "noticeLayout",
      "plzChose",
      "onReady",
      "isOpening",
      "pleasePutChip",
      "pleaseWaitNext",
      "notReady",
      "even",
      "odd"
    ])
  },
  data() {
    return {
      noticeList: {
        plzChose: require("../assets/section/chose.png"),
        onReady: require("../assets/section/onReady.png"),
        isOpening: require("../assets/section/open.png"),
        pleasePutChip: require("../assets/section/please.png"),
        pleaseWaitNext: require("../assets/section/wait.png"),
        notReady: require("../assets/section/working.png")
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
$highlight: #ffc51a;
#noticeLayout {
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: fixed;
  pointer-events: none;
  font-family: "Microsoft JhengHei";
}

.flex {
  display: flex;
}

.center {
  justify-content: center;
  align-items: center;
}

.column {
  flex-direction: column;
}

.row {
  flex-direction: row;
}

.hint-panel {
  height: 75%;
  max-height: 300px;
  width: 67%;
  max-width: 400px;
  background-color: #34185d;
  border-radius: 12px;
  opacity: 0.9;
  pointer-events: auto;

  .title,
  .content,
  .footer {
    width: 100%;
  }
  .title {
    color: $highlight;
    flex: 0 0 20%;
  }
  .content {
    flex: 1 1 50%;
    color: white;
    font-size: 18px;
  }
  .footer {
    flex: 0 0 25%;
    justify-content: center;
    align-items: center;
  }
}

.notice-animation {
  animation: leftFadeInAni ease 1s, rightFadeOutAni ease 1s;
  animation-delay: 0s, 2s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards; /*when the spec is finished*/
}

.results-animation {
  animation: topFadeInAni ease 1s, fadeOutAni ease 1s;
  animation-delay: 0s, 3s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards; /*when the spec is finished*/
}

.results-notice {
  font-size: 80px;
  font-weight: 900;
  -webkit-text-stroke: 2.5px black;
  color: white;

  > .purple {
    color: #c48dff;
  }

  > .yellow {
    color: #ffa133;
  }
}

@keyframes topFadeInAni {
  0% {
    opacity: 0;
    transform: translate(0px, -15px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@keyframes fadeOutAni {
  0% {
    opacity: 1;
    transform: translate(0px, -0px);
  }
  100% {
    opacity: 0;
    transform: translate(0px, 0px);
  }
}

@keyframes leftFadeInAni {
  0% {
    opacity: 0;
    transform: translate(-25px, 0px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@keyframes rightFadeOutAni {
  0% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  100% {
    opacity: 0;
    transform: translate(25px, 0px);
  }
}
</style>
