<template>
  <section class="room-desktop">
    <div class="desk-cover">
      <div class="desk-chip-cover flex">
        <div class="flex row left-side">
          <div
            class="desk-chip-panel flex center"
            @click="putMoneyOnBoard('sedia_even')"
          >
            {{ desktop.sedia_even.title }}
            <br />
            1:{{ desktop.sedia_even.maxrate }}

            <div class="put-chips-panel"></div>
            <div class="put-money-panel" v-show="formData.sedia_even.price > 0">
              <span class="put-value">{{ formData.sedia_even.price }}</span>
            </div>
          </div>
          <div class="desk-holder"></div>
          <div
            class="desk-chip-panel flex center"
            @click="putMoneyOnBoard('sedia_fourth_r')"
          >
            1:{{ desktop.sedia_fourth_r.maxrate }}

            <div class="put-chips-panel"></div>
            <div
              class="put-money-panel"
              v-show="formData.sedia_fourth_r.price > 0"
            >
              <span class="put-value">{{ formData.sedia_fourth_r.price }}</span>
            </div>
          </div>
          <div
            class="desk-chip-panel flex center"
            @click="putMoneyOnBoard('sedia_third_r')"
          >
            1:{{ desktop.sedia_third_r.maxrate }}
            <div class="put-chips-panel"></div>
            <div
              class="put-money-panel"
              v-show="formData.sedia_third_r.price > 0"
            >
              <span class="put-value">{{ formData.sedia_third_r.price }}</span>
            </div>
          </div>
        </div>
        <div class="flex row right-side">
          <div class="desk-holder"></div>
          <div
            class="desk-chip-panel flex center"
            @click="putMoneyOnBoard('sedia_odd')"
          >
            {{ desktop.sedia_odd.title }}
            <br />
            1:{{ desktop.sedia_odd.maxrate }}
            <div class="put-chips-panel"></div>
            <div class="put-money-panel" v-show="formData.sedia_odd.price > 0">
              <span class="put-value">{{ formData.sedia_odd.price }}</span>
            </div>
          </div>
          <div
            class="desk-chip-panel flex center"
            @click="putMoneyOnBoard('sedia_third_w')"
          >
            1:{{ desktop.sedia_third_w.maxrate }}
            <div class="put-chips-panel"></div>
            <div
              class="put-money-panel"
              v-show="formData.sedia_third_w.price > 0"
            >
              <span class="put-value">{{ formData.sedia_third_w.price }}</span>
            </div>
          </div>
          <div
            class="desk-chip-panel flex center"
            @click="putMoneyOnBoard('sedia_fourth_w')"
          >
            1:{{ desktop.sedia_fourth_w.maxrate }}
            <div class="put-chips-panel"></div>
            <div
              class="put-money-panel"
              v-show="formData.sedia_fourth_w.price > 0"
            >
              <span class="put-value">{{ formData.sedia_fourth_w.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="animation-layout">
      <div class="bowl-panel dish-animation ">
        <img class="bowl " src="../assets/dish/bowl.png" alt="" />
        <img class="plate " src="../assets/dish/plate.png" alt="" />
        <div class="paper-panel-css paper-panel-1 fadein-animation non-visible">
          <div class="relative" style="height: 100%; width: 100%">
            <div class="paper paper-1 red-paper"></div>
            <div class="paper paper-2 red-paper"></div>
            <div class="paper paper-3 red-paper"></div>
            <div class="paper paper-4 red-paper"></div>
          </div>
        </div>
        <div class="paper-panel-css paper-panel-2 fadein-animation non-visible">
          <div class="relative" style="height: 100%; width: 100%">
            <div class="paper paper-1 red-paper"></div>
            <div class="paper paper-2 red-paper"></div>
            <div class="paper paper-3 red-paper"></div>
            <div class="paper paper-4 red-paper"></div>
          </div>
        </div>
        <div class="paper-panel-css paper-panel-3 fadein-animation non-visible">
          <div class="relative" style="height: 100%; width: 100%">
            <div class="paper paper-1 red-paper"></div>
            <div class="paper paper-2 red-paper"></div>
            <div class="paper paper-3 red-paper"></div>
            <div class="paper paper-4 red-paper"></div>
          </div>
        </div>
      </div>
      <div class="absolute font-panel non-visible">
        <div class="even-font"><span>雙</span>贏</div>
        <div class="odd-font"><span>單</span>贏</div>
      </div>
    </div>
  </section>
</template>

<script>
import { lotteryrates, cpbuy } from "@/api";
import { mapGetters } from "vuex";

export default {
  name: "DesktopView",
  computed: {
    ...mapGetters([
      "plateChip",
      "currIndex",
      "currFullExpect",
      "lotteryName",
      "desktopView",
      "plzChose",
      "onReady",
      "isOpening",
      "pleasePutChip",
      "pleaseWaitNext",
      "notReady"
    ])
  },
  created() {
    //TODO 玩法、時間

    lotteryrates({
      cptype: this.deskInfo.cptype,
      lotteryname: this.deskInfo.lotteryname
    }).then(res => {
      this.desktop.sedia_even = res.rates.sedia_even;
      this.desktop.sedia_odd = res.rates.sedia_odd;
      this.desktop.sedia_fourth_r = res.rates.sedia_fourth_r;
      this.desktop.sedia_third_r = res.rates.sedia_third_r;
      this.desktop.sedia_third_w = res.rates.sedia_third_w;
      this.desktop.sedia_fourth_w = res.rates.sedia_fourth_w;
    });
  },
  props: {
    deskInfo: Object
  },
  mounted() {
    const _this = this;
    this.$bus.$on("btnAgree", function() {
      if (_this.deskInfo.index === _this.currIndex) {
        // 如果store紀錄的桌號與當前桌相同
        let list = [];
        for (let key in _this.formData) {
          if (_this.formData[key].price > 0) {
            list.push(_this.formData[key]);
          }
        }

        cpbuy({
          orderList: list,
          expect: _this.currFullExpect,
          lotteryname: _this.lotteryName
        }).then(e => {
          // 當投注成功後，應顯示onReady狀態、鎖住桌面投注、鎖住選籌碼、鎖住三個按鈕、
          console.log(e);

          this.$store.dispatch("openOnReady");
        });
      }
    });

    this.$bus.$on("clearDesktopMonetAndChips", function() {});

    const index = this.currIndex - 1;
    this.$set(this.state, "btnAgain", this.desktopView[index].btn_again);
    this.$set(this.state, "btnCancel", this.desktopView[index].btn_cancel);
    this.$set(this.state, "btnAgree", this.desktopView[index].btn_agree);
  },
  data() {
    return {
      desktop: {
        sedia_even: "",
        sedia_odd: "",
        sedia_fourth_r: "",
        sedia_third_r: "",
        sedia_third_w: "",
        sedia_fourth_w: ""
      },
      formData: {
        sedia_even: {
          playid: "sedia_even",
          price: 0
        },
        sedia_odd: {
          playid: "sedia_odd",
          price: 0
        },
        sedia_fourth_r: {
          playid: "sedia_fourth_r",
          price: 0
        },
        sedia_third_r: {
          playid: "sedia_third_r",
          price: 0
        },
        sedia_third_w: {
          playid: "sedia_third_w",
          price: 0
        },
        sedia_fourth_w: {
          playid: "sedia_fourth_w",
          price: 0
        }
      },
      state: {
        btnAgain: false,
        btnCancel: false,
        btnAgree: false
      }
    };
  },
  methods: {
    putMoneyOnBoard(id) {
      this.formData[id].price += this.plateChip;
    }
  }
};
</script>

<style lang="scss" scoped>
$main-color: #34185d;
.room-desktop {
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  background-color: $main-color;
  background-image: url("../assets/table/table-bg.png");
  background-repeat: no-repeat;
  background-size: auto 96%;
  background-position-x: center;
  pointer-events: none;
}

.desk-cover {
  width: 100%;
  height: 100%;

  position: fixed;
  top: 8%;
  left: 0;
  background-image: url("../assets/table/deskCover.png");
  background-repeat: no-repeat;
  background-size: auto 60%;
  background-position-x: center;
  pointer-events: none;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  > .desk-chip-cover {
    font-size: 22px;
    height: 60%;
    width: calc(calc(calc(100vh * 0.6) / 434) * 997);

    > .row {
      flex: 0 0 50%;
      flex-wrap: wrap;

      > .desk-holder {
        flex: 0 0 50%;
        height: 50%;
        pointer-events: none;
      }

      > .desk-chip-panel {
        flex: 0 0 50%;
        height: 50%;
        pointer-events: auto;
        cursor: pointer;
        position: relative;
        > .put-money-panel {
          position: absolute;
          left: 20px;
          bottom: 10px;
          width: 50%;
          height: 30px;
          transform: skew(-2.5deg, 0deg) !important;
          display: flex;
          justify-content: center;
          align-items: center;

          > .put-value {
            display: inline-block;
            outline: none;
            font-family: inherit;
            font-size: 1em;
            box-sizing: border-box;
            border-radius: 0.3em;
            line-height: 1.5em;
            text-transform: uppercase;
            padding: 0 1em;
            opacity: 0.85;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16),
              0 1px 2px rgba(110, 80, 20, 0.4), inset 0 -1px 1px 1px #8b4208,
              inset 0 -1px 1px 1.5px #fae385;
            background-image: linear-gradient(
              160deg,
              #a54e07,
              #b47e11,
              #fef1a2,
              #bc881b,
              #a54e07
            );
            color: #783205;
            border: 1px solid #a55d07;
            text-shadow: 0 2px 2px #fae385;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            background-size: 100% 100%;
            background-position: center;
          }
        }

        > .put-chips-panel {
          position: absolute;
          left: 5px;
          top: 5px;
          display: inline-flex;
          justify-content: left;
          align-items: center;
          height: 30px;
          pointer-events: none;
          width: 100px;
        }
      }
    }

    > .left-side {
      padding-left: 5px;
      transform: skew(-3.5deg, 0deg);
      color: #c48dff;
      box-sizing: border-box;
    }

    > .right-side {
      padding-right: 5px;
      transform: skew(3.5deg, 0deg);
      color: #c48dff;
      box-sizing: border-box;
    }
  }
}

.flex {
  display: flex;
}

.center {
  justify-content: center;
  align-items: center;
}

.animation-layout {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  z-index: 200;
  pointer-events: none;

  > .bowl-panel {
    transform: scale(0.4);
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    top: -30%;
    .bowl {
      position: absolute;
      z-index: 200;
      width: auto !important;
      top: 0;
      height: 80%;
    }

    .plate {
      position: absolute;
      z-index: 100;
      width: auto !important;
      top: 6%;
      height: 100%;
    }

    .paper {
      position: absolute;
      z-index: 175;
      width: 70px;
      height: 60px;
    }

    .red-paper {
      background-image: url("../assets/dish/red-paper.png");
      background-repeat: no-repeat;
      background-size: auto;
    }

    .white-paper {
      background-image: url("../assets/dish/white-paper.png");
      background-repeat: no-repeat;
      background-size: auto;
    }

    .paper-panel-css {
      top: 30%;
    }

    .paper-panel-1 {
      position: absolute;
      width: 250px;
      height: 180px;
      z-index: 175;

      .paper-1 {
        left: 30px;
        top: 30px;
      }

      .paper-2 {
        left: 140px;
        top: 30px;
      }

      .paper-3 {
        left: 50px;
        top: 90px;
      }

      .paper-4 {
        left: 160px;
        top: 80px;
      }
    }

    .paper-panel-2 {
      position: absolute;
      width: 250px;
      height: 180px;
      z-index: 175;

      .paper-1 {
        left: 40px;
        top: 30px;
      }

      .paper-2 {
        left: 130px;
        top: 10px;
      }

      .paper-3 {
        left: 70px;
        top: 85px;
      }

      .paper-4 {
        left: 145px;
        top: 70px;
      }
    }

    .paper-panel-3 {
      position: absolute;
      width: 250px;
      height: 180px;
      z-index: 175;

      .paper-1 {
        left: 35px;
        top: 5px;
      }

      .paper-2 {
        left: 115px;
        top: 15px;
      }

      .paper-3 {
        left: 50px;
        top: 75px;
      }

      .paper-4 {
        left: 140px;
        top: 80px;
      }
    }
  }
}
</style>
