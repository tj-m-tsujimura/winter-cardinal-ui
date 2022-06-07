[Winter Cardinal UI - v0.179.0](../index.md) / DDiagramCanvasData

# Interface: DDiagramCanvasData

## Implemented by

- [`DDiagramCanvasDataImpl`](../classes/DDiagramCanvasDataImpl.md)

## Table of contents

### Properties

- [ids](DDiagramCanvasData.md#ids)
- [private](DDiagramCanvasData.md#private)
- [protected](DDiagramCanvasData.md#protected)

### Methods

- [add](DDiagramCanvasData.md#add)
- [clear](DDiagramCanvasData.md#clear)
- [each](DDiagramCanvasData.md#each)
- [set](DDiagramCanvasData.md#set)
- [setAll](DDiagramCanvasData.md#setall)
- [setRange](DDiagramCanvasData.md#setrange)
- [setTime](DDiagramCanvasData.md#settime)
- [setTimes](DDiagramCanvasData.md#settimes)
- [setValue](DDiagramCanvasData.md#setvalue)
- [setValues](DDiagramCanvasData.md#setvalues)

## Properties

### ids

• `Readonly` **ids**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L12)

___

### private

• `Readonly` **private**: [`EShapeDataScoped`](EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L10)

___

### protected

• `Readonly` **protected**: [`EShapeDataScoped`](EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L11)

## Methods

### add

▸ **add**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | [`EShapeDataValue`](EShapeDataValue.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L14)

___

### clear

▸ **clear**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L22)

___

### each

▸ **each**(`callback`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`id`: `string`) => `boolean` \| `void` |

#### Returns

``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L13)

___

### set

▸ **set**(`id`, `value`, `time?`, `from?`, `to?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `unknown` |
| `time?` | `number` |
| `from?` | ``null`` \| `number` |
| `to?` | ``null`` \| `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L15)

___

### setAll

▸ **setAll**(`id`, `values`, `times?`, `from?`, `to?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `values` | `unknown`[] |
| `times?` | `number`[] |
| `from?` | ``null`` \| `number` |
| `to?` | ``null`` \| `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L23)

___

### setRange

▸ **setRange**(`id`, `from?`, `to?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `from?` | ``null`` \| `number` |
| `to?` | ``null`` \| `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L34)

___

### setTime

▸ **setTime**(`id`, `time`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `time` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L32)

___

### setTimes

▸ **setTimes**(`id`, `times`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `times` | `number`[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L33)

___

### setValue

▸ **setValue**(`id`, `value`, `time?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `unknown` |
| `time?` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L30)

___

### setValues

▸ **setValues**(`id`, `values`, `times?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `values` | `unknown`[] |
| `times?` | `number`[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L31)