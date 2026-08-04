window.__packs = window.__packs || {};

window.__packs['ja'] = {
  // Top bar
  lang: '日本語', new:'新規', import:'インポート', export:'エクスポート', shot:'スクリーンショット',
  undo:'元に戻す', redo:'やり直す', copy:'コピー', paste:'貼り付け', dup:'複製', clear:'全削除',
  axes:'座標軸', grid:'グリッド', settings:'設定', settingsTitle:'設定',
  tabHelp:'ヘルプ', tabTheme:'テーマ', tabLang:'言語', tabAbout:'概要',
  helpEmpty:'ヘルプは近日公開予定です。',
  themeTitle:'テーマ', langTitle:'言語',
  aboutName:'立方 · 3Dデザインワークショップ',
  aboutDesc:'Three.jsベースのWebブラウザ向け3Dグラフィックデザイン・編集ツール。',
  aboutStack:'技術スタック：Three.js / WebGL',
  aboutRepo:'GitHubリポジトリ', aboutCopyright:'© 2026 立方工房',
  cancel:'キャンセル', confirm:'確認', ok:'OK', apply:'色を適用',
  fs:'全画面', fsExit:'全画面解除',

  // Panel headers
  sec3D:'3D図形', sec2D:'2D図形', secTransform:'トランスフォーム', secMaterial:'マテリアル',
  secColor:'色', secPattern:'パターン/テクスチャ', secTextBox:'テキストボックス',
  secEraser:'消しゴム設定', secMouse:'マウス操作', secTouch:'タッチ操作',
  secKeyboard:'キーボードショートカット',

  // Tabs
  tabBrush:'ブラシ',

  // Control labels
  rotation:'回転', scalePosition:'スケール/位置', objectSize:'オブジェクトサイズ',
  cornerRadius:'コーナー半径', segments:'分割数', verticalStretch:'縦方向伸縮',
  shape:'形状', color:'色', noColor:'無色', metalness:'メタルネス', roughness:'粗さ',
  opacity:'不透明度', wireframe:'ワイヤーフレーム', textureLabel:'テクスチャ', patternLabel:'パターン',
  rotationHorizontal:'水平回転', rotationVertical:'垂直回転', rotationLateral:'横回転',
  uniformScale:'均等スケール', presetColors:'プリセット色', customColor:'カスタム色',
  fontFamily:'フォント', fontYaHei:'Microsoft YaHei', fontSimSun:'SimSun', fontKaiTi:'KaiTi', fontSimHei:'SimHei', fontFangSong:'FangSong', fontSize:'サイズ', fontWeight:'ウェイト', textDirection:'方向',
  brushThickness:'ブラシサイズ', brushGap:'最小間隔', eraserMode:'消しゴムモード',
  eraserSize:'消しゴムサイズ',

  // Eraser modes
  eraserWhole:'全体消去', eraserLocal:'部分消去',

  // Font/text options
  fontNormal:'標準', fontBold:'太字',
  textHorizontal:'横書き', textVertical:'縦書き',

  // Buttons
  colorPicker:'ピッカー', uploadImageTex:'画像テクスチャをアップロード',
  clearPatternTex:'パターン/テクスチャをクリア', editTextContent:'テキストを編集',
  deleteSelected:'選択を削除（Del/Backspace）', deleteSelectedTouch:'選択を削除', eyedropper:'スポイト', bgTextDefault:'デフォルト',

  // Modals
  colorPickerTitle:'カラーピッカー', saturationValue:'彩度/明度', hue:'色相',
  hexColor:'HEX値', colorPreview:'色プレビュー',
  enterText:'テキスト入力', enterTextPlaceholder:'テキストを入力…', confirm:'確認',

  // Bottom bar
  boxSelect:'ボックス選択', selectAll:'すべて選択',
  viewPersp:'透視', viewTop:'上面', viewBottom:'下面',
  viewFront:'正面', viewBack:'背面', viewLeft:'左面', viewRight:'右面',

  // Toast messages
  toastNewScene:'新規シーンを作成しました', toastImageExported:'画像をエクスポートしました',
  toastSceneExported:'シーンをJSONとしてエクスポートしました', toastSceneImported:'シーンをインポートしました',
  toastImportFailed:'インポートに失敗しました',

  // Keyboard
  keyShortcut:'ショートカット', keyAction:'操作',

  // Panel & tools
  secTools:'ツール', secTransformMode:'トランスフォームモード', secProperties:'プロパティ',
  brushProperties:'ブラシ設定',
  toolNameSelect:'選択/トランスフォーム', toolNameBrush3D:'3Dブラシ', toolNameBrush2D:'2Dブラシ',
  toolNameEraser:'消しゴム', toolNameAddText:'テキストを追加', toolNameAddImage:'画像を追加',
  translate:'移動', rotate:'回転', scale:'スケール',
  lockRatio:'均等スケール',
  posX:'位置 X', posY:'位置 Z', posZ:'位置 Y',
  emptyHint:'オブジェクトが選択されていません。\n左パネルから図形を選び、地面をクリックして配置するか、既存のオブジェクトをクリックして編集します。\nShift+クリックで複数選択できます。トランスフォームは選択したすべてのオブジェクトにまとめて適用されます。',
  declaration:'声明',
  // Declaration body
  declBody1:'このツールはThree.jsをベースにした純粋なフロントエンド3D/2Dシーンエディタで、パラメトリック3D/2D図形、',
  declBody2:'2D/3Dブラシ、テキスト/画像/テクスチャ/パターンサポート、精密な移動/回転/スケーリング、元に戻す/やり直し履歴、JSONインポート/エクスポートを内蔵しています。',
  declBody3:'すべての3Dモデル、テクスチャ、テキスト、画像はブラウザでローカルにリアルタイムレンダリングされ、個人の学習とクリエイティブなデザインに自由に使用できます。',
  declBody4:'シーンデータはJSONファイルとしてローカルにエクスポートして保存できます。ユーザー情報はサーバーにアップロードされません。',
  declAuthor:'作者', declAI:'AI支援', declAIText:'TRAE ツールの AI 機能で生成を支援', declUpdate:'最終更新日',

  // Mouse/Touch help
  helpMouseClick:'左クリック', helpMouseClickDesc:'オブジェクト / コントロールを選択',
  helpMouseDblClick:'左ダブルクリック', helpMouseDblClickDesc:'テキストを編集',
  helpMouseHold:'左長押し', helpMouseHoldDesc:'オブジェクト / コントロールを操作',
  helpMouseRhold:'右長押し', helpMouseRholdDesc:'視点を回転',
  helpMouseMidhold:'中長押し', helpMouseMidholdDesc:'視点を移動',
  helpMouseWheel:'スクロール', helpMouseWheelDesc:'視点をズーム',
  helpTouchTap:'シングルタップ', helpTouchTapDesc:'オブジェクト / コントロールを選択',
  helpTouchDblTap:'ダブルタップ', helpTouchDblTapDesc:'テキストを編集',
  helpTouchLongObj:'オブジェクト長押し', helpTouchLongObjDesc:'選択の追加/削除を切替（Shift+クリック相当）',
  helpTouchDragObj:'オブジェクトドラッグ', helpTouchDragObjDesc:'オブジェクト / コントロールを操作',
  helpTouchDragBlank:'空白ドラッグ', helpTouchDragBlankDesc:'視点を回転',
  helpTouchTapBlank:'空白タップ', helpTouchTapBlankDesc:'すべての選択を解除',
  helpTouchSelectAll:'「すべて選択」ボタン', helpTouchSelectAllDesc:'すべてのオブジェクトを選択',
  helpTouchBoxSelect:'「範囲選択」ボタン', helpTouchBoxSelectDesc:'単指ドラッグで範囲選択を有効化',
  helpTouchTwoDrag:'二本指ドラッグ', helpTouchTwoDragDesc:'視点を移動',
  helpTouchPinch:'ピンチ', helpTouchPinchDesc:'視点をズーム',

  // Keyboard shortcut table
  kbdTitleBasic:'基本キー', kbdTitleShift:'Shift 組合せ', kbdTitleSlider:'スライダー / 入力', kbdTitleFunc:'ファンクションキー', kbdTitleCtrl:'Ctrl 組合せ',
  kbdNoteBasic:'選択時: 0.1グリッド (0.15単位) 移動 / 5°回転{br}非選択時: 視点を0.1グリッド移動 / 5°回転',
  kbdNoteShift:'選択時: 1グリッド (1.5単位) 移動 / 90°回転{br}非選択時: 視点を1グリッド移動 / 90°回転',
  kbdNoteSlider:'スライダーまたは入力にフォーカス時、矢印キーは一時的に再マッピングされます',
  kbdThKey:'キー', kbdThSelected:'選択時', kbdThUnselected:'非選択時', kbdThShiftKey:'Shift+', kbdThSlider:'スライダー', kbdThInput:'入力',
  kbdBasicDirSel:'X+/−方向に移動{br}Y+/−方向に移動{br}Z+/−方向に移動',
  kbdBasicDirUnsel:'視点を前/後ろに移動{br}視点を右/左に移動{br}視点を上/下に移動',
  kbdBasicRotSel:'Z軸 CCW/CW回転{br}Y軸 CCW/CW回転{br}X軸 CCW/CW回転',
  kbdBasicRotUnsel:'左/右に回転{br}上/下に回転{br}—',
  kbdBasicScaleSel:'5%拡大/縮小',
  kbdShiftPosSel:'1グリッド移動{br}1グリッド移動', kbdShiftPosUnsel:'1グリッド移動{br}1グリッド移動',
  kbdShiftRotSel:'90°回転{br}90°回転{br}90°回転', kbdShiftRotUnsel:'90°回転{br}90°回転{br}90°回転',
  kbdShiftScaleSel:'スケール×2 / ×0.5', kbdShiftClickSel:'選択に追加（複数選択）',
  kbdSliderSel:'増加/減少{br}増加/減少{br}—', kbdSliderInput:'カーソル移動{br}増加/減少{br}符号入力 (+/−)',
  kbdSliderPgSel:'大きいステップで増減', kbdSliderPgInput:'右パネルをスクロール',
  kbdFuncEsc:'操作をキャンセル / 全画面終了', kbdFuncF11:'全画面 / 全画面終了', kbdFuncDel:'選択オブジェクトを削除',
  kbdCtrlA:'すべて選択', kbdCtrlN:'新規シーン', kbdCtrlO:'シーン読込', kbdCtrlS:'シーン書出', kbdCtrlP:'スクリーンショット',
  kbdCtrlZ:'元に戻す', kbdCtrlY:'やり直し', kbdCtrlC:'コピー', kbdCtrlV:'貼り付け', kbdCtrlD:'複製', kbdCtrlDel:'シーンクリア',

  // Extended Toast messages
  toastSelectAllN:'{0}個のオブジェクトを選択しました', toastOldestState:'すでに最も古い状態です', toastUndone:'元に戻しました',
  toastNewestState:'すでに最新の状態です', toastRedone:'やり直しました', toastTextAdded:'テキストを追加しました',
  toastImageAdded:'画像を追加しました', toastPlacedLabel:'{0}を配置しました', toastAddedLabel:'{0}を追加しました',
  toastNoColorN:'{0}個のオブジェクトに無色を適用 — 透明度・パターン・テクスチャは非対応', toastNoColorOne:'無色を適用 — 透明度・パターン・テクスチャは非対応', toastNoEyedropper:'このブラウザはスポイトに対応していません。色の値を手動で入力してください',
  toastBrushColorSet:'ブラシの色を{0}に設定しました', toastColorApplied:'色{0}を適用しました',
  toastEraserWholeHint:'全体消去: オブジェクト全体を削除', toastEraserLocalHint:'局所消去: 円内のストロークのみ消去（ストローク分割可）',
  toastTransformMode:'トランスフォームモード: {0}', toastImageLoaded:'画像の読み込みが完了しました — 地面をクリックして配置',
  toastDeletedN:'{0}個のオブジェクトを削除しました', toastSelectFirst:'先にオブジェクトを選択してください', toastImageTexApplied:'画像テクスチャを適用しました',
  toastTexCleared:'テクスチャをクリアしました', toastCleared:'クリアしました',
  toastAxesShown:'座標軸を表示しました', toastAxesHidden:'座標軸を非表示にしました',
  toastGridShown:'グリッドを表示しました', toastGridHidden:'グリッドを非表示にしました',
  toastImageExportedWH:'画像をエクスポートしました（{0}×{1}）',
  toastBoxSelectOn:'範囲選択モード: ドラッグでオブジェクトを選択', toastBoxSelectOff:'範囲選択モードを終了しました',
  toastPlacedScaleLabel:'「{0}」を配置しました（スケール{1}倍）', toastBoxSelectMiss:'範囲内にオブジェクトがありません', toastBoxSelectedN:'{0}個のオブジェクトを範囲選択しました',
  toastTextUpdated:'テキストを更新しました', toastCantCopyTransform:'トランスフォーム中はコピーできません', toastCopiedN:'{0}個のオブジェクトをコピーしました',
  toastCantPasteTransform:'トランスフォーム中は貼り付けできません', toastClipboardEmpty:'クリップボードが空です', toastPastedN:'{0}個のオブジェクトを貼り付けました',
  toastTransformNoCopy:'トランスフォーム中はコピーできません', toastSelectToCopy:'コピーするオブジェクトを選択してください',
  toastTransformNoClone:'トランスフォーム中は複製できません', toastSelectToClone:'複製するオブジェクトを選択してください',
  toastTransformNoDelete:'トランスフォーム中は削除できません', toastSelectToDelete:'削除するオブジェクトを選択してください',
  toastNoScaleMulti:'複数選択時はスケーリングが無効です', toastWelcome:'Cube · 3Dデザインワークショップへようこそ',
  loadTimeout:'読み込みタイムアウト、ページを更新してください',
  // Theme names
  themeNeon:'ネオン紫', themeSunset:'サンセット橙', themeForest:'フォレスト緑', themeGray:'ミッドナイト灰', themeLight:'ライト白',
  // Tooltips
  titleNew:'新規シーン (Ctrl+N)', titleImport:'シーン読込 (Ctrl+O)', titleExport:'シーン書出 (Ctrl+S)', titleShot:'スクリーンショット (Ctrl+P)',
  titleUndo:'元に戻す (Ctrl+Z)', titleRedo:'やり直し (Ctrl+Y)', titleCopy:'コピー (Ctrl+C)', titlePaste:'貼り付け (Ctrl+V)', titleDup:'複製 (Ctrl+D)', titleClear:'シーンクリア (Ctrl+Del/Backspace)',
  titleAxes:'座標軸の表示切替', titleGrid:'グリッドの表示切替', titleSettings:'設定', titleFS:'全画面 (F11 / Esc)',
  titleTranslate:'移動モード', titleRotate:'回転モード', titleScale:'スケールモード',
  titleBBToggle:'視点切替の表示/非表示', titleBoxSelect:'範囲選択モード: ドラッグで選択', titleSelectAll:'すべてのオブジェクトを選択',
  titleEyedropper:'スクリーンから色を取得', titleSettingsClose:'閉じる',
  // Inline text hints
  textHintPlaceholder:'テキストを入力... (Enter で確定 · Esc で取消)', textHintEnter:'Enter で確定 · Esc で取消 · Shift+Enter で改行',
  loadFail:'読み込みに失敗しました',
  // Shape names
  shapeBox:'立方体', shapeSphere:'球体', shapeCylinder:'円柱', shapeCone:'円錐', shapeTorus:'トーラス',
  shapeKnot:'結び目', shapeIcosa:'正二十面体', shapeOcta:'正八面体', shapeDodeca:'正十二面体', shapeCapsule:'カプセル',
  shapePyramid:'正四角錐', shapePrism:'正三角柱', shapeTube:'パイプ', shapeLathe:'回転体', shapeTetra:'正四面体',
  shapeBarrel:'樽形', shapeDome:'半球', shapeHelix:'螺旋環', shapeOctaPrism:'正八角柱', shapeStar3d:'立体星',
  shapeSquare2:'正方形', shapeCircle2:'円', shapeTriangle:'正三角形', shapeStar:'星', shapeHexagon:'正六角形',
  shapeHeart:'ハート', shapePentagon:'正五角形', shapeOctagon:'正八角形', shapeEllipse:'楕円',
  shapeParallelogram:'平行四辺形', shapeTrapezoid:'台形', shapeDiamond:'菱形',
  shapeRightTri:'直角三角形', shapeArrow:'矢印', shapeCrescent:'三日月', shapeSemicircle:'半円',
  shapeRing2d:'円環', shapeCross:'十字', shapeLightning:'稲妻', shapeTeardrop:'涙滴',
  shapeBrush:'ブラシストローク', shapeText:'テキスト', shapeImage:'画像',
  // Pattern names
  patSolid:'ソリッド', patGrid:'格子', patStripe:'ストライプ', patDot:'ドット', patGradient:'グラデーション', patBrick:'レンガ',
  patDiagonal:'斜線', patWave:'波形', patDots:'点陣', patCross:'クロス', patMesh:'メッシュ', patSpiral:'螺旋',
  // Shape param labels
  pRadius:'半径', pHeight:'高さ', pLength:'長さ L', pWidth:'幅 W', pSegments:'分割数',
  pBase:'底辺', pOuterRadius:'外半径', pInnerRadius:'内半径', pPoints:'角数',
  pScale:'スケール', pSkew:'傾斜', pTube:'チューブ半径', pMainRadius:'主半径',
  pTopWidth:'上底幅', pBottomWidth:'下底幅', pRadiusX:'X 半径', pRadiusY:'Y 半径',
  // Multi-select hints
  hintMultiSel:'{0}個のオブジェクトを選択中 · トランスフォームはグループ単位で適用されます',
  hintMultiBlockedPat:'「{0}」を含む — パターン/テクスチャパネルを非表示（図形のみ対応。非図形オブジェクトの選択を解除してください）',
  hintMultiBlockedColor:'画像またはテクスチャ付き図形を含む — カラーパネルを非表示（テクスチャなし図形のみ対応。テクスチャをクリアしてください）',
  hintMultiAllNoColor:'{0}個のオブジェクトが無色 — 透明度/パターン/テクスチャを非表示（有色オブジェクトのみ対応。色を付けてください）',
  hintMultiSomeNoColor:'{0}個の無色オブジェクトを含む — 透明度/パターン/テクスチャを非表示（有色オブジェクトのみ対応。無色オブジェクトに色を付けてください）',
  hintMultiLockRatio:'複数選択モード — 等倍スケールを非表示（単一選択時のみ対応。オブジェクトを一つ選択してください）',
  // Confirm dialogs
  confirmClearScene:'シーンを消去しますか？この操作は取り消せます。', confirmNewScene:'新規シーンを作成しますか？現在の内容は消去されます。',
  // Status bar
  statusReady:'準備完了 · クリックで選択/トランスフォーム · 右ドラッグで移動 · スクロールでズーム',
  statusText:'地面をクリックしてテキストを配置',
  statusImage:'地面をクリックして画像を配置',
  statusShape:'ドラッグまたはクリックで「{0}」を配置 · スクロールでズーム',
  statusBrush3d:'3Dブラシ: 左ボタン長押しで空間に描画 · 右ドラッグで視点移動 · スクロールでズーム',
  statusBrush2d:'2Dブラシ: 左ボタン長押しで地面に描画 · 右ドラッグで視点移動 · スクロールでズーム',
  statusEraser:'消しゴム: ドラッグまたはクリックで消去 · 全体消去=オブジェクトごと削除；局所消去=円内のストロークのみ消去（ストローク分割可）· 右ドラッグで視点移動',
  appTitle:'3Dエディタ',
};
