import request from "@/utils/request";

function jsonToFormData(json) {
  let formData = new FormData();
  for (let key in json) {
    formData.append(key, json[key]);
  }
  return formData;
}

// 登入
export function loginDo(data) {
  data = jsonToFormData(data);
  return request({
    url: "/Public.loginDo",
    method: "post",
    data
  });
}
// 確認登入
export function checkislogin() {
  return request({
    url: "/Apijiekou.checkislogin",
    method: "post"
  });
}
// 多桌
export function lotterylists(data) {
  data = jsonToFormData(data);
  return request({
    url: "/Apijiekou.lotterylists",
    method: "post",
    data
  });
}
// 玩法彩種
export function lotteryrates(data) {
  data = jsonToFormData(data);
  return request({
    url: "/Apijiekou.lotteryrates",
    method: "post",
    data
  });
}
// 開獎時間
export function lotterytimes(data) {
  data = jsonToFormData(data);
  return request({
    url: "/Apijiekou.lotterytimes",
    method: "post",
    data
  });
}

// 開獎號碼
export function loadopencode(data) {
  data = jsonToFormData(data);
  return request({
    url: "/Apijiekou.loadopencode",
    method: "post",
    data
  });
}

// 玩家投注
export function cpbuy(data) {
  // data = jsonToFormData(data);
  return request({
    url: "/Apijiekou.cpbuy",
    method: "post",
    data
  });
}

// 投注內容
export function betsContent(data) {
  data = jsonToFormData(data);
  return request({
    url: "/Apijiekou.betsContent",
    method: "post",
    data
  });
}

// 投注結果
export function betsResult(data) {
  data = jsonToFormData(data);
  return request({
    url: "/Apijiekou.betsResult",
    method: "post",
    data
  });
}

// 路牌
export function lotteryopencodes(data) {
  data = jsonToFormData(data);
  return request({
    url: "/Apijiekou.lotteryopencodes",
    method: "post",
    data
  });
}
