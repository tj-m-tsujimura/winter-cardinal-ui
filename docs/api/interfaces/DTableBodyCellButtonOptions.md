[Winter Cardinal UI - v0.310.1](../index.md) / DTableBodyCellButtonOptions

# Interface: DTableBodyCellButtonOptions<ROW, VALUE, THEME\>

[DImageBase](../classes/DImageBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `ROW` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellButton`](DThemeTableBodyCellButton.md)<`VALUE`\> = [`DThemeTableBodyCellButton`](DThemeTableBodyCellButton.md)<`VALUE`\> |

## Hierarchy

- [`DTableBodyCellTextOptions`](DTableBodyCellTextOptions.md)<`ROW`, `VALUE` \| ``null``, `THEME`\>

  ↳ **`DTableBodyCellButtonOptions`**

  ↳↳ [`DTableBodyCellLinkOptions`](DTableBodyCellLinkOptions.md)

  ↳↳ [`DTableBodyCellTreeOptions`](DTableBodyCellTreeOptions.md)

## Table of contents

### Properties

- [background](DTableBodyCellButtonOptions.md#background)
- [border](DTableBodyCellButtonOptions.md#border)
- [children](DTableBodyCellButtonOptions.md#children)
- [clear](DTableBodyCellButtonOptions.md#clear)
- [corner](DTableBodyCellButtonOptions.md#corner)
- [cursor](DTableBodyCellButtonOptions.md#cursor)
- [height](DTableBodyCellButtonOptions.md#height)
- [image](DTableBodyCellButtonOptions.md#image)
- [interactive](DTableBodyCellButtonOptions.md#interactive)
- [mask](DTableBodyCellButtonOptions.md#mask)
- [name](DTableBodyCellButtonOptions.md#name)
- [on](DTableBodyCellButtonOptions.md#on)
- [outline](DTableBodyCellButtonOptions.md#outline)
- [padding](DTableBodyCellButtonOptions.md#padding)
- [parent](DTableBodyCellButtonOptions.md#parent)
- [renderable](DTableBodyCellButtonOptions.md#renderable)
- [shadow](DTableBodyCellButtonOptions.md#shadow)
- [shortcut](DTableBodyCellButtonOptions.md#shortcut)
- [shortcuts](DTableBodyCellButtonOptions.md#shortcuts)
- [state](DTableBodyCellButtonOptions.md#state)
- [text](DTableBodyCellButtonOptions.md#text)
- [theme](DTableBodyCellButtonOptions.md#theme)
- [title](DTableBodyCellButtonOptions.md#title)
- [visible](DTableBodyCellButtonOptions.md#visible)
- [weight](DTableBodyCellButtonOptions.md#weight)
- [when](DTableBodyCellButtonOptions.md#when)
- [width](DTableBodyCellButtonOptions.md#width)
- [x](DTableBodyCellButtonOptions.md#x)
- [y](DTableBodyCellButtonOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[background](DTableBodyCellTextOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L497)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[border](DTableBodyCellTextOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L500)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[children](DTableBodyCellTextOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L400)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[clear](DTableBodyCellTextOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:509](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L509)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[corner](DTableBodyCellTextOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L472)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[cursor](DTableBodyCellTextOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L512)

___

### height

• `Optional` **height**: [`DCoordinateSize`](../index.md#dcoordinatesize)

One of the followings:
* A height
* A size keyword
* A size expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a hight ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a hight ([DScalar](DScalar.md))

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[height](DTableBodyCellTextOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L443)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[image](DTableBodyCellTextOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[interactive](DTableBodyCellTextOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:466](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L466)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[mask](DTableBodyCellTextOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[name](DTableBodyCellTextOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### on

• `Optional` **on**: [`DImageBaseOnOptions`](DImageBaseOnOptions.md)<``null`` \| `VALUE`, `any`\>

Mappings of event names and event handlers.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[on](DTableBodyCellTextOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L47)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[outline](DTableBodyCellTextOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L503)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[padding](DTableBodyCellTextOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:469](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L469)

___

### parent

• `Optional` **parent**: `Container`

A parent.

In the case of UI classes which pop up (e.g., [DDialog](../classes/DDialog.md) and [DMenu](../classes/DMenu.md)),
if multiple application instances are there, better to set
this to an `application.stage` so that they pick a right application.
By default, they assume the last created application is
the one they belong to at the time when they are created.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[parent](DTableBodyCellTextOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L397)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DTableBodyCellButtonOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[renderable](DTableBodyCellTextOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[shadow](DTableBodyCellTextOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:506](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L506)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[shortcut](DTableBodyCellTextOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L491)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[shortcuts](DTableBodyCellTextOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:494](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L494)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[state](DTableBodyCellTextOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<``null`` \| `VALUE`\>

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[text](DTableBodyCellTextOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[theme](DTableBodyCellTextOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L475)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[title](DTableBodyCellTextOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L488)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[visible](DTableBodyCellTextOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[weight](DTableBodyCellTextOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:485](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L485)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../index.md#dbuttonbasewhen-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts#L24)

___

### width

• `Optional` **width**: [`DCoordinateSize`](../index.md#dcoordinatesize)

One of the followings:
* A width
* A size keyword
* A size expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a width ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a width ([DScalar](DScalar.md))

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[width](DTableBodyCellTextOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:433](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L433)

___

### x

• `Optional` **x**: [`DCoordinatePosition`](../index.md#dcoordinateposition)

One of the followings:
* A X position
* A position keyword
* A position expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a X position ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a X position ([DScalar](DScalar.md))

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[x](DTableBodyCellTextOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:413](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L413)

___

### y

• `Optional` **y**: [`DCoordinatePosition`](../index.md#dcoordinateposition)

One of the followings:
* A Y position
* A position keyword
* A position expresion (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a Y position ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a Y position ([DScalar](DScalar.md))

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[y](DTableBodyCellTextOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L423)
