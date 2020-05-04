<template>
  <section class="room-desktop">
    <div class="desk-cover">
      <div
        class="desk-chip-cover flex"
        :class="{ 'disable-chip-cover-panel': !desk_chip_cover }"
      >
        <div class="flex row left-side">
          <div
            class="desk-chip-panel flex center"
            @click="putMoneyOnBoard('sedia_even')"
          >
            {{ desktop.sedia_even.title }}
            <br />
            1:{{ desktop.sedia_even.maxrate }}

            <div class="put-chips-panel">
              <div
                v-if="formData.sedia_even.bets['10000'] > 0"
                class="table-chips for-10000"
              >
                <img src="../assets/chips/10000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_even.bets['5000'] > 0"
                class="table-chips for-5000"
              >
                <img src="../assets/chips/5000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_even.bets['1000'] > 0"
                class="table-chips for-1000"
              >
                <img src="../assets/chips/1000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_even.bets['500'] > 0"
                class="table-chips for-500"
              >
                <img src="../assets/chips/500.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_even.bets['100'] > 0"
                class="table-chips for-100"
              >
                <img src="../assets/chips/100.png" alt="" />
              </div>
            </div>
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

            <div class="put-chips-panel">
              <div
                v-if="formData.sedia_fourth_r.bets['10000'] > 0"
                class="table-chips for-10000"
              >
                <img src="../assets/chips/10000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_fourth_r.bets['5000'] > 0"
                class="table-chips for-5000"
              >
                <img src="../assets/chips/5000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_fourth_r.bets['1000'] > 0"
                class="table-chips for-1000"
              >
                <img src="../assets/chips/1000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_fourth_r.bets['500'] > 0"
                class="table-chips for-500"
              >
                <img src="../assets/chips/500.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_fourth_r.bets['100'] > 0"
                class="table-chips for-100"
              >
                <img src="../assets/chips/100.png" alt="" />
              </div>
            </div>
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
            <div class="put-chips-panel">
              <div
                v-if="formData.sedia_third_r.bets['10000'] > 0"
                class="table-chips for-10000"
              >
                <img src="../assets/chips/10000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_third_r.bets['5000'] > 0"
                class="table-chips for-5000"
              >
                <img src="../assets/chips/5000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_third_r.bets['1000'] > 0"
                class="table-chips for-1000"
              >
                <img src="../assets/chips/1000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_third_r.bets['500'] > 0"
                class="table-chips for-500"
              >
                <img src="../assets/chips/500.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_third_r.bets['100'] > 0"
                class="table-chips for-100"
              >
                <img src="../assets/chips/100.png" alt="" />
              </div>
            </div>
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
            <div class="put-chips-panel">
              <div
                v-if="formData.sedia_odd.bets['10000'] > 0"
                class="table-chips for-10000"
              >
                <img src="../assets/chips/10000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_odd.bets['5000'] > 0"
                class="table-chips for-5000"
              >
                <img src="../assets/chips/5000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_odd.bets['1000'] > 0"
                class="table-chips for-1000"
              >
                <img src="../assets/chips/1000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_odd.bets['500'] > 0"
                class="table-chips for-500"
              >
                <img src="../assets/chips/500.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_odd.bets['100'] > 0"
                class="table-chips for-100"
              >
                <img src="../assets/chips/100.png" alt="" />
              </div>
            </div>
            <div class="put-money-panel" v-show="formData.sedia_odd.price > 0">
              <span class="put-value">{{ formData.sedia_odd.price }}</span>
            </div>
          </div>
          <div
            class="desk-chip-panel flex center"
            @click="putMoneyOnBoard('sedia_third_w')"
          >
            1:{{ desktop.sedia_third_w.maxrate }}
            <div class="put-chips-panel">
              <div
                v-if="formData.sedia_third_w.bets['10000'] > 0"
                class="table-chips for-10000"
              >
                <img src="../assets/chips/10000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_third_w.bets['5000'] > 0"
                class="table-chips for-5000"
              >
                <img src="../assets/chips/5000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_third_w.bets['1000'] > 0"
                class="table-chips for-1000"
              >
                <img src="../assets/chips/1000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_third_w.bets['500'] > 0"
                class="table-chips for-500"
              >
                <img src="../assets/chips/500.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_third_w.bets['100'] > 0"
                class="table-chips for-100"
              >
                <img src="../assets/chips/100.png" alt="" />
              </div>
            </div>
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
            <div class="put-chips-panel">
              <div
                v-if="formData.sedia_fourth_w.bets['10000'] > 0"
                class="table-chips for-10000"
              >
                <img src="../assets/chips/10000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_fourth_w.bets['5000'] > 0"
                class="table-chips for-5000"
              >
                <img src="../assets/chips/5000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_fourth_w.bets['1000'] > 0"
                class="table-chips for-1000"
              >
                <img src="../assets/chips/1000.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_fourth_w.bets['500'] > 0"
                class="table-chips for-500"
              >
                <img src="../assets/chips/500.png" alt="" />
              </div>
              <div
                v-if="formData.sedia_fourth_w.bets['100'] > 0"
                class="table-chips for-100"
              >
                <img src="../assets/chips/100.png" alt="" />
              </div>
            </div>
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
    <div
      class="animation-layout"
      :class="{
        'scale-move': ani.scaleMove,
        'scale-move-out': ani.scaleMoveOut
      }"
    >
      <div class="bowl-panel dish-animation ">
        <img
          class="bowl"
          :class="{ 'open-animation': ani.openBowl }"
          src="../assets/dish/bowl.png"
          alt=""
        />
        <img class="plate" src="../assets/dish/plate.png" alt="" />
        <div
          v-show="paperGroup.p1"
          class="paper-panel-css paper-panel-1 fadein-animation non-visible"
        >
          <div class="relative" style="height: 100%; width: 100%">
            <div
              class="paper paper-1"
              :class="{
                'red-paper': paper.p1 === '0',
                'white-paper': paper.p1 === '1'
              }"
            ></div>
            <div
              class="paper paper-2"
              :class="{
                'red-paper': paper.p2 === '0',
                'white-paper': paper.p2 === '1'
              }"
            ></div>
            <div
              class="paper paper-3"
              :class="{
                'red-paper': paper.p3 === '0',
                'white-paper': paper.p3 === '1'
              }"
            ></div>
            <div
              class="paper paper-4"
              :class="{
                'red-paper': paper.p4 === '0',
                'white-paper': paper.p4 === '1'
              }"
            ></div>
          </div>
        </div>
        <div
          v-show="paperGroup.p2"
          class="paper-panel-css paper-panel-2 fadein-animation non-visible"
        >
          <div class="relative" style="height: 100%; width: 100%">
            <div
              class="paper paper-1"
              :class="{
                'red-paper': paper.p1 === '0',
                'white-paper': paper.p1 === '1'
              }"
            ></div>
            <div
              class="paper paper-2"
              :class="{
                'red-paper': paper.p2 === '0',
                'white-paper': paper.p2 === '1'
              }"
            ></div>
            <div
              class="paper paper-3"
              :class="{
                'red-paper': paper.p3 === '0',
                'white-paper': paper.p3 === '1'
              }"
            ></div>
            <div
              class="paper paper-4"
              :class="{
                'red-paper': paper.p4 === '0',
                'white-paper': paper.p4 === '1'
              }"
            ></div>
          </div>
        </div>
        <div
          v-show="paperGroup.p3"
          class="paper-panel-css paper-panel-3 fadein-animation non-visible"
        >
          <div class="relative" style="height: 100%; width: 100%">
            <div
              class="paper paper-1"
              :class="{
                'red-paper': paper.p1 === '0',
                'white-paper': paper.p1 === '1'
              }"
            ></div>
            <div
              class="paper paper-2"
              :class="{
                'red-paper': paper.p2 === '0',
                'white-paper': paper.p2 === '1'
              }"
            ></div>
            <div
              class="paper paper-3"
              :class="{
                'red-paper': paper.p3 === '0',
                'white-paper': paper.p3 === '1'
              }"
            ></div>
            <div
              class="paper paper-4"
              :class="{
                'red-paper': paper.p4 === '0',
                'white-paper': paper.p4 === '1'
              }"
            ></div>
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
import { lotteryrates, cpbuy, loadopencode, checkislogin } from "@/api";
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
      "pleasePutChip",
      "balance"
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
    console.log(this.formData.sedia_even.bets["10000"]);
    const _this = this;

    function openCode() {
      loadopencode({
        expect: _this.currFullExpect,
        lotteryname: _this.lotteryName
      }).then(e => {
        if (e.sign === false) {
          setTimeout(function() {
            openCode();
          }, 500);
        } else {
          setTimeout(function() {
            console.log("開獎資料:", e.data);
            _this.setPaperByResponse(e.data);

            setTimeout(function() {
              _this.openBowl();
              //TODO 顯示下注結果
              setTimeout(function() {
                _this.$store
                  .dispatch("views/disableAllNoticeState")
                  .then(() => {
                    _this.$store.dispatch("views/openEvenNotice").then(() => {
                      console.log("show");
                    });
                  });
              }, 2000);

              setTimeout(function() {
                _this.ani.scaleMoveOut = true;

                // 開始復歸動作
                setTimeout(function() {
                  // 還原動畫（恢復初始）
                  // 將按鈕狀態復原、準備下一局、檢查是否有投注（是否開啟延續上把）

                  _this.$bus.$emit("updateTotalBet", 0);
                  _this.clearDesktopMonetAndChips();
                  _this.ani.scaleMoveOut = false;
                  _this.ani.scaleMove = false;
                  _this.ani.openBowl = false;
                  _this.$bus.$emit("refreshBtnState");

                  console.log("復歸完成");
                  _this.startToNewGame();
                }, 3000);
              }, 4000);
            }, 1000);
          }, 1000);
        }
      });
    }
    this.$bus.$on("scaleMove", function() {
      _this.ani.scaleMove = true;
      openCode();
    });
    this.$bus.$on("btnAgree", function() {
      if (_this.deskInfo.index === _this.currIndex) {
        // 如果store紀錄的桌號與當前桌相同
        let list = [];
        for (let key in _this.formData) {
          if (_this.formData[key].price > 0) {
            list.push(_this.formData[key]);
          }
        }

        // 如果有下注
        if (list.length > 0) {
          // 下注後，重新向後端取得資料刷新錢包
          setTimeout(function() {
            checkislogin().then(res => {
              _this.$store.dispatch("views/setBalance", res.data.balance);
            });
          }, 1000);

          _this.$store.dispatch("views/disableAllNoticeState").then(() => {
            _this.$store.dispatch("views/openOnReady").then(() => {
              _this.$bus.$emit("refreshBtnState");
            });
          });

          cpbuy({
            orderList: list,
            expect: _this.currFullExpect,
            lotteryname: _this.lotteryName
          }).then(() => {
            // 當投注成功後，應顯示onReady狀態、鎖住桌面投注、鎖住選籌碼、鎖住三個按鈕
            _this.put_list = JSON.parse(JSON.stringify(_this.formData));
          });
        } else {
          // 如果沒下注
        }
      }
    });
    this.$bus.$on("btnCancel", function() {
      _this.$store.dispatch("views/setTotalBet", 0);
      _this.clearDesktopMonetAndChips();
    });
    this.$bus.$on("btnAgain", function() {
      const _this = this;
      const lastPutList = _this.desktopView[_this.currIndex - 1].last_put_list;
      console.log("響應", lastPutList);
    });
    this.$bus.$on("refreshBtnState", function() {
      _this.$nextTick(function() {
        _this.$set(
          _this,
          "desk_chip_cover",
          _this.desktopView[_this.currIndex - 1].chips_plate
        );
      });
    });
    const index = this.currIndex - 1;
    this.$set(this.state, "btnAgain", this.desktopView[index].btn_again);
    this.$set(this.state, "btnCancel", this.desktopView[index].btn_cancel);
    this.$set(this.state, "btnAgree", this.desktopView[index].btn_agree);

    _this.startToNewGame();
  },
  data() {
    return {
      put_list: {},
      desk_chip_cover: false,
      ani: {
        scaleMove: false,
        scaleMoveOut: false,
        openBowl: false
      },
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
          price: 0,
          bets: {
            10000: 0,
            5000: 0,
            1000: 0,
            500: 0,
            100: 0
          }
        },
        sedia_odd: {
          playid: "sedia_odd",
          price: 0,
          bets: {
            10000: 0,
            5000: 0,
            1000: 0,
            500: 0,
            100: 0
          }
        },
        sedia_fourth_r: {
          playid: "sedia_fourth_r",
          price: 0,
          bets: {
            10000: 0,
            5000: 0,
            1000: 0,
            500: 0,
            100: 0
          }
        },
        sedia_third_r: {
          playid: "sedia_third_r",
          price: 0,
          bets: {
            10000: 0,
            5000: 0,
            1000: 0,
            500: 0,
            100: 0
          }
        },
        sedia_third_w: {
          playid: "sedia_third_w",
          price: 0,
          bets: {
            10000: 0,
            5000: 0,
            1000: 0,
            500: 0,
            100: 0
          }
        },
        sedia_fourth_w: {
          playid: "sedia_fourth_w",
          price: 0,
          bets: {
            10000: 0,
            5000: 0,
            1000: 0,
            500: 0,
            100: 0
          }
        }
      },
      state: {
        btnAgain: false,
        btnCancel: false,
        btnAgree: false
      },
      paperGroup: {
        p1: false,
        p2: false,
        p3: false
      },
      paper: {
        p1: 0,
        p2: 0,
        p3: 0,
        p4: 0
      }
    };
  },
  methods: {
    putMoneyOnBoard(id) {
      const even = this.formData["sedia_even"].price;
      const odd = this.formData["sedia_odd"].price;

      if (
        (id === "sedia_even" && odd !== 0) ||
        (id === "sedia_odd" && even !== 0)
      ) {
        console.log("不能同時下單雙注");
        return;
      } else {
        this.formData[id].price += this.plateChip;

        const _this = this;
        let total = 0;
        for (let key in _this.formData) {
          total += _this.formData[key].price;
        }

        _this.formData[id].bets[_this.plateChip] += 1;
        _this.$bus.$emit("updateTotalBet", total);
      }
    },
    openBowl() {
      console.log("開晚");
      const _this = this;
      _this.ani.openBowl = true;
    },
    setPaperByResponse(data) {
      const _this = this;
      const openCodeList = data.opencode.split(",");

      this.paperGroup.p1 = false;
      this.paperGroup.p2 = false;
      this.paperGroup.p3 = false;

      this.paper.p1 = openCodeList[0];
      this.paper.p2 = openCodeList[1];
      this.paper.p3 = openCodeList[2];
      this.paper.p4 = openCodeList[3];

      const r = Math.random() * 100;

      if (r <= 33) {
        _this.paperGroup.p1 = true;
      } else if (r > 33 && r <= 66) {
        _this.paperGroup.p2 = true;
      } else {
        _this.paperGroup.p3 = true;
      }
    },
    clearDesktopMonetAndChips() {
      const _this = this;
      for (let key in _this.formData) {
        _this.formData[key].price = 0;
        for (let key2 in _this.formData[key].bets) {
          _this.formData[key].bets[key2] = 0;
        }
      }
    },
    startToNewGame() {
      // 應檢查是否已下過注
      // 以下功能應針對"全桌"
      console.log("開新局");
      const _this = this;

      if (Object.keys(_this.put_list).length > 0) {
        _this.$store
          .dispatch("views/setLastPutListForAll", _this.put_list)
          .then(() => {
            _this.put_list = {};
            const lastPutList = JSON.parse(
              JSON.stringify(
                _this.desktopView[_this.currIndex - 1].last_put_list
              )
            );
            if (_this.balance > 100) {
              if (Object.keys(lastPutList).length > 0) {
                console.log("有進對吧");
                _this.$store.dispatch("views/setBtnAgainForAll", true);
              }
            }
          });
      }

      if (_this.balance > 100) {
        _this.$store.dispatch("views/setBtnCancelForAll", true);
        _this.$store.dispatch("views/setBtnAgreeForAll", true);
        _this.$store.dispatch("views/setChipsPlateForAll", true);
      }
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

          > .table-chips {
            width: 30px;
            margin: -4px;
            height: 100%;
            position: relative;
            top: 0;
            left: 0;
            transition-duration: 1s;

            img {
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: auto;
            }
          }
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
.disable-chip-cover-panel * {
  pointer-events: none !important;
  cursor: auto !important;
}

.bowl-shake-animation {
  animation: aniShake linear 0.8s;
  animation-delay: 1.1s;
  animation-iteration-count: 2;
  transform-origin: 50% 50%;
}

@keyframes aniShake {
  0% {
    transform: translate(0px, 0px);
  }
  10% {
    transform: translate(0px, 10px);
  }
  20% {
    transform: translate(0px, -15px);
  }
  35% {
    transform: translate(0px, -35px);
  }
  40% {
    transform: translate(0px, 10px);
  }
  50% {
    transform: translate(0px, -15px);
  }
  60% {
    transform: translate(0px, -35px);
  }
  70% {
    transform: translate(0px, 15px);
  }
  80% {
    transform: translate(0px, 0px);
  }
  90% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.open-animation {
  animation: aniOpen ease-in 3s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards;
}

@keyframes aniOpen {
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  5% {
    transform: translate(0px, 5px) rotate(0deg);
  }
  10% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  35% {
    transform: translate(-63px, -63px) rotate(-20deg);
  }
  37% {
    transform: translate(-120px, -160px) rotate(-30deg);
    opacity: 1;
  }
  55% {
    transform: translate(-120px, -160px) rotate(-30deg);
    opacity: 0;
  }
  100% {
    transform: translate(-120px, -160px) rotate(-30deg);
    opacity: 0;
  }
}

.static-animation {
  animation: aniStatic linear 4s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
}

@keyframes aniStatic {
  0% {
    transform: translate(-120px, -160px) rotate(-30deg);
  }
  100% {
    transform: translate(-120px, -160px) rotate(-30deg);
  }
}

/*.scale-move {*/
/*  animation: scalePanelAni ease-out 0.8s, scalePanelBackAni linear 0.8s;*/
/*  animation-delay: 0.2s, 5.4s;*/
/*  animation-iteration-count: 1;*/
/*  transform-origin: 50% 50%;*/
/*  animation-fill-mode: forwards;*/
/*}*/

.scale-move {
  animation: scalePanelAni ease-out 0.8s;
  animation-delay: 0.2s;
  animation-iteration-count: 1;
  transform-origin: 50%;
  animation-fill-mode: forwards;
}

.scale-move-out {
  animation: scalePanelBackAni ease-out 0.8s;
  animation-iteration-count: 1;
  transform-origin: 50%;
  animation-fill-mode: forwards;
}

@keyframes scalePanelAni {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  100% {
    transform: translate(0px, 100px) scale(1.3);
  }
}

@keyframes scalePanelBackAni {
  0% {
    transform: translate(0px, 100px) scale(1.3);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
</style>
