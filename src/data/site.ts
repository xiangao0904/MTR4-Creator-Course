export const site = {
  name: 'MTR 4.0 资源包开发教程',
  shortName: 'MTR Creator Course',
  eyebrow: 'Version 4.0.0',
  title: 'MTR 4.0\n资源包开发教程',
  description:
    '面向 MTR 4.0 资源包创作者，系统讲解从制作到接入的完整开发流程。',
  heroPrimaryAction: '开始学习',
  heroSecondaryAction: '查看目录',
  courseLine:
    '从零开始的系统级开源入门教程，深入理解资源包结构、贴图、建模、UV、接入、音效、JCM JS 和发布维护，完整掌握 MTR 开发生态。',
  footerNote:
    'MTR 资源包制作系统入门教程。',
  nav: [
    { label: '首页', href: '/' },
    { label: '课程目录', href: '/courses/' },
    { label: '资源中心', href: '/resources/' },
  ],
  learningFlow: [
    '资源包结构',
    '命名与 JSON',
    '贴图制作',
    '车辆建模',
    'UV 与导出',
    'MTR 接入',
    '音效配置',
    '发布维护',
  ],
  highlights: [
    {
      title: '资源结构与数据导入',
      description: '熟悉 MTR 资源包的目录结构、JSON 配置规范与资源加载方式，将内容完整接入游戏。',
      icon: '/images/resource-structure-import.png',
      iconAlt: '数据库与箭头图标',
    },
    {
      title: '车辆建模与贴图制作',
      description: '了解建模软件的基本使用，理解列车 3D 建模、UV 展开、材质绘制与贴图制作流程。',
      icon: '/images/vehicle-modeling-texturing.png',
      iconAlt: '线框立方体图标',
    },
    {
      title: '音效控制与脚本交互',
      description: '实现车辆 BVE 音效与 JCM JavaScript 脚本编写，实现动态显示等高级效果。',
      icon: '/images/sound-script-interaction.png',
      iconAlt: '音波与代码图标',
    },
  ],
};
