import {createWebHashHistory, createRouter} from "vue-router"
import Product from "../pages/Product.vue";
import Payment from "../pages/Payment.vue";

const routes = [
    {
        path: "/",
        name: "Product",
        component: Product
    },
    {
        path: "/Payment",
        name: "Payment",
        component: Payment
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router