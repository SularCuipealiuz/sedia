<template>
  <section id="hintLayout" class="flex center">
    <div class="flex column hint-panel">
      <div class="title">{{ panelTitle }}</div>
      <div class="content">{{ panelContent }}</div>
      <div class="flex footer">
        <small-btn :text="btn.confirm" :fn="checkActionType"></small-btn>
        <small-btn :text="btn.cancel" :fn="checkActionType"></small-btn>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import SmallBtn from "@/components/SmallBtn";
export default {
  name: "HintLayout",
  components: { SmallBtn },
  computed: {
    ...mapGetters(["hintType"])
  },
  props: {
    propContent: String
  },
  data() {
    return {
      panelTitle: "",
      panelContent: "",
      btn: {
        confirm: "確定",
        cancel: "關閉"
      }
    };
  },
  mounted() {
    console.log("in");
    let test = this.$store.getters.hintType;
    test = "1";

    if (test === "1") {
      //關閉遊戲
      this.panelTitle = "提示";
      this.panelContent = "確定要離開牌桌？";
    } else if (test === "2") {
      //錯誤訊息
      this.panelTitle = "提示";
      this.panelContent = this.propContent;
    }
  },
  methods: {
    checkActionType() {
      let btnType = this.$store.getters.hintType;

      btnType = "1";
      if (btnType === "1") {
        //關閉遊戲
        this.panelTitle = "提示";
        this.panelContent = "確定要離開牌桌？";
        this.closeGame();
      } else if (btnType === "2") {
        //錯誤訊息
        this.panelTitle = "提示";
        this.panelContent = this.propContent;
        this.errorMessage();
      }
    },
    closeGame() {
      console.log("close");
    },
    errorMessage() {
      console.log("error");
    }
  }
};
</script>

<style lang="scss" scoped>
$highlight: #ffc51a;
#hintLayout {
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: fixed;
  pointer-events: none;
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
</style>
