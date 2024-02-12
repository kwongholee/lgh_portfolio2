const { createSlice } = require("@reduxjs/toolkit");

let ShowModal = createSlice({
  name: "ShowModal",
  initialState: {num: -1},
  reducers: {
    changeNum(state, action) {
      state.num = action.payload;
    }
  }
});

export default ShowModal;
export let {changeNum} = ShowModal.actions;