[Winter Cardinal UI - v0.310.1](../index.md) / DThemeDialogInputReal

# Interface: DThemeDialogInputReal

[DDialogLayered](../classes/DDialogLayered.md) theme.

## Hierarchy

- [`DThemeDialogInput`](DThemeDialogInput.md)

  ↳ **`DThemeDialogInputReal`**

## Implemented by

- [`DThemeDarkDialogInputReal`](../classes/DThemeDarkDialogInputReal.md)
- [`DThemeWhiteDialogInputReal`](../classes/DThemeWhiteDialogInputReal.md)

## Table of contents

### Methods

- [closeOn](DThemeDialogInputReal.md#closeon)
- [getAlign](DThemeDialogInputReal.md#getalign)
- [getAlpha](DThemeDialogInputReal.md#getalpha)
- [getBackgroundAlpha](DThemeDialogInputReal.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDialogInputReal.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDialogInputReal.md#getbackgroundtexture)
- [getBorderAlign](DThemeDialogInputReal.md#getborderalign)
- [getBorderAlpha](DThemeDialogInputReal.md#getborderalpha)
- [getBorderColor](DThemeDialogInputReal.md#getbordercolor)
- [getBorderMask](DThemeDialogInputReal.md#getbordermask)
- [getBorderTexture](DThemeDialogInputReal.md#getbordertexture)
- [getBorderWidth](DThemeDialogInputReal.md#getborderwidth)
- [getClearType](DThemeDialogInputReal.md#getcleartype)
- [getColor](DThemeDialogInputReal.md#getcolor)
- [getContent](DThemeDialogInputReal.md#getcontent)
- [getCornerMask](DThemeDialogInputReal.md#getcornermask)
- [getCornerRadius](DThemeDialogInputReal.md#getcornerradius)
- [getCursor](DThemeDialogInputReal.md#getcursor)
- [getFontFamilly](DThemeDialogInputReal.md#getfontfamilly)
- [getFontSize](DThemeDialogInputReal.md#getfontsize)
- [getFontStyle](DThemeDialogInputReal.md#getfontstyle)
- [getFontVariant](DThemeDialogInputReal.md#getfontvariant)
- [getFontWeight](DThemeDialogInputReal.md#getfontweight)
- [getFooter](DThemeDialogInputReal.md#getfooter)
- [getGestureMode](DThemeDialogInputReal.md#getgesturemode)
- [getHeader](DThemeDialogInputReal.md#getheader)
- [getHeight](DThemeDialogInputReal.md#getheight)
- [getInputMargin](DThemeDialogInputReal.md#getinputmargin)
- [getInteractive](DThemeDialogInputReal.md#getinteractive)
- [getLayout](DThemeDialogInputReal.md#getlayout)
- [getLineHeight](DThemeDialogInputReal.md#getlineheight)
- [getMode](DThemeDialogInputReal.md#getmode)
- [getOffsetX](DThemeDialogInputReal.md#getoffsetx)
- [getOffsetY](DThemeDialogInputReal.md#getoffsety)
- [getOutlineAlign](DThemeDialogInputReal.md#getoutlinealign)
- [getOutlineAlpha](DThemeDialogInputReal.md#getoutlinealpha)
- [getOutlineColor](DThemeDialogInputReal.md#getoutlinecolor)
- [getOutlineMask](DThemeDialogInputReal.md#getoutlinemask)
- [getOutlineOffset](DThemeDialogInputReal.md#getoutlineoffset)
- [getOutlineWidth](DThemeDialogInputReal.md#getoutlinewidth)
- [getPaddingBottom](DThemeDialogInputReal.md#getpaddingbottom)
- [getPaddingLeft](DThemeDialogInputReal.md#getpaddingleft)
- [getPaddingRight](DThemeDialogInputReal.md#getpaddingright)
- [getPaddingTop](DThemeDialogInputReal.md#getpaddingtop)
- [getShadow](DThemeDialogInputReal.md#getshadow)
- [getTitle](DThemeDialogInputReal.md#gettitle)
- [getWeight](DThemeDialogInputReal.md#getweight)
- [getWidth](DThemeDialogInputReal.md#getwidth)
- [getX](DThemeDialogInputReal.md#getx)
- [getY](DThemeDialogInputReal.md#gety)
- [isGestureEnabled](DThemeDialogInputReal.md#isgestureenabled)
- [isSticky](DThemeDialogInputReal.md#issticky)
- [newAnimation](DThemeDialogInputReal.md#newanimation)
- [newShadow](DThemeDialogInputReal.md#newshadow)
- [newShadowWeak](DThemeDialogInputReal.md#newshadowweak)
- [newState](DThemeDialogInputReal.md#newstate)

## Methods

### closeOn

▸ **closeOn**(`mode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[closeOn](DThemeDialogInput.md#closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L85)

___

### getAlign

▸ **getAlign**(`mode`): ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getAlign](DThemeDialogInput.md#getalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L91)

___

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getAlpha](DThemeDialogInput.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L34)

___

### getBackgroundAlpha

▸ **getBackgroundAlpha**(`state`): `number`

Returns a background alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getBackgroundAlpha](DThemeDialogInput.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L552)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getBackgroundColor](DThemeDialogInput.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:545](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L545)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getBackgroundTexture](DThemeDialogInput.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:557](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L557)

___

### getBorderAlign

▸ **getBorderAlign**(`state`): `number`

Returns a border align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getBorderAlign](DThemeDialogInput.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:586](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L586)

___

### getBorderAlpha

▸ **getBorderAlpha**(`state`): `number`

Returns a border alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getBorderAlpha](DThemeDialogInput.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:572](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L572)

___

### getBorderColor

▸ **getBorderColor**(`state`): ``null`` \| `number`

Returns a border color.
If the color is null, borders are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getBorderColor](DThemeDialogInput.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L565)

___

### getBorderMask

▸ **getBorderMask**(`state`): `number`

Returns a border mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a mask |

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getBorderMask](DThemeDialogInput.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:593](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L593)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getBorderTexture](DThemeDialogInput.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:598](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L598)

___

### getBorderWidth

▸ **getBorderWidth**(`state`): `number`

Returns a border width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getBorderWidth](DThemeDialogInput.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L579)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getClearType](DThemeDialogInput.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L698)

___

### getColor

▸ **getColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getColor](DThemeDialogInput.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getContent

▸ **getContent**(): `undefined` \| [`DDialogLayeredContentOptions`](DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](DThemeDialogLayeredContent.md)\>

#### Returns

`undefined` \| [`DDialogLayeredContentOptions`](DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](DThemeDialogLayeredContent.md)\>

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getContent](DThemeDialogInput.md#getcontent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L83)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getCornerMask](DThemeDialogInput.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L628)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getCornerRadius](DThemeDialogInput.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:623](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L623)

___

### getCursor

▸ **getCursor**(`state`): `string`

Returns a cursor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getCursor](DThemeDialogInput.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:720](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L720)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getFontFamilly](DThemeDialogInput.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getFontSize](DThemeDialogInput.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getFontStyle](DThemeDialogInput.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getFontVariant](DThemeDialogInput.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getFontWeight](DThemeDialogInput.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getFooter

▸ **getFooter**(): `undefined` \| ``null`` \| [`DDialogLayeredFooterOptions`](DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](DThemeDialogLayeredFooter.md)\>

#### Returns

`undefined` \| ``null`` \| [`DDialogLayeredFooterOptions`](DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](DThemeDialogLayeredFooter.md)\>

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getFooter](DThemeDialogInput.md#getfooter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L84)

___

### getGestureMode

▸ **getGestureMode**(`mode`): [`DDialogGestureMode`](../index.md#ddialoggesturemode-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

[`DDialogGestureMode`](../index.md#ddialoggesturemode-1)

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getGestureMode](DThemeDialogInput.md#getgesturemode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L88)

___

### getHeader

▸ **getHeader**(): `undefined` \| ``null`` \| [`DDialogLayeredHeaderOptions`](DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](DThemeDialogLayeredHeader.md)\>

#### Returns

`undefined` \| ``null`` \| [`DDialogLayeredHeaderOptions`](DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](DThemeDialogLayeredHeader.md)\>

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getHeader](DThemeDialogInput.md#getheader)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L82)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getHeight](DThemeDialogInput.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:532](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L532)

___

### getInputMargin

▸ **getInputMargin**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getInputMargin](DThemeDialogInput.md#getinputmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L25)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getInteractive](DThemeDialogInput.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L682)

___

### getLayout

▸ **getLayout**(): `undefined` \| [`DLayoutVerticalOptions`](DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](DThemeLayoutVertical.md)\>

#### Returns

`undefined` \| [`DLayoutVerticalOptions`](DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](DThemeLayoutVertical.md)\>

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getLayout](DThemeDialogInput.md#getlayout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L81)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getLineHeight](DThemeDialogInput.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getMode

▸ **getMode**(): [`DDialogMode`](../index.md#ddialogmode-1)

#### Returns

[`DDialogMode`](../index.md#ddialogmode-1)

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getMode](DThemeDialogInput.md#getmode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L84)

___

### getOffsetX

▸ **getOffsetX**(`mode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getOffsetX](DThemeDialogInput.md#getoffsetx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L89)

___

### getOffsetY

▸ **getOffsetY**(`mode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getOffsetY](DThemeDialogInput.md#getoffsety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L90)

___

### getOutlineAlign

▸ **getOutlineAlign**(`state`): `number`

Returns an outline align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getOutlineAlign](DThemeDialogInput.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:664](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L664)

___

### getOutlineAlpha

▸ **getOutlineAlpha**(`state`): `number`

Returns an outline alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getOutlineAlpha](DThemeDialogInput.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:643](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L643)

___

### getOutlineColor

▸ **getOutlineColor**(`state`): ``null`` \| `number`

Returns an outline color.
If the color is null, outlines are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getOutlineColor](DThemeDialogInput.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:636](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L636)

___

### getOutlineMask

▸ **getOutlineMask**(`state`): `number`

Returns an outline mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getOutlineMask](DThemeDialogInput.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L671)

___

### getOutlineOffset

▸ **getOutlineOffset**(`state`): `number`

Returns an outline offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getOutlineOffset](DThemeDialogInput.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L657)

___

### getOutlineWidth

▸ **getOutlineWidth**(`state`): `number`

Returns an outline width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getOutlineWidth](DThemeDialogInput.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L650)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getPaddingBottom](DThemeDialogInput.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:618](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L618)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getPaddingLeft](DThemeDialogInput.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:603](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L603)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getPaddingRight](DThemeDialogInput.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L608)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getPaddingTop](DThemeDialogInput.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:613](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L613)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getShadow](DThemeDialogInput.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:677](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L677)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getTitle](DThemeDialogInput.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:692](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L692)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getWeight](DThemeDialogInput.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L705)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getWidth](DThemeDialogInput.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L537)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getX](DThemeDialogInput.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L522)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[getY](DThemeDialogInput.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:527](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L527)

___

### isGestureEnabled

▸ **isGestureEnabled**(`mode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

`boolean`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[isGestureEnabled](DThemeDialogInput.md#isgestureenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L87)

___

### isSticky

▸ **isSticky**(`mode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

`boolean`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[isSticky](DThemeDialogInput.md#issticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L86)

___

### newAnimation

▸ **newAnimation**(`mode`): ``null`` \| [`DAnimation`](DAnimation.md)<[`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

``null`` \| [`DAnimation`](DAnimation.md)<[`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[newAnimation](DThemeDialogInput.md#newanimation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L92)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[newShadow](DThemeDialogInput.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:710](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L710)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[newShadowWeak](DThemeDialogInput.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:715](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L715)

___

### newState

▸ **newState**(`state`): `void`

Returns true if focusable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DThemeDialogInput](DThemeDialogInput.md).[newState](DThemeDialogInput.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:687](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L687)
