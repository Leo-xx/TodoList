import { createStore } from "vuex";
export default createStore({
  state: {
    list: [
      {
        content: "天会亮的",
        isComplete: false,
      },
      {
        content: "代码即魔法",
        isComplete: true,
      },
      {
        content: "coding",
        isComplete: false,
      },
      {
        content: "你好",
        isComplete: true,
      },
    ],
  },
  mutations: {
    // 添加任务
    addTodo(state, payload) {
      state.list.push(payload);
    },
    //  (替换/删除)任务  splice(起始下标， 长度)
    delTodo(state, payload) {
      state.list.splice(payload, 1);
    },
  },
  actions: {},
  module: {},
});
