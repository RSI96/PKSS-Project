import outs_readings from "../data/outs_readings";

const state = {
    outs_readings: []
};

const mutations = {
    'SET_READINGS_O'(state, outs_readings) {
        state.outs_readings = outs_readings
    }
};

const actions = {
    initReadingsO: ({commit}) => {
        commit('SET_READINGS_O', outs_readings)
    },
    downloadDataO: ({commit}) => {
        const outs_readings1 = [
            {"id": 1, "name": "F_zm", "value": 700},
            {"id": 2, "name": "T_o", "value": 308},
            {"id": 3, "name": "T_zm", "value": 3080},
            {"id": 4, "name": "U_m", "value": 880},
            {"id": 5, "name": "T_zcoref", "value": 1800},
            {"id": 6, "name": "T_zco", "value": 780},
            {"id": 7, "name": "T_pco", "value": 580},
            {"id": 8, "name": "T_pm", "value": 280}
        ];
        commit('SET_READINGS_O', outs_readings1);
    }
};

const getters = {
    outs_readings: state => {
        return state.outs_readings
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
