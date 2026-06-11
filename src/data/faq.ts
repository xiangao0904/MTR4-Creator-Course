export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: '完全不会建模可以学吗？',
    answer: '可以。课程从水杉界面、基础形体、比例和低模意识讲起，先做简单车体，再逐步加入车头、门窗和车顶设备。',
  },
  {
    question: '需要提前会 JavaScript 吗？',
    answer: '不需要。JCM JS 会放在后半段，只做最小动态显示案例，重点是理解脚本如何扩展资源包能力。',
  },
  {
    question: 'MTR 3.x 的旧版本也能看吗？',
    answer: '不建议直接照搬。这个系列按 MTR 4.0 的资源包开发方向重新组织，3.x 版可以将本教程作为参考，但细节可能不同。',
  },
  {
    question: '可以用其他建模软件吗？',
    answer: '可以，但课程主线以水杉为准。使用其他工具时，需要自行对应模型导出、UV 和材质检查流程。',
  },
  {
    question: '资源包做完可以发布吗？',
    answer: '可以。发布前需要检查授权、版本号、更新日志、文件路径、资源引用和素材来源。',
  },
  {
    question: '模型不显示或贴图丢失怎么办？',
    answer: '优先检查 namespace、路径大小写、文件名、JSON 格式和游戏日志。课程目录页会按 EP2、EP6、EP7、EP10 逐步覆盖这些问题。',
  },
];
