import home from "../pages/Home";
import notfound from "../pages/NotFound";
import champions from "../pages/Champions";
import skin from "../pages/Skin";
import items from "../pages/Items";
import region from "../pages/Region";
import news from "../pages/News";
import download_guide from "../pages/Guide";
import champions_detail from "../pages/ChampionsDetail";

export const routes = [
  {
    path: "/",
    page: home,
    isShowHeader: true,
    isShowFooter: false,
  },
  {
    path: "/champions",
    page: champions,
    isShowHeader: true,
    isShowFooter: true,
  },
  { path: "/skin", page: skin, isShowHeader: true, isShowFooter: true },
  { path: "/item", page: items, isShowHeader: true, isShowFooter: true },
  { path: "/region", page: region, isShowHeader: true, isShowFooter: true },
  { path: "/news", page: news, isShowHeader: true, isShowFooter: true },
  {
    path: "/download-guide",
    page: download_guide,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/champions-detail",
    page: champions_detail,
    isShowHeader: true,
    isShowFooter: true,
  },
  { path: "*", page: notfound },
];
