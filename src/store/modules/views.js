import { checkislogin } from "@/api/index";

const state = {
  horizontal_cover: false,
  desktop_view: [],
  hint_layout: false,
  black_cover: false,
  hall_view: true,
  float_ui: false,
  curr_index: -1,
  username: "",
  balance: 0
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
      btn_confirm: obj.btn_confirm,
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
  SET_CURR_INDEX: (state, num) => {
    state.curr_index = num;
  },
  SET_USERNAME: (state, string) => {
    state.username = string;
  },
  SET_BALANCE: (state, num) => {
    state.balance = num;
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
    commit("SET_CURR_INDEX", obj.id);
    if (state.desktop_view.length > 0) {
      state.desktop_view.some(e => {
        if (e.index === obj.id) {
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
      if (state.username === "") {
        commit("SET_USERNAME", res.data.username);
      }
      commit("SET_BALANCE", res.data.balance);
    });

    if (notExist === true) {
      // 如果已開過桌，不需要在撈

      commit("APPEND_DESKTOP_VIEW", {
        visible: true, // 顯示與否
        index: obj.id, // 桌號
        cptype: obj.typeid,
        lotteryname: obj.name,
        money: 0,
        total_bet: 0,
        win: 0,
        player_count: 0,
        auto_play: false,
        history_panel: false,
        btn_again: true,
        btn_cancel: true,
        btn_confirm: true,
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
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
