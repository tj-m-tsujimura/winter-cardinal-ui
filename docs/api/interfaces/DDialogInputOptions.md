[Winter Cardinal UI - v0.310.1](../index.md) / DDialogInputOptions

# Interface: DDialogInputOptions<VALUE, INPUT_OPTIONS, THEME\>

[DDialogLayered](../classes/DDialogLayered.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `void` |
| `INPUT_OPTIONS` | extends [`DDialogInputInputOptions`](DDialogInputInputOptions.md) = [`DDialogInputInputOptions`](DDialogInputInputOptions.md) |
| `THEME` | extends [`DThemeDialogInput`](DThemeDialogInput.md) = [`DThemeDialogInput`](DThemeDialogInput.md) |

## Hierarchy

- [`DDialogLayeredOptions`](DDialogLayeredOptions.md)<`VALUE`, `THEME`\>

  ↳ **`DDialogInputOptions`**

  ↳↳ [`DDialogInputBooleanOptions`](DDialogInputBooleanOptions.md)

  ↳↳ [`DDialogInputIntegerOptions`](DDialogInputIntegerOptions.md)

  ↳↳ [`DDialogInputRealOptions`](DDialogInputRealOptions.md)

  ↳↳ [`DDialogInputTextOptions`](DDialogInputTextOptions.md)

## Table of contents

### Properties

- [align](DDialogInputOptions.md#align)
- [animation](DDialogInputOptions.md#animation)
- [background](DDialogInputOptions.md#background)
- [border](DDialogInputOptions.md#border)
- [children](DDialogInputOptions.md#children)
- [clear](DDialogInputOptions.md#clear)
- [closeOn](DDialogInputOptions.md#closeon)
- [content](DDialogInputOptions.md#content)
- [corner](DDialogInputOptions.md#corner)
- [cursor](DDialogInputOptions.md#cursor)
- [footer](DDialogInputOptions.md#footer)
- [gesture](DDialogInputOptions.md#gesture)
- [header](DDialogInputOptions.md#header)
- [height](DDialogInputOptions.md#height)
- [input](DDialogInputOptions.md#input)
- [interactive](DDialogInputOptions.md#interactive)
- [layout](DDialogInputOptions.md#layout)
- [mode](DDialogInputOptions.md#mode)
- [name](DDialogInputOptions.md#name)
- [on](DDialogInputOptions.md#on)
- [outline](DDialogInputOptions.md#outline)
- [padding](DDialogInputOptions.md#padding)
- [parent](DDialogInputOptions.md#parent)
- [renderable](DDialogInputOptions.md#renderable)
- [shadow](DDialogInputOptions.md#shadow)
- [shortcut](DDialogInputOptions.md#shortcut)
- [shortcuts](DDialogInputOptions.md#shortcuts)
- [state](DDialogInputOptions.md#state)
- [sticky](DDialogInputOptions.md#sticky)
- [theme](DDialogInputOptions.md#theme)
- [title](DDialogInputOptions.md#title)
- [visible](DDialogInputOptions.md#visible)
- [weight](DDialogInputOptions.md#weight)
- [width](DDialogInputOptions.md#width)
- [x](DDialogInputOptions.md#x)
- [y](DDialogInputOptions.md#y)

## Properties

### align

• `Optional` **align**: ``null`` \| ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| ``"TOP_LEFT"`` \| ``"TOP_CENTER"`` \| ``"TOP_RIGHT"`` \| ``"BOTTOM_LEFT"`` \| ``"BOTTOM_CENTER"`` \| ``"BOTTOM_RIGHT"`` \| ``"LEFT_TOP"`` \| ``"LEFT_MIDDLE"`` \| ``"LEFT_BOTTOM"`` \| ``"RIGHT_TOP"`` \| ``"RIGHT_MIDDLE"`` \| ``"RIGHT_BOTTOM"`` \| ``"OVER"`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[align](DDialogLayeredOptions.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L72)

___

### animation

• `Optional` **animation**: [`DAnimation`](DAnimation.md)<[`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[animation](DDialogLayeredOptions.md#animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L61)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[background](DDialogLayeredOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L497)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[border](DDialogLayeredOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L500)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[children](DDialogLayeredOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L400)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[clear](DDialogLayeredOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:509](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L509)

___

### closeOn

• `Optional` **closeOn**: `number` \| ``"NONE"`` \| ``"ESC"`` \| ``"CLICK_OUTSIDE"`` \| (``"NONE"`` \| ``"ESC"`` \| ``"CLICK_OUTSIDE"``)[]

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[closeOn](DDialogLayeredOptions.md#closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L59)

___

### content

• `Optional` **content**: [`DDialogLayeredContentOptions`](DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](DThemeDialogLayeredContent.md)\>

Content options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[content](DDialogLayeredOptions.md#content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L64)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[corner](DDialogLayeredOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L472)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[cursor](DDialogLayeredOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L512)

___

### footer

• `Optional` **footer**: ``null`` \| [`DDialogLayeredFooterOptions`](DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](DThemeDialogLayeredFooter.md)\>

A footer options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[footer](DDialogLayeredOptions.md#footer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L69)

___

### gesture

• `Optional` **gesture**: `boolean` \| [`DDialogGestureOptions`](DDialogGestureOptions.md)

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[gesture](DDialogLayeredOptions.md#gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L70)

___

### header

• `Optional` **header**: ``null`` \| [`DDialogLayeredHeaderOptions`](DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](DThemeDialogLayeredHeader.md)\>

A header options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[header](DDialogLayeredOptions.md#header)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L59)

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

[DDialogLayeredOptions](DDialogLayeredOptions.md).[height](DDialogLayeredOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L443)

___

### input

• `Optional` **input**: `INPUT_OPTIONS`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L21)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[interactive](DDialogLayeredOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:466](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L466)

___

### layout

• `Optional` **layout**: [`DLayoutVerticalOptions`](DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](DThemeLayoutVertical.md)\>

A layout options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[layout](DDialogLayeredOptions.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L54)

___

### mode

• `Optional` **mode**: ``"MODAL"`` \| ``"MODELESS"`` \| ``"MENU"`` \| [`DDialogMode`](../index.md#ddialogmode-1)

A dialog mode.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[mode](DDialogLayeredOptions.md#mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L66)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[name](DDialogLayeredOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### on

• `Optional` **on**: [`DDialogLayeredOnOptions`](DDialogLayeredOnOptions.md)<`VALUE`, `any`\>

Mappings of event names and handlers.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[on](DDialogLayeredOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L74)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[outline](DDialogLayeredOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L503)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[padding](DDialogLayeredOptions.md#padding)

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

[DDialogLayeredOptions](DDialogLayeredOptions.md).[parent](DDialogLayeredOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L397)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DDialogInputOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[renderable](DDialogLayeredOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[shadow](DDialogLayeredOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:506](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L506)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[shortcut](DDialogLayeredOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L491)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[shortcuts](DDialogLayeredOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:494](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L494)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[state](DDialogLayeredOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### sticky

• `Optional` **sticky**: `boolean`

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[sticky](DDialogLayeredOptions.md#sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L68)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[theme](DDialogLayeredOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L475)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[title](DDialogLayeredOptions.md#title)

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

[DDialogLayeredOptions](DDialogLayeredOptions.md).[visible](DDialogLayeredOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[weight](DDialogLayeredOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:485](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L485)

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

[DDialogLayeredOptions](DDialogLayeredOptions.md).[width](DDialogLayeredOptions.md#width)

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

[DDialogLayeredOptions](DDialogLayeredOptions.md).[x](DDialogLayeredOptions.md#x)

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

[DDialogLayeredOptions](DDialogLayeredOptions.md).[y](DDialogLayeredOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L423)
