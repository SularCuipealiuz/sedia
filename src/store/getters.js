const getters = {
  hintType: state => state.views.hintType,
  horizontalCover: state => state.views.horizontal_cover,
  desktopView: state => state.views.desktop_view,
  hintLayout: state => state.views.hint_layout,
  blackCover: state => state.views.black_cover,
  hallView: state => state.views.hall_view,
  floatUI: state => state.views.float_ui,
  currIndex: state => state.views.curr_index,
  username: state => state.views.username,
  balance: state => state.views.balance
};
export default getters;
