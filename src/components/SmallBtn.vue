<template>
  <div class="btn" @click="fn">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "SmallBtn",
  props: {
    text: { type: String },
    fn: { type: Function }
  }
};
</script>

<style lang="scss" scoped>
$main-color: #34185d;

.btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 40px;
  background-image: url("../assets/table/btn-off.png");
  background-repeat: no-repeat;
  background-size: 90px 40px;
  margin: 0 10px;

  color: $main-color;
  font-size: 18px;
  font-weight: 600;
}
.btn:active {
  background-image: url("../assets/table/btn-on.png") !important;
}
</style>
