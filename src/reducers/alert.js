const initialState = {
  message: '',
  visible: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        ...state,
        message: action.message,
        visible: true,
      };
    case 'HIDE_ALERT':
      return {
        ...state,
        message: '',
        visible: false,
      };
    default:
      return state;
  }
}
