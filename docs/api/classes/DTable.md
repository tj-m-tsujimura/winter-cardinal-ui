[Winter Cardinal UI - v0.155.0](../index.md) / DTable

# Class: DTable<ROW, DATA, THEME, CONTENT_OPTIONS, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `ROW` |
| `DATA` | extends [`DTableData`](../interfaces/DTableData.md)<`ROW`\> = [`DTableDataList`](DTableDataList.md)<`ROW`\> |
| `THEME` | extends [`DThemeTable`](../interfaces/DThemeTable.md) = [`DThemeTable`](../interfaces/DThemeTable.md) |
| `CONTENT_OPTIONS` | extends [`DBaseOptions`](../interfaces/DBaseOptions.md) = [`DContentOptions`](../interfaces/DContentOptions.md) |
| `OPTIONS` | extends [`DTableOptions`](../interfaces/DTableOptions.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`\> = [`DTableOptions`](../interfaces/DTableOptions.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`\> |

## Hierarchy

- [`DPane`](DPane.md)<`THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

  ↳ **`DTable`**

## Table of contents

### Constructors

- [constructor](DTable.md#constructor)

### Properties

- [\_accessibleActive](DTable.md#_accessibleactive)
- [\_accessibleDiv](DTable.md#_accessiblediv)
- [\_auto](DTable.md#_auto)
- [\_background](DTable.md#_background)
- [\_body](DTable.md#_body)
- [\_bodyOffset](DTable.md#_bodyoffset)
- [\_border](DTable.md#_border)
- [\_bounds](DTable.md#_bounds)
- [\_categories](DTable.md#_categories)
- [\_clearType](DTable.md#_cleartype)
- [\_columns](DTable.md#_columns)
- [\_content](DTable.md#_content)
- [\_corner](DTable.md#_corner)
- [\_cursor](DTable.md#_cursor)
- [\_destroyed](DTable.md#_destroyed)
- [\_frozen](DTable.md#_frozen)
- [\_gestureUtil](DTable.md#_gestureutil)
- [\_header](DTable.md#_header)
- [\_headerOffset](DTable.md#_headeroffset)
- [\_isChildrenDirty](DTable.md#_ischildrendirty)
- [\_lastDownPoint](DTable.md#_lastdownpoint)
- [\_lastSortedIndex](DTable.md#_lastsortedindex)
- [\_mask](DTable.md#_mask)
- [\_options](DTable.md#_options)
- [\_outline](DTable.md#_outline)
- [\_overflowMask](DTable.md#_overflowmask)
- [\_padding](DTable.md#_padding)
- [\_reflowable](DTable.md#_reflowable)
- [\_scrollbar](DTable.md#_scrollbar)
- [\_shortcuts](DTable.md#_shortcuts)
- [\_snippet](DTable.md#_snippet)
- [\_tempDisplayObjectParent](DTable.md#_tempdisplayobjectparent)
- [\_title](DTable.md#_title)
- [\_zIndex](DTable.md#_zindex)
- [accessible](DTable.md#accessible)
- [accessibleChildren](DTable.md#accessiblechildren)
- [accessibleHint](DTable.md#accessiblehint)
- [accessiblePointerEvents](DTable.md#accessiblepointerevents)
- [accessibleTitle](DTable.md#accessibletitle)
- [accessibleType](DTable.md#accessibletype)
- [alpha](DTable.md#alpha)
- [angle](DTable.md#angle)
- [buttonMode](DTable.md#buttonmode)
- [cacheAsBitmap](DTable.md#cacheasbitmap)
- [children](DTable.md#children)
- [cursor](DTable.md#cursor)
- [filterArea](DTable.md#filterarea)
- [filters](DTable.md#filters)
- [hitArea](DTable.md#hitarea)
- [interactive](DTable.md#interactive)
- [interactiveChildren](DTable.md#interactivechildren)
- [isMask](DTable.md#ismask)
- [isSprite](DTable.md#issprite)
- [localTransform](DTable.md#localtransform)
- [mask](DTable.md#mask)
- [name](DTable.md#name)
- [parent](DTable.md#parent)
- [pivot](DTable.md#pivot)
- [renderable](DTable.md#renderable)
- [rotation](DTable.md#rotation)
- [sortDirty](DTable.md#sortdirty)
- [sortableChildren](DTable.md#sortablechildren)
- [transform](DTable.md#transform)
- [visible](DTable.md#visible)
- [worldAlpha](DTable.md#worldalpha)
- [worldTransform](DTable.md#worldtransform)
- [worldVisible](DTable.md#worldvisible)
- [zIndex](DTable.md#zindex)
- [WORK\_CONTAINS\_POINT](DTable.md#work_contains_point)
- [WORK\_POINT](DTable.md#work_point)
- [WORK\_RECTANGLE](DTable.md#work_rectangle)

### Accessors

- [background](DTable.md#background)
- [body](DTable.md#body)
- [bodyOffset](DTable.md#bodyoffset)
- [border](DTable.md#border)
- [categories](DTable.md#categories)
- [columns](DTable.md#columns)
- [content](DTable.md#content)
- [corner](DTable.md#corner)
- [data](DTable.md#data)
- [frozen](DTable.md#frozen)
- [header](DTable.md#header)
- [headerOffset](DTable.md#headeroffset)
- [height](DTable.md#height)
- [outline](DTable.md#outline)
- [padding](DTable.md#padding)
- [position](DTable.md#position)
- [reflowable](DTable.md#reflowable)
- [scale](DTable.md#scale)
- [scrollbar](DTable.md#scrollbar)
- [shadow](DTable.md#shadow)
- [skew](DTable.md#skew)
- [snippet](DTable.md#snippet)
- [state](DTable.md#state)
- [theme](DTable.md#theme)
- [title](DTable.md#title)
- [type](DTable.md#type)
- [unsafe](DTable.md#unsafe)
- [weight](DTable.md#weight)
- [width](DTable.md#width)
- [x](DTable.md#x)
- [y](DTable.md#y)

### Methods

- [\_calculateBounds](DTable.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DTable.md#_recursivepostupdatetransform)
- [\_render](DTable.md#_render)
- [addChild](DTable.md#addchild)
- [addChildAt](DTable.md#addchildat)
- [addListener](DTable.md#addlistener)
- [applyTitle](DTable.md#applytitle)
- [blur](DTable.md#blur)
- [calculateBounds](DTable.md#calculatebounds)
- [containsGlobalPoint](DTable.md#containsglobalpoint)
- [containsLocalPoint](DTable.md#containslocalpoint)
- [containsPoint](DTable.md#containspoint)
- [destroy](DTable.md#destroy)
- [displayObjectUpdateTransform](DTable.md#displayobjectupdatetransform)
- [emit](DTable.md#emit)
- [eventNames](DTable.md#eventnames)
- [focus](DTable.md#focus)
- [focusOnClosest](DTable.md#focusonclosest)
- [getBounds](DTable.md#getbounds)
- [getCategoryCount](DTable.md#getcategorycount)
- [getChildAt](DTable.md#getchildat)
- [getChildByName](DTable.md#getchildbyname)
- [getChildIndex](DTable.md#getchildindex)
- [getClearType](DTable.md#getcleartype)
- [getClippingRect](DTable.md#getclippingrect)
- [getFocusedChildClippingRect](DTable.md#getfocusedchildclippingrect)
- [getGlobalPosition](DTable.md#getglobalposition)
- [getHeight](DTable.md#getheight)
- [getLocalBounds](DTable.md#getlocalbounds)
- [getOverflowMask](DTable.md#getoverflowmask)
- [getParentOfSize](DTable.md#getparentofsize)
- [getThemeDefault](DTable.md#getthemedefault)
- [getType](DTable.md#gettype)
- [getWheelContentX](DTable.md#getwheelcontentx)
- [getWheelContentY](DTable.md#getwheelcontenty)
- [getWidth](DTable.md#getwidth)
- [getX](DTable.md#getx)
- [getY](DTable.md#gety)
- [hasDirty](DTable.md#hasdirty)
- [hasHeader](DTable.md#hasheader)
- [hasRefitableHeight](DTable.md#hasrefitableheight)
- [hasRefitableWidth](DTable.md#hasrefitablewidth)
- [hide](DTable.md#hide)
- [init](DTable.md#init)
- [initContent](DTable.md#initcontent)
- [initGesture](DTable.md#initgesture)
- [initReflowable](DTable.md#initreflowable)
- [initScrollBar](DTable.md#initscrollbar)
- [isChildrenDirty](DTable.md#ischildrendirty)
- [isDirty](DTable.md#isdirty)
- [isEventTarget](DTable.md#iseventtarget)
- [isHidden](DTable.md#ishidden)
- [isRefitable](DTable.md#isrefitable)
- [isSameCategory](DTable.md#issamecategory)
- [isShown](DTable.md#isshown)
- [listenerCount](DTable.md#listenercount)
- [listeners](DTable.md#listeners)
- [newBody](DTable.md#newbody)
- [newBodyOffset](DTable.md#newbodyoffset)
- [newCategories](DTable.md#newcategories)
- [newContent](DTable.md#newcontent)
- [newHeader](DTable.md#newheader)
- [newHeaderOffset](DTable.md#newheaderoffset)
- [newScrollBar](DTable.md#newscrollbar)
- [off](DTable.md#off)
- [on](DTable.md#on)
- [onBlur](DTable.md#onblur)
- [onChildBlur](DTable.md#onchildblur)
- [onChildFocus](DTable.md#onchildfocus)
- [onChildrenChange](DTable.md#onchildrenchange)
- [onChildrenDirty](DTable.md#onchildrendirty)
- [onContentChange](DTable.md#oncontentchange)
- [onDblClick](DTable.md#ondblclick)
- [onDown](DTable.md#ondown)
- [onDownThis](DTable.md#ondownthis)
- [onFocus](DTable.md#onfocus)
- [onKeyDown](DTable.md#onkeydown)
- [onKeyDownArrowUpOrDown](DTable.md#onkeydownarrowupordown)
- [onKeyUp](DTable.md#onkeyup)
- [onMove](DTable.md#onmove)
- [onOut](DTable.md#onout)
- [onOver](DTable.md#onover)
- [onParentMove](DTable.md#onparentmove)
- [onParentResize](DTable.md#onparentresize)
- [onRefit](DTable.md#onrefit)
- [onReflow](DTable.md#onreflow)
- [onResize](DTable.md#onresize)
- [onScale](DTable.md#onscale)
- [onScrollBarMoveX](DTable.md#onscrollbarmovex)
- [onScrollBarMoveY](DTable.md#onscrollbarmovey)
- [onScrollBarUpdate](DTable.md#onscrollbarupdate)
- [onShortcut](DTable.md#onshortcut)
- [onSkew](DTable.md#onskew)
- [onStateChange](DTable.md#onstatechange)
- [onUp](DTable.md#onup)
- [onUpThis](DTable.md#onupthis)
- [onWheel](DTable.md#onwheel)
- [once](DTable.md#once)
- [refit](DTable.md#refit)
- [reflow](DTable.md#reflow)
- [removeAllListeners](DTable.md#removealllisteners)
- [removeChild](DTable.md#removechild)
- [removeChildAt](DTable.md#removechildat)
- [removeChildren](DTable.md#removechildren)
- [removeListener](DTable.md#removelistener)
- [render](DTable.md#render)
- [renderAdvanced](DTable.md#renderadvanced)
- [resize](DTable.md#resize)
- [setChildIndex](DTable.md#setchildindex)
- [setFocused](DTable.md#setfocused)
- [setHeight](DTable.md#setheight)
- [setParent](DTable.md#setparent)
- [setTransform](DTable.md#settransform)
- [setWidth](DTable.md#setwidth)
- [setX](DTable.md#setx)
- [setY](DTable.md#sety)
- [show](DTable.md#show)
- [sortChildren](DTable.md#sortchildren)
- [swapChildren](DTable.md#swapchildren)
- [toBodyOptions](DTable.md#tobodyoptions)
- [toCategoryColumns](DTable.md#tocategorycolumns)
- [toCategoryLabel](DTable.md#tocategorylabel)
- [toCategoryOptions](DTable.md#tocategoryoptions)
- [toCell](DTable.md#tocell)
- [toChildrenDirty](DTable.md#tochildrendirty)
- [toContent](DTable.md#tocontent)
- [toContentWidth](DTable.md#tocontentwidth)
- [toContentX](DTable.md#tocontentx)
- [toContentY](DTable.md#tocontenty)
- [toCursor](DTable.md#tocursor)
- [toDirty](DTable.md#todirty)
- [toFrozenCellX](DTable.md#tofrozencellx)
- [toGlobal](DTable.md#toglobal)
- [toHasDirty](DTable.md#tohasdirty)
- [toHeaderOptions](DTable.md#toheaderoptions)
- [toLocal](DTable.md#tolocal)
- [toParentChildrenDirty](DTable.md#toparentchildrendirty)
- [toParentHasDirty](DTable.md#toparenthasdirty)
- [toParentResized](DTable.md#toparentresized)
- [updateTransform](DTable.md#updatetransform)
- [mixin](DTable.md#mixin)

## Constructors

### constructor

• **new DTable**<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `ROW` |
| `DATA` | extends [`DTableData`](../interfaces/DTableData.md)<`ROW`, `DATA`\> = [`DTableDataList`](DTableDataList.md)<`ROW`\> |
| `THEME` | extends [`DThemeTable`](../interfaces/DThemeTable.md) = [`DThemeTable`](../interfaces/DThemeTable.md) |
| `CONTENT_OPTIONS` | extends [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`, `CONTENT_OPTIONS`\> = [`DContentOptions`](../interfaces/DContentOptions.md) |
| `OPTIONS` | extends [`DTableOptions`](../interfaces/DTableOptions.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\> = [`DTableOptions`](../interfaces/DTableOptions.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Overrides

[DPane](DPane.md).[constructor](DPane.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:452](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L452)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DPane](DPane.md).[_accessibleActive](DPane.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

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

[src/main/typescript/wcardinal/ui/d-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L729)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DPane](DPane.md).[_background](DPane.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_body

• `Protected` `Optional` **\_body**: [`DTableBody`](DTableBody.md)<`ROW`, `DATA`, [`DThemeTableBody`](../interfaces/DThemeTableBody.md), [`DTableBodyOptions`](../interfaces/DTableBodyOptions.md)<`ROW`, `DATA`, [`DThemeTableBody`](../interfaces/DThemeTableBody.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L450)

___

### \_bodyOffset

• `Protected` `Optional` **\_bodyOffset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:449](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L449)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DPane](DPane.md).[_border](DPane.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

[DPane](DPane.md).[_bounds](DPane.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_categories

• `Protected` `Optional` **\_categories**: [`DTableCategory`](DTableCategory.md)<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md), [`DTableCategoryOptions`](../interfaces/DTableCategoryOptions.md)<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md)\>\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:446](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L446)

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DPane](DPane.md).[_clearType](DPane.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_columns

• `Protected` `Optional` **\_columns**: [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, `unknown`, `unknown`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<`unknown`\>\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:444](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L444)

___

### \_content

• `Protected` `Optional` **\_content**: [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DPane](DPane.md).[_content](DPane.md#_content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L68)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DPane](DPane.md).[_corner](DPane.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L727)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DPane](DPane.md).[_cursor](DPane.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L748)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

[DPane](DPane.md).[_destroyed](DPane.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_frozen

• `Protected` `Optional` **\_frozen**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L445)

___

### \_gestureUtil

• `Protected` `Optional` **\_gestureUtil**: [`UtilGesture`](UtilGesture.md)<[`DPane`](DPane.md)<[`DThemePane`](../interfaces/DThemePane.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DPaneOptions`](../interfaces/DPaneOptions.md)<[`DThemePane`](../interfaces/DThemePane.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\>\>

#### Inherited from

[DPane](DPane.md).[_gestureUtil](DPane.md#_gestureutil)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L71)

___

### \_header

• `Protected` `Optional` **\_header**: ``null`` \| [`DTableHeader`](DTableHeader.md)<`ROW`, [`DThemeTableHeader`](../interfaces/DThemeTableHeader.md), [`DTableHeaderOptions`](../interfaces/DTableHeaderOptions.md)<`ROW`, [`DThemeTableHeader`](../interfaces/DThemeTableHeader.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L448)

___

### \_headerOffset

• `Protected` `Optional` **\_headerOffset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:447](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L447)

___

### \_isChildrenDirty

• `Protected` **\_isChildrenDirty**: `boolean`

#### Inherited from

[DPane](DPane.md).[_isChildrenDirty](DPane.md#_ischildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:732](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L732)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DPane](DPane.md).[_lastDownPoint](DPane.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:747](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L747)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DPane](DPane.md).[_lastSortedIndex](DPane.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

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

[src/main/typescript/wcardinal/ui/d-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L723)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DPane](DPane.md).[_outline](DPane.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:742](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L742)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Inherited from

[DPane](DPane.md).[_overflowMask](DPane.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L69)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DPane](DPane.md).[_padding](DPane.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:726](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L726)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DPane](DPane.md).[_reflowable](DPane.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L746)

___

### \_scrollbar

• `Protected` `Optional` **\_scrollbar**: [`DPaneScrollBar`](DPaneScrollBar.md)<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Inherited from

[DPane](DPane.md).[_scrollbar](DPane.md#_scrollbar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L70)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DPane](DPane.md).[_shortcuts](DPane.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L744)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DPane](DPane.md).[_snippet](DPane.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:745](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L745)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

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

[src/main/typescript/wcardinal/ui/d-base.ts:739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L739)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

[DPane](DPane.md).[_zIndex](DPane.md#_zindex)

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

[DPane](DPane.md).[accessible](DPane.md#accessible)

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

[DPane](DPane.md).[accessibleChildren](DPane.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DPane](DPane.md).[accessibleHint](DPane.md#accessiblehint)

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

[DPane](DPane.md).[accessiblePointerEvents](DPane.md#accessiblepointerevents)

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

[DPane](DPane.md).[accessibleTitle](DPane.md#accessibletitle)

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

[DPane](DPane.md).[accessibleType](DPane.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

[DPane](DPane.md).[alpha](DPane.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DPane](DPane.md).[angle](DPane.md#angle)

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

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DPane](DPane.md).[cacheAsBitmap](DPane.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`member`** {PIXI.DisplayObject[]} PIXI.Container#children

**`readonly`**

#### Inherited from

[DPane](DPane.md).[children](DPane.md#children)

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

[DPane](DPane.md).[cursor](DPane.md#cursor)

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

[DPane](DPane.md).[filterArea](DPane.md#filterarea)

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

[DPane](DPane.md).[filters](DPane.md#filters)

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

[DPane](DPane.md).[hitArea](DPane.md#hitarea)

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

[DPane](DPane.md).[interactive](DPane.md#interactive)

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

[DPane](DPane.md).[interactiveChildren](DPane.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

[DPane](DPane.md).[isMask](DPane.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

[DPane](DPane.md).[isSprite](DPane.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DPane](DPane.md).[localTransform](DPane.md#localtransform)

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

[DPane](DPane.md).[mask](DPane.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

[DPane](DPane.md).[name](DPane.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

[DPane](DPane.md).[parent](DPane.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

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

**`member`** {boolean} PIXI.DisplayObject#renderable

#### Inherited from

[DPane](DPane.md).[renderable](DPane.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DPane](DPane.md).[rotation](DPane.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

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
such as @link https://github.com/pixijs/pixi-display

Also be aware of that this may not work nicely with the addChildAt() function,
as the zIndex sorting may cause the child to automatically sorted to another position.

**`see`** PIXI.settings.SORTABLE_CHILDREN

**`member`** {boolean} PIXI.Container#sortableChildren

#### Inherited from

[DPane](DPane.md).[sortableChildren](DPane.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

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

**`member`** {boolean} PIXI.DisplayObject#visible

#### Inherited from

[DPane](DPane.md).[visible](DPane.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

[DPane](DPane.md).[worldAlpha](DPane.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DPane](DPane.md).[worldTransform](DPane.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

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

**`member`** {number}

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

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

___

### WORK\_POINT

▪ `Static` `Protected` `Optional` **WORK\_POINT**: `Point`

#### Inherited from

[DPane](DPane.md).[WORK_POINT](DPane.md#work_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L65)

___

### WORK\_RECTANGLE

▪ `Static` `Protected` `Optional` **WORK\_RECTANGLE**: `Rectangle`

#### Inherited from

[DPane](DPane.md).[WORK_RECTANGLE](DPane.md#work_rectangle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L66)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DPane.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1323)

___

### body

• `get` **body**(): [`DTableBody`](DTableBody.md)<`ROW`, `DATA`, [`DThemeTableBody`](../interfaces/DThemeTableBody.md), [`DTableBodyOptions`](../interfaces/DTableBodyOptions.md)<`ROW`, `DATA`, [`DThemeTableBody`](../interfaces/DThemeTableBody.md)\>\>

#### Returns

[`DTableBody`](DTableBody.md)<`ROW`, `DATA`, [`DThemeTableBody`](../interfaces/DThemeTableBody.md), [`DTableBodyOptions`](../interfaces/DTableBodyOptions.md)<`ROW`, `DATA`, [`DThemeTableBody`](../interfaces/DThemeTableBody.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L852)

___

### bodyOffset

• `get` **bodyOffset**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:839](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L839)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DPane.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1327)

___

### categories

• `get` **categories**(): [`DTableCategory`](DTableCategory.md)<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md), [`DTableCategoryOptions`](../interfaces/DTableCategoryOptions.md)<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md)\>\>[]

#### Returns

[`DTableCategory`](DTableCategory.md)<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md), [`DTableCategoryOptions`](../interfaces/DTableCategoryOptions.md)<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md)\>\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:498](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L498)

___

### columns

• `get` **columns**(): [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, `unknown`, `unknown`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<`unknown`\>\>[]

#### Returns

[`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, `unknown`, `unknown`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<`unknown`\>\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L479)

___

### content

• `get` **content**(): [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Returns

[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

DPane.content

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L187)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DPane.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1319)

___

### data

• `get` **data**(): `DATA`

#### Returns

`DATA`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:924](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L924)

___

### frozen

• `get` **frozen**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:489](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L489)

___

### header

• `get` **header**(): ``null`` \| [`DTableHeader`](DTableHeader.md)<`ROW`, [`DThemeTableHeader`](../interfaces/DThemeTableHeader.md), [`DTableHeaderOptions`](../interfaces/DTableHeaderOptions.md)<`ROW`, [`DThemeTableHeader`](../interfaces/DThemeTableHeader.md)\>\>

#### Returns

``null`` \| [`DTableHeader`](DTableHeader.md)<`ROW`, [`DThemeTableHeader`](../interfaces/DThemeTableHeader.md), [`DTableHeaderOptions`](../interfaces/DTableHeaderOptions.md)<`ROW`, [`DThemeTableHeader`](../interfaces/DThemeTableHeader.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L775)

___

### headerOffset

• `get` **headerOffset**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:757](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L757)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DPane.height

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

DPane.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1250](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1250)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DPane.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DPane.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1315](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1315)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DPane.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1301)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DPane.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1012)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DPane.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1306)

___

### scrollbar

• `get` **scrollbar**(): [`DPaneScrollBar`](DPaneScrollBar.md)<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Returns

[`DPaneScrollBar`](DPaneScrollBar.md)<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Inherited from

DPane.scrollbar

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L122)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DPane.shadow

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

DPane.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1657)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DPane.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1311)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DPane.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1008](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1008)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DPane.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1533](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1533)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DPane.theme

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

DPane.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1541](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1541)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DPane.title

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

DPane.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DPane.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1129)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DPane.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DPane.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1033](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1033)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DPane.width

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

DPane.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1200)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DPane.x

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

DPane.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1138)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DPane.y

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

DPane.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1169)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[_calculateBounds](DPane.md#_calculatebounds)

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

▸ **addListener**(`event`, `fn`, `context?`): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[addListener](DPane.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

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

[src/main/typescript/wcardinal/ui/d-base.ts:1352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1352)

___

### blur

▸ **blur**(`recursively?`): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[blur](DPane.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1458](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1458)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

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

[DPane](DPane.md).[containsPoint](DPane.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1893](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1893)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[destroy](DPane.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:387](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L387)

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

[DPane](DPane.md).[displayObjectUpdateTransform](DPane.md#displayobjectupdatetransform)

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

### focus

▸ **focus**(): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[focus](DPane.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[focusOnClosest](DPane.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1820](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1820)

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

[DPane](DPane.md).[getBounds](DPane.md#getbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8651

___

### getCategoryCount

▸ `Protected` **getCategoryCount**(`columns`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columns` | [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, `unknown`, `unknown`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<`unknown`\>\>[] |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L530)

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

[DPane](DPane.md).[getClippingRect](DPane.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

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

#### Overrides

[DPane](DPane.md).[getFocusedChildClippingRect](DPane.md#getfocusedchildclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:928](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L928)

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

[src/main/typescript/wcardinal/ui/d-pane.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L222)

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DPane](DPane.md).[getParentOfSize](DPane.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1687](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1687)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DPane](DPane.md).[getThemeDefault](DPane.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1868)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DPane](DPane.md).[getType](DPane.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:1068](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L1068)

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

[src/main/typescript/wcardinal/ui/d-pane.ts:248](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L248)

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

[src/main/typescript/wcardinal/ui/d-pane.ts:256](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L256)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DPane](DPane.md).[getWidth](DPane.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DPane](DPane.md).[getX](DPane.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1142)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DPane](DPane.md).[getY](DPane.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1173)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[hasDirty](DPane.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1440)

___

### hasHeader

▸ `Protected` **hasHeader**(`options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:784](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L784)

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

[DPane](DPane.md).[hasRefitableWidth](DPane.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1625](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1625)

___

### hide

▸ **hide**(): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[hide](DPane.md#hide)

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

[DPane](DPane.md).[init](DPane.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1029](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1029)

___

### initContent

▸ `Protected` **initContent**(`content`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Overrides

[DPane](DPane.md).[initContent](DPane.md#initcontent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:507](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L507)

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

[src/main/typescript/wcardinal/ui/d-pane.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L95)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[initReflowable](DPane.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1016](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1016)

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

[src/main/typescript/wcardinal/ui/d-pane.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L156)

___

### isChildrenDirty

▸ **isChildrenDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[isChildrenDirty](DPane.md#ischildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[isDirty](DPane.md#isdirty)

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

[DPane](DPane.md).[isEventTarget](DPane.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1765](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1765)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[isHidden](DPane.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1382](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1382)

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

[src/main/typescript/wcardinal/ui/d-pane.ts:272](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L272)

___

### isSameCategory

▸ `Protected` **isSameCategory**(`index`, `a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `a` | `undefined` \| `string` \| `string`[] |
| `b` | `undefined` \| `string` \| `string`[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:560](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L560)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[isShown](DPane.md#isshown)

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

### newBody

▸ `Protected` **newBody**(`options`, `columns`, `frozen`, `offset`): [`DTableBody`](DTableBody.md)<`ROW`, `DATA`, [`DThemeTableBody`](../interfaces/DThemeTableBody.md), [`DTableBodyOptions`](../interfaces/DTableBodyOptions.md)<`ROW`, `DATA`, [`DThemeTableBody`](../interfaces/DThemeTableBody.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `undefined` \| `OPTIONS` |
| `columns` | [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, `unknown`, `unknown`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<`unknown`\>\>[] |
| `frozen` | `number` |
| `offset` | `number` |

#### Returns

[`DTableBody`](DTableBody.md)<`ROW`, `DATA`, [`DThemeTableBody`](../interfaces/DThemeTableBody.md), [`DTableBodyOptions`](../interfaces/DTableBodyOptions.md)<`ROW`, `DATA`, [`DThemeTableBody`](../interfaces/DThemeTableBody.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:861](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L861)

___

### newBodyOffset

▸ `Protected` **newBodyOffset**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:848](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L848)

___

### newCategories

▸ `Protected` **newCategories**(`options`, `columns`, `frozen`): [`DTableCategory`](DTableCategory.md)<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md), [`DTableCategoryOptions`](../interfaces/DTableCategoryOptions.md)<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md)\>\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `undefined` \| `OPTIONS` |
| `columns` | [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, `unknown`, `unknown`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<`unknown`\>\>[] |
| `frozen` | `number` |

#### Returns

[`DTableCategory`](DTableCategory.md)<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md), [`DTableCategoryOptions`](../interfaces/DTableCategoryOptions.md)<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md)\>\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:708](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L708)

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

[src/main/typescript/wcardinal/ui/d-pane.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L209)

___

### newHeader

▸ `Protected` **newHeader**(`options`, `columns`, `frozen`, `offset`): ``null`` \| [`DTableHeader`](DTableHeader.md)<`ROW`, [`DThemeTableHeader`](../interfaces/DThemeTableHeader.md), [`DTableHeaderOptions`](../interfaces/DTableHeaderOptions.md)<`ROW`, [`DThemeTableHeader`](../interfaces/DThemeTableHeader.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `undefined` \| `OPTIONS` |
| `columns` | [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, `unknown`, `unknown`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<`unknown`\>\>[] |
| `frozen` | `number` |
| `offset` | `number` |

#### Returns

``null`` \| [`DTableHeader`](DTableHeader.md)<`ROW`, [`DThemeTableHeader`](../interfaces/DThemeTableHeader.md), [`DTableHeaderOptions`](../interfaces/DTableHeaderOptions.md)<`ROW`, [`DThemeTableHeader`](../interfaces/DThemeTableHeader.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L796)

___

### newHeaderOffset

▸ `Protected` **newHeaderOffset**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:766](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L766)

___

### newScrollBar

▸ `Protected` **newScrollBar**(`options?`): [`DTableScrollBar`](DTableScrollBar.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DPaneScrollBarOptions`](../interfaces/DPaneScrollBarOptions.md) |

#### Returns

[`DTableScrollBar`](DTableScrollBar.md)

#### Overrides

[DPane](DPane.md).[newScrollBar](DPane.md#newscrollbar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:731](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L731)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[off](DPane.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[on](DPane.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

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

[src/main/typescript/wcardinal/ui/d-base.ts:1526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1526)

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

[DPane](DPane.md).[onChildFocus](DPane.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:305](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L305)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onChildrenChange](DPane.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1020](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1020)

___

### onChildrenDirty

▸ `Protected` **onChildrenDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onChildrenDirty](DPane.md#onchildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1432)

___

### onContentChange

▸ `Protected` **onContentChange**(): `void`

#### Returns

`void`

#### Overrides

[DPane](DPane.md).[onContentChange](DPane.md#oncontentchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L512)

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

#### Overrides

[DPane](DPane.md).[onDblClick](DPane.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:726](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L726)

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

[DPane](DPane.md).[onDownThis](DPane.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1786](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1786)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onFocus](DPane.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1512)

___

### onKeyDown

▸ **onKeyDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Overrides

[DPane](DPane.md).[onKeyDown](DPane.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:987](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L987)

___

### onKeyDownArrowUpOrDown

▸ `Protected` **onKeyDownArrowUpOrDown**(`e`, `isDown`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |
| `isDown` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:997](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L997)

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

[DPane](DPane.md).[onKeyUp](DPane.md#onkeyup)

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

[DPane](DPane.md).[onMove](DPane.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1037](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1037)

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

[DPane](DPane.md).[onOver](DPane.md#onover)

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

[DPane](DPane.md).[onParentMove](DPane.md#onparentmove)

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

[DPane](DPane.md).[onParentResize](DPane.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1702](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1702)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onRefit](DPane.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1571](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1571)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onReflow](DPane.md#onreflow)

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

#### Overrides

[DPane](DPane.md).[onResize](DPane.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:517](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L517)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1119)

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

[src/main/typescript/wcardinal/ui/d-pane.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L165)

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

[src/main/typescript/wcardinal/ui/d-pane.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L174)

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

[src/main/typescript/wcardinal/ui/d-pane.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L138)

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

[DPane](DPane.md).[onSkew](DPane.md#onskew)

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

[DPane](DPane.md).[onStateChange](DPane.md#onstatechange)

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

[DPane](DPane.md).[onUp](DPane.md#onup)

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

[DPane](DPane.md).[onUpThis](DPane.md#onupthis)

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

[DPane](DPane.md).[onWheel](DPane.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L233)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[once](DPane.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[once](DPane.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### refit

▸ **refit**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[refit](DPane.md#refit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1555](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1555)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[reflow](DPane.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1631](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1631)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[removeAllListeners](DPane.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

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

| Name | Type |
| :------ | :------ |
| `beginIndex?` | `number` |
| `endIndex?` | `number` |

#### Returns

`DisplayObject`[]

List of removed children

#### Inherited from

[DPane](DPane.md).[removeChildren](DPane.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[removeListener](DPane.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

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

[DPane](DPane.md).[renderAdvanced](DPane.md#renderadvanced)

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

[DPane](DPane.md).[resize](DPane.md#resize)

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

[DPane](DPane.md).[setChildIndex](DPane.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[setFocused](DPane.md#setfocused)

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

[DPane](DPane.md).[setHeight](DPane.md#setheight)

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

[DPane](DPane.md).[setParent](DPane.md#setparent)

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

[DPane](DPane.md).[setX](DPane.md#setx)

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

[DPane](DPane.md).[setY](DPane.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1182)

___

### show

▸ **show**(): [`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Returns

[`DTable`](DTable.md)<`ROW`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DPane](DPane.md).[show](DPane.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1359)

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

### toBodyOptions

▸ `Protected` **toBodyOptions**(`options`, `columns`, `frozen`, `offset`, `data`): [`DTableBodyOptions`](../interfaces/DTableBodyOptions.md)<`ROW`, `DATA`, [`DThemeTableBody`](../interfaces/DThemeTableBody.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `undefined` \| [`DTableBodyOptions`](../interfaces/DTableBodyOptions.md)<`ROW`, `DATA`, [`DThemeTableBody`](../interfaces/DThemeTableBody.md)\> |
| `columns` | [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, `unknown`, `unknown`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<`unknown`\>\>[] |
| `frozen` | `number` |
| `offset` | `number` |
| `data` | `undefined` \| `DATA` \| `ROW`[] \| [`DTableDataOptions`](../interfaces/DTableDataOptions.md)<`ROW`, `any`\> |

#### Returns

[`DTableBodyOptions`](../interfaces/DTableBodyOptions.md)<`ROW`, `DATA`, [`DThemeTableBody`](../interfaces/DThemeTableBody.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:872](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L872)

___

### toCategoryColumns

▸ `Protected` **toCategoryColumns**(`index`, `columns`, `frozen`): [`DTableCategoryColumn`](../interfaces/DTableCategoryColumn.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `columns` | [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, `unknown`, `unknown`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<`unknown`\>\>[] |
| `frozen` | `number` |

#### Returns

[`DTableCategoryColumn`](../interfaces/DTableCategoryColumn.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:638](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L638)

___

### toCategoryLabel

▸ `Protected` **toCategoryLabel**(`index`, `category`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `category` | `undefined` \| `string` \| `string`[] |

#### Returns

`undefined` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:542](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L542)

___

### toCategoryOptions

▸ `Protected` **toCategoryOptions**(`index`, `options`, `columns`, `frozen`, `offset`): [`DTableCategoryOptions`](../interfaces/DTableCategoryOptions.md)<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `options` | `undefined` \| [`DTableCategoryOptions`](../interfaces/DTableCategoryOptions.md)<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md)\> |
| `columns` | [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, `unknown`, `unknown`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<`unknown`\>\>[] |
| `frozen` | `number` |
| `offset` | `number` |

#### Returns

[`DTableCategoryOptions`](../interfaces/DTableCategoryOptions.md)<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L682)

___

### toCell

▸ `Protected` **toCell**(`focused`): ``null`` \| [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DFocusable`](../interfaces/DFocusable.md) |

#### Returns

``null`` \| [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:1053](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L1053)

___

### toChildrenDirty

▸ **toChildrenDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[toChildrenDirty](DPane.md#tochildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1411)

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

[src/main/typescript/wcardinal/ui/d-pane.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L197)

___

### toContentWidth

▸ `Protected` **toContentWidth**(`options?`): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:737](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L737)

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

[src/main/typescript/wcardinal/ui/d-pane.ts:264](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L264)

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

[src/main/typescript/wcardinal/ui/d-pane.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-pane.ts#L268)

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

[src/main/typescript/wcardinal/ui/d-base.ts:991](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L991)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[toDirty](DPane.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1386)

___

### toFrozenCellX

▸ `Protected` **toFrozenCellX**(`cell`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cell` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:970](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L970)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1395](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1395)

___

### toHeaderOptions

▸ `Protected` **toHeaderOptions**(`options`, `columns`, `frozen`, `offset`): [`DTableHeaderOptions`](../interfaces/DTableHeaderOptions.md)<`ROW`, [`DThemeTableHeader`](../interfaces/DThemeTableHeader.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `undefined` \| [`DTableHeaderOptions`](../interfaces/DTableHeaderOptions.md)<`ROW`, [`DThemeTableHeader`](../interfaces/DThemeTableHeader.md)\> |
| `columns` | [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, `unknown`, `unknown`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<`unknown`\>\>[] |
| `frozen` | `number` |
| `offset` | `number` |

#### Returns

[`DTableHeaderOptions`](../interfaces/DTableHeaderOptions.md)<`ROW`, [`DThemeTableHeader`](../interfaces/DThemeTableHeader.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:810](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table.ts#L810)

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

[DPane](DPane.md).[toLocal](DPane.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentChildrenDirty

▸ **toParentChildrenDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[toParentChildrenDirty](DPane.md#toparentchildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1421](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1421)

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[toParentHasDirty](DPane.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1404)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[toParentResized](DPane.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1680](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L1680)

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