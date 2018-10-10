import axios from "axios";

export default {

    getData: function() {
        return axios.get("/api/data");
    },

    

    saveData: function(formData) {
        return axios.post("/api/data", formData);
    }
};