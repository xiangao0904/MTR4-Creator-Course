# MTR 4.0 资源包开发教程网站


## 安装与运行

### 1. 安装 Node.js

建议使用 Node.js 18.17.1 或更高版本。

检查版本：

```bash
node -v
```

### 2. 启用 pnpm

如果你已经安装了 pnpm，可以跳过这一步。

推荐用 Corepack：

```bash
corepack enable
corepack prepare pnpm@9.15.4 --activate
pnpm -v
```

也可以用 npm 全局安装：

```bash
npm install -g pnpm
pnpm -v
```

### 3. 安装依赖

进入项目目录：

```bash
cd mtr4-course-site
pnpm install
```

### 4. 本地开发

```bash
pnpm dev
```

默认本地地址通常是：

```txt
http://localhost:4321
```

### 5. 构建静态文件

```bash
pnpm build
```

构建结果会输出到：

```txt
dist/
```

### 6. 本地预览构建结果

```bash
pnpm preview
```
