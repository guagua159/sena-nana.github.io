import { navbar } from "vuepress-theme-hope";

export default navbar([
  { 
    text: "主规则书", 
    icon: "creative", 
    link: "/main/", 
  },
  { 
    text: "扩展规则", 
    icon: "creative", 
    link: "/", 
  },
  { 
    text: "模组", 
    icon: "creative", 
    link: "/story/", 
  },
  { 
    text: "骰娘说明书", 
    icon: "creative", 
    link: "/", 
  },
  { 
    text: "数据库", 
    icon: "creative", 
    link: "/", 
  },
  { 
    text: "项目信息", 
    icon: "creative", 
    children: [
      "/updatelog.md",
      "/thanks.md",
      {
        text: "骰娘仓库", 
        icon: "creative", 
        link: "/", 
      },
      {
        text: "一版规则", 
        icon: "markdown", 
        link: "https://sena-nana.github.io/mh1/", 
      },
      {
        text: "关于星奈", 
        icon: "creative", 
        link: "https://space.bilibili.com/82717585", 
      },
    ],
  },
]);
