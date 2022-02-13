[Winter Cardinal UI - v0.155.0](../index.md) / EShapeActionRuntimeBlinkVisibility

# Class: EShapeActionRuntimeBlinkVisibility

## Hierarchy

- [`EShapeActionRuntimeBlink`](EShapeActionRuntimeBlink.md)

  ↳ **`EShapeActionRuntimeBlinkVisibility`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeBlinkVisibility.md#constructor)

### Properties

- [condition](EShapeActionRuntimeBlinkVisibility.md#condition)
- [interval](EShapeActionRuntimeBlinkVisibility.md#interval)
- [reset](EShapeActionRuntimeBlinkVisibility.md#reset)

### Methods

- [execute](EShapeActionRuntimeBlinkVisibility.md#execute)
- [initialize](EShapeActionRuntimeBlinkVisibility.md#initialize)
- [onBlur](EShapeActionRuntimeBlinkVisibility.md#onblur)
- [onDblClick](EShapeActionRuntimeBlinkVisibility.md#ondblclick)
- [onDown](EShapeActionRuntimeBlinkVisibility.md#ondown)
- [onDowning](EShapeActionRuntimeBlinkVisibility.md#ondowning)
- [onFocus](EShapeActionRuntimeBlinkVisibility.md#onfocus)
- [onMove](EShapeActionRuntimeBlinkVisibility.md#onmove)
- [onRender](EShapeActionRuntimeBlinkVisibility.md#onrender)
- [toOff](EShapeActionRuntimeBlinkVisibility.md#tooff)
- [toOn](EShapeActionRuntimeBlinkVisibility.md#toon)

## Constructors

### constructor

• **new EShapeActionRuntimeBlinkVisibility**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueBlink`](EShapeActionValueBlink.md) |

#### Overrides

[EShapeActionRuntimeBlink](EShapeActionRuntimeBlink.md).[constructor](EShapeActionRuntimeBlink.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink-visibility.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink-visibility.ts#L12)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Inherited from

[EShapeActionRuntimeBlink](EShapeActionRuntimeBlink.md).[condition](EShapeActionRuntimeBlink.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### interval

• `Protected` **interval**: `number`

#### Inherited from

[EShapeActionRuntimeBlink](EShapeActionRuntimeBlink.md).[interval](EShapeActionRuntimeBlink.md#interval)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink.ts#L12)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeBlink](EShapeActionRuntimeBlink.md).[reset](EShapeActionRuntimeBlink.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

## Methods

### execute

▸ **execute**(`shape`, `runtime`, `time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `time` | `number` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBlink](EShapeActionRuntimeBlink.md).[execute](EShapeActionRuntimeBlink.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink.ts#L19)

___

### initialize

▸ **initialize**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBlink](EShapeActionRuntimeBlink.md).[initialize](EShapeActionRuntimeBlink.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

___

### onBlur

▸ **onBlur**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBlink](EShapeActionRuntimeBlink.md).[onBlur](EShapeActionRuntimeBlink.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L35)

___

### onDblClick

▸ **onDblClick**(`shape`, `runtime`, `e`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBlink](EShapeActionRuntimeBlink.md).[onDblClick](EShapeActionRuntimeBlink.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L51)

___

### onDown

▸ **onDown**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBlink](EShapeActionRuntimeBlink.md).[onDown](EShapeActionRuntimeBlink.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L43)

___

### onDowning

▸ **onDowning**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBlink](EShapeActionRuntimeBlink.md).[onDowning](EShapeActionRuntimeBlink.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L39)

___

### onFocus

▸ **onFocus**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBlink](EShapeActionRuntimeBlink.md).[onFocus](EShapeActionRuntimeBlink.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L31)

___

### onMove

▸ **onMove**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBlink](EShapeActionRuntimeBlink.md).[onMove](EShapeActionRuntimeBlink.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L47)

___

### onRender

▸ **onRender**(`shape`, `runtime`, `time`, `renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `time` | `number` |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBlink](EShapeActionRuntimeBlink.md).[onRender](EShapeActionRuntimeBlink.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)

___

### toOff

▸ `Protected` **toOff**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Overrides

[EShapeActionRuntimeBlink](EShapeActionRuntimeBlink.md).[toOff](EShapeActionRuntimeBlink.md#tooff)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink-visibility.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink-visibility.ts#L21)

___

### toOn

▸ `Protected` **toOn**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Overrides

[EShapeActionRuntimeBlink](EShapeActionRuntimeBlink.md).[toOn](EShapeActionRuntimeBlink.md#toon)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink-visibility.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink-visibility.ts#L16)