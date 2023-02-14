import {createStore} from "vuex";
import user from "@/plugin/vuex/user";

export default createStore({
    modules: {
        user
    }
})