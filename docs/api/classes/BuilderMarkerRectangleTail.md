[Winter Cardinal UI - v0.310.1](../index.md) / BuilderMarkerRectangleTail

# Class: BuilderMarkerRectangleTail

## Hierarchy

- [`BuilderMarkerRectangle`](BuilderMarkerRectangle.md)

  ↳ **`BuilderMarkerRectangleTail`**

## Table of contents

### Constructors

- [constructor](BuilderMarkerRectangleTail.md#constructor)

### Properties

- [alphaFill](BuilderMarkerRectangleTail.md#alphafill)
- [alphaStroke](BuilderMarkerRectangleTail.md#alphastroke)
- [colorFill](BuilderMarkerRectangleTail.md#colorfill)
- [colorStroke](BuilderMarkerRectangleTail.md#colorstroke)
- [indexCount](BuilderMarkerRectangleTail.md#indexcount)
- [indexOffset](BuilderMarkerRectangleTail.md#indexoffset)
- [pointId](BuilderMarkerRectangleTail.md#pointid)
- [sizeX](BuilderMarkerRectangleTail.md#sizex)
- [sizeY](BuilderMarkerRectangleTail.md#sizey)
- [strokeAlign](BuilderMarkerRectangleTail.md#strokealign)
- [strokeSide](BuilderMarkerRectangleTail.md#strokeside)
- [strokeStyle](BuilderMarkerRectangleTail.md#strokestyle)
- [strokeWidth](BuilderMarkerRectangleTail.md#strokewidth)
- [texture](BuilderMarkerRectangleTail.md#texture)
- [textureTransformId](BuilderMarkerRectangleTail.md#texturetransformid)
- [transformLocalId](BuilderMarkerRectangleTail.md#transformlocalid)
- [vertexCount](BuilderMarkerRectangleTail.md#vertexcount)
- [vertexOffset](BuilderMarkerRectangleTail.md#vertexoffset)
- [WORK](BuilderMarkerRectangleTail.md#work)

### Methods

- [buildUnit](BuilderMarkerRectangleTail.md#buildunit)
- [init](BuilderMarkerRectangleTail.md#init)
- [isCompatible](BuilderMarkerRectangleTail.md#iscompatible)
- [toMarker](BuilderMarkerRectangleTail.md#tomarker)
- [update](BuilderMarkerRectangleTail.md#update)
- [updateColorFill](BuilderMarkerRectangleTail.md#updatecolorfill)
- [updateColorStroke](BuilderMarkerRectangleTail.md#updatecolorstroke)
- [updateVertexClippingStepAndUv](BuilderMarkerRectangleTail.md#updatevertexclippingstepanduv)

## Constructors

### constructor

• **new BuilderMarkerRectangleTail**(`vertexOffset`, `indexOffset`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[constructor](BuilderMarkerRectangle.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L26)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[alphaFill](BuilderMarkerRectangle.md#alphafill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L32)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[alphaStroke](BuilderMarkerRectangle.md#alphastroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[colorFill](BuilderMarkerRectangle.md#colorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[colorStroke](BuilderMarkerRectangle.md#colorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### indexCount

• `Readonly` **indexCount**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[indexCount](BuilderMarkerRectangle.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• `Readonly` **indexOffset**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[indexOffset](BuilderMarkerRectangle.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### pointId

• `Protected` **pointId**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[pointId](BuilderMarkerRectangle.md#pointid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L24)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[sizeX](BuilderMarkerRectangle.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[sizeY](BuilderMarkerRectangle.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L22)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[strokeAlign](BuilderMarkerRectangle.md#strokealign)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[strokeSide](BuilderMarkerRectangle.md#strokeside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[strokeStyle](BuilderMarkerRectangle.md#strokestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[strokeWidth](BuilderMarkerRectangle.md#strokewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L27)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[texture](BuilderMarkerRectangle.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[textureTransformId](BuilderMarkerRectangle.md#texturetransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L37)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[transformLocalId](BuilderMarkerRectangle.md#transformlocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### vertexCount

• `Readonly` **vertexCount**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[vertexCount](BuilderMarkerRectangle.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• `Readonly` **vertexOffset**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[vertexOffset](BuilderMarkerRectangle.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Matrix`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[WORK](BuilderMarkerRectangle.md#work)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L23)

## Methods

### buildUnit

▸ **buildUnit**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`EShapeBufferUnitBuilder`](EShapeBufferUnitBuilder.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[buildUnit](BuilderMarkerRectangle.md#buildunit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L105)

___

### init

▸ **init**(`buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[init](BuilderMarkerRectangle.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L31)

___

### isCompatible

▸ **isCompatible**(`shape`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`boolean`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[isCompatible](BuilderMarkerRectangle.md#iscompatible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L71)

___

### toMarker

▸ `Protected` **toMarker**(`container`): [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md) |

#### Returns

[`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Overrides

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[toMarker](BuilderMarkerRectangle.md#tomarker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle-tail.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle-tail.ts#L11)

___

### update

▸ **update**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[update](BuilderMarkerRectangle.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L36)

___

### updateColorFill

▸ `Protected` **updateColorFill**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[updateColorFill](BuilderMarkerRectangle.md#updatecolorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts#L14)

___

### updateColorStroke

▸ `Protected` **updateColorStroke**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[updateColorStroke](BuilderMarkerRectangle.md#updatecolorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L91)

___

### updateVertexClippingStepAndUv

▸ `Protected` **updateVertexClippingStepAndUv**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[updateVertexClippingStepAndUv](BuilderMarkerRectangle.md#updatevertexclippingstepanduv)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L42)
