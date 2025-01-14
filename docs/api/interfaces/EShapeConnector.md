[Winter Cardinal UI - v0.310.1](../index.md) / EShapeConnector

# Interface: EShapeConnector

## Hierarchy

- [`EShape`](EShape.md)

  ↳ **`EShapeConnector`**

## Implemented by

- [`EShapeConnectorLine`](../classes/EShapeConnectorLine.md)

## Table of contents

### Properties

- [action](EShapeConnector.md#action)
- [capability](EShapeConnector.md#capability)
- [children](EShapeConnector.md#children)
- [connector](EShapeConnector.md#connector)
- [corner](EShapeConnector.md#corner)
- [cursor](EShapeConnector.md#cursor)
- [data](EShapeConnector.md#data)
- [edge](EShapeConnector.md#edge)
- [editor](EShapeConnector.md#editor)
- [fill](EShapeConnector.md#fill)
- [gradient](EShapeConnector.md#gradient)
- [id](EShapeConnector.md#id)
- [image](EShapeConnector.md#image)
- [imageSrc](EShapeConnector.md#imagesrc)
- [index](EShapeConnector.md#index)
- [interactive](EShapeConnector.md#interactive)
- [layout](EShapeConnector.md#layout)
- [parent](EShapeConnector.md#parent)
- [points](EShapeConnector.md#points)
- [radius](EShapeConnector.md#radius)
- [reference](EShapeConnector.md#reference)
- [root](EShapeConnector.md#root)
- [runtime](EShapeConnector.md#runtime)
- [selected](EShapeConnector.md#selected)
- [shortcut](EShapeConnector.md#shortcut)
- [size](EShapeConnector.md#size)
- [state](EShapeConnector.md#state)
- [stroke](EShapeConnector.md#stroke)
- [tag](EShapeConnector.md#tag)
- [text](EShapeConnector.md#text)
- [texture](EShapeConnector.md#texture)
- [title](EShapeConnector.md#title)
- [transform](EShapeConnector.md#transform)
- [type](EShapeConnector.md#type)
- [uploaded](EShapeConnector.md#uploaded)
- [uuid](EShapeConnector.md#uuid)
- [visible](EShapeConnector.md#visible)
- [worldVisible](EShapeConnector.md#worldvisible)

### Methods

- [addListener](EShapeConnector.md#addlistener)
- [addUuid](EShapeConnector.md#adduuid)
- [allowOnTransformChange](EShapeConnector.md#allowontransformchange)
- [allowUploadedUpdate](EShapeConnector.md#allowuploadedupdate)
- [attach](EShapeConnector.md#attach)
- [blur](EShapeConnector.md#blur)
- [clone](EShapeConnector.md#clone)
- [contains](EShapeConnector.md#contains)
- [containsAbs](EShapeConnector.md#containsabs)
- [containsAbsBBox](EShapeConnector.md#containsabsbbox)
- [containsBBox](EShapeConnector.md#containsbbox)
- [copy](EShapeConnector.md#copy)
- [destroy](EShapeConnector.md#destroy)
- [detach](EShapeConnector.md#detach)
- [disallowOnTransformChange](EShapeConnector.md#disallowontransformchange)
- [disallowUploadedUpdate](EShapeConnector.md#disallowuploadedupdate)
- [emit](EShapeConnector.md#emit)
- [eventNames](EShapeConnector.md#eventnames)
- [focus](EShapeConnector.md#focus)
- [getBounds](EShapeConnector.md#getbounds)
- [getBoundsInternal](EShapeConnector.md#getboundsinternal)
- [getBoundsLocal](EShapeConnector.md#getboundslocal)
- [getCapability](EShapeConnector.md#getcapability)
- [listenerCount](EShapeConnector.md#listenercount)
- [listeners](EShapeConnector.md#listeners)
- [off](EShapeConnector.md#off)
- [on](EShapeConnector.md#on)
- [onAttach](EShapeConnector.md#onattach)
- [onChildTransformChange](EShapeConnector.md#onchildtransformchange)
- [onDetach](EShapeConnector.md#ondetach)
- [onParentTransformChange](EShapeConnector.md#onparenttransformchange)
- [onRender](EShapeConnector.md#onrender)
- [onSizeChange](EShapeConnector.md#onsizechange)
- [onTransformChange](EShapeConnector.md#ontransformchange)
- [once](EShapeConnector.md#once)
- [removeAllListeners](EShapeConnector.md#removealllisteners)
- [removeListener](EShapeConnector.md#removelistener)
- [serialize](EShapeConnector.md#serialize)
- [toDirty](EShapeConnector.md#todirty)
- [toGlobal](EShapeConnector.md#toglobal)
- [toLocal](EShapeConnector.md#tolocal)
- [update](EShapeConnector.md#update)
- [updateTransform](EShapeConnector.md#updatetransform)
- [updateUploaded](EShapeConnector.md#updateuploaded)
- [updateUploadedRecursively](EShapeConnector.md#updateuploadedrecursively)
- [updateUuid](EShapeConnector.md#updateuuid)

## Properties

### action

• `Readonly` **action**: [`EShapeAction`](../classes/EShapeAction.md)

#### Inherited from

[EShape](EShape.md).[action](EShape.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L48)

___

### capability

• `Readonly` **capability**: [`EShapeCapabilityContainer`](EShapeCapabilityContainer.md)

#### Inherited from

[EShape](EShape.md).[capability](EShape.md#capability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L81)

___

### children

• **children**: [`EShape`](EShape.md)[]

#### Inherited from

[EShape](EShape.md).[children](EShape.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L60)

___

### connector

• **connector**: [`EShapeConnectorContainer`](EShapeConnectorContainer.md)

#### Inherited from

[EShape](EShape.md).[connector](EShape.md#connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L55)

___

### corner

• **corner**: `number`

#### Inherited from

[EShape](EShape.md).[corner](EShape.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L38)

___

### cursor

• `Optional` **cursor**: `string`

#### Inherited from

[EShape](EShape.md).[cursor](EShape.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L49)

___

### data

• `Readonly` **data**: [`EShapeData`](EShapeData.md)

#### Inherited from

[EShape](EShape.md).[data](EShape.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L47)

___

### edge

• `Readonly` **edge**: [`EShapeConnectorEdgeContainer`](EShapeConnectorEdgeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector.ts#L10)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](../classes/EShapeEditor.md)

#### Inherited from

[EShape](EShape.md).[editor](EShape.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L72)

___

### fill

• `Readonly` **fill**: [`EShapeFill`](EShapeFill.md)

#### Inherited from

[EShape](EShape.md).[fill](EShape.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L34)

___

### gradient

• `Optional` **gradient**: [`EShapeGradientLike`](EShapeGradientLike.md)

#### Inherited from

[EShape](EShape.md).[gradient](EShape.md#gradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L43)

___

### id

• **id**: `string`

#### Inherited from

[EShape](EShape.md).[id](EShape.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L30)

___

### image

• `Optional` **image**: `HTMLImageElement`

#### Inherited from

[EShape](EShape.md).[image](EShape.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L40)

___

### imageSrc

• `Optional` **imageSrc**: `string`

#### Inherited from

[EShape](EShape.md).[imageSrc](EShape.md#imagesrc)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L41)

___

### index

• **index**: `number`

#### Inherited from

[EShape](EShape.md).[index](EShape.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L64)

___

### interactive

• **interactive**: `boolean`

#### Inherited from

[EShape](EShape.md).[interactive](EShape.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L52)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](EShapeLayout.md)

#### Inherited from

[EShape](EShape.md).[layout](EShape.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L61)

___

### parent

• **parent**: ``null`` \| [`EShape`](EShape.md) \| [`EShapeContainer`](../classes/EShapeContainer.md)

#### Inherited from

[EShape](EShape.md).[parent](EShape.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L58)

___

### points

• `Optional` `Readonly` **points**: [`EShapePoints`](EShapePoints.md)

#### Inherited from

[EShape](EShape.md).[points](EShape.md#points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L39)

___

### radius

• **radius**: `number`

#### Inherited from

[EShape](EShape.md).[radius](EShape.md#radius)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L37)

___

### reference

• **reference**: `number`

#### Inherited from

[EShape](EShape.md).[reference](EShape.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L66)

___

### root

• **root**: [`EShape`](EShape.md)

#### Inherited from

[EShape](EShape.md).[root](EShape.md#root)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L59)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](EShapeRuntime.md)

#### Inherited from

[EShape](EShape.md).[runtime](EShape.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L69)

___

### selected

• **selected**: `boolean`

#### Inherited from

[EShape](EShape.md).[selected](EShape.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L65)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Inherited from

[EShape](EShape.md).[shortcut](EShape.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L53)

___

### size

• `Readonly` **size**: `IPoint`

#### Inherited from

[EShape](EShape.md).[size](EShape.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L33)

___

### state

• `Readonly` **state**: [`EShapeStateSet`](EShapeStateSet.md)

#### Inherited from

[EShape](EShape.md).[state](EShape.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L78)

___

### stroke

• `Readonly` **stroke**: [`EShapeStroke`](EShapeStroke.md)

#### Inherited from

[EShape](EShape.md).[stroke](EShape.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L35)

___

### tag

• `Readonly` **tag**: [`EShapeData`](EShapeData.md)

**`Deprecated`**

in favor of [data](EShapeConnector.md#data).

#### Inherited from

[EShape](EShape.md).[tag](EShape.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L46)

___

### text

• `Readonly` **text**: [`EShapeText`](EShapeText.md)

#### Inherited from

[EShape](EShape.md).[text](EShape.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L44)

___

### texture

• `Optional` **texture**: `Texture`

#### Inherited from

[EShape](EShape.md).[texture](EShape.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L42)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[EShape](EShape.md).[title](EShape.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L54)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](EShapeTransform.md)

#### Inherited from

[EShape](EShape.md).[transform](EShape.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L36)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShape](EShape.md).[type](EShape.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L32)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](EShapeUploaded.md)

#### Inherited from

[EShape](EShape.md).[uploaded](EShape.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L75)

___

### uuid

• **uuid**: `number`

#### Inherited from

[EShape](EShape.md).[uuid](EShape.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L31)

___

### visible

• **visible**: `boolean`

#### Inherited from

[EShape](EShape.md).[visible](EShape.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L50)

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

#### Inherited from

[EShape](EShape.md).[worldVisible](EShape.md#worldvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L51)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`EShapeConnector`](EShapeConnector.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeConnector`](EShapeConnector.md)

#### Inherited from

[EShape](EShape.md).[addListener](EShape.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### addUuid

▸ **addUuid**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[addUuid](EShape.md#adduuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L122)

___

### allowOnTransformChange

▸ **allowOnTransformChange**(`invokeOnTransformChange`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `invokeOnTransformChange` | `boolean` |

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[allowOnTransformChange](EShape.md#allowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L109)

___

### allowUploadedUpdate

▸ **allowUploadedUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[allowUploadedUpdate](EShape.md#allowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L116)

___

### attach

▸ **attach**(`parent`, `at?`): [`EShapeConnector`](EShapeConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](EShape.md) \| [`EShapeContainer`](../classes/EShapeContainer.md) |
| `at?` | `number` |

#### Returns

[`EShapeConnector`](EShapeConnector.md)

#### Inherited from

[EShape](EShape.md).[attach](EShape.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L86)

___

### blur

▸ **blur**(): [`EShapeConnector`](EShapeConnector.md)

#### Returns

[`EShapeConnector`](EShapeConnector.md)

#### Inherited from

[EShape](EShape.md).[blur](EShape.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L97)

___

### clone

▸ **clone**(): [`EShape`](EShape.md)

#### Returns

[`EShape`](EShape.md)

#### Inherited from

[EShape](EShape.md).[clone](EShape.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L92)

___

### contains

▸ **contains**(`x`, `y`): ``null`` \| [`EShape`](EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`EShape`](EShape.md)

#### Inherited from

[EShape](EShape.md).[contains](EShape.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L126)

___

### containsAbs

▸ **containsAbs**(`x`, `y`, `ax`, `ay`, `sw`, `ss`, `sa`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `ax` | `number` |
| `ay` | `number` |
| `sw` | `number` |
| `ss` | `number` |
| `sa` | `number` |

#### Returns

`boolean`

#### Inherited from

[EShape](EShape.md).[containsAbs](EShape.md#containsabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L128)

___

### containsAbsBBox

▸ **containsAbsBBox**(`x`, `y`, `ax`, `ay`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `ax` | `number` |
| `ay` | `number` |

#### Returns

`boolean`

#### Inherited from

[EShape](EShape.md).[containsAbsBBox](EShape.md#containsabsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L137)

___

### containsBBox

▸ **containsBBox**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Inherited from

[EShape](EShape.md).[containsBBox](EShape.md#containsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L127)

___

### copy

▸ **copy**(`source`): [`EShapeConnector`](EShapeConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShape`](EShape.md) |

#### Returns

[`EShapeConnector`](EShapeConnector.md)

#### Inherited from

[EShape](EShape.md).[copy](EShape.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L90)

▸ **copy**(`source`, `part`): [`EShapeConnector`](EShapeConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShape`](EShape.md) |
| `part` | `number` |

#### Returns

[`EShapeConnector`](EShapeConnector.md)

#### Inherited from

[EShape](EShape.md).[copy](EShape.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L91)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[destroy](EShape.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L93)

___

### detach

▸ **detach**(): [`EShapeConnector`](EShapeConnector.md)

#### Returns

[`EShapeConnector`](EShapeConnector.md)

#### Inherited from

[EShape](EShape.md).[detach](EShape.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L88)

___

### disallowOnTransformChange

▸ **disallowOnTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[disallowOnTransformChange](EShape.md#disallowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L108)

___

### disallowUploadedUpdate

▸ **disallowUploadedUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[disallowUploadedUpdate](EShape.md#disallowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L115)

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

[EShape](EShape.md).[emit](EShape.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EShape](EShape.md).[eventNames](EShape.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`EShapeConnector`](EShapeConnector.md)

#### Returns

[`EShapeConnector`](EShapeConnector.md)

#### Inherited from

[EShape](EShape.md).[focus](EShape.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L96)

___

### getBounds

▸ **getBounds**(`skipUpdate`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate` | `boolean` |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Inherited from

[EShape](EShape.md).[getBounds](EShape.md#getbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L142)

___

### getBoundsInternal

▸ **getBoundsInternal**(`skipUpdate`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate` | `boolean` |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Inherited from

[EShape](EShape.md).[getBoundsInternal](EShape.md#getboundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L143)

___

### getBoundsLocal

▸ **getBoundsLocal**(`skipUpdate`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate` | `boolean` |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Inherited from

[EShape](EShape.md).[getBoundsLocal](EShape.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L144)

___

### getCapability

▸ **getCapability**(): `undefined` \| [`EShapeCapabilityContainer`](EShapeCapabilityContainer.md)

#### Returns

`undefined` \| [`EShapeCapabilityContainer`](EShapeCapabilityContainer.md)

#### Inherited from

[EShape](EShape.md).[getCapability](EShape.md#getcapability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L82)

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

[EShape](EShape.md).[listenerCount](EShape.md#listenercount)

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

[EShape](EShape.md).[listeners](EShape.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`EShapeConnector`](EShapeConnector.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`EShapeConnector`](EShapeConnector.md)

#### Inherited from

[EShape](EShape.md).[off](EShape.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`EShapeConnector`](EShapeConnector.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`EShapeConnector`](EShapeConnector.md)

`this`.

#### Inherited from

[EShape](EShape.md).[on](EShape.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[onAttach](EShape.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L87)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[onChildTransformChange](EShape.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L112)

___

### onDetach

▸ **onDetach**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[onDetach](EShape.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L89)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[onParentTransformChange](EShape.md#onparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L111)

___

### onRender

▸ **onRender**(`time`, `renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[onRender](EShape.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L104)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[onSizeChange](EShape.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L100)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[onTransformChange](EShape.md#ontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L110)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EShapeConnector`](EShapeConnector.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`EShapeConnector`](EShapeConnector.md)

`this`.

#### Inherited from

[EShape](EShape.md).[once](EShape.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EShapeConnector`](EShapeConnector.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`EShapeConnector`](EShapeConnector.md)

`this`.

#### Inherited from

[EShape](EShape.md).[removeAllListeners](EShape.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`EShapeConnector`](EShapeConnector.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`EShapeConnector`](EShapeConnector.md)

`this`.

#### Inherited from

[EShape](EShape.md).[removeListener](EShape.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### serialize

▸ **serialize**(`manager`): [`DDiagramSerializedItem`](DDiagramSerializedItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

[`DDiagramSerializedItem`](DDiagramSerializedItem.md)

#### Inherited from

[EShape](EShape.md).[serialize](EShape.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L121)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[toDirty](EShape.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L85)

___

### toGlobal

▸ **toGlobal**(`position`, `result`, `skipUpdate?`): `Point`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `IPoint` |
| `result` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`Point`

#### Inherited from

[EShape](EShape.md).[toGlobal](EShape.md#toglobal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L140)

___

### toLocal

▸ **toLocal**(`position`, `from?`, `result?`, `skipUpdate?`): `Point`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `IPoint` |
| `from?` | `DisplayObject` |
| `result?` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`Point`

#### Inherited from

[EShape](EShape.md).[toLocal](EShape.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L141)

___

### update

▸ **update**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[update](EShape.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L103)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[updateTransform](EShape.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L107)

___

### updateUploaded

▸ **updateUploaded**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[updateUploaded](EShape.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L117)

___

### updateUploadedRecursively

▸ **updateUploadedRecursively**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[updateUploadedRecursively](EShape.md#updateuploadedrecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L118)

___

### updateUuid

▸ **updateUuid**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[updateUuid](EShape.md#updateuuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L123)
