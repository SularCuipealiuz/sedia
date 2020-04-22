<template>
  <section id="horizontalCover" class="full-content flex center">
    <div class="flex center column small-panel">
      <span class="img-box">
        <img src="../assets/portrait.png" alt="" />
      </span>
      <span>为了更好的体验，请使用横屏浏览</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "horizontalCover"
};
</script>

<style lang="scss" scoped>
@media screen and (orientation: landscape) {
  #horizontalCover {
    display: none !important;
  }
}

.full-content {
  width: 100%;
  height: 100%;
  background: #333;
  position: fixed;
  z-index: 999;
  overflow: hidden;
  color: white;
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

.small-panel {
  width: 300px;
  height: 300px;

  img {
    transform: translateY(-50%);
  }
}

.img-box {
  width: 80px;
  height: 80px;

  img {
    width: 100%;
    animation: page-landscapeAni 1.2s ease infinite alternate;
  }
}

@keyframes page-landscapeAni {
  0% {
    transform: rotate(90deg);
  }
  35% {
    transform: rotate(90deg);
  }
  70% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
