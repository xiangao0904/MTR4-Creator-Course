export type ResourceStatus = 'available' | 'coming-soon';

export type ResourceItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  relatedEpisode?: string;
  fileUrl?: string;
  status: ResourceStatus;
};

export const resourceCategories = ['基础模板', '建模与贴图', '配置与脚本', '音效资源', '发布资料'];

export const resources: ResourceItem[] = [
  {
    id: 'empty-pack-template',
    title: '空资源包模板',
    category: '基础模板',
    description: '包含 pack.mcmeta、pack.png 和基础 assets 目录，用于 EP1。',
    relatedEpisode: 'EP1',
    fileUrl: '/downloads/templates/empty-pack.zip',
    status: 'coming-soon',
  },
  {
    id: 'resource-tree-example',
    title: '资源包目录结构示例',
    category: '基础模板',
    description: '展示 textures、models、sounds、scripts、configs 的推荐放置方式。',
    relatedEpisode: 'EP1',
    fileUrl: '/downloads/examples/resource-tree.zip',
    status: 'coming-soon',
  },
  {
    id: 'json-example',
    title: 'JSON 基础示例',
    category: '配置与脚本',
    description: '用于演示对象、数组、字符串、数字、布尔值和路径引用。',
    relatedEpisode: 'EP2',
    fileUrl: '/downloads/examples/json-basics.zip',
    status: 'coming-soon',
  },
  {
    id: 'texture-template',
    title: '车辆贴图模板',
    category: '建模与贴图',
    description: '用于练习车身底色、线路色、车门、车窗、车号和标识排版。',
    relatedEpisode: 'EP3',
    fileUrl: '/downloads/templates/train-texture-template.zip',
    status: 'coming-soon',
  },
  {
    id: 'metasequoia-model-demo',
    title: '水杉模型示例',
    category: '建模与贴图',
    description: '基础车体、车门、车窗、车顶设备和导出前检查用示例。',
    relatedEpisode: 'EP4-EP6',
    fileUrl: '/downloads/examples/metasequoia-model-demo.zip',
    status: 'coming-soon',
  },
  {
    id: 'vehicle-config-demo',
    title: 'MTR 车辆配置示例',
    category: '配置与脚本',
    description: '最小车辆接入 Demo，包含模型路径、编组和车门位置示例。',
    relatedEpisode: 'EP7',
    fileUrl: '/downloads/examples/vehicle-config-demo.zip',
    status: 'coming-soon',
  },
  {
    id: 'sound-pack-demo',
    title: '车辆音效示例包',
    category: '音效资源',
    description: '包含 run_loop、acceleration、deceleration、door_open、door_close 的目录示例。',
    relatedEpisode: 'EP8',
    fileUrl: '/downloads/examples/sound-pack-demo.zip',
    status: 'coming-soon',
  },
  {
    id: 'jcm-js-template',
    title: 'JCM JS 最小模板',
    category: '配置与脚本',
    description: '用于制作静态站名、方向切换、线路颜色和中英文切换的动态显示模板。',
    relatedEpisode: 'EP9',
    fileUrl: '/downloads/templates/jcm-js-template.zip',
    status: 'coming-soon',
  },
  {
    id: 'publish-checklist',
    title: '发布前检查清单',
    category: '发布资料',
    description: '包含路径、配置、贴图、音效、授权、版本号和更新日志检查项。',
    relatedEpisode: 'EP10',
    fileUrl: '/downloads/templates/publish-checklist.pdf',
    status: 'coming-soon',
  },
];
