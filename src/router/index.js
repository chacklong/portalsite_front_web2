import { createRouter, createWebHistory } from "vue-router";
import CompanyHomeView from "../views/CompanyHome/CompanyHome.vue";
import AboutView from "../views/Components/AboutUs/AboutView.vue";
import ContactView from "../views/Components/ContactUs/ContactView.vue";
import RecruitView from "../views/Components/Recruit/RecruitView.vue";
import TechnologyView from "../views/Components/TechnologyCenter/TechnologyView.vue";

// import NavigationPagination from "../layouts/sections/navigation/pagination/PaginationView.vue";
// import NewsContent from "../layouts/sections/navigation/pagination/NewsContent.vue";

//企业资讯动态路由
import NewsContent from "../views/Components/NewsContent/NewsContent.vue";
import NewsDetails from "../views/Components/NewsContent/NewsDetails.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "companyhome",
      component: CompanyHomeView,
    },
    // *
    {
      path: "/liweikeji/Components/about",
      name: "about",
      component: AboutView,
    },
    // *
    {
      path: "/liweikeji/Components/contactus",
      name: "contactus",
      component: ContactView,
    },
    // *
    {
      path: "/liweikeji/Components/recruit",
      name: "recruit",
      component: RecruitView,
    },
    // *
    {
      path: "/liweikeji/Components/technologycenter",
      name: "technologycenter",
      component: TechnologyView,
    },
    {
      path: "/corporateinformation/newscontent/newsdetails/:id",
      name: "newsdetails",
      component: NewsDetails,
    },
    // *
    {
      path: "/corporateinformation/newscontent",
      name: "newscontent",
      component: NewsContent,
    },
  ],
});

export default router;
