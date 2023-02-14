import {createStore} from "vuex";
import user from "@/plugin/vuex/user";
import book from "@/plugin/vuex/book";
import category from "@/plugin/vuex/category";
import media_object from "@/plugin/vuex/media_object";

export default createStore({
    modules: {
        user,
        book,
        category,
        media_object
    }
})