[Winter Cardinal UI - v0.310.1](../index.md) / DChartSelectionMarker

# Class: DChartSelectionMarker<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- [`DChartSelectionShapeBase`](DChartSelectionShapeBase.md)<`CHART`\>

  ↳ **`DChartSelectionMarker`**

## Table of contents

### Constructors

- [constructor](DChartSelectionMarker.md#constructor)

### Properties

- [\_isEnabled](DChartSelectionMarker.md#_isenabled)
- [\_newShape](DChartSelectionMarker.md#_newshape)
- [\_options](DChartSelectionMarker.md#_options)
- [\_shape](DChartSelectionMarker.md#_shape)
- [\_state](DChartSelectionMarker.md#_state)
- [\_style](DChartSelectionMarker.md#_style)
- [\_theme](DChartSelectionMarker.md#_theme)

### Methods

- [bind](DChartSelectionMarker.md#bind)
- [getTheme](DChartSelectionMarker.md#gettheme)
- [getType](DChartSelectionMarker.md#gettype)
- [isVisible](DChartSelectionMarker.md#isvisible)
- [newShape](DChartSelectionMarker.md#newshape)
- [set](DChartSelectionMarker.md#set)
- [setStyle](DChartSelectionMarker.md#setstyle)
- [toTheme](DChartSelectionMarker.md#totheme)
- [unbind](DChartSelectionMarker.md#unbind)
- [unset](DChartSelectionMarker.md#unset)
- [update](DChartSelectionMarker.md#update)

## Constructors

### constructor

• **new DChartSelectionMarker**<`CHART`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSelectionShapeOptions`](../interfaces/DChartSelectionShapeOptions.md)<`CHART`\> |

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[constructor](DChartSelectionShapeBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L35)

## Properties

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_isEnabled](DChartSelectionShapeBase.md#_isenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L28)

___

### \_newShape

• `Protected` `Optional` **\_newShape**: (`state`: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)) => [`EShape`](../interfaces/EShape.md)

#### Type declaration

▸ (`state`): [`EShape`](../interfaces/EShape.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

##### Returns

[`EShape`](../interfaces/EShape.md)

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_newShape](DChartSelectionShapeBase.md#_newshape)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L30)

___

### \_options

• `Protected` `Optional` **\_options**: [`DChartSelectionShapeOptions`](../interfaces/DChartSelectionShapeOptions.md)<`CHART`\>

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_options](DChartSelectionShapeBase.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L27)

___

### \_shape

• `Protected` `Optional` **\_shape**: [`EShape`](../interfaces/EShape.md)

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_shape](DChartSelectionShapeBase.md#_shape)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L29)

___

### \_state

• `Protected` **\_state**: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_state](DChartSelectionShapeBase.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L32)

___

### \_style

• `Protected` **\_style**: [`DChartSelectionStyle`](../index.md#dchartselectionstyle)<`CHART`\>

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_style](DChartSelectionShapeBase.md#_style)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L31)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_theme](DChartSelectionShapeBase.md#_theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L33)

## Methods

### bind

▸ **bind**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |

#### Returns

`void`

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[bind](DChartSelectionShapeBase.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L54)

___

### getTheme

▸ `Protected` **getTheme**(`type`): [`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[getTheme](DChartSelectionShapeBase.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L125)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[getType](DChartSelectionShapeBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-marker.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-marker.ts#L39)

___

### isVisible

▸ `Protected` **isVisible**(`container`, `position`, `mappedPosition`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |
| `position` | `IPoint` |
| `mappedPosition` | `IPoint` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-marker.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-marker.ts#L28)

___

### newShape

▸ `Protected` **newShape**(`state`, `theme`): [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `theme` | [`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md) |

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[newShape](DChartSelectionShapeBase.md#newshape)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L79)

___

### set

▸ **set**(`container`, `position`, `mappedPosition`, `series`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |
| `position` | `IPoint` |
| `mappedPosition` | `IPoint` |
| `series` | [`DChartSeries`](../interfaces/DChartSeries.md)<`CHART`\> |

#### Returns

`void`

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[set](DChartSelectionShapeBase.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L83)

___

### setStyle

▸ `Protected` **setStyle**(`this`, `shape`, `series`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `series` | [`DChartSeries`](../interfaces/DChartSeries.md)<`CHART`\> |

#### Returns

`void`

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[setStyle](DChartSelectionShapeBase.md#setstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L97)

___

### toTheme

▸ `Protected` **toTheme**(`options?`): [`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSelectionShapeOptions`](../interfaces/DChartSelectionShapeOptions.md)<`CHART`\> |

#### Returns

[`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[toTheme](DChartSelectionShapeBase.md#totheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L114)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[unbind](DChartSelectionShapeBase.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L72)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[unset](DChartSelectionShapeBase.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L101)

___

### update

▸ **update**(`container`, `position`, `mappedPosition`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |
| `position` | `IPoint` |
| `mappedPosition` | `IPoint` |

#### Returns

`boolean`

#### Overrides

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[update](DChartSelectionShapeBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-marker.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-marker.ts#L14)
