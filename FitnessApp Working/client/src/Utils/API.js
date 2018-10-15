import axios from "axios";

export default {

    getData: function(id) {
        console.log("Get Data Working");
        return axios.get("/api/records");
    },

    

    saveData: function(data) {
        console.log("Save Data Working");
        return axios.post("/api/records", data);
    }
};