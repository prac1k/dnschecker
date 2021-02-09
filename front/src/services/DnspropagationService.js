import axios from "axios"

export default {
    async getEvents() {
        let res = await axios.get("http://localhost:8000/dnspropagation");
        return res.data;
    },
    async getEventSingle(eventId) {
        let res = await axios.get("http://localhost:8000/dnspropagation/" + eventId);
        return res.data;
    }
}