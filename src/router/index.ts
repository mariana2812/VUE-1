import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Pokemon from '../view/Pokemon.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
            name: "Home"
        },
        {
            path: "/pokemon/:id",
            component: Pokemon,
            name: "Pokemon"
        }
    ]
})
