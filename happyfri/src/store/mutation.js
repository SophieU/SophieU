const ADD_ITEMNUM = 'ADD_ITEMNUM';
const REMBER_ANSWER = 'REMBER_ANSWER';
const REMBER_TIME = 'REMBER_TIME';
const INITIAL_DATA = 'INITIAL_DATA';
export default {
    // 下一题
    [ADD_ITEMNUM](state,num) {
        state.itemNum += num;
    },
    //记录答案
    [REMBER_ANSWER](state, id) {
        state.answerid.push(id);
    },
    //初始化
    [INITIAL_DATA](state) {
        state.answerid = [];
        state.itemNum = 1;
    }
}