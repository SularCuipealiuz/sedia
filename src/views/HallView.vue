<template>
  <section id="hallPanel" class="flex column">
    <div class="hall-header flex pull-left">
      <img class="title" src="../assets/hall/rectangle.png" alt="" />
      <div class="icon-btn-panel">
        <div class="icon-btn">
          <img src="../assets/hall/info-circle.png" alt="" />
        </div>
        <div class="icon-btn exit-icon-btn" @click="exitGame">
          <img src="../assets/hall/sign-out.png" alt="" />
        </div>
      </div>
    </div>
    <div class="flex row desk-panel">
      <div
        class="desktop flex column"
        v-for="(e, i) in desktopObjList"
        :key="i"
      >
        <div class="padding-panel">
          <div class="odds flex pull-left">
            <span>賭注賠率：{{ e.control_rate }}</span>
          </div>
          <div class="history flex column">
            <div class="h-header">
              <img src="../assets/hall/Users.png" alt="" />
              <span>{{ e.onlinePlayerCount }}</span>
              <img src="../assets/hall/database.png" alt="" />
              <span>{{ e.control_rate }}</span>
            </div>
            <div class="h-content flex">
              <div
                v-for="(str, i) in sliceHistoryList(e.historyList)"
                :key="i"
                class="history-plate flex row"
              >
                <div class="label">{{ i + 1 }}</div>
                <div class="sedia-history-data">
                  <span
                    class="flex row paper-item"
                    v-for="(p, i) in returnPaperColor(str)"
                    :key="i"
                  >
                    <img
                      v-if="p === '1'"
                      src="../assets/hall/oval-red.png"
                      alt=""
                      style="margin-top: -1px;"
                    />
                    <img v-else src="../assets/hall/oval-white.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <img class="border" src="../assets/hall/border.png" alt="" />
          <img class="girl" :src="imgList[i % 4]" alt="" />
          <div class="bg-t-panel flex">
            <img src="../assets/hall/bg-t.png" alt="" />
          </div>
          <div class="bg-b-panel flex flex-start">
            <img src="../assets/hall/bg-b.png" alt="" />
            <div class="btn-game flex center" @click="openDesktop(e)">
              <span>進入遊戲</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { lotterylists, lotteryopencodes, lotterytimes } from "@/api/index";
import { mapGetters } from "vuex";

export default {
  name: "HallView",
  created() {
    const _this = this;
    lotterylists({
      cptype: "sedia"
    }).then(res => {
      _this.desktopTotal = res.data.length;
      let payload = res.data.map(e => {
        return {
          index: e.id ? e.id : "",
          lotteryname: e.name ? e.name : "",
          cptype: e.typeid ? e.typeid : "",
          title: e.title ? e.title : "",
          control_rate: e.control_rate ? e.control_rate : ""
        };
      });
      this.$store.dispatch("views/setDesktopObjList", payload).then(() => {
        console.log("close");
      });

      this.updateHallView();
    });
  },
  computed: {
    ...mapGetters([
      "stopWatchTime",
      "desktopView",
      "currIndex",
      "desktopObjList",
      "currFullExpect",
      "lotteryName",
      "redirectHailURL"
    ])
  },
  data() {
    return {
      desktopTotal: 0,
      imgList: [
        require("../assets/hall/girl1.png"),
        require("../assets/hall/girl2.png"),
        require("../assets/hall/girl3.png"),
        require("../assets/hall/girl4.png")
      ]
    };
  },
  methods: {
    exitGame() {
      console.log("exit");
      const _this = this;
      window.parent.postMessage(
        {
          redirectHailURL: _this.redirectHailURL
        },
        "*"
      );
    },
    sliceHistoryList(list) {
      if (list !== undefined) {
        if (list.length > 10) {
          return list.slice(0, 10);
        } else {
          return list;
        }
      } else {
        return [];
      }
    },
    openDesktop(obj) {
      const _this = this;
      this.$store.dispatch("views/openDesktopView", obj).then(e => {
        //TODO 開啟UI、呼叫入桌API
        console.log("本桌资讯：", e);
        _this.$bus.$emit("refreshBtnState");

        const total = _this.desktopView[_this.currIndex - 1].total_bet;
        _this.$bus.$emit("updateTotalBet", total);
      });
    },
    returnPaperColor(str) {
      return str.split(",");
    },
    startTimer() {
      const _this = this;
      this.timer = setInterval(function() {
        _this.$store.dispatch(
          "views/setStopWatchTimer",
          parseInt(_this.stopWatchTime) - 1
        );

        const inDesktop = _this.desktopView.some(e => e.visible === true);

        if (_this.stopWatchTime === 0 && inDesktop === true) {
          _this.stopTimer().then(() => {
            console.log("over");

            setTimeout(function() {
              _this.$store.dispatch("views/setShowClock", false);
              _this.$store.dispatch("views/disableAllNoticeState").then(() => {
                _this.$store.dispatch("views/openIsOpening").then(() => {
                  _this.$bus.$emit("refreshBtnState");
                  setTimeout(function() {
                    _this.$bus.$emit("scaleMove");
                  }, 1000);
                });
              });
            }, 1000);

            // 當時間結束時，可以晚個幾秒鐘刷新大廳
            // 撈到開獎為止才刷新時間
            //TODO 撈到開獎結果後才進行下一輪

            setTimeout(function() {
              _this.updateHallView();
            }, 4000);
          });
        }
      }, 1000);
    },
    async stopTimer() {
      await clearInterval(this.timer);
    },
    updateHallView() {
      const _this = this;
      for (let key in _this.desktopObjList) {
        let historyList = [];
        lotteryopencodes({
          num: "50",
          lotteryname: _this.desktopObjList[key].lotteryname
        }).then(res => {
          for (let i in res.data) {
            historyList.push(res.data[i].opencode);
          }
          _this.$set(_this.desktopObjList[key], "historyList", historyList);
        });

        lotterytimes({
          cptype: "sedia",
          lotteryname: _this.desktopObjList[key].lotteryname
        }).then(res => {
          _this.$set(
            _this.desktopObjList[key],
            "onlinePlayerCount",
            res.data.onlinePlayerCount
          );
          _this.$set(
            _this.desktopObjList[key],
            "playerBetsInfo",
            res.data.playerBetsInfo
          );
          _this.$set(
            _this.desktopObjList[key],
            "remainTime",
            res.data.remainTime
          );
          this.$set(
            _this.desktopObjList[key],
            "currFullExpect",
            res.data.currFullExpect
          );
          this.$set(
            _this.desktopObjList[key],
            "lastFullExpect",
            res.data.lastFullExpect
          );
          if (key === "0") {
            //拿到時間後，將第一桌時間送至store（以第一桌看齊）
            _this.$store
              .dispatch(
                "views/setStopWatchTimer",
                _this.desktopObjList[0].remainTime
              )
              .then(() => {
                _this.startTimer();
              });

            _this.$store.dispatch(
              "views/setCurrFullExpect",
              _this.desktopObjList[0].currFullExpect
            );
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#hallPanel {
  height: 100%;
  width: 100%;
  background-color: #1a0531;
  justify-content: flex-start;
  align-items: center;
}

.flex {
  display: flex;
}

.pull-left {
  justify-content: flex-start;
  align-items: center;
}

.center {
  justify-content: center;
  align-items: center;
}

.column {
  flex-direction: column;
}

.flex-start {
  justify-content: center;
  align-items: flex-start;
}

.row {
  flex-direction: row;
}

.hall-header {
  width: 100%;
  flex: 0 0 15%;
  min-height: 65px;
  position: relative;
  background-color: black;

  > .icon-btn-panel {
    position: absolute;
    right: 0;
    height: 40%;
    width: 130px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 10px;

    > .icon-btn {
      cursor: pointer;
      height: 100%;

      > img {
        height: 100%;
        width: initial;
      }
    }
  }
  > .title {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }

  > .cover {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
}

.desk-panel {
  width: 100%;
  flex: 0 0 85%;
  justify-content: flex-start;
  align-items: center;
  color: white;
  overflow-x: auto;
  overflow-y: hidden;
}

@media only screen and (min-width: 850px) {
  .desk-panel::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  .desk-panel::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  .desk-panel::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
}

.desktop {
  width: 33%;
  min-width: calc(calc(calc(100vh * 0.75) - 30px) * 0.75);
  z-index: 500;
  box-sizing: border-box;
  overflow: hidden;
  margin-left: 25px;
  pointer-events: none;

  > .padding-panel {
    position: relative;
    padding-bottom: 134%;

    > .history {
      position: absolute;
      bottom: 40%;
      right: 5%;
      width: 62%;
      height: 40%;
      z-index: 201;

      > .h-header {
        flex: 0 0 20%;
        background-color: rgba(44, 62, 80, 0.8);
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        > img {
          height: 60%;
        }

        > span {
          height: 100%;
          font-size: 12px;
          margin-left: -5px;
          margin-right: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      > .h-content {
        flex: 0 0 80%;
        max-height: 80%;
        background-color: rgba(0, 0, 0, 0.8);
        flex-wrap: wrap;
        align-content: flex-start;

        > .history-plate {
          width: 50%;
          height: 20%;
          background-color: rgba(0, 0, 0, 0.8);
          > .sedia-history-data {
            height: 100%;
            justify-content: space-evenly;
            display: flex;
            align-items: center;
            flex-direction: row;
            flex: 0 0 80%;
            background-image: url("../assets/hall/ovalbg.png");
            background-repeat: no-repeat;
            background-size: contain;
            box-sizing: border-box;
            position: relative;

            > span {
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;

              > img {
                height: 9px;
                width: 9px;
              }
            }
          }
          > .label {
            flex: 0 0 30%;
            font-size: 10px;
            margin: 0 -3px;
            /*background-color: #42b983;*/
          }
        }
      }
    }

    > .odds {
      position: absolute;
      top: 5%;
      left: 0;
      right: 0;
      margin: auto;
      width: 90%;
      z-index: 105;
      background-color: rgba(44, 62, 80, 0.45);
      padding: 4px 0 4px 15px;
      box-sizing: border-box;
      border-radius: 5px;
      font-size: 14px;
      > span {
        color: white;
      }
    }

    > .border {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 300;
    }

    > .girl {
      position: absolute;
      left: 4%;
      bottom: 39%;
      height: 40%;
      z-index: 200;
    }

    > .bg-t-panel {
      height: 60%;
      width: 95%;
      box-sizing: border-box;
      position: absolute;
      top: 1%;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 101;
      > img {
        width: 100%;
      }
    }
    > .bg-b-panel {
      height: 40%;
      width: 95%;
      background-color: #34185d;
      position: absolute;
      top: 60%;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 100;

      display: flex;
      justify-content: center;
      align-items: center;

      > img {
        width: 100%;
      }

      > .btn-game {
        pointer-events: auto;
        top: 45%;
        width: 60%;
        height: 35%;
        background-image: url("../assets/hall/btn.png");
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 300;
        position: absolute;
        cursor: pointer;
        > span {
          margin-top: -4px;
        }
      }
    }
  }
}
</style>
