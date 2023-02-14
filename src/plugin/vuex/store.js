import {createStore} from "vuex";
import user from "@/plugin/vuex/user";
import book from "@/plugin/vuex/book";
import category from "@/plugin/vuex/category";

export default createStore({
    modules: {
        user,
        book,
        category
    }
})