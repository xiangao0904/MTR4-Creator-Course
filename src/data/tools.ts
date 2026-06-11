export type ToolItem = {
  name: string;
  role: string;
  description: string;
};

export const tools: ToolItem[] = [
  {
    name: 'Minecraft Java Edition',
    role: '运行环境',
    description: '用于加载和测试资源包。',
  },
  {
    name: 'MTR 4.0+',
    role: '核心 Mod',
    description: '课程围绕 MTR 4.0 的资源包开发流程展开。',
  },
  {
    name: 'JCM 2.2+',
    role: '核心 Mod',
    description: '用于动态显示屏、PIDS、LCD 和 JS 模板案例。',
  },
  {
    name: '水杉',
    role: '主要建模工具',
    description: '用于车辆灰模、细节建模、UV 和模型导出。',
  },
  {
    name: 'Blender',
    role: '辅助建模工具',
    description: '仅用于展开 UV。',
  },
  {
    name: '图片编辑软件',
    role: '贴图制作',
    description: '用于车辆涂装、透明通道、文字标识和边缘优化。',
  },
  {
    name: 'VS Code',
    role: '配置编辑',
    description: '用于 JSON、JS、目录结构和资源引用排查。',
  },
  {
    name: '音频编辑软件',
    role: '音效制作',
    description: '用于剪辑 .ogg、处理循环点、音量和噪声。',
  },
];