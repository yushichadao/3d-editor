window.__packs = window.__packs || {};

window.__packs['en'] = {
  // Top bar
  lang: 'English', new:'New', import:'Import', export:'Export', shot:'Screenshot',
  undo:'Undo', redo:'Redo', copy:'Copy', paste:'Paste', dup:'Clone', clear:'Clear',
  axes:'Axes', grid:'Grid', settings:'Settings', settingsTitle:'Settings',
  tabHelp:'Help', tabTheme:'Theme', tabLang:'Language', tabAbout:'About',
  helpEmpty:'Help content coming soon.',
  themeTitle:'Theme', langTitle:'Language',
  aboutName:'Cube · 3D Design Workshop', aboutDesc:'A web-based 3D design and editing tool powered by Three.js.',
  aboutStack:'Stack: Three.js / WebGL', aboutRepo:'GitHub Repository',
  aboutCopyright:'Copyright © 2026-Present Yushichadao. All Rights Reserved.', aboutAuthor:'Author', aboutAI:'AI Assisted', aboutAIText:'Generated with AI assistance from the TRAE and CodeBuddy tools', tosLink:'Terms of Service', disclaimerLink:'Disclaimer', privacyLink:'Privacy Policy', tosBody:'By using this tool you agree to the following: it is provided for personal learning, creative design and non-commercial use only; you are responsible for any content you upload or create, ensuring it does not infringe any third-party rights; we reserve the right to modify or discontinue the service without prior notice. Please use it lawfully and responsibly.', disclaimerBody:'This tool is provided \'as is\' without any express or implied warranty of availability, accuracy or fitness for a particular purpose. The developer shall not be liable for any direct or indirect loss arising from its use.', privacyBody:'We highly value your privacy. This tool is a pure front-end application: all 3D models, text, images and scene data are processed and stored locally in your browser and are never uploaded to any server. We do not collect, store or share your personal information. For third-party links (e.g. GitHub), please refer to their respective privacy policies.',
  cancel:'Cancel', confirm:'Confirm', ok:'OK', apply:'Apply Color', fs:'Fullscreen', fsExit:'Exit Fullscreen',

  // Panel headers
  sec3D:'3D Shapes', sec2D:'2D Shapes', secTransform:'Transform', secMaterial:'Material',
  secColor:'Color', secPattern:'Pattern / Texture', secTextBox:'Text Box',
  secEraser:'Eraser Properties', secMouse:'Mouse Controls', secTouch:'Touch Controls',
  secKeyboard:'Keyboard Shortcuts',

  // Tabs
  tabBrush:'Brush',

  // Control labels
  rotation:'Rotation', scalePosition:'Scale / Position', objectSize:'Object Size',
  cornerRadius:'Corner Radius', segments:'Segments', verticalStretch:'Vertical Stretch',
  shape:'Shape', color:'Color', noColor:'No Color', metalness:'Metalness', roughness:'Roughness',
  opacity:'Opacity', wireframe:'Wireframe', textureLabel:'Texture', patternLabel:'Pattern',
  rotationHorizontal:'Horizontal Rot.', rotationVertical:'Vertical Rot.', rotationLateral:'Lateral Rot.',
  uniformScale:'Uniform Scale', presetColors:'Preset Colors', customColor:'Custom Color',
  fontFamily:'Font', fontYaHei:'Microsoft YaHei', fontSimSun:'SimSun', fontKaiTi:'KaiTi', fontSimHei:'SimHei', fontFangSong:'FangSong', fontSize:'Size', fontWeight:'Weight', textDirection:'Direction',
  brushThickness:'Brush Size', brushGap:'Min Gap', eraserMode:'Eraser Mode',
  eraserSize:'Eraser Size',

  // Eraser modes
  eraserWhole:'Whole Erase', eraserLocal:'Local Erase',

  // Font/text options
  fontNormal:'Regular', fontBold:'Bold',
  textHorizontal:'Horizontal', textVertical:'Vertical',

  // Buttons
  colorPicker:'Picker', uploadImageTex:'Upload Image Texture', clearPatternTex:'Clear Pattern/Texture',
  editTextContent:'Edit Text Content', deleteSelected:'Delete Selected (Del/Backspace)', deleteSelectedTouch:'Delete Selected',
  eyedropper:'Eyedropper', bgTextDefault:'Default',

  // Modals
  colorPickerTitle:'Color Picker', saturationValue:'Saturation / Value', hue:'Hue',
  hexColor:'HEX Value', colorPreview:'Color Preview',
  enterText:'Enter Text', enterTextPlaceholder:'Enter text content…', confirm:'Confirm',

  // Bottom bar
  boxSelect:'Box Select', selectAll:'Select All',
  viewPersp:'Perspective', viewTop:'Top', viewBottom:'Bottom',
  viewFront:'Front', viewBack:'Back', viewLeft:'Left', viewRight:'Right',

  // Toast messages
  toastNewScene:'New blank scene created', toastImageExported:'Image exported',
  toastSceneExported:'Scene exported as JSON', toastSceneImported:'Scene imported',
  toastImportFailed:'Import failed',

  // Keyboard
  keyShortcut:'Shortcut', keyAction:'Action',

  // Panel & tools
  secTools:'Tools', secTransformMode:'Transform Mode', secProperties:'Properties',
  brushProperties:'Brush Properties',
  toolNameSelect:'Select/Transform', toolNameBrush3D:'3D Brush', toolNameBrush2D:'2D Brush',
  toolNameEraser:'Eraser', toolNameAddText:'Add Text', toolNameAddImage:'Add Image',
  translate:'Translate', rotate:'Rotate', scale:'Scale',
  lockRatio:'Uniform Scale',
  posX:'Position X', posY:'Position Z', posZ:'Position Y',
  emptyHint:'No object selected.\nPick a shape from the left panel, click the ground to place; or click an existing object to edit.\nShift+click for multi-select; transforms apply to all selected objects.',
  declaration:'Declaration',
  // Declaration body
  declBody1:'This tool is a pure frontend 3D/2D scene editor based on Three.js, with built-in parametric 3D/2D shapes,',
  declBody2:'2D/3D brushes, text/image/texture/pattern support, precise translate/rotate/scale, undo/redo history, and JSON import/export.',
  declBody3:'All 3D models, textures, text, and images are rendered locally in the browser in real time, free for personal learning and creative design.',
  declBody4:'Scene data can be exported and saved locally as JSON files. No user information is uploaded to any server.',
  declAuthor:'Author', declAI:'AI Assisted', declAIText:'Generated with AI assistance from the TRAE and CodeBuddy tools', declUpdate:'Last Updated',

  // Mouse/Touch help
  helpMouseClick:'Left Click', helpMouseClickDesc:'Select object / control',
  helpMouseDblClick:'Double Left Click', helpMouseDblClickDesc:'Edit text',
  helpMouseHold:'Long Press Left', helpMouseHoldDesc:'Manipulate object / control',
  helpMouseRhold:'Long Press Right', helpMouseRholdDesc:'Orbit view',
  helpMouseMidhold:'Long Press Middle', helpMouseMidholdDesc:'Pan view',
  helpMouseWheel:'Scroll Wheel', helpMouseWheelDesc:'Zoom view',
  helpTouchTap:'Single Tap', helpTouchTapDesc:'Select object / control',
  helpTouchDblTap:'Double Tap', helpTouchDblTapDesc:'Edit text',
  helpTouchLongObj:'Long Press Object', helpTouchLongObjDesc:'Toggle add/remove selection (Shift+click equivalent)',
  helpTouchDragObj:'Drag Object', helpTouchDragObjDesc:'Manipulate object / control',
  helpTouchDragBlank:'Drag Blank Area', helpTouchDragBlankDesc:'Orbit view',
  helpTouchTapBlank:'Tap Blank Area', helpTouchTapBlankDesc:'Deselect all',
  helpTouchSelectAll:'"Select All" Button', helpTouchSelectAllDesc:'Select all objects',
  helpTouchBoxSelect:'"Box Select" Button', helpTouchBoxSelectDesc:'Enable single-finger drag to box-select objects',
  helpTouchTwoDrag:'Two-Finger Drag', helpTouchTwoDragDesc:'Pan view',
  helpTouchPinch:'Pinch Gesture', helpTouchPinchDesc:'Zoom view',

  // Keyboard shortcut table
  kbdTitleBasic:'Basic Keys', kbdTitleShift:'Shift Combos', kbdTitleSlider:'Slider / Input', kbdTitleFunc:'Function Keys', kbdTitleCtrl:'Ctrl Combos',
  kbdNoteBasic:'With selection: translate 0.1 grid (0.15 units) / rotate 5°{br}No selection: pan view 0.1 grid / rotate 5°',
  kbdNoteShift:'With selection: translate 1 grid (1.5 units) / rotate 90°{br}No selection: pan view 1 grid / rotate 90°',
  kbdNoteSlider:'Effective when slider or input is focused; arrow keys are temporarily remapped',
  kbdThKey:'Key', kbdThSelected:'With Selection', kbdThUnselected:'Without Selection', kbdThShiftKey:'Shift+', kbdThSlider:'Slider', kbdThInput:'Input',
  kbdBasicDirSel:'Move along X+/−{br}Move along Y+/−{br}Move along Z+/−',
  kbdBasicDirUnsel:'Pan view back/forward{br}Pan view right/left{br}Pan view up/down',
  kbdBasicRotSel:'Rotate Z CCW/CW{br}Rotate Y CCW/CW{br}Rotate X CCW/CW',
  kbdBasicRotUnsel:'Orbit left/right{br}Orbit up/down{br}—',
  kbdBasicScaleSel:'Scale up/down 5%',
  kbdShiftPosSel:'Translate 1 grid{br}Translate 1 grid', kbdShiftPosUnsel:'Pan 1 grid{br}Pan 1 grid',
  kbdShiftRotSel:'Rotate 90°{br}Rotate 90°{br}Rotate 90°', kbdShiftRotUnsel:'Orbit 90°{br}Orbit 90°{br}Orbit 90°',
  kbdShiftScaleSel:'Scale ×2 / ×0.5', kbdShiftClickSel:'Add to selection (multi-select)',
  kbdSliderSel:'Increase/Decrease{br}Increase/Decrease{br}—', kbdSliderInput:'Move cursor{br}Increase/Decrease{br}Input sign (+/−)',
  kbdSliderPgSel:'Large step up/down', kbdSliderPgInput:'Scroll right panel',
  kbdFuncEsc:'Cancel action / Exit fullscreen', kbdFuncF11:'Fullscreen / Exit fullscreen', kbdFuncDel:'Delete selected objects',
  kbdCtrlA:'Select All', kbdCtrlN:'New Scene', kbdCtrlO:'Import Scene', kbdCtrlS:'Export Scene', kbdCtrlP:'Screenshot',
  kbdCtrlZ:'Undo', kbdCtrlY:'Redo', kbdCtrlC:'Copy', kbdCtrlV:'Paste', kbdCtrlD:'Clone', kbdCtrlDel:'Clear Scene',

  // Extended Toast messages
  toastSelectAllN:'Selected {0} objects', toastOldestState:'Already at the oldest state', toastUndone:'Undone',
  toastNewestState:'Already at the newest state', toastRedone:'Redone', toastTextAdded:'Text added',
  toastImageAdded:'Image added', toastPlacedLabel:'Placed {0}', toastAddedLabel:'Added {0}',
  toastNoColorN:'Applied no-color to {0} objects — transparency, pattern & texture not supported', toastNoColorOne:'Applied no-color — transparency, pattern & texture not supported', toastNoEyedropper:'Eyedropper is not supported in this browser; please enter a color value manually',
  toastBrushColorSet:'Brush color set to {0}', toastColorApplied:'Applied color {0}',
  toastEraserWholeHint:'Whole Erase: deletes the entire object', toastEraserLocalHint:'Local Erase: only erases strokes inside the circle (can split strokes)',
  toastTransformMode:'Transform mode: {0}', toastImageLoaded:'Image loaded — click ground to place',
  toastDeletedN:'Deleted {0} objects', toastSelectFirst:'Please select an object first', toastImageTexApplied:'Image texture applied',
  toastTexCleared:'Texture cleared', toastCleared:'Cleared',
  toastAxesShown:'Axes shown', toastAxesHidden:'Axes hidden',
  toastGridShown:'Grid shown', toastGridHidden:'Grid hidden',
  toastImageExportedWH:'Image exported ({0}×{1})',
  toastBoxSelectOn:'Box Select mode: drag to select objects', toastBoxSelectOff:'Exited Box Select mode',
  toastPlacedScaleLabel:'Placed "{0}" (scale {1}x)', toastBoxSelectMiss:'No objects in box selection', toastBoxSelectedN:'Box-selected {0} objects',
  toastTextUpdated:'Text updated', toastCantCopyTransform:'Cannot copy while transforming', toastCopiedN:'Copied {0} objects',
  toastCantPasteTransform:'Cannot paste while transforming', toastClipboardEmpty:'Clipboard is empty', toastPastedN:'Pasted {0} objects',
  toastTransformNoCopy:'Cannot copy during transform', toastSelectToCopy:'Please select objects to copy',
  toastTransformNoClone:'Cannot clone during transform', toastSelectToClone:'Please select objects to clone',
  toastTransformNoDelete:'Cannot delete during transform', toastSelectToDelete:'Please select objects to delete',
  toastNoScaleMulti:'Scaling is disabled in multi-select', toastWelcome:'Welcome to Cube · 3D Design Workshop',
  deleteSelectedTouch:'Delete Selected', loadTimeout:'Load timeout, please refresh',
  // Theme names
  themeNeon:'Neon Amethyst', themeSunset:'Ember Glow', themeForest:'Verdant Pine', themeGray:'Onyx Slate', themeLight:'Alabaster',
  // Tooltips
  titleNew:'New Scene (Ctrl+N)', titleImport:'Import Scene (Ctrl+O)', titleExport:'Export Scene (Ctrl+S)', titleShot:'Screenshot (Ctrl+P)',
  titleUndo:'Undo (Ctrl+Z)', titleRedo:'Redo (Ctrl+Y)', titleCopy:'Copy (Ctrl+C)', titlePaste:'Paste (Ctrl+V)', titleDup:'Duplicate (Ctrl+D)', titleClear:'Clear Scene (Ctrl+Del/Backspace)',
  titleAxes:'Toggle Axes', titleGrid:'Toggle Grid', titleSettings:'Settings', titleFS:'Fullscreen (F11 / Esc)',
  titleTranslate:'Translate Mode', titleRotate:'Rotate Mode', titleScale:'Scale Mode',
  titleBBToggle:'Show / Hide View Controls', titleBoxSelect:'Box Select: Drag to Select Objects', titleSelectAll:'Select All Objects',
  titleEyedropper:'Pick Color from Screen', titleSettingsClose:'Close',
  // Inline text hints
  textHintPlaceholder:'Type text... (Enter to Confirm · Esc to Cancel)', textHintEnter:'Enter Confirm · Esc Cancel · Shift+Enter New Line',
  loadFail:'Load Failed',
  // Shape names
  shapeBox:'Cube', shapeSphere:'Sphere', shapeCylinder:'Cylinder', shapeCone:'Cone', shapeTorus:'Torus',
  shapeKnot:'Knot', shapeIcosa:'Icosahedron', shapeOcta:'Octahedron', shapeDodeca:'Dodecahedron', shapeCapsule:'Capsule',
  shapePyramid:'Pyramid', shapePrism:'Triangular Prism', shapeTube:'Tube', shapeLathe:'Lathe', shapeTetra:'Tetrahedron',
  shapeBarrel:'Barrel', shapeDome:'Dome', shapeHelix:'Helix', shapeOctaPrism:'Octagonal Prism', shapeStar3d:'3D Star',
  shapeSquare2:'Square', shapeCircle2:'Circle', shapeTriangle:'Triangle', shapeStar:'Star', shapeHexagon:'Hexagon',
  shapeHeart:'Heart', shapePentagon:'Pentagon', shapeOctagon:'Octagon', shapeEllipse:'Ellipse',
  shapeParallelogram:'Parallelogram', shapeTrapezoid:'Trapezoid', shapeDiamond:'Diamond',
  shapeRightTri:'Right Triangle', shapeArrow:'Arrow', shapeCrescent:'Crescent', shapeSemicircle:'Semicircle',
  shapeRing2d:'Ring', shapeCross:'Cross', shapeLightning:'Lightning', shapeTeardrop:'Teardrop',
  shapeBrush:'Brush Stroke', shapeText:'Text', shapeImage:'Image',
  // Pattern names
  patSolid:'Solid', patGrid:'Grid', patStripe:'Stripe', patDot:'Dot', patGradient:'Gradient', patBrick:'Brick',
  patDiagonal:'Diagonal', patWave:'Wave', patDots:'Dots', patCross:'Cross', patMesh:'Mesh', patSpiral:'Spiral',
  // Shape param labels
  pRadius:'Radius', pHeight:'Height', pLength:'Length L', pWidth:'Width W', pSegments:'Segments',
  pBase:'Base', pOuterRadius:'Outer Radius', pInnerRadius:'Inner Radius', pPoints:'Points',
  pScale:'Scale', pSkew:'Skew', pTube:'Tube Radius', pMainRadius:'Main Radius',
  pTopWidth:'Top Width', pBottomWidth:'Bottom Width', pRadiusX:'X Radius', pRadiusY:'Y Radius',
  // Multi-select hints
  hintMultiSel:'{0} objects selected · Transform will apply as a group',
  hintMultiBlockedPat:'Contains "{0}" — Pattern/Texture panel hidden (shapes only; deselect non-shape objects to edit)',
  hintMultiBlockedColor:'Contains images or textured shapes — Color panel hidden (texture-free objects only; clear textures to edit)',
  hintMultiAllNoColor:'{0} objects have no color — Opacity & Pattern/Texture hidden (colored objects only; apply a color to edit)',
  hintMultiSomeNoColor:'{0} objects have no color — Opacity & Pattern/Texture hidden (colored objects only; recolor to edit)',
  hintMultiLockRatio:'Multi-select mode — Uniform Scale hidden (single-select only; pick one object to edit)',
  // Confirm dialogs
  confirmClearScene:'Clear the scene? This action can be undone.', confirmNewScene:'Start a new scene? Current content will be cleared.',
  // Status bar
  statusReady:'Ready · Click to Select / Transform · Right‑drag to Pan · Scroll to Zoom',
  statusText:'Click on the ground to place text',
  statusImage:'Click on the ground to place image',
  statusShape:'Drag or click on the ground to place «{0}» · Scroll to Zoom',
  statusBrush3d:'3D Brush: Hold left button to draw in space · Right‑drag to Pan · Scroll to Zoom',
  statusBrush2d:'2D Brush: Hold left button to draw on ground · Right‑drag to Pan · Scroll to Zoom',
  statusEraser:'Eraser: Drag or click to erase · Whole Erase deletes the entire object; Local Erase removes only strokes within the circle (can split strokes) · Right‑drag to Pan',
  appTitle:'3D Editor',
};
