import readings from "../data/readings";

const state = {
    readings: []
};

const mutations = {
    'SET_READINGS'(state, readings) {
        state.readings = readings
    }
};

const actions = {
    initReadings: ({commit}) => {
        commit('SET_READINGS', readings)
    },
    downloadData: ({commit}) => {
        const readings3 = [
            {"id": 1, "name": "U_b", "value": 60},
            {"id": 2, "name": "F_cob", "value": 1500},
            {"id": 3, "name": "T_h", "value": 69},
            {"id": 4, "name": "T_rref", "value": 17},
            {"id": 5, "name": "T_r", "value": 28},
            {"id": 6, "name": "T_pcob", "value": 1}
        ];
        commit('SET_READINGS', readings3);
    }
};

const getters = {
    readings: state => {
        return state.readings
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
