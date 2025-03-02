[Winter Cardinal UI - v0.310.1](../index.md) / DDiagramBase

# Class: DDiagramBase<CANVAS, CANVAS_OPTIONS, CONTROLLER, THEME, OPTIONS\>

A canvas container.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CANVAS` | extends [`DDiagramCanvasBase`](DDiagramCanvasBase.md) = [`DDiagramCanvasBase`](DDiagramCanvasBase.md) |
| `CANVAS_OPTIONS` | extends [`DDiagramCanvasBaseOptions`](../interfaces/DDiagramCanvasBaseOptions.md) = [`DDiagramCanvasBaseOptions`](../interfaces/DDiagramCanvasBaseOptions.md) |
| `CONTROLLER` | extends [`DDiagramBaseController`](../interfaces/DDiagramBaseController.md) = [`DDiagramBaseController`](../interfaces/DDiagramBaseController.md) |
| `THEME` | extends [`DThemeDiagramBase`](../interfaces/DThemeDiagramBase.md) = [`DThemeDiagramBase`](../interfaces/DThemeDiagramBase.md) |
| `OPTIONS` | extends [`DDiagramBaseOptions`](../interfaces/DDiagramBaseOptions.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`\> = [`DDiagramBaseOptions`](../interfaces/DDiagramBaseOptions.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`\> |

## Hierarchy

- [`DCanvasContainer`](DCanvasContainer.md)<`CANVAS`, `CANVAS_OPTIONS`, `THEME`, `OPTIONS`\>

  ↳ **`DDiagramBase`**

  ↳↳ [`DDiagramEditor`](DDiagramEditor.md)

  ↳↳ [`DDiagram`](DDiagram.md)

## Table of contents

### Constructors

- [constructor](DDiagramBase.md#constructor)

### Properties

- [\_accessibleActive](DDiagramBase.md#_accessibleactive)
- [\_accessibleDiv](DDiagramBase.md#_accessiblediv)
- [\_auto](DDiagramBase.md#_auto)
- [\_background](DDiagramBase.md#_background)
- [\_border](DDiagramBase.md#_border)
- [\_bounds](DDiagramBase.md#_bounds)
- [\_canvas](DDiagramBase.md#_canvas)
- [\_clearType](DDiagramBase.md#_cleartype)
- [\_controller](DDiagramBase.md#_controller)
- [\_corner](DDiagramBase.md#_corner)
- [\_cursor](DDiagramBase.md#_cursor)
- [\_destroyed](DDiagramBase.md#_destroyed)
- [\_isAmbient](DDiagramBase.md#_isambient)
- [\_lastDownPoint](DDiagramBase.md#_lastdownpoint)
- [\_lastSortedIndex](DDiagramBase.md#_lastsortedindex)
- [\_mask](DDiagramBase.md#_mask)
- [\_mode](DDiagramBase.md#_mode)
- [\_options](DDiagramBase.md#_options)
- [\_outline](DDiagramBase.md#_outline)
- [\_overflowMask](DDiagramBase.md#_overflowmask)
- [\_padding](DDiagramBase.md#_padding)
- [\_reflowable](DDiagramBase.md#_reflowable)
- [\_serialized](DDiagramBase.md#_serialized)
- [\_shortcuts](DDiagramBase.md#_shortcuts)
- [\_snapshot](DDiagramBase.md#_snapshot)
- [\_snippet](DDiagramBase.md#_snippet)
- [\_tempDisplayObjectParent](DDiagramBase.md#_tempdisplayobjectparent)
- [\_tileFactory](DDiagramBase.md#_tilefactory)
- [\_title](DDiagramBase.md#_title)
- [\_view](DDiagramBase.md#_view)
- [\_zIndex](DDiagramBase.md#_zindex)
- [accessible](DDiagramBase.md#accessible)
- [accessibleChildren](DDiagramBase.md#accessiblechildren)
- [accessibleHint](DDiagramBase.md#accessiblehint)
- [accessiblePointerEvents](DDiagramBase.md#accessiblepointerevents)
- [accessibleTitle](DDiagramBase.md#accessibletitle)
- [accessibleType](DDiagramBase.md#accessibletype)
- [alpha](DDiagramBase.md#alpha)
- [angle](DDiagramBase.md#angle)
- [buttonMode](DDiagramBase.md#buttonmode)
- [cacheAsBitmap](DDiagramBase.md#cacheasbitmap)
- [children](DDiagramBase.md#children)
- [cursor](DDiagramBase.md#cursor)
- [filterArea](DDiagramBase.md#filterarea)
- [filters](DDiagramBase.md#filters)
- [hitArea](DDiagramBase.md#hitarea)
- [interactive](DDiagramBase.md#interactive)
- [interactiveChildren](DDiagramBase.md#interactivechildren)
- [isMask](DDiagramBase.md#ismask)
- [isSprite](DDiagramBase.md#issprite)
- [localTransform](DDiagramBase.md#localtransform)
- [mask](DDiagramBase.md#mask)
- [name](DDiagramBase.md#name)
- [parent](DDiagramBase.md#parent)
- [pivot](DDiagramBase.md#pivot)
- [renderable](DDiagramBase.md#renderable)
- [rotation](DDiagramBase.md#rotation)
- [sortDirty](DDiagramBase.md#sortdirty)
- [sortableChildren](DDiagramBase.md#sortablechildren)
- [transform](DDiagramBase.md#transform)
- [visible](DDiagramBase.md#visible)
- [worldAlpha](DDiagramBase.md#worldalpha)
- [worldTransform](DDiagramBase.md#worldtransform)
- [worldVisible](DDiagramBase.md#worldvisible)
- [zIndex](DDiagramBase.md#zindex)
- [WORK\_CONTAINS\_POINT](DDiagramBase.md#work_contains_point)

### Accessors

- [background](DDiagramBase.md#background)
- [border](DDiagramBase.md#border)
- [canvas](DDiagramBase.md#canvas)
- [controller](DDiagramBase.md#controller)
- [corner](DDiagramBase.md#corner)
- [height](DDiagramBase.md#height)
- [layer](DDiagramBase.md#layer)
- [options](DDiagramBase.md#options)
- [outline](DDiagramBase.md#outline)
- [padding](DDiagramBase.md#padding)
- [position](DDiagramBase.md#position)
- [reflowable](DDiagramBase.md#reflowable)
- [scale](DDiagramBase.md#scale)
- [shadow](DDiagramBase.md#shadow)
- [skew](DDiagramBase.md#skew)
- [snapshot](DDiagramBase.md#snapshot)
- [snippet](DDiagramBase.md#snippet)
- [state](DDiagramBase.md#state)
- [theme](DDiagramBase.md#theme)
- [title](DDiagramBase.md#title)
- [type](DDiagramBase.md#type)
- [unsafe](DDiagramBase.md#unsafe)
- [view](DDiagramBase.md#view)
- [weight](DDiagramBase.md#weight)
- [width](DDiagramBase.md#width)
- [x](DDiagramBase.md#x)
- [y](DDiagramBase.md#y)

### Methods

- [\_calculateBounds](DDiagramBase.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDiagramBase.md#_recursivepostupdatetransform)
- [\_render](DDiagramBase.md#_render)
- [addChild](DDiagramBase.md#addchild)
- [addChildAt](DDiagramBase.md#addchildat)
- [addListener](DDiagramBase.md#addlistener)
- [applyTitle](DDiagramBase.md#applytitle)
- [blur](DDiagramBase.md#blur)
- [calculateBounds](DDiagramBase.md#calculatebounds)
- [containsGlobalPoint](DDiagramBase.md#containsglobalpoint)
- [containsLocalPoint](DDiagramBase.md#containslocalpoint)
- [containsPoint](DDiagramBase.md#containspoint)
- [destroy](DDiagramBase.md#destroy)
- [displayObjectUpdateTransform](DDiagramBase.md#displayobjectupdatetransform)
- [emit](DDiagramBase.md#emit)
- [eventNames](DDiagramBase.md#eventnames)
- [focus](DDiagramBase.md#focus)
- [focusOnClosest](DDiagramBase.md#focusonclosest)
- [get](DDiagramBase.md#get)
- [getBounds](DDiagramBase.md#getbounds)
- [getChildAt](DDiagramBase.md#getchildat)
- [getChildByName](DDiagramBase.md#getchildbyname)
- [getChildIndex](DDiagramBase.md#getchildindex)
- [getClearType](DDiagramBase.md#getcleartype)
- [getClippingRect](DDiagramBase.md#getclippingrect)
- [getGlobalPosition](DDiagramBase.md#getglobalposition)
- [getHeight](DDiagramBase.md#getheight)
- [getLocalBounds](DDiagramBase.md#getlocalbounds)
- [getOverflowMask](DDiagramBase.md#getoverflowmask)
- [getParentOfSize](DDiagramBase.md#getparentofsize)
- [getThemeDefault](DDiagramBase.md#getthemedefault)
- [getType](DDiagramBase.md#gettype)
- [getWidth](DDiagramBase.md#getwidth)
- [getX](DDiagramBase.md#getx)
- [getY](DDiagramBase.md#gety)
- [hasDirty](DDiagramBase.md#hasdirty)
- [hasRefitableHeight](DDiagramBase.md#hasrefitableheight)
- [hasRefitableWidth](DDiagramBase.md#hasrefitablewidth)
- [hide](DDiagramBase.md#hide)
- [init](DDiagramBase.md#init)
- [initLayer](DDiagramBase.md#initlayer)
- [initReflowable](DDiagramBase.md#initreflowable)
- [isDirty](DDiagramBase.md#isdirty)
- [isEventTarget](DDiagramBase.md#iseventtarget)
- [isHidden](DDiagramBase.md#ishidden)
- [isHierarchyDirty](DDiagramBase.md#ishierarchydirty)
- [isRefitable](DDiagramBase.md#isrefitable)
- [isShown](DDiagramBase.md#isshown)
- [listenerCount](DDiagramBase.md#listenercount)
- [listeners](DDiagramBase.md#listeners)
- [newCanvas](DDiagramBase.md#newcanvas)
- [newLayer](DDiagramBase.md#newlayer)
- [off](DDiagramBase.md#off)
- [on](DDiagramBase.md#on)
- [onBlur](DDiagramBase.md#onblur)
- [onChildBlur](DDiagramBase.md#onchildblur)
- [onChildFocus](DDiagramBase.md#onchildfocus)
- [onChildrenChange](DDiagramBase.md#onchildrenchange)
- [onDblClick](DDiagramBase.md#ondblclick)
- [onDown](DDiagramBase.md#ondown)
- [onDownThis](DDiagramBase.md#ondownthis)
- [onFocus](DDiagramBase.md#onfocus)
- [onHierarchyDirty](DDiagramBase.md#onhierarchydirty)
- [onKeyDown](DDiagramBase.md#onkeydown)
- [onKeyUp](DDiagramBase.md#onkeyup)
- [onMove](DDiagramBase.md#onmove)
- [onOut](DDiagramBase.md#onout)
- [onOver](DDiagramBase.md#onover)
- [onParentMove](DDiagramBase.md#onparentmove)
- [onParentResize](DDiagramBase.md#onparentresize)
- [onRefit](DDiagramBase.md#onrefit)
- [onReflow](DDiagramBase.md#onreflow)
- [onResize](DDiagramBase.md#onresize)
- [onScale](DDiagramBase.md#onscale)
- [onSet](DDiagramBase.md#onset)
- [onShortcut](DDiagramBase.md#onshortcut)
- [onSkew](DDiagramBase.md#onskew)
- [onStateChange](DDiagramBase.md#onstatechange)
- [onUnset](DDiagramBase.md#onunset)
- [onUp](DDiagramBase.md#onup)
- [onUpThis](DDiagramBase.md#onupthis)
- [onWheel](DDiagramBase.md#onwheel)
- [once](DDiagramBase.md#once)
- [reflow](DDiagramBase.md#reflow)
- [removeAllListeners](DDiagramBase.md#removealllisteners)
- [removeChild](DDiagramBase.md#removechild)
- [removeChildAt](DDiagramBase.md#removechildat)
- [removeChildren](DDiagramBase.md#removechildren)
- [removeListener](DDiagramBase.md#removelistener)
- [render](DDiagramBase.md#render)
- [renderAdvanced](DDiagramBase.md#renderadvanced)
- [resize](DDiagramBase.md#resize)
- [set](DDiagramBase.md#set)
- [setChildIndex](DDiagramBase.md#setchildindex)
- [setFocused](DDiagramBase.md#setfocused)
- [setHeight](DDiagramBase.md#setheight)
- [setParent](DDiagramBase.md#setparent)
- [setTransform](DDiagramBase.md#settransform)
- [setWidth](DDiagramBase.md#setwidth)
- [setX](DDiagramBase.md#setx)
- [setY](DDiagramBase.md#sety)
- [show](DDiagramBase.md#show)
- [sortChildren](DDiagramBase.md#sortchildren)
- [swapChildren](DDiagramBase.md#swapchildren)
- [toCanvasBaseBackgroundOptions](DDiagramBase.md#tocanvasbasebackgroundoptions)
- [toCanvasBaseOptions](DDiagramBase.md#tocanvasbaseoptions)
- [toCursor](DDiagramBase.md#tocursor)
- [toDirty](DDiagramBase.md#todirty)
- [toGlobal](DDiagramBase.md#toglobal)
- [toHasDirty](DDiagramBase.md#tohasdirty)
- [toHierarchyDirty](DDiagramBase.md#tohierarchydirty)
- [toLocal](DDiagramBase.md#tolocal)
- [toMode](DDiagramBase.md#tomode)
- [toParentHasDirty](DDiagramBase.md#toparenthasdirty)
- [toParentHierarchyDirty](DDiagramBase.md#toparenthierarchydirty)
- [toParentResized](DDiagramBase.md#toparentresized)
- [updateContentSize](DDiagramBase.md#updatecontentsize)
- [updateTransform](DDiagramBase.md#updatetransform)
- [mixin](DDiagramBase.md#mixin)

## Constructors

### constructor

• **new DDiagramBase**<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CANVAS` | extends [`DDiagramCanvasBase`](DDiagramCanvasBase.md)<[`DThemeDiagramCanvasBase`](../interfaces/DThemeDiagramCanvasBase.md), [`DDiagramCanvasBaseOptions`](../interfaces/DDiagramCanvasBaseOptions.md)<[`DThemeDiagramCanvasBase`](../interfaces/DThemeDiagramCanvasBase.md)\>, `CANVAS`\> = [`DDiagramCanvasBase`](DDiagramCanvasBase.md)<[`DThemeDiagramCanvasBase`](../interfaces/DThemeDiagramCanvasBase.md), [`DDiagramCanvasBaseOptions`](../interfaces/DDiagramCanvasBaseOptions.md)<[`DThemeDiagramCanvasBase`](../interfaces/DThemeDiagramCanvasBase.md)\>\> |
| `CANVAS_OPTIONS` | extends [`DDiagramCanvasBaseOptions`](../interfaces/DDiagramCanvasBaseOptions.md)<[`DThemeDiagramCanvasBase`](../interfaces/DThemeDiagramCanvasBase.md), `CANVAS_OPTIONS`\> = [`DDiagramCanvasBaseOptions`](../interfaces/DDiagramCanvasBaseOptions.md)<[`DThemeDiagramCanvasBase`](../interfaces/DThemeDiagramCanvasBase.md)\> |
| `CONTROLLER` | extends [`DDiagramBaseController`](../interfaces/DDiagramBaseController.md) = [`DDiagramBaseController`](../interfaces/DDiagramBaseController.md) |
| `THEME` | extends [`DThemeDiagramBase`](../interfaces/DThemeDiagramBase.md) = [`DThemeDiagramBase`](../interfaces/DThemeDiagramBase.md) |
| `OPTIONS` | extends [`DDiagramBaseOptions`](../interfaces/DDiagramBaseOptions.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `any`, `OPTIONS`\> = [`DDiagramBaseOptions`](../interfaces/DDiagramBaseOptions.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Overrides

[DCanvasContainer](DCanvasContainer.md).[constructor](DCanvasContainer.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L108)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_accessibleActive](DCanvasContainer.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_accessibleDiv](DCanvasContainer.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_auto](DCanvasContainer.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:778](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L778)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_background](DCanvasContainer.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_border](DCanvasContainer.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_bounds](DCanvasContainer.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_canvas

• `Protected` **\_canvas**: ``null`` \| `CANVAS`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_canvas](DCanvasContainer.md#_canvas)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L79)

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_clearType](DCanvasContainer.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_controller

• `Protected` `Optional` **\_controller**: `CONTROLLER`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L103)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_corner](DCanvasContainer.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:776](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L776)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_cursor](DCanvasContainer.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:797](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L797)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_destroyed](DCanvasContainer.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_isAmbient

• `Protected` **\_isAmbient**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L104)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_lastDownPoint](DCanvasContainer.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_lastSortedIndex](DCanvasContainer.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_mask](DCanvasContainer.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_mode

• `Protected` **\_mode**: [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L106)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_options](DCanvasContainer.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L772)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_outline](DCanvasContainer.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_overflowMask](DCanvasContainer.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L80)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_padding](DCanvasContainer.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_reflowable](DCanvasContainer.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L795)

___

### \_serialized

• `Protected` **\_serialized**: ``null`` \| [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L101)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_shortcuts](DCanvasContainer.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_snapshot

• `Protected` **\_snapshot**: [`DDiagramSnapshot`](DDiagramSnapshot.md)<[`DDiagramSnapshotCanvas`](../interfaces/DDiagramSnapshotCanvas.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L105)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_snippet](DCanvasContainer.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_tempDisplayObjectParent](DCanvasContainer.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_tileFactory

• `Protected` `Optional` **\_tileFactory**: [`DDiagramCanvasTilePyramidFactory`](../index.md#ddiagramcanvastilepyramidfactory)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L102)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_title](DCanvasContainer.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_view

• `Protected` **\_view**: [`DViewImpl`](DViewImpl.md)

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_view](DCanvasContainer.md#_view)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L81)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_zIndex](DCanvasContainer.md#_zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8583

___

### accessible

• **accessible**: `boolean`

Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[accessible](DCanvasContainer.md#accessible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8468

___

### accessibleChildren

• **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

true

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[accessibleChildren](DCanvasContainer.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[accessibleHint](DCanvasContainer.md#accessiblehint)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8483

___

### accessiblePointerEvents

• **accessiblePointerEvents**: `string`

Specify the pointer-events the accessible div will use
Defaults to auto.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

'auto'

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[accessiblePointerEvents](DCanvasContainer.md#accessiblepointerevents)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8513

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[accessibleTitle](DCanvasContainer.md#accessibletitle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8476

___

### accessibleType

• **accessibleType**: `string`

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

'button'

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[accessibleType](DCanvasContainer.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[alpha](DCanvasContainer.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[angle](DCanvasContainer.md#angle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8771

___

### buttonMode

• **buttonMode**: `boolean`

If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
Setting this changes the 'cursor' property to `'pointer'`.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.buttonMode = true;
```

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[buttonMode](DCanvasContainer.md#buttonmode)

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

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[cacheAsBitmap](DCanvasContainer.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[children](DCanvasContainer.md#children)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8277

___

### cursor

• **cursor**: `string`

This defines what cursor mode is used when the mouse cursor
is hovered over the displayObject.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.cursor = 'wait';
```

**`See`**

https://developer.mozilla.org/en/docs/Web/CSS/cursor

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[cursor](DCanvasContainer.md#cursor)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8867

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`Member`**

PIXI.DisplayObject#filterArea

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[filterArea](DCanvasContainer.md#filterarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8592

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`Member`**

PIXI.DisplayObject#filters

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[filters](DCanvasContainer.md#filters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8600

___

### hitArea

• **hitArea**: `IHitArea`

Interaction shape. Children will be hit first, then this shape will be checked.
Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
```

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[hitArea](DCanvasContainer.md#hitarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8841

___

### interactive

• **interactive**: `boolean`

Enable interaction events for the DisplayObject. Touch, pointer and mouse
events will not be emitted unless `interactive` is set to `true`.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.on('tap', (event) => {
   //handle event
});
```

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[interactive](DCanvasContainer.md#interactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8829

___

### interactiveChildren

• **interactiveChildren**: `boolean`

Determines if the children to the displayObject can be clicked/touched
Setting this to false allows PixiJS to bypass a recursive `hitTest` function

**`Member`**

**`Memberof`**

PIXI.Container#

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[interactiveChildren](DCanvasContainer.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[isMask](DCanvasContainer.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[isSprite](DCanvasContainer.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[localTransform](DCanvasContainer.md#localtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8729

___

### mask

• **mask**: `Container` \| `MaskData`

Sets a mask for the displayObject. A mask is an object that limits the visibility of an
object to the shape of the mask applied to it. In PixiJS a regular mask must be a
PIXI.Graphics or a PIXI.Sprite object. This allows for much faster masking in canvas as it
utilities shape clipping. To remove a mask, set this property to `null`.

For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.

**`Example`**

```ts
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFF3300);
graphics.drawRect(50, 250, 100, 100);
graphics.endFill();

const sprite = new PIXI.Sprite(texture);
sprite.mask = graphics;
```

**`Todo`**

At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.

**`Member`**

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[mask](DCanvasContainer.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`Memberof`**

PIXI.DisplayObject#

**`Member`**

name

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[name](DCanvasContainer.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[parent](DCanvasContainer.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[pivot](DCanvasContainer.md#pivot)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8750

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`Member`**

PIXI.DisplayObject#renderable

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[renderable](DCanvasContainer.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[rotation](DCanvasContainer.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`Member`**

PIXI.Container#sortDirty

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[sortDirty](DCanvasContainer.md#sortdirty)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8300

___

### sortableChildren

• **sortableChildren**: `boolean`

If set to true, the container will sort its children by zIndex value
when updateTransform() is called, or manually if sortChildren() is called.

This actually changes the order of elements in the array, so should be treated
as a basic solution that is not performant compared to other solutions,
such as

**`Link`**

https://github.com/pixijs/pixi-display

Also be aware of that this may not work nicely with the addChildAt() function,
as the zIndex sorting may cause the child to automatically sorted to another position.

**`See`**

PIXI.settings.SORTABLE_CHILDREN

**`Member`**

PIXI.Container#sortableChildren

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[sortableChildren](DCanvasContainer.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`Member`**

PIXI.DisplayObject#transform

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[transform](DCanvasContainer.md#transform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8529

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`Member`**

PIXI.DisplayObject#visible

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[visible](DCanvasContainer.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[worldAlpha](DCanvasContainer.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[worldTransform](DCanvasContainer.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[worldVisible](DCanvasContainer.md#worldvisible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8787

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`Member`**

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[zIndex](DCanvasContainer.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[WORK_CONTAINS_POINT](DCanvasContainer.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L768)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DCanvasContainer.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DCanvasContainer.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### canvas

• `get` **canvas**(): ``null`` \| `CANVAS`

#### Returns

``null`` \| `CANVAS`

#### Inherited from

DCanvasContainer.canvas

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L112)

• `set` **canvas**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | ``null`` \| `CANVAS` |

#### Returns

`void`

#### Inherited from

DCanvasContainer.canvas

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L116)

___

### controller

• `get` **controller**(): ``null`` \| `CONTROLLER`

#### Returns

``null`` \| `CONTROLLER`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L122)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DCanvasContainer.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1455](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1455)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DCanvasContainer.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1378](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1378)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DCanvasContainer.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1382](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1382)

___

### layer

• `get` **layer**(): ``null`` \| [`DDiagramLayer`](DDiagramLayer.md)

#### Returns

``null`` \| [`DDiagramLayer`](DDiagramLayer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:253](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L253)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DCanvasContainer.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1678](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1678)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DCanvasContainer.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DCanvasContainer.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1451)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DCanvasContainer.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1437](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1437)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DCanvasContainer.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DCanvasContainer.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1442)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DCanvasContainer.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1791)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DCanvasContainer.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1795)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DCanvasContainer.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1447](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1447)

___

### snapshot

• `get` **snapshot**(): [`DDiagramSnapshot`](DDiagramSnapshot.md)<[`DDiagramSnapshotCanvas`](../interfaces/DDiagramSnapshotCanvas.md)\>

#### Returns

[`DDiagramSnapshot`](DDiagramSnapshot.md)<[`DDiagramSnapshotCanvas`](../interfaces/DDiagramSnapshotCanvas.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L118)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DCanvasContainer.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1112)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DCanvasContainer.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1674](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1674)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DCanvasContainer.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1682)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DCanvasContainer.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DCanvasContainer.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DCanvasContainer.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DCanvasContainer.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1234)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DCanvasContainer.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### view

• `get` **view**(): [`DView`](../interfaces/DView.md)

#### Returns

[`DView`](../interfaces/DView.md)

#### Inherited from

DCanvasContainer.view

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L158)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DCanvasContainer.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1137)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DCanvasContainer.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1319)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DCanvasContainer.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1323)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DCanvasContainer.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1239](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1239)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DCanvasContainer.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1243](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1243)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DCanvasContainer.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1279](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1279)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DCanvasContainer.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1283](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1283)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_calculateBounds](DCanvasContainer.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2018](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2018)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[_recursivePostUpdateTransform](DCanvasContainer.md#_recursivepostupdatetransform)

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

[DCanvasContainer](DCanvasContainer.md).[_render](DCanvasContainer.md#_render)

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

[DCanvasContainer](DCanvasContainer.md).[addChild](DCanvasContainer.md#addchild)

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

[DCanvasContainer](DCanvasContainer.md).[addChildAt](DCanvasContainer.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[addListener](DCanvasContainer.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[addListener](DCanvasContainer.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[applyTitle](DCanvasContainer.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1488)

___

### blur

▸ **blur**(`recursively?`): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[blur](DCanvasContainer.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1594)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[calculateBounds](DCanvasContainer.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

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

[DCanvasContainer](DCanvasContainer.md).[containsGlobalPoint](DCanvasContainer.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2043](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2043)

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

[DCanvasContainer](DCanvasContainer.md).[containsLocalPoint](DCanvasContainer.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2047](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2047)

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

[DCanvasContainer](DCanvasContainer.md).[containsPoint](DCanvasContainer.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2034](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2034)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[destroy](DCanvasContainer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L189)

___

### displayObjectUpdateTransform

▸ **displayObjectUpdateTransform**(): `void`

DisplayObject default updateTransform, does not update children of container.
Will crash if there's no parent element.

**`Memberof`**

PIXI.DisplayObject#

**`Function`**

displayObjectUpdateTransform

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[displayObjectUpdateTransform](DCanvasContainer.md#displayobjectupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8815

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

[DCanvasContainer](DCanvasContainer.md).[emit](DCanvasContainer.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[eventNames](DCanvasContainer.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[focus](DCanvasContainer.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1590](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1590)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[focusOnClosest](DCanvasContainer.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1958](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1958)

___

### get

▸ **get**(): ``null`` \| [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Returns

``null`` \| [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L249)

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `rect?`): `Rectangle`

Retrieves the bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skipUpdate?` | `boolean` | Setting to `true` will stop the transforms of the scene graph from  being updated. This means the calculation returned MAY be out of date BUT will give you a  nice performance boost. |
| `rect?` | `Rectangle` | Optional rectangle to store the result of the bounds calculation. |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[getBounds](DCanvasContainer.md#getbounds)

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

[DCanvasContainer](DCanvasContainer.md).[getChildAt](DCanvasContainer.md#getchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8351

___

### getChildByName

▸ **getChildByName**(`name`): `DisplayObject`

Returns the display object in the container.

**`Method`**

getChildByName

**`Memberof`**

PIXI.Container#

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Instance name. |

#### Returns

`DisplayObject`

The child with the specified name.

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[getChildByName](DCanvasContainer.md#getchildbyname)

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

[DCanvasContainer](DCanvasContainer.md).[getChildIndex](DCanvasContainer.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[getClearType](DCanvasContainer.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1203](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1203)

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

[DCanvasContainer](DCanvasContainer.md).[getClippingRect](DCanvasContainer.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2060](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2060)

___

### getGlobalPosition

▸ **getGlobalPosition**(`point?`, `skipUpdate?`): `Point`

Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.

**`Method`**

getGlobalPosition

**`Memberof`**

PIXI.DisplayObject#

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point?` | `Point` | - |
| `skipUpdate?` | `boolean` | Setting to true will stop the transforms of the scene graph from  being updated. This means the calculation returned MAY be out of date BUT will give you a  nice performance boost. |

#### Returns

`Point`

The updated point.

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[getGlobalPosition](DCanvasContainer.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[getHeight](DCanvasContainer.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1386)

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`): `Rectangle`

Retrieves the local bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rect?` | `Rectangle` | Optional rectangle to store the result of the bounds calculation. |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[getLocalBounds](DCanvasContainer.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getOverflowMask

▸ `Protected` **getOverflowMask**(): [`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Returns

[`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[getOverflowMask](DCanvasContainer.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L135)

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[getParentOfSize](DCanvasContainer.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1825](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1825)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[getThemeDefault](DCanvasContainer.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2009](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2009)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DCanvasContainer](DCanvasContainer.md).[getType](DCanvasContainer.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:261](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L261)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[getWidth](DCanvasContainer.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1327)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[getX](DCanvasContainer.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1247)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[getY](DCanvasContainer.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1287)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[hasDirty](DCanvasContainer.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1576)

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

[DCanvasContainer](DCanvasContainer.md).[hasRefitableHeight](DCanvasContainer.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1775)

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

[DCanvasContainer](DCanvasContainer.md).[hasRefitableWidth](DCanvasContainer.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1781](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1781)

___

### hide

▸ **hide**(): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[hide](DCanvasContainer.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1508)

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

[DCanvasContainer](DCanvasContainer.md).[init](DCanvasContainer.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L83)

___

### initLayer

▸ `Protected` **initLayer**(`canvas`, `shapes`, `mapper?`): `CANVAS`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `CANVAS` |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |
| `mapper?` | ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper) |

#### Returns

`CANVAS`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L195)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[initReflowable](DCanvasContainer.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[isDirty](DCanvasContainer.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1572](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1572)

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

[DCanvasContainer](DCanvasContainer.md).[isEventTarget](DCanvasContainer.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1903](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1903)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[isHidden](DCanvasContainer.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1518](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1518)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[isHierarchyDirty](DCanvasContainer.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1564)

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

[DCanvasContainer](DCanvasContainer.md).[isRefitable](DCanvasContainer.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1771)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[isShown](DCanvasContainer.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1504)

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

[DCanvasContainer](DCanvasContainer.md).[listenerCount](DCanvasContainer.md#listenercount)

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

[DCanvasContainer](DCanvasContainer.md).[listeners](DCanvasContainer.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newCanvas

▸ `Protected` `Abstract` **newCanvas**(`serialized`): `CANVAS`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |

#### Returns

`CANVAS`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:243](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L243)

___

### newLayer

▸ `Protected` **newLayer**(`serialized`, `canvas`, `mode`, `pieces?`, `pieceData?`): `Promise`<`CANVAS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |
| `canvas` | `CANVAS` |
| `mode` | [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1) |
| `pieces?` | `string`[] |
| `pieceData?` | `Map`<`string`, ``null`` \| [`EShapeEmbeddedDatum`](EShapeEmbeddedDatum.md)\> |

#### Returns

`Promise`<`CANVAS`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L168)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[off](DCanvasContainer.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[on](DCanvasContainer.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[on](DCanvasContainer.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[onBlur](DCanvasContainer.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1667](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1667)

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

[DCanvasContainer](DCanvasContainer.md).[onChildBlur](DCanvasContainer.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1660](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1660)

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

[DCanvasContainer](DCanvasContainer.md).[onChildFocus](DCanvasContainer.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1646](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1646)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[onChildrenChange](DCanvasContainer.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### onDblClick

▸ `Protected` **onDblClick**(`e`, `interactionManager`, `skipView?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |
| `skipView?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[onDblClick](DCanvasContainer.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L168)

___

### onDown

▸ `Protected` **onDown**(`e`, `skipView?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |
| `skipView?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[onDown](DCanvasContainer.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L182)

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

[DCanvasContainer](DCanvasContainer.md).[onDownThis](DCanvasContainer.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1924](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1924)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[onFocus](DCanvasContainer.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1653](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1653)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[onHierarchyDirty](DCanvasContainer.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1568](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1568)

___

### onKeyDown

▸ `Protected` **onKeyDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[onKeyDown](DCanvasContainer.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1892](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1892)

___

### onKeyUp

▸ `Protected` **onKeyUp**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[onKeyUp](DCanvasContainer.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1897](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1897)

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

[DCanvasContainer](DCanvasContainer.md).[onMove](DCanvasContainer.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1141)

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

[DCanvasContainer](DCanvasContainer.md).[onOut](DCanvasContainer.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1981](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1981)

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

[DCanvasContainer](DCanvasContainer.md).[onOver](DCanvasContainer.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1967](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1967)

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

[DCanvasContainer](DCanvasContainer.md).[onParentMove](DCanvasContainer.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1881](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1881)

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

[DCanvasContainer](DCanvasContainer.md).[onParentResize](DCanvasContainer.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1840](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1840)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[onRefit](DCanvasContainer.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1727)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[onReflow](DCanvasContainer.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1787)

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

[DCanvasContainer](DCanvasContainer.md).[onResize](DCanvasContainer.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L107)

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

[DCanvasContainer](DCanvasContainer.md).[onScale](DCanvasContainer.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1224)

___

### onSet

▸ `Protected` **onSet**(`serialized`, `canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |
| `canvas` | `CANVAS` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L162)

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

[DCanvasContainer](DCanvasContainer.md).[onShortcut](DCanvasContainer.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1129)

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

[DCanvasContainer](DCanvasContainer.md).[onSkew](DCanvasContainer.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1229)

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

[DCanvasContainer](DCanvasContainer.md).[onStateChange](DCanvasContainer.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1617](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1617)

___

### onUnset

▸ `Protected` **onUnset**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:245](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L245)

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

[DCanvasContainer](DCanvasContainer.md).[onUp](DCanvasContainer.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1935](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1935)

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

[DCanvasContainer](DCanvasContainer.md).[onUpThis](DCanvasContainer.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1942](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1942)

___

### onWheel

▸ `Protected` **onWheel**(`e`, `deltas`, `global`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `WheelEvent` |
| `deltas` | [`UtilWheelEventDeltas`](../interfaces/UtilWheelEventDeltas.md) |
| `global` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[onWheel](DCanvasContainer.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L162)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[once](DCanvasContainer.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[once](DCanvasContainer.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[reflow](DCanvasContainer.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1700](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1700)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[removeAllListeners](DCanvasContainer.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[removeAllListeners](DCanvasContainer.md#removealllisteners)

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

[DCanvasContainer](DCanvasContainer.md).[removeChild](DCanvasContainer.md#removechild)

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

[DCanvasContainer](DCanvasContainer.md).[removeChildAt](DCanvasContainer.md#removechildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8365

___

### removeChildren

▸ **removeChildren**(`beginIndex?`, `endIndex?`): `DisplayObject`[]

Removes all children from this container that are within the begin and end indexes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `beginIndex?` | `number` | The beginning position. |
| `endIndex?` | `number` | The ending position. Default value is size of the container. |

#### Returns

`DisplayObject`[]

List of removed children

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[removeChildren](DCanvasContainer.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[removeListener](DCanvasContainer.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[removeListener](DCanvasContainer.md#removelistener)

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

[DCanvasContainer](DCanvasContainer.md).[render](DCanvasContainer.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1999](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1999)

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

[DCanvasContainer](DCanvasContainer.md).[renderAdvanced](DCanvasContainer.md#renderadvanced)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8406

___

### resize

▸ **resize**(`width?`, `height?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[resize](DCanvasContainer.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### set

▸ **set**(`serialized`): `Promise`<``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | ``null`` |

#### Returns

`Promise`<``null``\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L126)

▸ **set**(`serialized`): `Promise`<`CANVAS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |

#### Returns

`Promise`<`CANVAS`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L127)

▸ **set**(`serialized`): `Promise`<``null`` \| `CANVAS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | ``null`` \| [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |

#### Returns

`Promise`<``null`` \| `CANVAS`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L128)

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

[DCanvasContainer](DCanvasContainer.md).[setChildIndex](DCanvasContainer.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[setFocused](DCanvasContainer.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1580)

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

[DCanvasContainer](DCanvasContainer.md).[setHeight](DCanvasContainer.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1390)

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

[DCanvasContainer](DCanvasContainer.md).[setParent](DCanvasContainer.md#setparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8686

___

### setTransform

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): `DisplayObject`

Convenience function to set the position, scale, skew and pivot at once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The X position |
| `y?` | `number` | The Y position |
| `scaleX?` | `number` | The X scale value |
| `scaleY?` | `number` | The Y scale value |
| `rotation?` | `number` | The rotation |
| `skewX?` | `number` | The X skew value |
| `skewY?` | `number` | The Y skew value |
| `pivotX?` | `number` | The X pivot value |
| `pivotY?` | `number` | The Y pivot value |

#### Returns

`DisplayObject`

The DisplayObject instance

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[setTransform](DCanvasContainer.md#settransform)

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

[DCanvasContainer](DCanvasContainer.md).[setWidth](DCanvasContainer.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

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

[DCanvasContainer](DCanvasContainer.md).[setX](DCanvasContainer.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1256](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1256)

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

[DCanvasContainer](DCanvasContainer.md).[setY](DCanvasContainer.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1296)

___

### show

▸ **show**(): [`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Returns

[`DDiagramBase`](DDiagramBase.md)<`CANVAS`, `CANVAS_OPTIONS`, `CONTROLLER`, `THEME`, `OPTIONS`\>

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[show](DCanvasContainer.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1495](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1495)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[sortChildren](DCanvasContainer.md#sortchildren)

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

[DCanvasContainer](DCanvasContainer.md).[swapChildren](DCanvasContainer.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toCanvasBaseBackgroundOptions

▸ `Protected` **toCanvasBaseBackgroundOptions**(`serialized`, `theme`, `isAmbient`): [`DDiagramCanvasBackgroundOptions`](../interfaces/DDiagramCanvasBackgroundOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |
| `theme` | `THEME` |
| `isAmbient` | `boolean` |

#### Returns

[`DDiagramCanvasBackgroundOptions`](../interfaces/DDiagramCanvasBackgroundOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L226)

___

### toCanvasBaseOptions

▸ `Protected` **toCanvasBaseOptions**(`serialized`): [`DDiagramCanvasBaseOptions`](../interfaces/DDiagramCanvasBaseOptions.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |

#### Returns

[`DDiagramCanvasBaseOptions`](../interfaces/DDiagramCanvasBaseOptions.md)<`any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L207)

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

[DCanvasContainer](DCanvasContainer.md).[toCursor](DCanvasContainer.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[toDirty](DCanvasContainer.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1522)

___

### toGlobal

▸ **toGlobal**(`position`, `point?`, `skipUpdate?`): `IPoint`

Calculates the global position of the display object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `point?` | `IPoint` | A Point object in which to store the value, optional  (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform. |

#### Returns

`IPoint`

A point object representing the position of this object.

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[toGlobal](DCanvasContainer.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[toHasDirty](DCanvasContainer.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1531](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1531)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[toHierarchyDirty](DCanvasContainer.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1547](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1547)

___

### toLocal

▸ **toLocal**(`position`, `from?`, `point?`, `skipUpdate?`): `IPoint`

Calculates the local position of the display object relative to another point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `from?` | `DisplayObject` | The DisplayObject to calculate the global position from. |
| `point?` | `IPoint` | A Point object in which to store the value, optional  (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform |

#### Returns

`IPoint`

A point object representing the position of this object

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[toLocal](DCanvasContainer.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toMode

▸ `Protected` `Abstract` **toMode**(`options?`): [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L166)

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[toParentHasDirty](DCanvasContainer.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1540](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1540)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[toParentHierarchyDirty](DCanvasContainer.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1557](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1557)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[toParentResized](DCanvasContainer.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1818](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1818)

___

### updateContentSize

▸ `Protected` **updateContentSize**(`newWidth`, `newHeight`, `oldWidth`, `oldHeight`): `void`

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

[DCanvasContainer](DCanvasContainer.md).[updateContentSize](DCanvasContainer.md#updatecontentsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L144)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DCanvasContainer](DCanvasContainer.md).[updateTransform](DCanvasContainer.md#updatetransform)

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

[DCanvasContainer](DCanvasContainer.md).[mixin](DCanvasContainer.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
