window.__packs = window.__packs || {};

window.__packs['zh-TW'] = {
  // Top bar
  lang: '繁體中文', new:'新建', import:'匯入', export:'匯出', shot:'截圖',
  undo:'復原', redo:'重做', copy:'複製', paste:'貼上', dup:'複製', clear:'清除',
  axes:'座標軸', grid:'網格面', settings:'設定', settingsTitle:'設定',
  tabHelp:'說明', tabTheme:'主題風格', tabLang:'語言切換', tabAbout:'關於',
  helpEmpty:'說明內容即將上線，敬請期待。',
  themeTitle:'主題風格', langTitle:'語言切換',
  aboutName:'立方·三維圖形設計工坊', aboutDesc:'基於 Three.js 的網頁端三維圖形設計與編輯工具。',
  aboutStack:'技術棧：Three.js / WebGL', aboutRepo:'GitHub 倉庫',
  aboutCopyright:'Copyright © 2026-Present Yushichadao. All Rights Reserved.', aboutAuthor:'作者', tosLink:'服務條款', disclaimerLink:'免責聲明', privacyLink:'隱私權政策', tosBody:'使用本工具即表示您同意以下條款：本工具僅供個人學習、創意設計與非商業用途；您需對自身上傳或創作的素材內容負責，確保其不侵犯任何第三方權利；我們保留在不另行通知的情況下修改或停止服務的權利。請合理使用，遵守當地法律法規。', disclaimerBody:'本工具按「現狀」提供，不對其可用性、準確性或適用性作任何明示或暗示擔保。使用者因使用本工具而產生的任何直接或間接損失，開發者不承擔任何責任。工具內建的 AI 輔助功能生成內容僅供參照，不構成專業建議。', privacyBody:'我們高度重視您的隱私。本工具為純前端應用，所有三維模型、文字、圖像及場景資料均在您的瀏覽器本機處理與保存，不會上傳至任何伺服器。我們不會收集、儲存或共享您的個人資訊。如您使用第三方連結（如 GitHub），請參照其相應隱私權政策。',
  cancel:'取消', confirm:'確認', ok:'確定', apply:'套用顏色',
  fs:'全螢幕', fsExit:'退出全螢幕',

  // Panel headers
  sec3D:'3D 圖形', sec2D:'2D 圖形', secTransform:'變換', secMaterial:'材質',
  secColor:'顏色', secPattern:'花紋 / 貼圖', secTextBox:'文字框',
  secEraser:'橡皮擦屬性', secMouse:'滑鼠相關操作', secTouch:'手勢操作',
  secKeyboard:'鍵盤快捷鍵',

  // Tabs
  tabBrush:'畫筆',

  // Control labels
  rotation:'旋轉', scalePosition:'縮放 / 位置', objectSize:'物體尺寸',
  cornerRadius:'圓角', segments:'分段', verticalStretch:'垂直拉伸',
  shape:'形狀', color:'顏色', noColor:'無顏色', metalness:'金屬度', roughness:'粗糙度',
  opacity:'透明度', wireframe:'線框', textureLabel:'貼圖', patternLabel:'花紋',
  rotationHorizontal:'水平旋轉', rotationVertical:'垂直旋轉', rotationLateral:'側向旋轉',
  uniformScale:'等比縮放', presetColors:'預設顏色', customColor:'自訂顏色',
  fontFamily:'字型', fontYaHei:'微軟雅黑', fontSimSun:'新細明體', fontKaiTi:'標楷體', fontSimHei:'黑體', fontFangSong:'仿宋體', fontSize:'字型大小', fontWeight:'粗細', textDirection:'排列方向',
  brushThickness:'畫筆粗細', brushGap:'最小間距', eraserMode:'橡皮擦模式',
  eraserSize:'橡皮擦大小',

  // Eraser modes
  eraserWhole:'整體擦除', eraserLocal:'局部擦除',

  // Font/text options
  fontNormal:'常規', fontBold:'粗體',
  textHorizontal:'橫排', textVertical:'直排',

  // Buttons
  colorPicker:'選取器', uploadImageTex:'上傳圖片貼圖', clearPatternTex:'清除花紋/貼圖',
  editTextContent:'編輯文字內容', deleteSelected:'刪除選中物件（Del/Backspace）', deleteSelectedTouch:'刪除選中物件',
  eyedropper:'螢幕取色', bgTextDefault:'預設',

  // Modals
  colorPickerTitle:'顏色選取器', saturationValue:'飽和度 / 明度', hue:'色相',
  hexColor:'HEX 色值', colorPreview:'顏色預覽',
  enterText:'輸入文字', enterTextPlaceholder:'請輸入文字內容…', confirm:'確認',

  // Bottom bar
  boxSelect:'框選', selectAll:'全選',
  viewPersp:'透視', viewTop:'頂視', viewBottom:'底視',
  viewFront:'正視', viewBack:'後視', viewLeft:'左視', viewRight:'右視',

  // Toast messages
  toastNewScene:'已新建空白場景', toastImageExported:'影像已匯出',
  toastSceneExported:'場景已匯出 JSON', toastSceneImported:'場景已匯入',
  toastImportFailed:'匯入失敗',

  // Keyboard
  keyShortcut:'快捷鍵', keyAction:'操作',

  // Panel & tools
  secTools:'工具', secTransformMode:'變換模式', secProperties:'屬性',
  brushProperties:'畫筆屬性',
  toolNameSelect:'選取/變換', toolNameBrush3D:'3D 畫筆', toolNameBrush2D:'2D 畫筆',
  toolNameEraser:'橡皮擦', toolNameAddText:'新增文字', toolNameAddImage:'新增圖片',
  translate:'平移', rotate:'旋轉', scale:'縮放',
  lockRatio:'等比縮放',
  posX:'橫坐標 X', posY:'豎坐標 Z', posZ:'縱坐標 Y',
  emptyHint:'未選中物件。\n從左側選擇圖形，點擊地面放置；或點擊已有物件進行編輯。\nShift+點選可多選，多選時變換作為整體操作。',
  declaration:'聲明',
  // Declaration body
  declBody1:'本工具是基於 Three.js 的純前端 3D/2D 場景編輯器，內建參數化 3D/2D 圖形、',
  declBody2:'2D/3D 畫筆、文字/圖片/紋理/圖案支援、精確平移/旋轉/縮放、撤銷/重做歷史記錄以及 JSON 匯入/匯出。',
  declBody3:'所有 3D 模型、紋理、文字和圖片均在瀏覽器本地端即時渲染，免費供個人學習和創意設計使用。',
  declBody4:'場景資料可匯出為 JSON 檔案儲存於本地。不會將使用者資訊上傳至任何伺服器。',
  declAuthor:'作者', declAI:'AI 輔助', declAIText:'使用 TRAE 工具的 AI 能力輔助生成', declUpdate:'最後更新',

  // Mouse/Touch help
  helpMouseClick:'左鍵點擊', helpMouseClickDesc:'選取物件 / 控制項',
  helpMouseDblClick:'左鍵雙擊', helpMouseDblClickDesc:'編輯文字',
  helpMouseHold:'左鍵長按', helpMouseHoldDesc:'操作物件 / 控制項',
  helpMouseRhold:'右鍵長按', helpMouseRholdDesc:'旋轉視角',
  helpMouseMidhold:'中鍵長按', helpMouseMidholdDesc:'平移視角',
  helpMouseWheel:'滾輪', helpMouseWheelDesc:'縮放視角',
  helpTouchTap:'單指點擊', helpTouchTapDesc:'選取物件 / 控制項',
  helpTouchDblTap:'雙指點擊', helpTouchDblTapDesc:'編輯文字',
  helpTouchLongObj:'長按物件', helpTouchLongObjDesc:'切換加入/移除選取（等同 Shift+點選）',
  helpTouchDragObj:'拖曳物件', helpTouchDragObjDesc:'操作物件 / 控制項',
  helpTouchDragBlank:'拖曳空白處', helpTouchDragBlankDesc:'旋轉視角',
  helpTouchTapBlank:'點擊空白處', helpTouchTapBlankDesc:'取消全選',
  helpTouchSelectAll:'「全選」按鈕', helpTouchSelectAllDesc:'選取所有物件',
  helpTouchBoxSelect:'「框選」按鈕', helpTouchBoxSelectDesc:'啟用單指拖曳框選物件',
  helpTouchTwoDrag:'雙指拖曳', helpTouchTwoDragDesc:'平移視角',
  helpTouchPinch:'捏合手勢', helpTouchPinchDesc:'縮放視角',

  // Keyboard shortcut table
  kbdTitleBasic:'基本按鍵', kbdTitleShift:'Shift 組合', kbdTitleSlider:'滑桿 / 輸入框', kbdTitleFunc:'功能鍵', kbdTitleCtrl:'Ctrl 組合',
  kbdNoteBasic:'有選取時: 平移 0.1 格 (0.15 單位) / 旋轉 5°{br}無選取時: 平移視角 0.1 格 / 旋轉 5°',
  kbdNoteShift:'有選取時: 平移 1 格 (1.5 單位) / 旋轉 90°{br}無選取時: 平移視角 1 格 / 旋轉 90°',
  kbdNoteSlider:'游標在滑桿或輸入框內時生效，方向鍵暫時重新對應',
  kbdThKey:'按鍵', kbdThSelected:'有選取時', kbdThUnselected:'無選取時', kbdThShiftKey:'Shift+', kbdThSlider:'滑桿', kbdThInput:'輸入框',
  kbdBasicDirSel:'沿 X+/− 移動{br}沿 Y+/− 移動{br}沿 Z+/− 移動',
  kbdBasicDirUnsel:'前/後平移視角{br}右/左平移視角{br}上/下平移視角',
  kbdBasicRotSel:'繞 Z 逆/順時針旋轉{br}繞 Y 逆/順時針旋轉{br}繞 X 逆/順時針旋轉',
  kbdBasicRotUnsel:'左/右環繞{br}上/下環繞{br}—',
  kbdBasicScaleSel:'放大/縮小 5%',
  kbdShiftPosSel:'平移 1 格{br}平移 1 格', kbdShiftPosUnsel:'平移 1 格{br}平移 1 格',
  kbdShiftRotSel:'旋轉 90°{br}旋轉 90°{br}旋轉 90°', kbdShiftRotUnsel:'旋轉 90°{br}旋轉 90°{br}旋轉 90°',
  kbdShiftScaleSel:'縮放 ×2 / ×0.5', kbdShiftClickSel:'加入選取（多選）',
  kbdSliderSel:'增加/減少{br}增加/減少{br}—', kbdSliderInput:'移動游標{br}增加/減少{br}輸入正負號 (+/−)',
  kbdSliderPgSel:'大步上/下', kbdSliderPgInput:'捲動右側面板',
  kbdFuncEsc:'取消操作 / 退出全螢幕', kbdFuncF11:'全螢幕 / 退出全螢幕', kbdFuncDel:'刪除選取物件',
  kbdCtrlA:'全選', kbdCtrlN:'新建場景', kbdCtrlO:'匯入場景', kbdCtrlS:'匯出場景', kbdCtrlP:'截圖',
  kbdCtrlZ:'復原', kbdCtrlY:'重做', kbdCtrlC:'複製', kbdCtrlV:'貼上', kbdCtrlD:'原地複製', kbdCtrlDel:'清除場景',

  // Extended Toast messages
  toastSelectAllN:'已選取 {0} 個物件', toastOldestState:'已是最舊狀態', toastUndone:'已復原',
  toastNewestState:'已是最新狀態', toastRedone:'已重做', toastTextAdded:'已新增文字',
  toastImageAdded:'已新增圖片', toastPlacedLabel:'已放置 {0}', toastAddedLabel:'已新增{0}',
  toastNoColorN:'已為 {0} 個物件套用無色 — 不支援透明度、圖案與紋理', toastNoColorOne:'已套用無色 — 不支援透明度、圖案與紋理', toastNoEyedropper:'此瀏覽器不支援滴管工具，請手動輸入色值',
  toastBrushColorSet:'畫筆顏色已設為 {0}', toastColorApplied:'已套用顏色 {0}',
  toastEraserWholeHint:'整體擦除：刪除整個物件', toastEraserLocalHint:'局部擦除：僅擦除圓圈內的筆劃（可切割筆劃）',
  toastTransformMode:'變換模式：{0}', toastImageLoaded:'圖片已載入 — 點擊地面放置',
  toastDeletedN:'已刪除 {0} 個物件', toastSelectFirst:'請先選取物件', toastImageTexApplied:'圖片紋理已套用',
  toastTexCleared:'紋理已清除', toastCleared:'已清除',
  toastAxesShown:'座標軸已顯示', toastAxesHidden:'座標軸已隱藏',
  toastGridShown:'網格面已顯示', toastGridHidden:'網格面已隱藏',
  toastImageExportedWH:'圖片已匯出 ({0}×{1})',
  toastBoxSelectOn:'框選模式：拖曳框選物件', toastBoxSelectOff:'已退出框選模式',
  toastPlacedScaleLabel:'已放置「{0}」（縮放 {1} 倍）', toastBoxSelectMiss:'框選未命中物件', toastBoxSelectedN:'已框選 {0} 個物件',
  toastTextUpdated:'文字已更新', toastCantCopyTransform:'變換中無法複製', toastCopiedN:'已複製 {0} 個物件',
  toastCantPasteTransform:'變換中無法貼上', toastClipboardEmpty:'剪貼簿為空', toastPastedN:'已貼上 {0} 個物件',
  toastTransformNoCopy:'變換進行中，無法複製', toastSelectToCopy:'請先選取物件再複製',
  toastTransformNoClone:'變換進行中，無法原地複製', toastSelectToClone:'請先選取物件再原地複製',
  toastTransformNoDelete:'變換進行中，無法刪除', toastSelectToDelete:'請先選取物件再刪除',
  toastNoScaleMulti:'多選時禁止縮放操作', toastWelcome:'歡迎使用立方·三維設計工坊',
  deleteSelectedTouch:'刪除選中物件', loadTimeout:'載入逾時，請重新整理頁面',
  // Theme names
  themeNeon:'霓虹藍紫', themeSunset:'日落暖橙', themeForest:'森林青綠', themeGray:'暗夜靜灰', themeLight:'亮白',
  // Tooltips
  titleNew:'新增場景 (Ctrl+N)', titleImport:'匯入場景 JSON (Ctrl+O)', titleExport:'匯出場景 JSON (Ctrl+S)', titleShot:'匯出影像 PNG (Ctrl+P)',
  titleUndo:'復原 (Ctrl+Z)', titleRedo:'重做 (Ctrl+Y)', titleCopy:'複製 (Ctrl+C)', titlePaste:'貼上 (Ctrl+V)', titleDup:'原地複製 (Ctrl+D)', titleClear:'清除場景（Ctrl+Del/Backspace）',
  titleAxes:'切換座標軸顯示', titleGrid:'切換網格面顯示', titleSettings:'設定', titleFS:'全螢幕 (F11 / Esc)',
  titleTranslate:'平移模式', titleRotate:'旋轉模式', titleScale:'縮放模式',
  titleBBToggle:'展開/收起視角切換', titleBoxSelect:'框選模式：單指拖曳框選物件', titleSelectAll:'全選所有物件',
  titleEyedropper:'使用螢幕取色器', titleSettingsClose:'關閉',
  // Inline text hints
  textHintPlaceholder:'輸入文字... (Enter 確認 · Esc 取消)', textHintEnter:'Enter 確認 · Esc 取消 · Shift+Enter 換行',
  loadFail:'載入失敗',
  // Shape names
  shapeBox:'立方體', shapeSphere:'球體', shapeCylinder:'圓柱', shapeCone:'圓錐', shapeTorus:'圓環',
  shapeKnot:'紐結', shapeIcosa:'正二十面體', shapeOcta:'正八面體', shapeDodeca:'正十二面體', shapeCapsule:'膠囊',
  shapePyramid:'正四稜錐', shapePrism:'正三稜柱', shapeTube:'管道', shapeLathe:'回轉體', shapeTetra:'正四面體',
  shapeBarrel:'桶狀體', shapeDome:'半球', shapeHelix:'螺旋環', shapeOctaPrism:'正八稜柱', shapeStar3d:'立體星',
  shapeSquare2:'正方形', shapeCircle2:'圓形', shapeTriangle:'正三角形', shapeStar:'星形', shapeHexagon:'正六邊形',
  shapeHeart:'心形', shapePentagon:'正五邊形', shapeOctagon:'正八邊形', shapeEllipse:'橢圓',
  shapeParallelogram:'平行四邊形', shapeTrapezoid:'梯形', shapeDiamond:'菱形',
  shapeRightTri:'直角三角形', shapeArrow:'箭頭', shapeCrescent:'月牙', shapeSemicircle:'半圓',
  shapeRing2d:'圓環', shapeCross:'十字', shapeLightning:'閃電', shapeTeardrop:'水滴',
  shapeBrush:'畫筆筆跡', shapeText:'文字', shapeImage:'圖片',
  // Pattern names
  patSolid:'純色', patGrid:'方格', patStripe:'條紋', patDot:'圓點', patGradient:'漸層', patBrick:'磚牆',
  patDiagonal:'斜紋', patWave:'波浪', patDots:'點陣', patCross:'交叉', patMesh:'網格', patSpiral:'螺紋',
  // Shape param labels
  pRadius:'半徑', pHeight:'高度', pLength:'長度 L', pWidth:'寬度 W', pSegments:'分段',
  pBase:'底邊長', pOuterRadius:'外半徑', pInnerRadius:'內半徑', pPoints:'角數',
  pScale:'縮放', pSkew:'傾斜', pTube:'管半徑', pMainRadius:'主半徑',
  pTopWidth:'上底寬', pBottomWidth:'下底寬', pRadiusX:'X 半徑', pRadiusY:'Y 半徑',
  // Multi-select hints
  hintMultiSel:'已選取 {0} 個物件 · 變換將作為整體操作',
  hintMultiBlockedPat:'目前包含「{0}」，已隱藏「圖案/紋理欄」（僅支援「圖形物件」，解除操作：排除非圖形物件後單選）',
  hintMultiBlockedColor:'目前包含「圖片或帶貼圖圖形」，已隱藏「顏色欄」（僅支援「無貼圖物件」，解除操作：清除貼圖後單選）',
  hintMultiAllNoColor:'目前{0}個物件「全部為無顏色」，已隱藏「透明度控制、圖案/紋理欄」（僅支援「有顏色物件」，解除操作：直接點選顏色重新上色）',
  hintMultiSomeNoColor:'目前包含{0}個「無顏色物件」，已隱藏「透明度控制、圖案/紋理欄」（僅支援「有顏色物件」，解除操作：為無顏色物件重新上色）',
  hintMultiLockRatio:'目前為「多選模式」，已隱藏「等比縮放控制」（僅支援「單選模式」，解除操作：單選物件後操作）',
  // Confirm dialogs
  confirmClearScene:'確定清除場景？此操作可復原。', confirmNewScene:'確定新增場景？目前場景將被清除。',
  // Status bar
  statusReady:'就緒 · 點擊選取/變換 · 右鍵拖曳平移 · 滾輪縮放',
  statusText:'點擊地面位置輸入文字',
  statusImage:'點擊地面新增圖片',
  statusShape:'拖曳放置或點擊地面放置「{0}」 · 滾輪縮放',
  statusBrush3d:'3D 畫筆：按住左鍵在空間中繪製 · 右鍵拖曳平移視角 · 滾輪縮放',
  statusBrush2d:'2D 畫筆：按住左鍵在地面上繪製 · 右鍵拖曳平移視角 · 滾輪縮放',
  statusEraser:'橡皮擦：拖曳或點擊擦除 · 整體擦除=將物件整條刪除；局部擦除=僅擦除圈內筆跡（可分節）· 右鍵拖曳平移視角',
  appTitle:'3D 編輯器',
};
