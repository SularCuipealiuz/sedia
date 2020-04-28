import { checkislogin } from "@/api/index";

const state = {
  horizontal_cover: false,
  desktop_view: [],
  hint_layout: false,
  black_cover: false,
  hall_view: true,
  notice_view: true,
  float_ui: false,
  history_tab: false,
  curr_index: -1,
  username: "",
  balance: 0,
  stopWatchTime: 0,
  betsRecordURL: "",
  playerCount: 0,
  lotteryName: "",
  desktopObjList: [],
  noticeState: {
    plzChose: false,
    onReady: false,
    isOpening: false,
    pleasePutChip: false,
    pleaseWaitNext: false,
    notReady: false
  },
  plateChip: 0,
  curr_full_expect: ""
};

const mutations = {
  RESET_DESKTOP_VIEW: state => {
    state.desktop_view.forEach(e => {
      e.visible = false;
    });
  },
  SHOW_DESKTOP_VIEW: (state, index) => {
    let desktop = state.desktop_view.find(e => e.index === index);
    desktop.visible = true;
  },
  APPEND_DESKTOP_VIEW: (state, obj) => {
    state.desktop_view.push({
      index: obj.index,
      visible: obj.visible,
      cptype: obj.cptype,
      lotteryname: obj.lotteryname,
      money: obj.money,
      total_bet: obj.total_bet,
      win: obj.win,
      player_count: obj.player_count,
      auto_play: obj.auto_play,
      history_panel: obj.history_panel,
      btn_again: obj.btn_again,
      btn_cancel: obj.btn_cancel,
      btn_agree: obj.btn_agree,
      chips_plate: obj.chips_plate
    });
  },
  SET_HINT_TYPE: (state, type) => {
    state.hint_type = type;
  },
  TOGGLE_BLACK_COVER: (state, boolean) => {
    state.black_cover = boolean;
  },
  SET_FLOAT_UI_STATE: (state, boolean) => {
    state.float_ui = boolean;
  },
  SET_HISTORY_TAB_STATE: (state, boolean) => {
    state.history_tab = boolean;
  },
  SET_HALL_VIEW_STATE: (state, boolean) => {
    state.hall_view = boolean;
  },
  SET_CURR_INDEX: (state, num) => {
    state.curr_index = num;
  },
  SET_USERNAME: (state, string) => {
    state.username = string;
  },
  SET_BALANCE: (state, num) => {
    state.balance = num;
  },
  SET_STOPWATCH_VALUE: (state, num) => {
    state.stopWatchTime = num;
  },
  SET_LOG_URL: (state, url) => {
    state.betsRecordURL = url;
  },
  SET_PLAYER_COUNT: (state, num) => {
    state.playerCount = num;
  },
  SET_LOTTERY_NAME: (state, str) => {
    state.lotteryName = str;
  },
  SET_DESKTOP_OBJ: (state, obj) => {
    state.desktopObjList = obj;
  },
  SET_PLZ_CHOSE: (state, boolean) => {
    state.noticeState.plzChose = boolean;
  },
  SET_ON_READY: (state, boolean) => {
    state.noticeState.onReady = boolean;
  },
  SET_IS_OPENING: (state, boolean) => {
    state.noticeState.isOpening = boolean;
  },
  SET_PLEASE_PUT_CHIP: (state, boolean) => {
    state.noticeState.pleasePutChip = boolean;
  },
  SET_PLEASE_WAIT_NEXT: (state, boolean) => {
    state.noticeState.pleaseWaitNext = boolean;
  },
  SET_NOT_READY: (state, boolean) => {
    state.noticeState.notReady = boolean;
  },
  SET_PLATE_CHIP: (state, num) => {
    state.plateChip = num;
  },
  SET_CURR_FULL_EXPECT: (state, str) => {
    state.curr_full_expect = str;
  }
};

const actions = {
  openHintPanel: ({ commit }, type) => {
    commit("SET_HINT_TYPE", type);
    commit("TOGGLE_BLACK_COVER");
  },
  openDesktopView: ({ commit }, obj) => {
    // 重置頁面、開啟玩家UI、設定桌號
    let notExist = false;
    commit("RESET_DESKTOP_VIEW");
    commit("SET_FLOAT_UI_STATE", true);
    commit("SET_HALL_VIEW_STATE", false);
    commit("SET_CURR_INDEX", obj.index);
    commit("SET_LOTTERY_NAME", obj.lotteryname);
    commit("SET_PLAYER_COUNT", obj.onlinePlayerCount);

    if (state.desktop_view.length > 0) {
      state.desktop_view.some(e => {
        if (e.index === obj.index) {
          commit("SHOW_DESKTOP_VIEW", e.index);
          notExist = false;
          return true;
        } else {
          notExist = true;
          return false;
        }
      });
    } else {
      notExist = true;
    }

    // 進桌必先check用戶狀態（更新錢包等）
    checkislogin().then(res => {
      commit("SET_BALANCE", res.data.balance);
    });

    if (notExist === true) {
      // 如果已開過桌，不需要在撈

      commit("APPEND_DESKTOP_VIEW", {
        visible: true, // 顯示與否
        index: obj.index, // 桌號
        cptype: obj.cptype,
        lotteryname: obj.lotteryname,
        money: 0,
        total_bet: 0,
        win: 0,
        player_count: 0,
        auto_play: false,
        history_panel: false,
        btn_again: true,
        btn_cancel: true,
        btn_agree: true,
        chips_plate: true
      });
    }

    return obj;
  },
  setUserInterface: ({ commit }, boolean) => {
    commit("SET_FLOAT_UI_STATE", boolean);
  },
  closeDesktopView: ({ commit }) => {
    commit("RESET_DESKTOP_VIEW");
    commit("SET_FLOAT_UI_STATE", false);
    commit("SET_HISTORY_TAB_STATE", false);
    commit("SET_HALL_VIEW_STATE", true);
    commit("SET_PLATE_CHIP", 0);
  },
  setStopWatchTimer: ({ commit }, num) => {
    commit("SET_STOPWATCH_VALUE", num);
  },
  setUserName: ({ commit }, name) => {
    commit("SET_USERNAME", name);
  },
  setBalance: ({ commit }, value) => {
    commit("SET_BALANCE", value);
  },
  setLogUrl: ({ commit }, url) => {
    commit("SET_LOG_URL", url);
  },
  setDesktopObjList: ({ commit }, obj) => {
    commit("SET_DESKTOP_OBJ", obj);
  },
  setHistoryTab: ({ commit }, boolean) => {
    commit("SET_HISTORY_TAB_STATE", boolean);
  },
  disableAllNoticeState: ({ commit }) => {
    commit("SET_PLZ_CHOSE", false);
    commit("SET_ON_READY", false);
    commit("SET_IS_OPENING", false);
    commit("SET_PLEASE_PUT_CHIP", false);
    commit("SET_PLEASE_WAIT_NEXT", false);
    commit("SET_NOT_READY", false);
  },
  openPlzChose: ({ commit }) => {
    commit("SET_PLZ_CHOSE", true);
  },
  openOnReady: ({ commit }) => {
    commit("SET_ON_READY", true);
  },
  openIsOpening: ({ commit }) => {
    commit("SET_IS_OPENING", true);
  },
  openPleasePutChip: ({ commit }) => {
    commit("SET_PLEASE_PUT_CHIP", true);
  },
  openPleaseWaitNext: ({ commit }) => {
    commit("SET_PLEASE_WAIT_NEXT", true);
  },
  openNotReady: ({ commit }) => {
    commit("SET_NOT_READY", true);
  },
  setChips: ({ commit }, num) => {
    commit("SET_PLATE_CHIP", num);
  },
  setCurrFullExpect: ({ commit }, num) => {
    commit("SET_CURR_FULL_EXPECT", num);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
