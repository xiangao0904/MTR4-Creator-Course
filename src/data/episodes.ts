export type EpisodeStatus = "editing" | "planned" | "released";

export type Episode = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  status: EpisodeStatus;
  goal: string;
  summary: string;
  output: string;
  guestRole: string;
  tags: string[];
  topics: string[];
  videoUrl?: string;
  downloadUrl?: string;
  noteUrl?: string;
};

export const statusText: Record<EpisodeStatus, string> = {
  released: "已发布",
  editing: "制作中",
  planned: "规划中",
};

export const episodes: Episode[] = [
  {
    id: "ep0",
    number: "EP0",
    title: "MTR 4.0 资源包开发导论",
    shortTitle: "课程导览",
    status: "editing",
    goal: "先把整套课程学什么、做到什么程度、最终能做出什么作品讲清楚。",
    summary:
      "介绍 MTR 4.0 的资源包生态、课程范围、学习路线和最终目标，先建立完整认知。",
    output: "明确学习路线，准备后续开发环境",
    guestRole: "导论 / 规划 / 入门",
    tags: ["导论", "路线图", "课程说明"],
    topics: [
      "课程结构说明",
      "资源包与附加内容的关系",
      "后续章节安排",
      "学习前需要准备什么",
    ],
  },
  {
    id: "ep1",
    number: "EP1",
    title: "从零建立第一个资源包",
    shortTitle: "建立资源包",
    status: "editing",
    goal: "做出一个能被游戏识别的基础资源包，先把最小可运行版本搭起来。",
    summary:
      "完成目录创建、pack.mcmeta、pack.png 和基础 assets 结构，建立第一套可识别工程。",
    output: "一个可被 MTR 4.0 识别的空白资源包",
    guestRole: "基础 / 结构 / 环境",
    tags: ["资源包", "pack.mcmeta", "目录结构"],
    topics: [
      "创建资源包文件夹",
      "编写 pack.mcmeta",
      "准备 pack.png",
      "检查游戏是否正常识别",
    ],
  },
  {
    id: "ep2",
    number: "EP2",
    title: "JSON、路径与命名规范",
    shortTitle: "JSON 基础",
    status: "planned",
    goal: "掌握资源包里最常见的配置格式和路径规则，后面做内容时心里有底。",
    summary: "讲清 JSON 结构、命名空间、资源路径、文件命名和常见报错来源。",
    output: "一组结构正确、路径可用的基础配置文件",
    guestRole: "配置 / 规范 / 排错",
    tags: ["JSON", "namespace", "路径规则"],
    topics: ["对象与数组", "命名空间写法", "路径引用方式", "常见格式错误排查"],
  },
  {
    id: "ep3",
    number: "EP3",
    title: "贴图制作与涂装入门",
    shortTitle: "贴图入门",
    status: "planned",
    goal: "先用贴图做出第一批可见成果，快速建立成就感和审美基线。",
    summary: "从贴图尺寸、透明通道、车身元素到涂装表达，完成基础贴图工作流。",
    output: "一张可直接投入项目的基础车辆贴图",
    guestRole: "贴图 / 美术 / 视觉",
    tags: ["贴图", "涂装", "视觉设计"],
    topics: [
      "贴图尺寸与格式",
      "透明区域处理",
      "车门车窗与标识",
      "风格统一与版权意识",
    ],
  },
  {
    id: "ep4",
    number: "EP4",
    title: "建模软件入门与基础车体",
    shortTitle: "建模入门",
    status: "planned",
    goal: "第一次进入建模流程，做出一个简单但结构清晰的车体。",
    summary: "认识建模界面、视图和基础操作，完成低复杂度车体的初版结构。",
    output: "一个结构清楚的基础车辆模型",
    guestRole: "建模 / 车体 / 入门",
    tags: ["建模", "低模", "基础结构"],
    topics: ["界面与视图", "点线面基础", "比例控制", "基础车体搭建"],
  },
  {
    id: "ep5",
    number: "EP5",
    title: "车辆建模实战",
    shortTitle: "车辆建模",
    status: "planned",
    goal: "把基础车体推进成更完整的车辆外形，建立可继续细化的主体模型。",
    summary:
      "继续完善车头、车门、车窗、车顶和转向架等关键结构，控制比例和面数。",
    output: "一个完整度更高的车辆主体模型",
    guestRole: "建模 / 车辆 / 细化",
    tags: ["车辆模型", "外形细化", "结构控制"],
    topics: ["参考图准备", "车头与侧面塑形", "车门窗细节", "模型复杂度控制"],
  },
  {
    id: "ep6",
    number: "EP6",
    title: "UV、贴图对应与模型导出",
    shortTitle: "UV 与导出",
    status: "planned",
    goal: "让模型真正和贴图对应起来，并完成进入项目所需的导出流程。",
    summary: "完成 UV 展开、贴图对应、导出前检查和常见错位问题处理。",
    output: "一个完成 UV 并可正常导出的模型",
    guestRole: "UV / 导出 / 衔接",
    tags: ["UV", "贴图对应", "导出"],
    topics: ["UV 展开基础", "贴图空间规划", "导出设置", "错位与翻面排查"],
  },

  {
    id: "ep7",
    number: "EP7",
    title: "车辆音效制作与配置",
    shortTitle: "车辆音效",
    status: "planned",
    goal: "为车辆补上基础声音表现，让成品更完整。",
    summary: "处理行驶声、加减速、开关门和提示音，建立基础音效资源。",
    output: "一组可直接使用的基础车辆音效",
    guestRole: "音效 / 声音资源 / 配置",
    tags: ["音效", "ogg", "循环点"],
    topics: ["行驶声准备", "车门与提示音", "循环点设置", "音量与授权注意事项"],
  },
  {
    id: "ep8",
    number: "EP8",
    title: "接入 MTR 4.0：车辆配置与运行",
    shortTitle: "MTR 接入",
    status: "planned",
    goal: "把模型和资源正式接进 MTR 4.0，让车辆可以在游戏内运行。",
    summary: "处理车辆配置、模型路径、编组和车门相关设置，完成首次游戏内测试。",
    output: "一辆可在 MTR 4.0 中运行的车辆",
    guestRole: "接入 / 配置 / 测试",
    tags: ["MTR 4.0", "车辆配置", "车门设置"],
    topics: ["模型与贴图路径", "车辆参数", "编组逻辑", "接入后调试"],
  },
  {
    id: "ep9",
    number: "EP9",
    title: "JCM 新版 JS 入门",
    shortTitle: "JCM JS",
    status: "planned",
    goal: "做出第一个动态显示案例，理解脚本在资源包里的扩展作用。",
    summary: "从基础 JS 概念讲到 JCM 显示逻辑，完成一个最小动态案例。",
    output: "一个可复用的 JCM JS 动态显示模板",
    guestRole: "JCM / JavaScript / 显示系统",
    tags: ["JCM", "JavaScript", "动态显示"],
    topics: ["JS 基础概念", "变量与条件判断", "显示逻辑案例", "脚本排错"],
  },
  {
    id: "ep10",
    number: "EP10",
    title: "排错、发布与毕业项目",
    shortTitle: "发布收束",
    status: "planned",
    goal: "把整套课程收口，解决常见问题，并完成一个具备发布条件的小型作品。",
    summary: "梳理扩展思路、排错流程、发布规范、授权说明和毕业项目组织方式。",
    output: "一套可整理发布的小型完整资源包方案",
    guestRole: "发布 / 排错 / 总结",
    tags: ["发布", "排错", "毕业项目"],
    topics: ["常见错误总表", "发布前检查", "授权与说明文档", "后续扩展方向"],
  },
];
