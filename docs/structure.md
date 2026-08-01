# index.html 结构剖析

> 本文档对 `index.html`（约 9188 行）进行章节级结构剖析，涵盖 HTML 骨架、CSS 样式、JavaScript 模块三大组成部分。

## 一、文件总体结构

`index.html` 是一个**单文件应用**，集成了 HTML 结构、CSS 样式与 JavaScript 逻辑，共计约 9188 行。整体结构如下：

| 行号区间 | 内容 | 说明 |
|---------|------|------|
| 1-5 | `<!DOCTYPE html>` 与 `<head>` 开头 | 文档声明与元数据 |
| 7-394 | `<style>` 样式定义 | 全部 CSS 样式 |
| 396-871 | `<body>` HTML 结构 | 可视化 UI 元素 |
| 873-880 | `<script type="importmap">` | Three.js 模块映射 |
| 882-901 | `<script>` 非 module 脚本 | 非模块化辅助代码 |
| 903-9188 | `<script type="module">` | 主程序（ES Module） |

## 二、HTML 骨架（1-871 行）

### 2.1 文档头（1-5 行）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>立方·三维设计工坊</title>
```

- 语言：简体中文
- 响应式视口配置
- 标题：立方·三维设计工坊

### 2.2 CSS 样式区（7-394 行）

| 区间 | 内容 |
|------|------|
| 8-40 | CSS 变量定义（`--bg`、`--text`、`--accent` 等主题色） |
| 41-90 | 全局重置、滚动条、布局容器 |
| 91-150 | 顶部栏（`.topbar`）、品牌、按钮 |
| 150-235 | 左右侧栏（`.panel`）、折叠面板、图形网格、工具按钮 |
| 235-290 | 属性面板控件（滑动条、数字输入、颜色选择器） |
| 290-394 | 弹窗（颜色拾取器、文本输入、确认框）、Toast、底部栏 |

### 2.3 画布区（396-398 行）

```html
<div id="canvas-wrap"><canvas id="three-canvas"></canvas></div>
<div id="box-sel"></div>
```

- `three-canvas`：Three.js 渲染目标，全屏铺满
- `box-sel`：框选操作的矩形指示器

### 2.4 顶部栏（400-420 行）

包含品牌标识与 11 个功能按钮：

| 按钮 | ID | 功能 |
|------|-----|------|
| 新建 | `btn-new` | 清空场景创建新场景（Ctrl+N） |
| 导入 | `btn-import` | 导入 JSON 场景（Ctrl+O） |
| 导出 | `btn-export` | 导出 JSON 场景（Ctrl+S） |
| 截图 | `btn-shot` | 导出 PNG 图像（Ctrl+P） |
| 撤销 | `btn-undo` | 撤销（Ctrl+Z） |
| 重做 | `btn-redo` | 重做（Ctrl+Y） |
| 复制 | `btn-copy` | 复制（Ctrl+C） |
| 粘贴 | `btn-paste` | 粘贴（Ctrl+V） |
| 克隆 | `btn-dup` | 克隆（Ctrl+D） |
| 清空 | `btn-clear` | 清空场景（Ctrl+Del） |
| 坐标轴 | `btn-axes` | 切换坐标轴显示 |
| 网格面 | `btn-grid` | 切换网格面显示 |
| 全屏 | `btn-fs` | 全屏切换（F11） |

### 2.5 左侧栏（425-490 行）

`<aside class="panel panel-left">`，包含 4 个可折叠面板：

1. **3D 图形**（`sec-3d`）：`#grid-3d` 由 JS 动态填充 3D 图形按钮
2. **2D 图形**（`sec-2d`）：`#grid-2d` 由 JS 动态填充 2D 图形按钮
3. **工具**（`sec-tools`）：6 个工具按钮
   - 选择/变换（`tool-select`）
   - 3D 画笔（`tool-brush3d`）
   - 2D 画笔（`tool-brush2d`）
   - 橡皮擦（`tool-eraser`）
   - 添加文本（`tool-text`）
   - 添加图片（`tool-image`）
4. **变换模式**（`sec-transform`）：3 种模式按钮 + 等比缩放开关
   - 平移（`mode-translate`）
   - 旋转（`mode-rotate`）
   - 缩放（`mode-scale`）

### 2.6 右侧栏（492-765 行）

`<aside class="panel panel-right">`，包含 9 个可折叠面板：

| 面板 | ID | 功能 |
|------|-----|------|
| 属性 | `sec-props` | 坐标、旋转、缩放、透明度、图形参数 |
| 颜色 | `sec-color` | 颜色预设、自定义颜色、花纹选择 |
| 贴图 | `sec-img-content` | 图片上传、清除贴图 |
| 文本 | `sec-text` | 字体、字号、粗细、排列方向 |
| 删除 | `sec-del` | 删除选中对象按钮 |
| 画笔 | `sec-brush` | 画笔颜色、粗细、透明度、间隔 |
| 橡皮擦 | `sec-eraser` | 橡皮擦尺寸、模式 |
| 鼠标操作 | - | 鼠标操作说明 |
| 键盘快捷键 | `sec-kbd` | 完整快捷键列表 |

### 2.7 其他 UI 元素（768-871 行）

| 元素 | 行号 | 功能 |
|------|------|------|
| 声明 | 769-772 | 工具声明与隐私说明 |
| 底部状态栏 | 775-784 | 7 个视角切换按钮 |
| 颜色拾取器弹窗 | 787-842 | HSV/HSL 色彩空间选择器 |
| 文本输入弹窗 | 844-854 | 内联文本编辑框 |
| 隐藏文件输入 | 856-857 | 文件上传用隐藏 input |
| 确认弹窗 | 859-871 | 自定义确认对话框 |

## 三、JavaScript 模块（873-9188 行）

### 3.1 Import Map（873-880 行）

```json
{
  "imports": {
    "three": "./three/three.module.js?v=2",
    "three/addons/": "./three/examples/jsm/"
  }
}
```

将 `three` 与 `three/addons/` 映射到本地 Three.js 文件。

### 3.2 主程序分区

主程序 `<script type="module">`（903-9188 行）按功能模块划分为以下区块：

| 行号区间 | 模块 | 说明 |
|---------|------|------|
| 903-960 | 渲染器与场景初始化 | WebGLRenderer、Scene、Camera、OrbitControls、光照 |
| 960-1075 | 地面与坐标轴 | 地面平面、网格、坐标轴箭头与标签 |
| 1075-1115 | 参考平面 | 三个参考平面（地面/后墙/侧墙） |
| 1117-1200 | 幽灵预览 | 拖拽放置前的半透明预览对象 |
| 1180-1400 | 变换控制器 | TransformControls 绑定、多选变换代理 |
| 1400-1415 | 辅助对象 | 中心圆环装饰、地面数学平面 |
| 1420-1700 | 图形定义 | SHAPES_3D、SHAPES_2D、makeXxx 形状函数 |
| 1700-1810 | 常量与状态 | COLORS、PATTERNS、state、colorMemory、brush |
| 1810-2060 | 渲染顺序与纹理 | renderOrder、patternTexture、textTexture、imageTexture |
| 2065-2218 | 对象创建 | createObject 核心函数 |
| 2220-2625 | 选择与属性面板 | 选择、属性同步、属性面板更新 |
| 2626-2740 | 历史记录 | snapshot、pushHistory |
| 2741-2830 | 恢复与销毁 | disposeObject、restore |
| 2830-3175 | 快照应用与撤销重做 | applySnapshotToExisting、rebuildFromSnapshot、undo、redo |
| 3176-3370 | 射线拾取 | raycaster、intersectObjects、getHitPointAndNormal |
| 3370-3600 | 画笔参考平面与文本输入 | updateBrushRefPlane、showInlineTextInput |
| 3594-3725 | 工具切换 | setTool、按钮状态更新 |
| 3727-3940 | 图形网格构建与放置 | buildShapeGrid、placeObjectAt |
| 3940-4530 | 颜色与花纹 UI | 颜色选择器、花纹预览、HSV 转换 |
| 4533-4770 | 外观应用与文本重建 | applyAppearance、rebuildText |
| 4773-5110 | 变换绑定与数字输入 | bindTransform、bindNumberInput、deleteSelected |
| 5112-5485 | 场景操作 | 截图、导出、导入、视角切换、面板折叠 |
| 5496-5905 | 画笔绘制 | createBrushMaterial、startBrushStroke、addBrushPoint3D/2D、endBrushStroke |
| 5909-6175 | 画笔与橡皮擦光标 | createBrushCursor、createEraserRing、高亮反馈 |
| 6179-6560 | 擦除几何运算 | findObjectsNearRay、_sphereCylinderIntersect、_refineCurvePoints |
| 6557-7200 | 擦除执行 | _eraseAtSingle、eraseAt |
| 7203-7920 | 形状参数面板 | showShapeParams、rebuildShape、buildParametricGeo3D/2D |
| 7920-8260 | 画布事件 | pointerdown、pointermove、pointerup、dblclick |
| 8276-8685 | 剪贴板 | copySelected、pasteClipboard、cloneSelected |
| 8687-8830 | 旋转与提示 | rotateSelection、toast、showConfirm |
| 8830-8905 | 对话框 | showConfirm、showTextPrompt |
| 8905-9145 | 动态网格 | _expandBoxByObject、updateDynamicGrid、resizeGrid |
| 9144-9188 | 渲染循环 | animate、窗口事件 |

### 3.3 关键全局对象

| 对象名 | 类型 | 说明 |
|--------|------|------|
| `renderer` | THREE.WebGLRenderer | WebGL 渲染器 |
| `scene` | THREE.Scene | 3D 场景 |
| `camera` | THREE.PerspectiveCamera | 透视相机（FOV=50°） |
| `controls` | OrbitControls | 视角控制器 |
| `transformCtrl` | TransformControls | 对象变换控制器 |
| `state` | Object | 全局状态（selectedList、history、tool 等） |
| `brush` | Object | 画笔状态（drawing、color、thickness 等） |
| `colorMemory` | Object | 颜色记忆（按对象类型记忆上次使用的颜色） |
| `idCounter` | number | 对象 ID 自增计数器 |
| `GRID_UNIT` | number | 网格单元固定长度（1.5） |
| `GROUND_SIZE` | number | 初始地面尺寸（30） |

### 3.4 事件系统

| 事件 | 目标 | 说明 |
|------|------|------|
| `pointerdown` | canvas | 开始拖拽/绘制/选择 |
| `pointermove` | canvas | 拖拽移动/画笔绘制/橡皮擦擦除 |
| `pointerup` | canvas | 结束拖拽/绘制/擦除 |
| `dblclick` | canvas | 文本对象内联编辑 |
| `contextmenu` | canvas | 阻止默认右键菜单 |
| `wheel` | canvas | 视角缩放（由 OrbitControls 处理） |
| `keydown` | window | 键盘快捷键 |
| `change` | input[type=file] | 文件导入 |
| `click` | 各按钮 | 功能按钮点击 |

## 四、数据流

### 4.1 对象创建流程

```
用户点击图形按钮
  → setTool(shapeKey) 选中工具
  → 鼠标移动显示幽灵预览
  → 鼠标按下拖拽缩放
  → 鼠标释放
  → createObject(spec) 创建对象
  → state.objects.push(entry)
  → pushHistory() 记录历史
  → selectOnly(o) 选中
```

### 4.2 画笔绘制流程

```
鼠标按下
  → startBrushStroke(gp) 初始化
  → pointermove 持续触发
    → addBrushPoint3D/2D(gp) 添加点
    → 实时更新预览 mesh
  → pointerup
  → endBrushStroke()
    → 创建 Group，计算中心
    → state.objects.push(entry)
    → pushHistory()
```

### 4.3 撤销/重做流程

```
用户按 Ctrl+Z
  → undo()
  → flush _kbdHistoryTimer（如有挂起的键盘变换）
  → state.hIndex--
  → restore(state.history[hIndex])
    → 差异恢复：删除多余对象，重建变化对象
  → updateUndoRedoUI()
```

### 4.4 擦除流程

```
鼠标按下（橡皮擦工具）
  → eraseAt(gp) 立即擦除
  → pointermove 节流
    → _scheduleErase(gp) 每帧最多一次
      → _eraseAtSingle(gp) 遍历对象
        → findObjectsInRadius() 查找范围内对象
        → 重建画笔 Group（分离擦除段）
  → pointerup
    → pushHistory() 记录擦除结果
```
