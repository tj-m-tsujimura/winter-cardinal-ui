[Winter Cardinal UI - v0.310.1](../index.md) / DTree

# Class: DTree<NODE, DATA, THEME, CONTENT_OPTIONS, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) = [`DTreeNode`](../interfaces/DTreeNode.md) |
| `DATA` | extends [`DTreeData`](../interfaces/DTreeData.md)<`NODE`\> = [`DTreeData`](../interfaces/DTreeData.md)<`NODE`\> |
| `THEME` | extends [`DThemeTree`](../interfaces/DThemeTree.md) = [`DThemeTree`](../interfaces/DThemeTree.md) |
| `CONTENT_OPTIONS` | extends [`DBaseOptions`](../interfaces/DBaseOptions.md) = [`DContentOptions`](../interfaces/DContentOptions.md) |
| `OPTIONS` | extends [`DTreeOptions`](../interfaces/DTreeOptions.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`\> = [`DTreeOptions`](../interfaces/DTreeOptions.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`\> |

## Hierarchy

- [`DPane`](DPane.md)<`THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

  ↳ **`DTree`**

## Implements

- [`DTreeDataLike`](../interfaces/DTreeDataLike.md)<`NODE`\>

## Table of contents

### Constructors

- [constructor](DTree.md#constructor)

### Properties

- [\_accessibleActive](DTree.md#_accessibleactive)
- [\_accessibleDiv](DTree.md#_accessiblediv)
- [\_auto](DTree.md#_auto)
- [\_background](DTree.md#_background)
- [\_border](DTree.md#_border)
- [\_bounds](DTree.md#_bounds)
- [\_clearType](DTree.md#_cleartype)
- [\_content](DTree.md#_content)
- [\_corner](DTree.md#_corner)
- [\_cursor](DTree.md#_cursor)
- [\_data](DTree.md#_data)
- [\_destroyed](DTree.md#_destroyed)
- [\_gestureUtil](DTree.md#_gestureutil)
- [\_lastDownPoint](DTree.md#_lastdownpoint)
- [\_lastSortedIndex](DTree.md#_lastsortedindex)
- [\_mask](DTree.md#_mask)
- [\_options](DTree.md#_options)
- [\_outline](DTree.md#_outline)
- [\_overflowMask](DTree.md#_overflowmask)
- [\_padding](DTree.md#_padding)
- [\_reflowable](DTree.md#_reflowable)
- [\_scrollbar](DTree.md#_scrollbar)
- [\_shortcuts](DTree.md#_shortcuts)
- [\_snippet](DTree.md#_snippet)
- [\_tempDisplayObjectParent](DTree.md#_tempdisplayobjectparent)
- [\_title](DTree.md#_title)
- [\_updater](DTree.md#_updater)
- [\_zIndex](DTree.md#_zindex)
- [accessible](DTree.md#accessible)
- [accessibleChildren](DTree.md#accessiblechildren)
- [accessibleHint](DTree.md#accessiblehint)
- [accessiblePointerEvents](DTree.md#accessiblepointerevents)
- [accessibleTitle](DTree.md#accessibletitle)
- [accessibleType](DTree.md#accessibletype)
- [alpha](DTree.md#alpha)
- [angle](DTree.md#angle)
- [buttonMode](DTree.md#buttonmode)
- [cacheAsBitmap](DTree.md#cacheasbitmap)
- [children](DTree.md#children)
- [cursor](DTree.md#cursor)
- [filterArea](DTree.md#filterarea)
- [filters](DTree.md#filters)
- [hitArea](DTree.md#hitarea)
- [interactive](DTree.md#interactive)
- [interactiveChildren](DTree.md#interactivechildren)
- [isMask](DTree.md#ismask)
- [isSprite](DTree.md#issprite)
- [localTransform](DTree.md#localtransform)
- [mask](DTree.md#mask)
- [name](DTree.md#name)
- [parent](DTree.md#parent)
- [pivot](DTree.md#pivot)
- [renderable](DTree.md#renderable)
- [rotation](DTree.md#rotation)
- [sortDirty](DTree.md#sortdirty)
- [sortableChildren](DTree.md#sortablechildren)
- [transform](DTree.md#transform)
- [visible](DTree.md#visible)
- [worldAlpha](DTree.md#worldalpha)
- [worldTransform](DTree.md#worldtransform)
- [worldVisible](DTree.md#worldvisible)
- [zIndex](DTree.md#zindex)
- [WORK\_CONTAINS\_POINT](DTree.md#work_contains_point)
- [WORK\_ON\_CLICK](DTree.md#work_on_click)
- [WORK\_POINT](DTree.md#work_point)
- [WORK\_RECTANGLE](DTree.md#work_rectangle)

### Accessors

- [background](DTree.md#background)
- [border](DTree.md#border)
- [content](DTree.md#content)
- [corner](DTree.md#corner)
- [data](DTree.md#data)
- [height](DTree.md#height)
- [nodes](DTree.md#nodes)
- [options](DTree.md#options)
- [outline](DTree.md#outline)
- [padding](DTree.md#padding)
- [position](DTree.md#position)
- [reflowable](DTree.md#reflowable)
- [scale](DTree.md#scale)
- [scrollbar](DTree.md#scrollbar)
- [selection](DTree.md#selection)
- [shadow](DTree.md#shadow)
- [skew](DTree.md#skew)
- [snippet](DTree.md#snippet)
- [state](DTree.md#state)
- [theme](DTree.md#theme)
- [title](DTree.md#title)
- [type](DTree.md#type)
- [unsafe](DTree.md#unsafe)
- [updater](DTree.md#updater)
- [value](DTree.md#value)
- [weight](DTree.md#weight)
- [width](DTree.md#width)
- [x](DTree.md#x)
- [y](DTree.md#y)

### Methods

- [\_calculateBounds](DTree.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DTree.md#_recursivepostupdatetransform)
- [\_render](DTree.md#_render)
- [add](DTree.md#add)
- [addAfter](DTree.md#addafter)
- [addBefore](DTree.md#addbefore)
- [addChild](DTree.md#addchild)
- [addChildAt](DTree.md#addchildat)
- [addListener](DTree.md#addlistener)
- [applyTitle](DTree.md#applytitle)
- [blur](DTree.md#blur)
- [calculateBounds](DTree.md#calculatebounds)
- [clear](DTree.md#clear)
- [collapse](DTree.md#collapse)
- [collapseAll](DTree.md#collapseall)
- [containsGlobalPoint](DTree.md#containsglobalpoint)
- [containsLocalPoint](DTree.md#containslocalpoint)
- [containsPoint](DTree.md#containspoint)
- [destroy](DTree.md#destroy)
- [displayObjectUpdateTransform](DTree.md#displayobjectupdatetransform)
- [each](DTree.md#each)
- [emit](DTree.md#emit)
- [eventNames](DTree.md#eventnames)
- [expand](DTree.md#expand)
- [expandAll](DTree.md#expandall)
- [focus](DTree.md#focus)
- [focusOnClosest](DTree.md#focusonclosest)
- [getBounds](DTree.md#getbounds)
- [getChildAt](DTree.md#getchildat)
- [getChildByName](DTree.md#getchildbyname)
- [getChildIndex](DTree.md#getchildindex)
- [getClearType](DTree.md#getcleartype)
- [getClippingRect](DTree.md#getclippingrect)
- [getFocusedChildClippingRect](DTree.md#getfocusedchildclippingrect)
- [getGlobalPosition](DTree.md#getglobalposition)
- [getHeight](DTree.md#getheight)
- [getLocalBounds](DTree.md#getlocalbounds)
- [getOverflowMask](DTree.md#getoverflowmask)
- [getParentOfSize](DTree.md#getparentofsize)
- [getThemeDefault](DTree.md#getthemedefault)
- [getType](DTree.md#gettype)
- [getWheelContentX](DTree.md#getwheelcontentx)
- [getWheelContentY](DTree.md#getwheelcontenty)
- [getWidth](DTree.md#getwidth)
- [getX](DTree.md#getx)
- [getY](DTree.md#gety)
- [hasDirty](DTree.md#hasdirty)
- [hasRefitableHeight](DTree.md#hasrefitableheight)
- [hasRefitableWidth](DTree.md#hasrefitablewidth)
- [hide](DTree.md#hide)
- [init](DTree.md#init)
- [initContent](DTree.md#initcontent)
- [initGesture](DTree.md#initgesture)
- [initReflowable](DTree.md#initreflowable)
- [initScrollBar](DTree.md#initscrollbar)
- [isCollapsed](DTree.md#iscollapsed)
- [isDirty](DTree.md#isdirty)
- [isEventTarget](DTree.md#iseventtarget)
- [isExpanded](DTree.md#isexpanded)
- [isHidden](DTree.md#ishidden)
- [isHierarchyDirty](DTree.md#ishierarchydirty)
- [isRefitable](DTree.md#isrefitable)
- [isShown](DTree.md#isshown)
- [listenerCount](DTree.md#listenercount)
- [listeners](DTree.md#listeners)
- [lock](DTree.md#lock)
- [newContent](DTree.md#newcontent)
- [newScrollBar](DTree.md#newscrollbar)
- [newUpdater](DTree.md#newupdater)
- [off](DTree.md#off)
- [on](DTree.md#on)
- [onBlur](DTree.md#onblur)
- [onChildBlur](DTree.md#onchildblur)
- [onChildFocus](DTree.md#onchildfocus)
- [onChildrenChange](DTree.md#onchildrenchange)
- [onContentChange](DTree.md#oncontentchange)
- [onDblClick](DTree.md#ondblclick)
- [onDown](DTree.md#ondown)
- [onDownThis](DTree.md#ondownthis)
- [onFocus](DTree.md#onfocus)
- [onHierarchyDirty](DTree.md#onhierarchydirty)
- [onKeyDown](DTree.md#onkeydown)
- [onKeyUp](DTree.md#onkeyup)
- [onMove](DTree.md#onmove)
- [onOut](DTree.md#onout)
- [onOver](DTree.md#onover)
- [onParentMove](DTree.md#onparentmove)
- [onParentResize](DTree.md#onparentresize)
- [onRefit](DTree.md#onrefit)
- [onReflow](DTree.md#onreflow)
- [onResize](DTree.md#onresize)
- [onScale](DTree.md#onscale)
- [onScrollBarMoveX](DTree.md#onscrollbarmovex)
- [onScrollBarMoveY](DTree.md#onscrollbarmovey)
- [onScrollBarUpdate](DTree.md#onscrollbarupdate)
- [onShortcut](DTree.md#onshortcut)
- [onSkew](DTree.md#onskew)
- [onStateChange](DTree.md#onstatechange)
- [onUp](DTree.md#onup)
- [onUpThis](DTree.md#onupthis)
- [onWheel](DTree.md#onwheel)
- [once](DTree.md#once)
- [reflow](DTree.md#reflow)
- [remove](DTree.md#remove)
- [removeAllListeners](DTree.md#removealllisteners)
- [removeChild](DTree.md#removechild)
- [removeChildAt](DTree.md#removechildat)
- [removeChildren](DTree.md#removechildren)
- [removeListener](DTree.md#removelistener)
- [render](DTree.md#render)
- [renderAdvanced](DTree.md#renderadvanced)
- [resize](DTree.md#resize)
- [setChildIndex](DTree.md#setchildindex)
- [setFocused](DTree.md#setfocused)
- [setHeight](DTree.md#setheight)
- [setParent](DTree.md#setparent)
- [setTransform](DTree.md#settransform)
- [setWidth](DTree.md#setwidth)
- [setX](DTree.md#setx)
- [setY](DTree.md#sety)
- [show](DTree.md#show)
- [sortChildren](DTree.md#sortchildren)
- [swapChildren](DTree.md#swapchildren)
- [toContent](DTree.md#tocontent)
- [toContentX](DTree.md#tocontentx)
- [toContentY](DTree.md#tocontenty)
- [toCursor](DTree.md#tocursor)
- [toData](DTree.md#todata)
- [toDirty](DTree.md#todirty)
- [toGlobal](DTree.md#toglobal)
- [toHasDirty](DTree.md#tohasdirty)
- [toHierarchyDirty](DTree.md#tohierarchydirty)
- [toLocal](DTree.md#tolocal)
- [toParentHasDirty](DTree.md#toparenthasdirty)
- [toParentHierarchyDirty](DTree.md#toparenthierarchydirty)
- [toParentResized](DTree.md#toparentresized)
- [toggle](DTree.md#toggle)
- [unlock](DTree.md#unlock)
- [update](DTree.md#update)
- [updateTransform](DTree.md#updatetransform)
- [mixin](DTree.md#mixin)

## Constructors

### constructor

• **new DTree**<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) = [`DTreeNode`](../interfaces/DTreeNode.md) |
| `DATA` | extends [`DTreeData`](../interfaces/DTreeData.md)<`NODE`, `DATA`\> = [`DTreeData`](../interfaces/DTreeData.md)<`NODE`\> |
| `THEME` | extends [`DThemeTree`](../interfaces/DThemeTree.md) = [`DThemeTree`](../interfaces/DThemeTree.md) |
| `CONTENT_OPTIONS` | extends [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`, `CONTENT_OPTIONS`\> = [`DContentOptions`](../interfaces/DContentOptions.md) |
| `OPTIONS` | extends [`DTreeOptions`](../interfaces/DTreeOptions.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\> = [`DTreeOptions`](../interfaces/DTreeOptions.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Overrides

[DPane](DPane.md).[constructor](DPane.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L67)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DPane](DPane.md).[_accessibleActive](DPane.md#_accessibleactive)

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

[DPane](DPane.md).[_accessibleDiv](DPane.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DPane](DPane.md).[_auto](DPane.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:778](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L778)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DPane](DPane.md).[_background](DPane.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DPane](DPane.md).[_border](DPane.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DPane](DPane.md).[_bounds](DPane.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DPane](DPane.md).[_clearType](DPane.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_content

• `Protected` `Optional` **\_content**: [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DPane](DPane.md).[_content](DPane.md#_content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L68)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DPane](DPane.md).[_corner](DPane.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:776](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L776)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DPane](DPane.md).[_cursor](DPane.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:797](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L797)

___

### \_data

• `Protected` `Optional` **\_data**: `DATA`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L64)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DPane](DPane.md).[_destroyed](DPane.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_gestureUtil

• `Protected` `Optional` **\_gestureUtil**: [`UtilGesture`](UtilGesture.md)<[`DPane`](DPane.md)<[`DThemePane`](../interfaces/DThemePane.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DPaneOptions`](../interfaces/DPaneOptions.md)<[`DThemePane`](../interfaces/DThemePane.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\>\>

#### Inherited from

[DPane](DPane.md).[_gestureUtil](DPane.md#_gestureutil)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L71)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DPane](DPane.md).[_lastDownPoint](DPane.md#_lastdownpoint)

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

[DPane](DPane.md).[_lastSortedIndex](DPane.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DPane](DPane.md).[_mask](DPane.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DPane](DPane.md).[_options](DPane.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L772)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DPane](DPane.md).[_outline](DPane.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Inherited from

[DPane](DPane.md).[_overflowMask](DPane.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L69)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DPane](DPane.md).[_padding](DPane.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DPane](DPane.md).[_reflowable](DPane.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L795)

___

### \_scrollbar

• `Protected` `Optional` **\_scrollbar**: [`DPaneScrollBar`](DPaneScrollBar.md)<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Inherited from

[DPane](DPane.md).[_scrollbar](DPane.md#_scrollbar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L70)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DPane](DPane.md).[_shortcuts](DPane.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DPane](DPane.md).[_snippet](DPane.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Inherited from

[DPane](DPane.md).[_tempDisplayObjectParent](DPane.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DPane](DPane.md).[_title](DPane.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_updater

• `Protected` `Optional` **\_updater**: [`DTreeItemUpdater`](DTreeItemUpdater.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L65)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DPane](DPane.md).[_zIndex](DPane.md#_zindex)

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

[DPane](DPane.md).[accessible](DPane.md#accessible)

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

[DPane](DPane.md).[accessibleChildren](DPane.md#accessiblechildren)

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

[DPane](DPane.md).[accessibleHint](DPane.md#accessiblehint)

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

[DPane](DPane.md).[accessiblePointerEvents](DPane.md#accessiblepointerevents)

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

[DPane](DPane.md).[accessibleTitle](DPane.md#accessibletitle)

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

[DPane](DPane.md).[accessibleType](DPane.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DPane](DPane.md).[alpha](DPane.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DPane](DPane.md).[angle](DPane.md#angle)

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

[DPane](DPane.md).[buttonMode](DPane.md#buttonmode)

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

[DPane](DPane.md).[cacheAsBitmap](DPane.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DPane](DPane.md).[children](DPane.md#children)

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

[DPane](DPane.md).[cursor](DPane.md#cursor)

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

[DPane](DPane.md).[filterArea](DPane.md#filterarea)

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

[DPane](DPane.md).[filters](DPane.md#filters)

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

[DPane](DPane.md).[hitArea](DPane.md#hitarea)

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

[DPane](DPane.md).[interactive](DPane.md#interactive)

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

[DPane](DPane.md).[interactiveChildren](DPane.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DPane](DPane.md).[isMask](DPane.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DPane](DPane.md).[isSprite](DPane.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DPane](DPane.md).[localTransform](DPane.md#localtransform)

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

[DPane](DPane.md).[mask](DPane.md#mask)

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

[DPane](DPane.md).[name](DPane.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DPane](DPane.md).[parent](DPane.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DPane](DPane.md).[pivot](DPane.md#pivot)

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

[DPane](DPane.md).[renderable](DPane.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DPane](DPane.md).[rotation](DPane.md#rotation)

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

[DPane](DPane.md).[sortDirty](DPane.md#sortdirty)

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

[DPane](DPane.md).[sortableChildren](DPane.md#sortablechildren)

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

[DPane](DPane.md).[transform](DPane.md#transform)

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

[DPane](DPane.md).[visible](DPane.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DPane](DPane.md).[worldAlpha](DPane.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DPane](DPane.md).[worldTransform](DPane.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DPane](DPane.md).[worldVisible](DPane.md#worldvisible)

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

[DPane](DPane.md).[zIndex](DPane.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DPane](DPane.md).[WORK_CONTAINS_POINT](DPane.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L768)

___

### WORK\_ON\_CLICK

▪ `Static` `Protected` `Optional` **WORK\_ON\_CLICK**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L62)

___

### WORK\_POINT

▪ `Static` `Protected` `Optional` **WORK\_POINT**: `Point`

#### Inherited from

[DPane](DPane.md).[WORK_POINT](DPane.md#work_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L65)

___

### WORK\_RECTANGLE

▪ `Static` `Protected` `Optional` **WORK\_RECTANGLE**: `Rectangle`

#### Inherited from

[DPane](DPane.md).[WORK_RECTANGLE](DPane.md#work_rectangle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L66)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DPane.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DPane.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### content

• `get` **content**(): [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Returns

[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

DPane.content

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L192)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DPane.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1455](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1455)

___

### data

• `get` **data**(): `DATA`

#### Returns

`DATA`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L98)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DPane.height

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

DPane.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1382](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1382)

___

### nodes

• `get` **nodes**(): `NODE`[]

#### Returns

`NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L144)

• `set` **nodes**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `NODE`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L148)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DPane.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1678](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1678)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DPane.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DPane.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1451)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DPane.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1437](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1437)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DPane.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DPane.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1442)

___

### scrollbar

• `get` **scrollbar**(): [`DPaneScrollBar`](DPaneScrollBar.md)<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Returns

[`DPaneScrollBar`](DPaneScrollBar.md)<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Inherited from

DPane.scrollbar

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L122)

___

### selection

• `get` **selection**(): [`DTreeDataSelection`](../interfaces/DTreeDataSelection.md)<`NODE`\>

A selection.

#### Returns

[`DTreeDataSelection`](../interfaces/DTreeDataSelection.md)<`NODE`\>

a selection

#### Implementation of

[DTreeDataLike](../interfaces/DTreeDataLike.md).[selection](../interfaces/DTreeDataLike.md#selection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L132)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DPane.shadow

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

DPane.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1795)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DPane.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1447](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1447)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DPane.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1112)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DPane.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1674](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1674)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DPane.theme

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

DPane.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DPane.title

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

DPane.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DPane.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1234)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DPane.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### updater

• `get` **updater**(): [`DTreeItemUpdater`](DTreeItemUpdater.md)<`NODE`\>

#### Returns

[`DTreeItemUpdater`](DTreeItemUpdater.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L85)

___

### value

• `get` **value**(): `NODE`[]

#### Returns

`NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L136)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `NODE`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L140)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DPane.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1137)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DPane.width

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

DPane.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1323)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DPane.x

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

DPane.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1243](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1243)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DPane.y

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

DPane.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1283](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1283)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[_calculateBounds](DPane.md#_calculatebounds)

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

[DPane](DPane.md).[_recursivePostUpdateTransform](DPane.md#_recursivepostupdatetransform)

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

[DPane](DPane.md).[_render](DPane.md#_render)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8413

___

### add

▸ **add**(`target`, `parent?`): `boolean`

Inserts a node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a new node |
| `parent?` | `NODE` | a parent node |

#### Returns

`boolean`

true if the data is changed

#### Implementation of

[DTreeDataLike](../interfaces/DTreeDataLike.md).[add](../interfaces/DTreeDataLike.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L188)

___

### addAfter

▸ **addAfter**(`target`, `sibling`): `boolean`

Inserts the given node after the given sibling.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a new node |
| `sibling` | `NODE` | a sibling node |

#### Returns

`boolean`

true if the data is changed

#### Implementation of

[DTreeDataLike](../interfaces/DTreeDataLike.md).[addAfter](../interfaces/DTreeDataLike.md#addafter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L196)

___

### addBefore

▸ **addBefore**(`target`, `sibling`): `boolean`

Inserts the given node before the given sibling.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a new node |
| `sibling` | `NODE` | a sibling node |

#### Returns

`boolean`

true if the data is changed

#### Implementation of

[DTreeDataLike](../interfaces/DTreeDataLike.md).[addBefore](../interfaces/DTreeDataLike.md#addbefore)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L192)

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

[DPane](DPane.md).[addChild](DPane.md#addchild)

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

[DPane](DPane.md).[addChildAt](DPane.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[addListener](DPane.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[addListener](DPane.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[applyTitle](DPane.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1488)

___

### blur

▸ **blur**(`recursively?`): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[blur](DPane.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1594)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[calculateBounds](DPane.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### clear

▸ **clear**(): `boolean`

Clears all the nodes.

#### Returns

`boolean`

true if the data is changed

#### Implementation of

[DTreeDataLike](../interfaces/DTreeDataLike.md).[clear](../interfaces/DTreeDataLike.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L180)

___

### collapse

▸ **collapse**(`target`): `boolean`

Collapses the given node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node to be collapsed |

#### Returns

`boolean`

true if succeeded

#### Implementation of

[DTreeDataLike](../interfaces/DTreeDataLike.md).[collapse](../interfaces/DTreeDataLike.md#collapse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L160)

___

### collapseAll

▸ **collapseAll**(): `boolean`

Collapses all the nodes.

#### Returns

`boolean`

true if the data is changed

#### Implementation of

[DTreeDataLike](../interfaces/DTreeDataLike.md).[collapseAll](../interfaces/DTreeDataLike.md#collapseall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L168)

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

[DPane](DPane.md).[containsGlobalPoint](DPane.md#containsglobalpoint)

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

[DPane](DPane.md).[containsLocalPoint](DPane.md#containslocalpoint)

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

[DPane](DPane.md).[containsPoint](DPane.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2034](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2034)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[destroy](DPane.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:392](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L392)

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

[DPane](DPane.md).[displayObjectUpdateTransform](DPane.md#displayobjectupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8815

___

### each

▸ **each**(`iteratee`): `void`

Iterates over all the nodes.
If the iteratee explicitly returns false, stops an iteration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iteratee` | [`DTreeNodeIteratee`](../index.md#dtreenodeiteratee)<`NODE`\> | an iteratee |

#### Returns

`void`

#### Implementation of

[DTreeDataLike](../interfaces/DTreeDataLike.md).[each](../interfaces/DTreeDataLike.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L200)

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

[DPane](DPane.md).[emit](DPane.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DPane](DPane.md).[eventNames](DPane.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### expand

▸ **expand**(`target`): `boolean`

Expands the given node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node to be expanded |

#### Returns

`boolean`

true if succeeded

#### Implementation of

[DTreeDataLike](../interfaces/DTreeDataLike.md).[expand](../interfaces/DTreeDataLike.md#expand)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L156)

___

### expandAll

▸ **expandAll**(): `boolean`

Expands all the nodes.

#### Returns

`boolean`

true if the data is changed

#### Implementation of

[DTreeDataLike](../interfaces/DTreeDataLike.md).[expandAll](../interfaces/DTreeDataLike.md#expandall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L164)

___

### focus

▸ **focus**(): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[focus](DPane.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1590](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1590)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[focusOnClosest](DPane.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1958](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1958)

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

[DPane](DPane.md).[getBounds](DPane.md#getbounds)

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

[DPane](DPane.md).[getChildAt](DPane.md#getchildat)

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

[DPane](DPane.md).[getChildByName](DPane.md#getchildbyname)

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

[DPane](DPane.md).[getChildIndex](DPane.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DPane](DPane.md).[getClearType](DPane.md#getcleartype)

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

[DPane](DPane.md).[getClippingRect](DPane.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2060](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2060)

___

### getFocusedChildClippingRect

▸ `Protected` **getFocusedChildClippingRect**(`focused`, `contentX`, `contentY`, `contentWidth`, `contentHeight`, `width`, `height`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `contentX` | `number` |
| `contentY` | `number` |
| `contentWidth` | `number` |
| `contentHeight` | `number` |
| `width` | `number` |
| `height` | `number` |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Inherited from

[DPane](DPane.md).[getFocusedChildClippingRect](DPane.md#getfocusedchildclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:293](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L293)

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

[DPane](DPane.md).[getGlobalPosition](DPane.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DPane](DPane.md).[getHeight](DPane.md#getheight)

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

[DPane](DPane.md).[getLocalBounds](DPane.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getOverflowMask

▸ `Protected` **getOverflowMask**(): [`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Returns

[`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Inherited from

[DPane](DPane.md).[getOverflowMask](DPane.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L227)

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DPane](DPane.md).[getParentOfSize](DPane.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1825](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1825)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DPane](DPane.md).[getThemeDefault](DPane.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2009](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2009)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DPane](DPane.md).[getType](DPane.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L209)

___

### getWheelContentX

▸ `Protected` **getWheelContentX**(`content`, `delta`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `delta` | `number` |

#### Returns

`number`

#### Inherited from

[DPane](DPane.md).[getWheelContentX](DPane.md#getwheelcontentx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:253](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L253)

___

### getWheelContentY

▸ `Protected` **getWheelContentY**(`content`, `delta`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `delta` | `number` |

#### Returns

`number`

#### Inherited from

[DPane](DPane.md).[getWheelContentY](DPane.md#getwheelcontenty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:261](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L261)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DPane](DPane.md).[getWidth](DPane.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1327)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DPane](DPane.md).[getX](DPane.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1247)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DPane](DPane.md).[getY](DPane.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1287)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[hasDirty](DPane.md#hasdirty)

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

[DPane](DPane.md).[hasRefitableHeight](DPane.md#hasrefitableheight)

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

[DPane](DPane.md).[hasRefitableWidth](DPane.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1781](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1781)

___

### hide

▸ **hide**(): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[hide](DPane.md#hide)

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

[DPane](DPane.md).[init](DPane.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1133)

___

### initContent

▸ `Protected` **initContent**(`content`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[initContent](DPane.md#initcontent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L218)

___

### initGesture

▸ `Protected` **initGesture**(`theme`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[initGesture](DPane.md#initgesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L95)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[initReflowable](DPane.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### initScrollBar

▸ `Protected` **initScrollBar**(`scrollbar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scrollbar` | [`DPaneScrollBar`](DPaneScrollBar.md)<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\> |

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[initScrollBar](DPane.md#initscrollbar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L156)

___

### isCollapsed

▸ **isCollapsed**(`target`): `boolean`

Returns true if the given node is collapsed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node to be checked. |

#### Returns

`boolean`

true if the given node is collapsed

#### Implementation of

[DTreeDataLike](../interfaces/DTreeDataLike.md).[isCollapsed](../interfaces/DTreeDataLike.md#iscollapsed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L172)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[isDirty](DPane.md#isdirty)

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

[DPane](DPane.md).[isEventTarget](DPane.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1903](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1903)

___

### isExpanded

▸ **isExpanded**(`target`): `boolean`

Returns true if the given item is expanded.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | an item to be checked |

#### Returns

`boolean`

true if the given item is expanded

#### Implementation of

[DTreeDataLike](../interfaces/DTreeDataLike.md).[isExpanded](../interfaces/DTreeDataLike.md#isexpanded)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L176)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[isHidden](DPane.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1518](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1518)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[isHierarchyDirty](DPane.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1564)

___

### isRefitable

▸ `Protected` **isRefitable**(`target`): target is DBase<any, any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DBase<any, any\>

#### Inherited from

[DPane](DPane.md).[isRefitable](DPane.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:277](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L277)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[isShown](DPane.md#isshown)

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

[DPane](DPane.md).[listenerCount](DPane.md#listenercount)

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

[DPane](DPane.md).[listeners](DPane.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L124)

___

### newContent

▸ `Protected` **newContent**(`options?`): [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `CONTENT_OPTIONS` |

#### Returns

[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DPane](DPane.md).[newContent](DPane.md#newcontent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L214)

___

### newScrollBar

▸ `Protected` **newScrollBar**(`options?`): [`DPaneScrollBar`](DPaneScrollBar.md)<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DPaneScrollBarOptions`](../interfaces/DPaneScrollBarOptions.md) |

#### Returns

[`DPaneScrollBar`](DPaneScrollBar.md)<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Inherited from

[DPane](DPane.md).[newScrollBar](DPane.md#newscrollbar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L132)

___

### newUpdater

▸ `Protected` **newUpdater**(`data`, `content`, `options?`): [`DTreeItemUpdater`](DTreeItemUpdater.md)<`NODE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `DATA` |
| `content` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `options?` | `OPTIONS` |

#### Returns

[`DTreeItemUpdater`](DTreeItemUpdater.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L94)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[off](DPane.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[on](DPane.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[on](DPane.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onBlur](DPane.md#onblur)

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

[DPane](DPane.md).[onChildBlur](DPane.md#onchildblur)

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

[DPane](DPane.md).[onChildFocus](DPane.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:310](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L310)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onChildrenChange](DPane.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### onContentChange

▸ `Protected` **onContentChange**(): `void`

#### Returns

`void`

#### Overrides

[DPane](DPane.md).[onContentChange](DPane.md#oncontentchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L72)

___

### onDblClick

▸ `Protected` **onDblClick**(`e`, `interactionManager`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[onDblClick](DPane.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1990](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1990)

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

[DPane](DPane.md).[onDown](DPane.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1917](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1917)

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

[DPane](DPane.md).[onDownThis](DPane.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1924](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1924)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onFocus](DPane.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1653](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1653)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onHierarchyDirty](DPane.md#onhierarchydirty)

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

#### Overrides

[DPane](DPane.md).[onKeyDown](DPane.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L204)

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

[DPane](DPane.md).[onKeyUp](DPane.md#onkeyup)

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

[DPane](DPane.md).[onMove](DPane.md#onmove)

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

[DPane](DPane.md).[onOut](DPane.md#onout)

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

[DPane](DPane.md).[onOver](DPane.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L183)

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

[DPane](DPane.md).[onParentMove](DPane.md#onparentmove)

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

[DPane](DPane.md).[onParentResize](DPane.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1840](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1840)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onRefit](DPane.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1727)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onReflow](DPane.md#onreflow)

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

#### Overrides

[DPane](DPane.md).[onResize](DPane.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L77)

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

[DPane](DPane.md).[onScale](DPane.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1224)

___

### onScrollBarMoveX

▸ `Protected` **onScrollBarMoveX**(`start`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onScrollBarMoveX](DPane.md#onscrollbarmovex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L165)

___

### onScrollBarMoveY

▸ `Protected` **onScrollBarMoveY**(`start`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onScrollBarMoveY](DPane.md#onscrollbarmovey)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L174)

___

### onScrollBarUpdate

▸ `Protected` **onScrollBarUpdate**(`isRegionVisible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isRegionVisible` | `boolean` |

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onScrollBarUpdate](DPane.md#onscrollbarupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L138)

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

[DPane](DPane.md).[onShortcut](DPane.md#onshortcut)

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

[DPane](DPane.md).[onSkew](DPane.md#onskew)

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

[DPane](DPane.md).[onStateChange](DPane.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1617](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1617)

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

[DPane](DPane.md).[onUp](DPane.md#onup)

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

[DPane](DPane.md).[onUpThis](DPane.md#onupthis)

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

[DPane](DPane.md).[onWheel](DPane.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L238)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[once](DPane.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[once](DPane.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[reflow](DPane.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1700](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1700)

___

### remove

▸ **remove**(`target`): `boolean`

Removes the given node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `NODE` |

#### Returns

`boolean`

true if succeeded

#### Implementation of

[DTreeDataLike](../interfaces/DTreeDataLike.md).[remove](../interfaces/DTreeDataLike.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L184)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[removeAllListeners](DPane.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[removeAllListeners](DPane.md#removealllisteners)

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

[DPane](DPane.md).[removeChild](DPane.md#removechild)

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

[DPane](DPane.md).[removeChildAt](DPane.md#removechildat)

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

[DPane](DPane.md).[removeChildren](DPane.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[removeListener](DPane.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[removeListener](DPane.md#removelistener)

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

[DPane](DPane.md).[render](DPane.md#render)

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

[DPane](DPane.md).[renderAdvanced](DPane.md#renderadvanced)

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

[DPane](DPane.md).[resize](DPane.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

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

[DPane](DPane.md).[setChildIndex](DPane.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[setFocused](DPane.md#setfocused)

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

[DPane](DPane.md).[setHeight](DPane.md#setheight)

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

[DPane](DPane.md).[setParent](DPane.md#setparent)

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

[DPane](DPane.md).[setTransform](DPane.md#settransform)

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

[DPane](DPane.md).[setWidth](DPane.md#setwidth)

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

[DPane](DPane.md).[setX](DPane.md#setx)

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

[DPane](DPane.md).[setY](DPane.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1296)

___

### show

▸ **show**(): [`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Returns

[`DTree`](DTree.md)<`NODE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[show](DPane.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1495](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1495)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[sortChildren](DPane.md#sortchildren)

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

[DPane](DPane.md).[swapChildren](DPane.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toContent

▸ `Protected` **toContent**(`options?`): [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DPane](DPane.md).[toContent](DPane.md#tocontent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L202)

___

### toContentX

▸ `Protected` **toContentX**(`content`, `x`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `x` | `number` |

#### Returns

`number`

#### Inherited from

[DPane](DPane.md).[toContentX](DPane.md#tocontentx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:269](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L269)

___

### toContentY

▸ `Protected` **toContentY**(`content`, `y`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `y` | `number` |

#### Returns

`number`

#### Inherited from

[DPane](DPane.md).[toContentY](DPane.md#tocontenty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:273](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L273)

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

[DPane](DPane.md).[toCursor](DPane.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

___

### toData

▸ `Protected` **toData**(`options?`): `DATA`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`DATA`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L107)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[toDirty](DPane.md#todirty)

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

[DPane](DPane.md).[toGlobal](DPane.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[toHasDirty](DPane.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1531](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1531)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[toHierarchyDirty](DPane.md#tohierarchydirty)

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

[DPane](DPane.md).[toLocal](DPane.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[toParentHasDirty](DPane.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1540](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1540)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[toParentHierarchyDirty](DPane.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1557](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1557)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[toParentResized](DPane.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1818](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1818)

___

### toggle

▸ **toggle**(`target`): `boolean`

Toggles the given node,

**`Retrn`**

true if succeeded

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node |

#### Returns

`boolean`

#### Implementation of

[DTreeDataLike](../interfaces/DTreeDataLike.md).[toggle](../interfaces/DTreeDataLike.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L152)

___

### unlock

▸ **unlock**(`callIfNeeded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callIfNeeded` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L128)

___

### update

▸ **update**(`forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DTreeDataLike](../interfaces/DTreeDataLike.md).[update](../interfaces/DTreeDataLike.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-tree.ts#L120)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[updateTransform](DPane.md#updatetransform)

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

[DPane](DPane.md).[mixin](DPane.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
