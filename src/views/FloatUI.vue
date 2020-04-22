<template>
  <section id="floatUserInterface" class="flex center">
    <div class="ui-header flex row">
      <div class="header-bar-left">
        <div class="name-panel">
          <span>{{ username }}</span>
        </div>
        <div class="cash-panel flex center">
          <div class="coin">
            <div class="front">
              <div class="star">
                <span class="currency">$</span>
              </div>
            </div>
          </div>
          <span class="cash flex center">
            <span class="value">{{ Math.floor(balance) }}</span>
          </span>
        </div>
      </div>
      <div class="header-bar-right">
        <div class="play-list">玩家清單<span class="highlight">15</span>人</div>
      </div>
    </div>
    <div class="ui-body flex row">
      <div class="ui-left flex column">
        <div class="float-btn flex center">
          <img src="../assets/table/reader.svg" alt="" />
        </div>
        <div class="float-btn flex center" @click="goToHall">
          <img
            src="../assets/table/exit.svg"
            style="transform: rotateY(-180deg)"
            alt=""
          />
        </div>
      </div>
      <div class="ui-right flex column">
        <div class="float-btn flex center">
          <span>色碟紀錄表</span>
        </div>
      </div>
    </div>
    <div class="ui-footer flex row">
      <div class="footer-bar footer-bar-left">
        <div class="flex row score-panel">
          <div class="flex center num-panel">
            <div class="flex center column num-box">
              <span>NO.</span>
              <span>{{ currIndex }}</span>
            </div>
          </div>
          <div class="flex column total-bet-box">
            <span>Total Bet</span>
            <div class="flex center black-box">
              <span>{{ getDesktopInfo(desktopView).total_bet }}</span>
            </div>
          </div>
          <div class="flex column win-value-box">
            <span>Win</span>
            <div class="flex center black-box">
              <span class="highlight">{{
                getDesktopInfo(desktopView).win
              }}</span>
            </div>
          </div>
          <div class="flex center auto-button-panel">
            <div class="flex center auto-button">
              <span>AUTO PLAY</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bar footer-bar-right flex row">
        <div class="float-btn flex column">
          <span>延續上把</span>
          <img src="../assets/table/refresh-24px.svg" alt="" />
        </div>
        <div class="float-btn flex column">
          <span>取消押注</span>
          <img src="../assets/table/close-24px.svg" alt="" />
        </div>
        <div class="float-btn flex column">
          <span>確認押注</span>
          <img src="../assets/table/check-24px.svg" alt="" />
        </div>
      </div>
      <div class="plate-panel flex">
        <div class="plate-bg">
          <div class="chip-panel flex chip-evenly">
            <div class="chips-img">
              <img
                class="chip-100"
                src="../assets/chips/100.png"
                alt=""
                name="100"
              />
              <div class="shine-panel">
                <div class="shine"></div>
              </div>
            </div>
            <div class="chips-img">
              <img
                class="chip-500"
                src="../assets/chips/500.png"
                alt=""
                name="500"
              />
              <div class="shine-panel">
                <div class="shine"></div>
              </div>
            </div>
            <div class="chips-img">
              <img
                class="chip-1000"
                src="../assets/chips/1000.png"
                alt=""
                name="1000"
              />
              <div class="shine-panel">
                <div class="shine"></div>
              </div>
            </div>
            <div class="chips-img ">
              <img
                class="chip-5000"
                src="../assets/chips/5000.png"
                alt=""
                name="5000"
              />
              <div class="shine-panel">
                <div class="shine"></div>
              </div>
            </div>
            <div class="chips-img">
              <div class="shine-panel">
                <div class="shine"></div>
              </div>
              <img
                class="chip-10000"
                src="../assets/chips/10000.png"
                alt=""
                name="10000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FloatUserInterface",
  computed: {
    ...mapGetters(["desktopView", "currIndex", "username", "balance"])
  },
  methods: {
    goToHall() {
      this.$store.dispatch("views/closeDesktopView").then(() => {
        console.log("close");
      });
    },
    getDesktopInfo(list) {
      if (list.length === 0) {
        return "";
      } else {
        const _this = this;
        return list.find(e => e.index === _this.currIndex);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$main-color: #52187b;
$highlight: #ffc51a;

#floatUserInterface {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  background-color: transparent;
  flex-direction: column;
  pointer-events: none;
}

.highlight {
  color: $highlight;
  margin: 0 2px;
}

.flex {
  display: flex;
}

.center {
  justify-content: center;
  align-items: center;
}

.between {
  justify-content: space-between;
  align-items: center;
}

.chip-evenly {
  justify-content: space-evenly;
  align-items: flex-start;
}

.column {
  flex-direction: column;
}

.row {
  flex-direction: row;
}

.float-btn {
  pointer-events: auto;
  background: linear-gradient(125deg, #e9e5ac 6%, #d6bd56 63%);
}

.float-btn:hover {
  pointer-events: auto;
  background: linear-gradient(125deg, #f5f1b5 6%, #edd15f 63%);
}

.ui-header,
.ui-body,
.ui-footer {
  width: 100%;
}

.ui-header {
  flex: 0 0 17%;
  min-height: 70px;

  > .header-bar-left,
  .header-bar-right {
    flex: 0 0 50%;
  }

  .header-bar-left {
    padding-top: 10px;
    .name-panel {
      position: relative;
      height: 50%;

      > span {
        position: absolute;
        left: 10px;
        font-size: 18px;
        color: white;
      }
    }

    .cash-panel {
      width: 110px;
      position: relative;
      height: 50%;
      color: $highlight;
      background-color: rgba(0, 0, 0, 0.3);
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;

      .cash {
        position: absolute;
        left: 35px;
        font-size: 16px;
        > .value {
          margin-top: 2px;
        }
      }

      .coin {
        position: absolute;
        left: -60px;
        height: 150px;
        width: 150px;
        animation: coin-rotate 2s linear infinite;

        @keyframes coin-rotate {
          from {
            transform: scale(0.1) rotateY(0deg);
          }
          to {
            transform: scale(0.1) rotateY(360deg);
          }
        }
      }

      .coin .front,
      .coin .back {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 150px;
        width: 150px;
        background: #ffbd0b;
        border-radius: 50%;
        border-top: 7px solid #ffd84c;
        border-left: 7px solid #ffd84c;
        border-right: 7px solid #d57e08;
        border-bottom: 7px solid #d57e08;
        transform: rotate(44deg);

        &:before {
          content: "";
          position: absolute;
          width: 100px;
          height: 100px;
          background: #f0a608;
          border-radius: 50%;
          border-bottom: 5px solid #ffd84c;
          border-right: 5px solid #ffd84c;
          border-left: 5px solid #d57e08;
          border-top: 5px solid #d57e08;
          z-index: 2;
        }

        .star {
          display: flex;
          justify-content: center;
          align-items: center;

          .currency {
            font-family: "Montserrat", sans-serif;

            overflow: hidden;
            position: absolute;
            color: #ffbd0b;
            font-size: 80px;
            line-height: 1.7;
            transform: rotate(-44deg);
            width: 100%;
            height: 100%;
            text-align: center;
            text-shadow: 0 10px 0 #cb7407;
            z-index: 3;
            border-radius: 50%;
            top: 0;
            left: 0;
          }
        }

        .shapes {
          transform: rotate(-44deg);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;

          div {
            width: 20px;
            height: 4px;
            background: #d57e08;
            border-top: 2px solid #c47207;
            margin: 75px 7px;

            &:before {
              content: "";
              position: absolute;
              width: 20px;
              height: 4px;
              background: #d57e08;
              border-top: 2px solid #c47207;
              margin: -10px 0;
            }

            &:after {
              content: "";
              position: absolute;
              width: 20px;
              height: 4px;
              background: #d57e08;
              border-top: 2px solid #c47207;
              margin: 8px 0;
            }
          }

          .top {
            font-size: 30px;
            color: #d67f08;
            text-align: center;
            width: 100%;
            position: absolute;
            left: 0;
          }

          .bottom {
            font-size: 30px;
            color: #d67f08;
            text-align: center;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
          }
        }
      }
    }
  }

  .header-bar-right {
    .play-list {
      position: absolute;
      right: 15px;
      top: 15px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 30px;
      color: white;
      background-color: rgba(0, 0, 0, 0.45);
    }
  }
}

.ui-body {
  flex: 1 1 50%;

  .ui-right,
  .ui-left {
    flex: 0 0 50%;
    height: 100%;
    padding-bottom: 30px;
  }

  .ui-left {
    justify-content: flex-end;
    align-items: flex-start;

    > .float-btn {
      border-top-right-radius: 7px;
      border-bottom-right-radius: 7px;
      margin-bottom: 15px;
      height: 42px;
      width: 50px;

      img {
        width: 30px;
      }
    }
  }

  .ui-right {
    justify-content: center;
    align-items: flex-end;

    > .float-btn {
      border-top-left-radius: 7px;
      border-bottom-left-radius: 7px;
      height: 145px;
      width: 40px;
      writing-mode: vertical-lr;
      font-size: 20px;
      color: $main-color;
      font-weight: 800;
    }
  }
}

.ui-footer {
  flex: 0 0 16%;
  justify-content: flex-start;
  max-height: 80px;
  font-size: 1.7vw;
  position: relative;
  > .footer-bar-left {
    flex: 0 0 50%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  > .footer-bar-right {
    flex: 0 0 45%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    > .float-btn {
      height: 90%;
      width: 20%;
      min-width: 60px;
      max-height: 55px;
      margin-left: 3%;

      justify-content: space-evenly;
      align-items: center;
      font-weight: 800;

      color: $main-color;

      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
  }
  > .footer-bar {
    z-index: 100;
    height: 100%;

    > .score-panel {
      background-color: $main-color;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      width: 100%;
      height: 100%;
      padding: 2% 1%;
      box-sizing: border-box;
      color: white;
      pointer-events: auto;

      display: flex;
      justify-content: space-evenly;
      align-items: center;

      > div {
        height: 100%;
      }

      .num-panel {
        flex: 0 0 12%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .num-box {
        }
      }

      .num-panel::after {
        content: "";
        border-right: 1px solid rgba(255, 255, 255, 0.2) !important;
        display: flex;
        flex-direction: row;
        margin: 5px 0;
        height: 85%;
      }

      .total-bet-box,
      .win-value-box {
        flex: 0 0 25%;
        justify-content: space-evenly;
        align-items: center;

        > span {
          flex: 0 0 15%;
        }

        > div {
          flex: 0 0 50%;
          border-radius: 20px;
        }

        .black-box {
          width: 90%;
          background-color: rgba(0, 0, 0, 0.3);
        }
      }

      .auto-button-panel {
        flex: 0 0 28%;
        box-sizing: border-box;

        > .auto-button {
          height: 45px;
          width: 100px;
          border: 2px #280551 solid;
          border-radius: 50px;
          box-sizing: border-box;

          > span {
            color: #280551;
            font-weight: 600;
          }
        }

        > .auto-button:hover {
          height: 45px;
          width: 100px;
          border: 2px #f5bf26 solid;
          border-radius: 50px;
          box-sizing: border-box;

          span {
            color: #f5bf26;
            font-weight: 600;
          }
        }
      }
    }
  }

  > .plate-panel {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    justify-content: center;
    align-items: flex-end;

    .plate-bg {
      position: relative;
      height: 25%;
      width: 100%;
      background-image: url("../assets/table/plate.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position-x: center;
      background-position-y: bottom;

      .chip-panel {
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        height: 100%;
        width: calc(calc(617 * calc(calc(100vh * 0.25) / 164)) * 0.9);

        .shine-panel {
          position: absolute;
          width: 70%;
          height: 70%;
          border-radius: 100%;
          z-index: 400;
          overflow: hidden;
          pointer-events: none;
        }

        > .chips-img {
          z-index: 150;
          flex: 0 0 19%;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          top: -25px;
          pointer-events: auto;
          > img {
            height: 100%;
            width: 100%;
          }
        }

        > .chips-img .shine::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.5);
          content: "";
          -webkit-transition: -webkit-transform 0.6s;
          transition: transform 0.45s;
          opacity: 0;
          -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
            translate3d(0, -100%, 0);
          transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
            translate3d(0, -100%, 0);
          z-index: 300;
        }
        > .chips-img:hover .shine::before {
          opacity: 1;
          -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
            translate3d(0, 100%, 0);
          transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
            translate3d(0, 100%, 0);
        }
      }
    }
  }
}
</style>
