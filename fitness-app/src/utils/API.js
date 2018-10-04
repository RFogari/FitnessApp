import axios from 'axios';

export default {
    getData: function() {
        return axios.get('/api/fitness');
    },

    getData: function(id) {
        return axios('/api/fitness' + id);
    },

    deleteData: function(id) {
        return axios.delete('/api/fitness' + id);
    },

    saveData: function(fitnessData) {
        return axios.post('/api/fitnes', fitnessData);
    }
};