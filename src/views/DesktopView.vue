<template>
  <section class="room-desktop">
    <div class="desk-cover">
      <div class="desk-chip-cover flex">
        <div class="flex row left-side">
          <div class="desk-chip-panel flex center">
            {{ desktop.sedia_even.title }}
            <br />
            1:{{ desktop.sedia_even.maxrate }}
          </div>
          <div class="desk-holder"></div>
          <div class="desk-chip-panel flex center">
            1:{{ desktop.sedia_fourth_r.maxrate }}
          </div>
          <div class="desk-chip-panel flex center">
            1:{{ desktop.sedia_third_r.maxrate }}
          </div>
        </div>
        <div class="flex row right-side">
          <div class="desk-holder"></div>
          <div class="desk-chip-panel flex center">
            {{ desktop.sedia_odd.title }}
            <br />
            1:{{ desktop.sedia_odd.maxrate }}
          </div>
          <div class="desk-chip-panel flex center">
            1:{{ desktop.sedia_third_w.maxrate }}
          </div>
          <div class="desk-chip-panel flex center">
            1:{{ desktop.sedia_fourth_w.maxrate }}
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
import { lotteryrates } from "@/api";

export default {
  name: "DesktopView",
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
  data() {
    return {
      desktop: {
        sedia_even: "",
        sedia_odd: "",
        sedia_fourth_r: "",
        sedia_third_r: "",
        sedia_third_w: "",
        sedia_fourth_w: ""
      }
    };
  },
  methods: {
    testOn() {},
    testOff() {}
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

  > .bowl-panel {
    zoom: .4;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    .bowl {
      position: absolute;
      z-index: 200;
      width: auto !important;
      top: 0%;
    }

    .plate {
      position: absolute;
      z-index: 100;
      width: auto !important;
      top: 2%;
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
      top: 11%;
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
