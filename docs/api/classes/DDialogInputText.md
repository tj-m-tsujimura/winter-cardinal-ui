[Winter Cardinal UI - v0.155.0](../index.md) / DDialogInputText

# Class: DDialogInputText<THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogInputText`](../interfaces/DThemeDialogInputText.md) = [`DThemeDialogInputText`](../interfaces/DThemeDialogInputText.md) |
| `OPTIONS` | extends [`DDialogInputTextOptions`](../interfaces/DDialogInputTextOptions.md)<`THEME`\> = [`DDialogInputTextOptions`](../interfaces/DDialogInputTextOptions.md)<`THEME`\> |

## Hierarchy

- [`DDialogInput`](DDialogInput.md)<`string`, [`DInputText`](DInputText.md), [`DInputTextOptions`](../interfaces/DInputTextOptions.md), `THEME`, `OPTIONS`\>

  ↳ **`DDialogInputText`**

  ↳↳ [`DDialogSaveAs`](DDialogSaveAs.md)

## Table of contents

### Constructors

- [constructor](DDialogInputText.md#constructor)

### Properties

- [\_accessibleActive](DDialogInputText.md#_accessibleactive)
- [\_accessibleDiv](DDialogInputText.md#_accessiblediv)
- [\_align](DDialogInputText.md#_align)
- [\_animation](DDialogInputText.md#_animation)
- [\_auto](DDialogInputText.md#_auto)
- [\_background](DDialogInputText.md#_background)
- [\_border](DDialogInputText.md#_border)
- [\_bounds](DDialogInputText.md#_bounds)
- [\_buttonCancel](DDialogInputText.md#_buttoncancel)
- [\_buttonLayout](DDialogInputText.md#_buttonlayout)
- [\_buttonOk](DDialogInputText.md#_buttonok)
- [\_clearType](DDialogInputText.md#_cleartype)
- [\_closeOn](DDialogInputText.md#_closeon)
- [\_corner](DDialogInputText.md#_corner)
- [\_cursor](DDialogInputText.md#_cursor)
- [\_destroyed](DDialogInputText.md#_destroyed)
- [\_focused](DDialogInputText.md#_focused)
- [\_input](DDialogInputText.md#_input)
- [\_isChildrenDirty](DDialogInputText.md#_ischildrendirty)
- [\_label](DDialogInputText.md#_label)
- [\_lastDownPoint](DDialogInputText.md#_lastdownpoint)
- [\_lastSortedIndex](DDialogInputText.md#_lastsortedindex)
- [\_mask](DDialogInputText.md#_mask)
- [\_mode](DDialogInputText.md#_mode)
- [\_onPrerenderBound](DDialogInputText.md#_onprerenderbound)
- [\_options](DDialogInputText.md#_options)
- [\_outline](DDialogInputText.md#_outline)
- [\_overlay](DDialogInputText.md#_overlay)
- [\_owner](DDialogInputText.md#_owner)
- [\_padding](DDialogInputText.md#_padding)
- [\_promise](DDialogInputText.md#_promise)
- [\_reflowable](DDialogInputText.md#_reflowable)
- [\_reject](DDialogInputText.md#_reject)
- [\_resolve](DDialogInputText.md#_resolve)
- [\_shortcuts](DDialogInputText.md#_shortcuts)
- [\_snippet](DDialogInputText.md#_snippet)
- [\_sticky](DDialogInputText.md#_sticky)
- [\_tempDisplayObjectParent](DDialogInputText.md#_tempdisplayobjectparent)
- [\_title](DDialogInputText.md#_title)
- [\_zIndex](DDialogInputText.md#_zindex)
- [accessible](DDialogInputText.md#accessible)
- [accessibleChildren](DDialogInputText.md#accessiblechildren)
- [accessibleHint](DDialogInputText.md#accessiblehint)
- [accessiblePointerEvents](DDialogInputText.md#accessiblepointerevents)
- [accessibleTitle](DDialogInputText.md#accessibletitle)
- [accessibleType](DDialogInputText.md#accessibletype)
- [alpha](DDialogInputText.md#alpha)
- [angle](DDialogInputText.md#angle)
- [buttonMode](DDialogInputText.md#buttonmode)
- [cacheAsBitmap](DDialogInputText.md#cacheasbitmap)
- [children](DDialogInputText.md#children)
- [cursor](DDialogInputText.md#cursor)
- [filterArea](DDialogInputText.md#filterarea)
- [filters](DDialogInputText.md#filters)
- [hitArea](DDialogInputText.md#hitarea)
- [interactive](DDialogInputText.md#interactive)
- [interactiveChildren](DDialogInputText.md#interactivechildren)
- [isMask](DDialogInputText.md#ismask)
- [isSprite](DDialogInputText.md#issprite)
- [localTransform](DDialogInputText.md#localtransform)
- [mask](DDialogInputText.md#mask)
- [name](DDialogInputText.md#name)
- [parent](DDialogInputText.md#parent)
- [pivot](DDialogInputText.md#pivot)
- [renderable](DDialogInputText.md#renderable)
- [rotation](DDialogInputText.md#rotation)
- [sortDirty](DDialogInputText.md#sortdirty)
- [sortableChildren](DDialogInputText.md#sortablechildren)
- [transform](DDialogInputText.md#transform)
- [visible](DDialogInputText.md#visible)
- [worldAlpha](DDialogInputText.md#worldalpha)
- [worldTransform](DDialogInputText.md#worldtransform)
- [worldVisible](DDialogInputText.md#worldvisible)
- [zIndex](DDialogInputText.md#zindex)
- [WORK\_CONTAINS\_POINT](DDialogInputText.md#work_contains_point)

### Accessors

- [background](DDialogInputText.md#background)
- [border](DDialogInputText.md#border)
- [corner](DDialogInputText.md#corner)
- [height](DDialogInputText.md#height)
- [input](DDialogInputText.md#input)
- [label](DDialogInputText.md#label)
- [outline](DDialogInputText.md#outline)
- [padding](DDialogInputText.md#padding)
- [position](DDialogInputText.md#position)
- [reflowable](DDialogInputText.md#reflowable)
- [scale](DDialogInputText.md#scale)
- [shadow](DDialogInputText.md#shadow)
- [skew](DDialogInputText.md#skew)
- [snippet](DDialogInputText.md#snippet)
- [state](DDialogInputText.md#state)
- [theme](DDialogInputText.md#theme)
- [title](DDialogInputText.md#title)
- [type](DDialogInputText.md#type)
- [unsafe](DDialogInputText.md#unsafe)
- [value](DDialogInputText.md#value)
- [weight](DDialogInputText.md#weight)
- [width](DDialogInputText.md#width)
- [x](DDialogInputText.md#x)
- [y](DDialogInputText.md#y)

### Methods

- [\_calculateBounds](DDialogInputText.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDialogInputText.md#_recursivepostupdatetransform)
- [\_render](DDialogInputText.md#_render)
- [addChild](DDialogInputText.md#addchild)
- [addChildAt](DDialogInputText.md#addchildat)
- [addListener](DDialogInputText.md#addlistener)
- [applyTitle](DDialogInputText.md#applytitle)
- [blur](DDialogInputText.md#blur)
- [calculateBounds](DDialogInputText.md#calculatebounds)
- [cancel](DDialogInputText.md#cancel)
- [close](DDialogInputText.md#close)
- [containsGlobalPoint](DDialogInputText.md#containsglobalpoint)
- [containsLocalPoint](DDialogInputText.md#containslocalpoint)
- [containsPoint](DDialogInputText.md#containspoint)
- [destroy](DDialogInputText.md#destroy)
- [displayObjectUpdateTransform](DDialogInputText.md#displayobjectupdatetransform)
- [doReject](DDialogInputText.md#doreject)
- [doResolve](DDialogInputText.md#doresolve)
- [emit](DDialogInputText.md#emit)
- [eventNames](DDialogInputText.md#eventnames)
- [focus](DDialogInputText.md#focus)
- [focusOnClosest](DDialogInputText.md#focusonclosest)
- [getAnimation](DDialogInputText.md#getanimation)
- [getBounds](DDialogInputText.md#getbounds)
- [getChildAt](DDialogInputText.md#getchildat)
- [getChildByName](DDialogInputText.md#getchildbyname)
- [getChildIndex](DDialogInputText.md#getchildindex)
- [getClearType](DDialogInputText.md#getcleartype)
- [getClippingRect](DDialogInputText.md#getclippingrect)
- [getGlobalPosition](DDialogInputText.md#getglobalposition)
- [getHeight](DDialogInputText.md#getheight)
- [getLocalBounds](DDialogInputText.md#getlocalbounds)
- [getParentOfSize](DDialogInputText.md#getparentofsize)
- [getRejectReason](DDialogInputText.md#getrejectreason)
- [getResolvedValue](DDialogInputText.md#getresolvedvalue)
- [getThemeDefault](DDialogInputText.md#getthemedefault)
- [getType](DDialogInputText.md#gettype)
- [getWidth](DDialogInputText.md#getwidth)
- [getX](DDialogInputText.md#getx)
- [getY](DDialogInputText.md#gety)
- [hasDirty](DDialogInputText.md#hasdirty)
- [hasRefitableHeight](DDialogInputText.md#hasrefitableheight)
- [hasRefitableWidth](DDialogInputText.md#hasrefitablewidth)
- [hide](DDialogInputText.md#hide)
- [init](DDialogInputText.md#init)
- [initReflowable](DDialogInputText.md#initreflowable)
- [isChildrenDirty](DDialogInputText.md#ischildrendirty)
- [isDirty](DDialogInputText.md#isdirty)
- [isEventTarget](DDialogInputText.md#iseventtarget)
- [isHidden](DDialogInputText.md#ishidden)
- [isOpened](DDialogInputText.md#isopened)
- [isRefitable](DDialogInputText.md#isrefitable)
- [isShown](DDialogInputText.md#isshown)
- [listenerCount](DDialogInputText.md#listenercount)
- [listeners](DDialogInputText.md#listeners)
- [newInput](DDialogInputText.md#newinput)
- [newLayout](DDialogInputText.md#newlayout)
- [off](DDialogInputText.md#off)
- [ok](DDialogInputText.md#ok)
- [on](DDialogInputText.md#on)
- [onAnimationEnd](DDialogInputText.md#onanimationend)
- [onBlur](DDialogInputText.md#onblur)
- [onCancel](DDialogInputText.md#oncancel)
- [onChildBlur](DDialogInputText.md#onchildblur)
- [onChildFocus](DDialogInputText.md#onchildfocus)
- [onChildrenChange](DDialogInputText.md#onchildrenchange)
- [onChildrenDirty](DDialogInputText.md#onchildrendirty)
- [onClose](DDialogInputText.md#onclose)
- [onCloseOn](DDialogInputText.md#oncloseon)
- [onDblClick](DDialogInputText.md#ondblclick)
- [onDown](DDialogInputText.md#ondown)
- [onDownThis](DDialogInputText.md#ondownthis)
- [onFocus](DDialogInputText.md#onfocus)
- [onInit](DDialogInputText.md#oninit)
- [onKeyDown](DDialogInputText.md#onkeydown)
- [onKeyUp](DDialogInputText.md#onkeyup)
- [onMove](DDialogInputText.md#onmove)
- [onOk](DDialogInputText.md#onok)
- [onOpen](DDialogInputText.md#onopen)
- [onOut](DDialogInputText.md#onout)
- [onOver](DDialogInputText.md#onover)
- [onParentMove](DDialogInputText.md#onparentmove)
- [onParentResize](DDialogInputText.md#onparentresize)
- [onPrerender](DDialogInputText.md#onprerender)
- [onRefit](DDialogInputText.md#onrefit)
- [onReflow](DDialogInputText.md#onreflow)
- [onResize](DDialogInputText.md#onresize)
- [onScale](DDialogInputText.md#onscale)
- [onShortcut](DDialogInputText.md#onshortcut)
- [onSkew](DDialogInputText.md#onskew)
- [onStateChange](DDialogInputText.md#onstatechange)
- [onUp](DDialogInputText.md#onup)
- [onUpThis](DDialogInputText.md#onupthis)
- [onWheel](DDialogInputText.md#onwheel)
- [once](DDialogInputText.md#once)
- [open](DDialogInputText.md#open)
- [refit](DDialogInputText.md#refit)
- [reflow](DDialogInputText.md#reflow)
- [removeAllListeners](DDialogInputText.md#removealllisteners)
- [removeChild](DDialogInputText.md#removechild)
- [removeChildAt](DDialogInputText.md#removechildat)
- [removeChildren](DDialogInputText.md#removechildren)
- [removeListener](DDialogInputText.md#removelistener)
- [render](DDialogInputText.md#render)
- [renderAdvanced](DDialogInputText.md#renderadvanced)
- [resize](DDialogInputText.md#resize)
- [setChildIndex](DDialogInputText.md#setchildindex)
- [setFocused](DDialogInputText.md#setfocused)
- [setHeight](DDialogInputText.md#setheight)
- [setParent](DDialogInputText.md#setparent)
- [setTransform](DDialogInputText.md#settransform)
- [setWidth](DDialogInputText.md#setwidth)
- [setX](DDialogInputText.md#setx)
- [setY](DDialogInputText.md#sety)
- [show](DDialogInputText.md#show)
- [sortChildren](DDialogInputText.md#sortchildren)
- [swapChildren](DDialogInputText.md#swapchildren)
- [toChildrenDirty](DDialogInputText.md#tochildrendirty)
- [toCursor](DDialogInputText.md#tocursor)
- [toDirty](DDialogInputText.md#todirty)
- [toGlobal](DDialogInputText.md#toglobal)
- [toHasDirty](DDialogInputText.md#tohasdirty)
- [toInputOptions](DDialogInputText.md#toinputoptions)
- [toLabelOptions](DDialogInputText.md#tolabeloptions)
- [toLayoutOptions](DDialogInputText.md#tolayoutoptions)
- [toLocal](DDialogInputText.md#tolocal)
- [toMargin](DDialogInputText.md#tomargin)
- [toParentChildrenDirty](DDialogInputText.md#toparentchildrendirty)
- [toParentHasDirty](DDialogInputText.md#toparenthasdirty)
- [toParentResized](DDialogInputText.md#toparentresized)
- [updateTransform](DDialogInputText.md#updatetransform)
- [mixin](DDialogInputText.md#mixin)

## Constructors

### constructor

• **new DDialogInputText**<`THEME`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogInputText`](../interfaces/DThemeDialogInputText.md) = [`DThemeDialogInputText`](../interfaces/DThemeDialogInputText.md) |
| `OPTIONS` | extends [`DDialogInputTextOptions`](../interfaces/DDialogInputTextOptions.md)<`THEME`, `OPTIONS`\> = [`DDialogInputTextOptions`](../interfaces/DDialogInputTextOptions.md)<`THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Inherited from

[DDialogInput](DDialogInput.md).[constructor](DDialogInput.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L750)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DDialogInput](DDialogInput.md).[_accessibleActive](DDialogInput.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DDialogInput](DDialogInput.md).[_accessibleDiv](DDialogInput.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_align

• `Protected` **\_align**: [`UtilAttachAlign`](../index.md#utilattachalign)

#### Inherited from

[DDialogInput](DDialogInput.md).[_align](DDialogInput.md#_align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L105)

___

### \_animation

• `Protected` `Optional` **\_animation**: ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialogInput](DDialogInput.md).[_animation](DDialogInput.md#_animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L98)

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DDialogInput](DDialogInput.md).[_auto](DDialogInput.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L729)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DDialogInput](DDialogInput.md).[_background](DDialogInput.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DDialogInput](DDialogInput.md).[_border](DDialogInput.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

[DDialogInput](DDialogInput.md).[_bounds](DDialogInput.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_buttonCancel

• `Protected` `Optional` **\_buttonCancel**: [`DButton`](DButton.md)<`unknown`, [`DThemeButton`](../interfaces/DThemeButton.md)<`unknown`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`unknown`, [`DThemeButton`](../interfaces/DThemeButton.md)<`unknown`\>, `any`\>\>

#### Inherited from

[DDialogInput](DDialogInput.md).[_buttonCancel](DDialogInput.md#_buttoncancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L96)

___

### \_buttonLayout

• `Protected` `Optional` **\_buttonLayout**: [`DLayoutHorizontal`](DLayoutHorizontal.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md), [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>\>

#### Inherited from

[DDialogInput](DDialogInput.md).[_buttonLayout](DDialogInput.md#_buttonlayout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L94)

___

### \_buttonOk

• `Protected` `Optional` **\_buttonOk**: [`DButton`](DButton.md)<`unknown`, [`DThemeButton`](../interfaces/DThemeButton.md)<`unknown`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`unknown`, [`DThemeButton`](../interfaces/DThemeButton.md)<`unknown`\>, `any`\>\>

#### Inherited from

[DDialogInput](DDialogInput.md).[_buttonOk](DDialogInput.md#_buttonok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L95)

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DDialogInput](DDialogInput.md).[_clearType](DDialogInput.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_closeOn

• `Protected` **\_closeOn**: `number`

#### Inherited from

[DDialogInput](DDialogInput.md).[_closeOn](DDialogInput.md#_closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L99)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DDialogInput](DDialogInput.md).[_corner](DDialogInput.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L727)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[_cursor](DDialogInput.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L748)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

[DDialogInput](DDialogInput.md).[_destroyed](DDialogInput.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_focused

• `Protected` `Optional` **\_focused**: ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Inherited from

[DDialogInput](DDialogInput.md).[_focused](DDialogInput.md#_focused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L100)

___

### \_input

• `Protected` `Optional` **\_input**: [`DInputText`](DInputText.md)<[`DThemeInputText`](../interfaces/DThemeInputText.md), [`DInputTextOptions`](../interfaces/DInputTextOptions.md)<[`DThemeInputText`](../interfaces/DThemeInputText.md)\>\>

#### Inherited from

[DDialogInput](DDialogInput.md).[_input](DDialogInput.md#_input)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L50)

___

### \_isChildrenDirty

• `Protected` **\_isChildrenDirty**: `boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[_isChildrenDirty](DDialogInput.md#_ischildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:732](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L732)

___

### \_label

• `Protected` `Optional` **\_label**: [`DText`](DText.md)<`string`, [`DThemeText`](../interfaces/DThemeText.md)<`string`\>, [`DTextOptions`](../interfaces/DTextOptions.md)<`string`, [`DThemeText`](../interfaces/DThemeText.md)<`string`\>\>\>

#### Inherited from

[DDialogInput](DDialogInput.md).[_label](DDialogInput.md#_label)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L49)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DDialogInput](DDialogInput.md).[_lastDownPoint](DDialogInput.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:747](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L747)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DDialogInput](DDialogInput.md).[_lastSortedIndex](DDialogInput.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

[DDialogInput](DDialogInput.md).[_mask](DDialogInput.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_mode

• `Protected` **\_mode**: [`DDialogMode`](../index.md#ddialogmode)

#### Inherited from

[DDialogInput](DDialogInput.md).[_mode](DDialogInput.md#_mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L102)

___

### \_onPrerenderBound

• `Protected` **\_onPrerenderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[_onPrerenderBound](DDialogInput.md#_onprerenderbound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L104)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DDialogInput](DDialogInput.md).[_options](DDialogInput.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L723)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DDialogInput](DDialogInput.md).[_outline](DDialogInput.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:742](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L742)

___

### \_overlay

• `Protected` **\_overlay**: [`UtilOverlay`](UtilOverlay.md)

#### Inherited from

[DDialogInput](DDialogInput.md).[_overlay](DDialogInput.md#_overlay)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L101)

___

### \_owner

• `Protected` `Optional` **\_owner**: ``null`` \| [`DBase`](DBase.md)<`any`, `any`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[_owner](DDialogInput.md#_owner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L106)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DDialogInput](DDialogInput.md).[_padding](DDialogInput.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:726](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L726)

___

### \_promise

• `Protected` `Optional` **\_promise**: `Promise`<`string`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[_promise](DDialogInput.md#_promise)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L94)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DDialogInput](DDialogInput.md).[_reflowable](DDialogInput.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L746)

___

### \_reject

• `Protected` `Optional` **\_reject**: (`reason?`: `any`) => `void`

#### Type declaration

▸ (`reason?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

##### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[_reject](DDialogInput.md#_reject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L96)

___

### \_resolve

• `Protected` `Optional` **\_resolve**: (`value`: `string` \| `PromiseLike`<`string`\>) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `PromiseLike`<`string`\> |

##### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[_resolve](DDialogInput.md#_resolve)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L95)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DDialogInput](DDialogInput.md).[_shortcuts](DDialogInput.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L744)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DDialogInput](DDialogInput.md).[_snippet](DDialogInput.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:745](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L745)

___

### \_sticky

• `Protected` **\_sticky**: `boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[_sticky](DDialogInput.md#_sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L103)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

[DDialogInput](DDialogInput.md).[_tempDisplayObjectParent](DDialogInput.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DDialogInput](DDialogInput.md).[_title](DDialogInput.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L739)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

[DDialogInput](DDialogInput.md).[_zIndex](DDialogInput.md#_zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8583

___

### accessible

• **accessible**: `boolean`

 Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogInput](DDialogInput.md).[accessible](DDialogInput.md#accessible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8468

___

### accessibleChildren

• **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`default`** true

#### Inherited from

[DDialogInput](DDialogInput.md).[accessibleChildren](DDialogInput.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogInput](DDialogInput.md).[accessibleHint](DDialogInput.md#accessiblehint)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8483

___

### accessiblePointerEvents

• **accessiblePointerEvents**: `string`

Specify the pointer-events the accessible div will use
Defaults to auto.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'auto'

#### Inherited from

[DDialogInput](DDialogInput.md).[accessiblePointerEvents](DDialogInput.md#accessiblepointerevents)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8513

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`member`** {?string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogInput](DDialogInput.md).[accessibleTitle](DDialogInput.md#accessibletitle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8476

___

### accessibleType

• **accessibleType**: `string`

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'button'

#### Inherited from

[DDialogInput](DDialogInput.md).[accessibleType](DDialogInput.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

[DDialogInput](DDialogInput.md).[alpha](DDialogInput.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DDialogInput](DDialogInput.md).[angle](DDialogInput.md#angle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8771

___

### buttonMode

• **buttonMode**: `boolean`

If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
Setting this changes the 'cursor' property to `'pointer'`.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.buttonMode = true;

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogInput](DDialogInput.md).[buttonMode](DDialogInput.md#buttonmode)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8853

___

### cacheAsBitmap

• **cacheAsBitmap**: `boolean`

Set this to true if you want this display object to be cached as a bitmap.
This basically takes a snap shot of the display object as it is at that moment. It can
provide a performance benefit for complex static displayObjects.
To remove simply set this property to `false`

IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogInput](DDialogInput.md).[cacheAsBitmap](DDialogInput.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`member`** {PIXI.DisplayObject[]} PIXI.Container#children

**`readonly`**

#### Inherited from

[DDialogInput](DDialogInput.md).[children](DDialogInput.md#children)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8277

___

### cursor

• **cursor**: `string`

This defines what cursor mode is used when the mouse cursor
is hovered over the displayObject.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.cursor = 'wait';

**`see`** https://developer.mozilla.org/en/docs/Web/CSS/cursor

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogInput](DDialogInput.md).[cursor](DDialogInput.md#cursor)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8867

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`member`** {?PIXI.Rectangle} PIXI.DisplayObject#filterArea

#### Inherited from

[DDialogInput](DDialogInput.md).[filterArea](DDialogInput.md#filterarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8592

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`member`** {?PIXI.Filter[]} PIXI.DisplayObject#filters

#### Inherited from

[DDialogInput](DDialogInput.md).[filters](DDialogInput.md#filters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8600

___

### hitArea

• **hitArea**: `IHitArea`

Interaction shape. Children will be hit first, then this shape will be checked.
Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);

**`member`** {PIXI.IHitArea}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogInput](DDialogInput.md).[hitArea](DDialogInput.md#hitarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8841

___

### interactive

• **interactive**: `boolean`

Enable interaction events for the DisplayObject. Touch, pointer and mouse
events will not be emitted unless `interactive` is set to `true`.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.on('tap', (event) => {
   //handle event
});

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogInput](DDialogInput.md).[interactive](DDialogInput.md#interactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8829

___

### interactiveChildren

• **interactiveChildren**: `boolean`

Determines if the children to the displayObject can be clicked/touched
Setting this to false allows PixiJS to bypass a recursive `hitTest` function

**`member`** {boolean}

**`memberof`** PIXI.Container#

#### Inherited from

[DDialogInput](DDialogInput.md).[interactiveChildren](DDialogInput.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

[DDialogInput](DDialogInput.md).[isMask](DDialogInput.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

[DDialogInput](DDialogInput.md).[isSprite](DDialogInput.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DDialogInput](DDialogInput.md).[localTransform](DDialogInput.md#localtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8729

___

### mask

• **mask**: `Container` \| `MaskData`

Sets a mask for the displayObject. A mask is an object that limits the visibility of an
object to the shape of the mask applied to it. In PixiJS a regular mask must be a
{@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
utilities shape clipping. To remove a mask, set this property to `null`.

For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.

**`example`**
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFF3300);
graphics.drawRect(50, 250, 100, 100);
graphics.endFill();

const sprite = new PIXI.Sprite(texture);
sprite.mask = graphics;

**`todo`** At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.

**`member`** {PIXI.Container|PIXI.MaskData}

#### Inherited from

[DDialogInput](DDialogInput.md).[mask](DDialogInput.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

[DDialogInput](DDialogInput.md).[name](DDialogInput.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

[DDialogInput](DDialogInput.md).[parent](DDialogInput.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

[DDialogInput](DDialogInput.md).[pivot](DDialogInput.md#pivot)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8750

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`member`** {boolean} PIXI.DisplayObject#renderable

#### Inherited from

[DDialogInput](DDialogInput.md).[renderable](DDialogInput.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DDialogInput](DDialogInput.md).[rotation](DDialogInput.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

#### Inherited from

[DDialogInput](DDialogInput.md).[sortDirty](DDialogInput.md#sortdirty)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8300

___

### sortableChildren

• **sortableChildren**: `boolean`

If set to true, the container will sort its children by zIndex value
when updateTransform() is called, or manually if sortChildren() is called.

This actually changes the order of elements in the array, so should be treated
as a basic solution that is not performant compared to other solutions,
such as @link https://github.com/pixijs/pixi-display

Also be aware of that this may not work nicely with the addChildAt() function,
as the zIndex sorting may cause the child to automatically sorted to another position.

**`see`** PIXI.settings.SORTABLE_CHILDREN

**`member`** {boolean} PIXI.Container#sortableChildren

#### Inherited from

[DDialogInput](DDialogInput.md).[sortableChildren](DDialogInput.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Inherited from

[DDialogInput](DDialogInput.md).[transform](DDialogInput.md#transform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8529

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`member`** {boolean} PIXI.DisplayObject#visible

#### Inherited from

[DDialogInput](DDialogInput.md).[visible](DDialogInput.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

[DDialogInput](DDialogInput.md).[worldAlpha](DDialogInput.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DDialogInput](DDialogInput.md).[worldTransform](DDialogInput.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Inherited from

[DDialogInput](DDialogInput.md).[worldVisible](DDialogInput.md#worldvisible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8787

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`member`** {number}

#### Inherited from

[DDialogInput](DDialogInput.md).[zIndex](DDialogInput.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DDialogInput](DDialogInput.md).[WORK_CONTAINS_POINT](DDialogInput.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DDialogInput.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1323)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DDialogInput.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1327)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DDialogInput.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1319)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DDialogInput.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

DDialogInput.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1250](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1250)

___

### input

• `get` **input**(): `INPUT`

#### Returns

`INPUT`

#### Inherited from

DDialogInput.input

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L146)

___

### label

• `get` **label**(): `undefined` \| [`DText`](DText.md)<`string`, [`DThemeText`](../interfaces/DThemeText.md)<`string`\>, [`DTextOptions`](../interfaces/DTextOptions.md)<`string`, [`DThemeText`](../interfaces/DThemeText.md)<`string`\>\>\>

#### Returns

`undefined` \| [`DText`](DText.md)<`string`, [`DThemeText`](../interfaces/DThemeText.md)<`string`\>, [`DTextOptions`](../interfaces/DTextOptions.md)<`string`, [`DThemeText`](../interfaces/DThemeText.md)<`string`\>\>\>

#### Inherited from

DDialogInput.label

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L140)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DDialogInput.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DDialogInput.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1315](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1315)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogInput.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1301)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DDialogInput.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1012)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogInput.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1306)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DDialogInput.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1653](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1653)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DDialogInput.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1657)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogInput.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1311)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DDialogInput.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1008](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1008)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DDialogInput.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1533](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1533)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DDialogInput.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1537)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DDialogInput.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1541](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1541)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DDialogInput.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DDialogInput.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DDialogInput.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1129)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DDialogInput.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### value

• `get` **value**(): `VALUE`

#### Returns

`VALUE`

#### Inherited from

DDialogInput.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L156)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |

#### Returns

`void`

#### Inherited from

DDialogInput.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L160)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DDialogInput.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1033](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1033)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DDialogInput.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1196)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Inherited from

DDialogInput.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1200)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DDialogInput.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1134)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Inherited from

DDialogInput.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1138)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DDialogInput.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1165)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

DDialogInput.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1169)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[_calculateBounds](DDialogInput.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1877](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1877)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[_recursivePostUpdateTransform](DDialogInput.md#_recursivepostupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8641

___

### \_render

▸ `Protected` **_render**(`renderer`): `void`

To be overridden by the subclasses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[_render](DDialogInput.md#_render)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8413

___

### addChild

▸ **addChild**<`TChildren`\>(...`child`): `TChildren`[``0``]

Adds one or more children to the container.

Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...child` | `TChildren` | The DisplayObject(s) to add to the container |

#### Returns

`TChildren`[``0``]

The first child that was added.

#### Inherited from

[DDialogInput](DDialogInput.md).[addChild](DDialogInput.md#addchild)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8315

___

### addChildAt

▸ **addChildAt**<`T`\>(`child`, `index`): `T`

Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DisplayObject`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `T` | The child to add |
| `index` | `number` | The index to place the child in |

#### Returns

`T`

The child that was added.

#### Inherited from

[DDialogInput](DDialogInput.md).[addChildAt](DDialogInput.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[addListener](DDialogInput.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[addListener](DDialogInput.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[applyTitle](DDialogInput.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1352)

___

### blur

▸ **blur**(`recursively?`): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[blur](DDialogInput.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1458](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1458)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[calculateBounds](DDialogInput.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[cancel](DDialogInput.md#cancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L210)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[close](DDialogInput.md#close)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:277](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L277)

___

### containsGlobalPoint

▸ `Protected` **containsGlobalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[containsGlobalPoint](DDialogInput.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L374)

___

### containsLocalPoint

▸ `Protected` **containsLocalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[containsLocalPoint](DDialogInput.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1906](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1906)

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[containsPoint](DDialogInput.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1893](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1893)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[destroy](DDialogInput.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1926](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1926)

___

### displayObjectUpdateTransform

▸ **displayObjectUpdateTransform**(): `void`

DisplayObject default updateTransform, does not update children of container.
Will crash if there's no parent element.

**`memberof`** PIXI.DisplayObject#

**`function`** displayObjectUpdateTransform

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[displayObjectUpdateTransform](DDialogInput.md#displayobjectupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8815

___

### doReject

▸ `Protected` **doReject**(`reason?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[doReject](DDialogInput.md#doreject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L294)

___

### doResolve

▸ `Protected` **doResolve**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `PromiseLike`<`string`\> |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[doResolve](DDialogInput.md#doresolve)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:281](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L281)

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `...args` | `any`[] | Arguments that are passed to registered listeners |

#### Returns

`boolean`

`true` if the event had listeners, else `false`.

#### Inherited from

[DDialogInput](DDialogInput.md).[emit](DDialogInput.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DDialogInput](DDialogInput.md).[eventNames](DDialogInput.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[focus](DDialogInput.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[focusOnClosest](DDialogInput.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1820](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1820)

___

### getAnimation

▸ `Protected` **getAnimation**(): ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Returns

``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[getAnimation](DDialogInput.md#getanimation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L155)

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `rect?`): `Rectangle`

Retrieves the bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate?` | `boolean` |
| `rect?` | `Rectangle` |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[DDialogInput](DDialogInput.md).[getBounds](DDialogInput.md#getbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8651

___

### getChildAt

▸ **getChildAt**(`index`): `DisplayObject`

Returns the child at the specified index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index to get the child at |

#### Returns

`DisplayObject`

The child at the given index, if any.

#### Inherited from

[DDialogInput](DDialogInput.md).[getChildAt](DDialogInput.md#getchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8351

___

### getChildByName

▸ **getChildByName**(`name`): `DisplayObject`

Returns the display object in the container.

**`method`** getChildByName

**`memberof`** PIXI.Container#

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Instance name. |

#### Returns

`DisplayObject`

The child with the specified name.

#### Inherited from

[DDialogInput](DDialogInput.md).[getChildByName](DDialogInput.md#getchildbyname)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8460

___

### getChildIndex

▸ **getChildIndex**(`child`): `number`

Returns the index position of a child DisplayObject instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | The DisplayObject instance to identify |

#### Returns

`number`

The index position of the child display object to identify

#### Inherited from

[DDialogInput](DDialogInput.md).[getChildIndex](DDialogInput.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DDialogInput](DDialogInput.md).[getClearType](DDialogInput.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1098](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1098)

___

### getClippingRect

▸ **getClippingRect**(`target`, `result`): `void`

Returns a clipping rect.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `unknown` | - |
| `result` | `Rectangle` | a clipping rect |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[getClippingRect](DDialogInput.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

___

### getGlobalPosition

▸ **getGlobalPosition**(`point?`, `skipUpdate?`): `Point`

Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.

**`method`** getGlobalPosition

**`memberof`** PIXI.DisplayObject#

#### Parameters

| Name | Type |
| :------ | :------ |
| `point?` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`Point`

The updated point.

#### Inherited from

[DDialogInput](DDialogInput.md).[getGlobalPosition](DDialogInput.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialogInput](DDialogInput.md).[getHeight](DDialogInput.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1274)

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`): `Rectangle`

Retrieves the local bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect?` | `Rectangle` |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[DDialogInput](DDialogInput.md).[getLocalBounds](DDialogInput.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DDialogInput](DDialogInput.md).[getParentOfSize](DDialogInput.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1687](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1687)

___

### getRejectReason

▸ `Protected` **getRejectReason**(): `any`

#### Returns

`any`

#### Inherited from

[DDialogInput](DDialogInput.md).[getRejectReason](DDialogInput.md#getrejectreason)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L223)

___

### getResolvedValue

▸ `Protected` **getResolvedValue**(): `string` \| `PromiseLike`<`string`\>

#### Returns

`string` \| `PromiseLike`<`string`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[getResolvedValue](DDialogInput.md#getresolvedvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L164)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DDialogInput](DDialogInput.md).[getThemeDefault](DDialogInput.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1868)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DDialogInput](DDialogInput.md).[getType](DDialogInput.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input-text.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-input-text.ts#L38)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialogInput](DDialogInput.md).[getWidth](DDialogInput.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogInput](DDialogInput.md).[getX](DDialogInput.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1142)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogInput](DDialogInput.md).[getY](DDialogInput.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1173)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[hasDirty](DDialogInput.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1440)

___

### hasRefitableHeight

▸ `Protected` **hasRefitableHeight**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Inherited from

[DDialogInput](DDialogInput.md).[hasRefitableHeight](DDialogInput.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1619](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1619)

___

### hasRefitableWidth

▸ `Protected` **hasRefitableWidth**(`target`): target is DBase<any, any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DBase<any, any\>

#### Inherited from

[DDialogInput](DDialogInput.md).[hasRefitableWidth](DDialogInput.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1625](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1625)

___

### hide

▸ **hide**(): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[hide](DDialogInput.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1372](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1372)

___

### init

▸ `Protected` **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[init](DDialogInput.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L98)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[initReflowable](DDialogInput.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1016](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1016)

___

### isChildrenDirty

▸ **isChildrenDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[isChildrenDirty](DDialogInput.md#ischildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[isDirty](DDialogInput.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1436)

___

### isEventTarget

▸ `Protected` **isEventTarget**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[isEventTarget](DDialogInput.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1765](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1765)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[isHidden](DDialogInput.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1382](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1382)

___

### isOpened

▸ **isOpened**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[isOpened](DDialogInput.md#isopened)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:273](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L273)

___

### isRefitable

▸ `Protected` **isRefitable**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Inherited from

[DDialogInput](DDialogInput.md).[isRefitable](DDialogInput.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1615](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1615)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[isShown](DDialogInput.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1368](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1368)

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`number`

#### Inherited from

[DDialogInput](DDialogInput.md).[listenerCount](DDialogInput.md#listenercount)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24013

___

### listeners

▸ **listeners**(`event`): `Function`[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`Function`[]

#### Inherited from

[DDialogInput](DDialogInput.md).[listeners](DDialogInput.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newInput

▸ `Protected` **newInput**(`options?`): [`DInputText`](DInputText.md)<[`DThemeInputText`](../interfaces/DThemeInputText.md), [`DInputTextOptions`](../interfaces/DInputTextOptions.md)<[`DThemeInputText`](../interfaces/DThemeInputText.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DInputTextOptions`](../interfaces/DInputTextOptions.md)<[`DThemeInputText`](../interfaces/DThemeInputText.md)\> |

#### Returns

[`DInputText`](DInputText.md)<[`DThemeInputText`](../interfaces/DThemeInputText.md), [`DInputTextOptions`](../interfaces/DInputTextOptions.md)<[`DThemeInputText`](../interfaces/DThemeInputText.md)\>\>

#### Overrides

[DDialogInput](DDialogInput.md).[newInput](DDialogInput.md#newinput)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input-text.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-input-text.ts#L18)

___

### newLayout

▸ `Protected` **newLayout**(`theme`, `options?`): [`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Inherited from

[DDialogInput](DDialogInput.md).[newLayout](DDialogInput.md#newlayout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L177)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[off](DDialogInput.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### ok

▸ **ok**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[ok](DDialogInput.md#ok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L199)

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[on](DDialogInput.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[on](DDialogInput.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onAnimationEnd

▸ `Protected` **onAnimationEnd**(`isReverse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isReverse` | `boolean` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onAnimationEnd](DDialogInput.md#onanimationend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L180)

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onBlur](DDialogInput.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1526)

___

### onCancel

▸ `Protected` **onCancel**(`reason`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `any` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onCancel](DDialogInput.md#oncancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L214)

___

### onChildBlur

▸ `Protected` **onChildBlur**(`blured`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blured` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onChildBlur](DDialogInput.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1519](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1519)

___

### onChildFocus

▸ `Protected` **onChildFocus**(`focused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onChildFocus](DDialogInput.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1505)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onChildrenChange](DDialogInput.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1020](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1020)

___

### onChildrenDirty

▸ `Protected` **onChildrenDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onChildrenDirty](DDialogInput.md#onchildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1432)

___

### onClose

▸ `Protected` **onClose**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onClose](DDialogInput.md#onclose)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:307](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L307)

___

### onCloseOn

▸ `Protected` **onCloseOn**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onCloseOn](DDialogInput.md#oncloseon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:370](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L370)

___

### onDblClick

▸ **onDblClick**(`e`, `interactionManager`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[onDblClick](DDialogInput.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1852)

___

### onDown

▸ `Protected` **onDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onDown](DDialogInput.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1779](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1779)

___

### onDownThis

▸ `Protected` **onDownThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onDownThis](DDialogInput.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1786](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1786)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onFocus](DDialogInput.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1512)

___

### onInit

▸ `Protected` **onInit**(`layout`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layout` | [`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\> |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onInit](DDialogInput.md#oninit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L52)

___

### onKeyDown

▸ **onKeyDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[onKeyDown](DDialogInput.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L354)

___

### onKeyUp

▸ **onKeyUp**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[onKeyUp](DDialogInput.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1759)

___

### onMove

▸ `Protected` **onMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onMove](DDialogInput.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1037](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1037)

___

### onOk

▸ `Protected` **onOk**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `PromiseLike`<`string`\> |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onOk](DDialogInput.md#onok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:203](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L203)

___

### onOpen

▸ `Protected` **onOpen**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onOpen](DDialogInput.md#onopen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:260](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L260)

___

### onOut

▸ `Protected` **onOut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onOut](DDialogInput.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

___

### onOver

▸ `Protected` **onOver**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onOver](DDialogInput.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1829](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1829)

___

### onParentMove

▸ `Protected` **onParentMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

Called when a parent moved.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newX` | `number` | a new parent's local x position |
| `newY` | `number` | a new parent's local y position |
| `oldX` | `number` | an old parent's local x position |
| `oldY` | `number` | an old parent's local y position |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onParentMove](DDialogInput.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1743)

___

### onParentResize

▸ **onParentResize**(`parentWidth`, `parentHeight`, `parentPadding`): `void`

Called when a parent resized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentWidth` | `number` | a parent's local width |
| `parentHeight` | `number` | a parent's local height |
| `parentPadding` | [`DPadding`](../interfaces/DPadding.md) | - |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onParentResize](DDialogInput.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1702](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1702)

___

### onPrerender

▸ `Protected` **onPrerender**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onPrerender](DDialogInput.md#onprerender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L238)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onRefit](DDialogInput.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1571](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1571)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onReflow](DDialogInput.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1649)

___

### onResize

▸ **onResize**(`newWidth`, `newHeight`, `oldWidth`, `oldHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newWidth` | `number` |
| `newHeight` | `number` |
| `oldWidth` | `number` |
| `oldHeight` | `number` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onResize](DDialogInput.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1102)

___

### onScale

▸ `Protected` **onScale**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onScale](DDialogInput.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1119)

___

### onShortcut

▸ `Protected` **onShortcut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onShortcut](DDialogInput.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1025](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1025)

___

### onSkew

▸ `Protected` **onSkew**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onSkew](DDialogInput.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### onStateChange

▸ `Protected` **onStateChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onStateChange](DDialogInput.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1481](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1481)

___

### onUp

▸ `Protected` **onUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onUp](DDialogInput.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1797](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1797)

___

### onUpThis

▸ `Protected` **onUpThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[onUpThis](DDialogInput.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1804)

___

### onWheel

▸ **onWheel**(`e`, `deltas`, `global`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `WheelEvent` |
| `deltas` | [`UtilWheelEventDeltas`](../interfaces/UtilWheelEventDeltas.md) |
| `global` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[onWheel](DDialogInput.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1748)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[once](DDialogInput.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[once](DDialogInput.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### open

▸ **open**(`owner?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner?` | [`DBase`](DBase.md)<`any`, `any`\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[open](DDialogInput.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L197)

___

### refit

▸ **refit**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[refit](DDialogInput.md#refit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1555](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1555)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[reflow](DDialogInput.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1631](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1631)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[removeAllListeners](DDialogInput.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[removeAllListeners](DDialogInput.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24099

___

### removeChild

▸ **removeChild**<`TChildren`\>(...`child`): `TChildren`[``0``]

Removes one or more children from the container.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...child` | `TChildren` | The DisplayObject(s) to remove |

#### Returns

`TChildren`[``0``]

The first child that was removed.

#### Inherited from

[DDialogInput](DDialogInput.md).[removeChild](DDialogInput.md#removechild)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8358

___

### removeChildAt

▸ **removeChildAt**(`index`): `DisplayObject`

Removes a child from the specified index position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index to get the child from |

#### Returns

`DisplayObject`

The child that was removed.

#### Inherited from

[DDialogInput](DDialogInput.md).[removeChildAt](DDialogInput.md#removechildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8365

___

### removeChildren

▸ **removeChildren**(`beginIndex?`, `endIndex?`): `DisplayObject`[]

Removes all children from this container that are within the begin and end indexes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `beginIndex?` | `number` |
| `endIndex?` | `number` |

#### Returns

`DisplayObject`[]

List of removed children

#### Inherited from

[DDialogInput](DDialogInput.md).[removeChildren](DDialogInput.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[removeListener](DDialogInput.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[removeListener](DDialogInput.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24097

___

### render

▸ **render**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[render](DDialogInput.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1858](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1858)

___

### renderAdvanced

▸ `Protected` **renderAdvanced**(`renderer`): `void`

Render the object using the WebGL renderer and advanced features.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[renderAdvanced](DDialogInput.md#renderadvanced)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8406

___

### resize

▸ **resize**(`width`, `height`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[resize](DDialogInput.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1049](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1049)

___

### setChildIndex

▸ **setChildIndex**(`child`, `index`): `void`

Changes the position of an existing child in the display object container

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | The child DisplayObject instance for which you want to change the index number |
| `index` | `number` | The resulting index number for the child display object |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[setChildIndex](DDialogInput.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[setFocused](DDialogInput.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1444](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1444)

___

### setHeight

▸ **setHeight**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[setHeight](DDialogInput.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1278)

___

### setParent

▸ **setParent**(`container`): `Container`

Set the parent Container of this DisplayObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `Container` | The Container to add this DisplayObject to. |

#### Returns

`Container`

The Container that this DisplayObject was added to.

#### Inherited from

[DDialogInput](DDialogInput.md).[setParent](DDialogInput.md#setparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8686

___

### setTransform

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): `DisplayObject`

Convenience function to set the position, scale, skew and pivot at once.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |
| `scaleX?` | `number` |
| `scaleY?` | `number` |
| `rotation?` | `number` |
| `skewX?` | `number` |
| `skewY?` | `number` |
| `pivotX?` | `number` |
| `pivotY?` | `number` |

#### Returns

`DisplayObject`

The DisplayObject instance

#### Inherited from

[DDialogInput](DDialogInput.md).[setTransform](DDialogInput.md#settransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### setWidth

▸ **setWidth**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[setWidth](DDialogInput.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1223)

___

### setX

▸ **setX**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[setX](DDialogInput.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1151)

___

### setY

▸ **setY**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[setY](DDialogInput.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1182)

___

### show

▸ **show**(): [`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DDialogInputText`](DDialogInputText.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogInput](DDialogInput.md).[show](DDialogInput.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1359)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[sortChildren](DDialogInput.md#sortchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8377

___

### swapChildren

▸ **swapChildren**(`child`, `child2`): `void`

Swaps the position of 2 Display Objects within this container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | First display object to swap |
| `child2` | `DisplayObject` | Second display object to swap |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[swapChildren](DDialogInput.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toChildrenDirty

▸ **toChildrenDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[toChildrenDirty](DDialogInput.md#tochildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1411)

___

### toCursor

▸ `Protected` **toCursor**(`cursor`, `state`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\> |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DDialogInput](DDialogInput.md).[toCursor](DDialogInput.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:991](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L991)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[toDirty](DDialogInput.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1386)

___

### toGlobal

▸ **toGlobal**(`position`, `point?`, `skipUpdate?`): `IPoint`

Calculates the global position of the display object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `point?` | `IPoint` | - |
| `skipUpdate?` | `boolean` | - |

#### Returns

`IPoint`

A point object representing the position of this object.

#### Inherited from

[DDialogInput](DDialogInput.md).[toGlobal](DDialogInput.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogInput](DDialogInput.md).[toHasDirty](DDialogInput.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1395](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1395)

___

### toInputOptions

▸ `Protected` **toInputOptions**(`options?`): [`DInputTextOptions`](../interfaces/DInputTextOptions.md)<[`DThemeInputText`](../interfaces/DThemeInputText.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DInputTextOptions`](../interfaces/DInputTextOptions.md)<[`DThemeInputText`](../interfaces/DThemeInputText.md)\> |

#### Returns

[`DInputTextOptions`](../interfaces/DInputTextOptions.md)<[`DThemeInputText`](../interfaces/DThemeInputText.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input-text.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-input-text.ts#L26)

___

### toLabelOptions

▸ `Protected` **toLabelOptions**(`theme`, `options`): ``null`` \| [`DTextOptions`](../interfaces/DTextOptions.md)<`string`, [`DThemeText`](../interfaces/DThemeText.md)<`string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options` | `undefined` \| `OPTIONS` |

#### Returns

``null`` \| [`DTextOptions`](../interfaces/DTextOptions.md)<`string`, [`DThemeText`](../interfaces/DThemeText.md)<`string`\>\>

#### Inherited from

[DDialogInput](DDialogInput.md).[toLabelOptions](DDialogInput.md#tolabeloptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L107)

___

### toLayoutOptions

▸ `Protected` **toLayoutOptions**(`theme`, `options?`): [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\> |

#### Returns

[`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Inherited from

[DDialogInput](DDialogInput.md).[toLayoutOptions](DDialogInput.md#tolayoutoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L181)

___

### toLocal

▸ **toLocal**(`position`, `from?`, `point?`, `skipUpdate?`): `IPoint`

Calculates the local position of the display object relative to another point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `from?` | `DisplayObject` | - |
| `point?` | `IPoint` | - |
| `skipUpdate?` | `boolean` | - |

#### Returns

`IPoint`

A point object representing the position of this object

#### Inherited from

[DDialogInput](DDialogInput.md).[toLocal](DDialogInput.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toMargin

▸ `Protected` **toMargin**(`theme`, `options?`): `Required`<[`DDialogInputMarginOptions`](../interfaces/DDialogInputMarginOptions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`Required`<[`DDialogInputMarginOptions`](../interfaces/DDialogInputMarginOptions.md)\>

#### Inherited from

[DDialogInput](DDialogInput.md).[toMargin](DDialogInput.md#tomargin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L84)

___

### toParentChildrenDirty

▸ **toParentChildrenDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[toParentChildrenDirty](DDialogInput.md#toparentchildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1421](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1421)

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[toParentHasDirty](DDialogInput.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1404)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[toParentResized](DDialogInput.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1680](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1680)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[updateTransform](DDialogInput.md#updatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8381

___

### mixin

▸ `Static` **mixin**(`source`): `void`

Mixes all enumerable properties and methods from a source object to DisplayObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `any` | The source of properties and methods to mix in. |

#### Returns

`void`

#### Inherited from

[DDialogInput](DDialogInput.md).[mixin](DDialogInput.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979