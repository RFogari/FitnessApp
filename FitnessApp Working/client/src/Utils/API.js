import axios from "axios";

export default {

    saveData: function(formData) {
        return axios.post("/api/fitness", formData);
    }
};