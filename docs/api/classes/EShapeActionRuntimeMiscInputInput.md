[Winter Cardinal UI - v0.310.1](../index.md) / EShapeActionRuntimeMiscInputInput

# Class: EShapeActionRuntimeMiscInputInput<VALUE, UTIL\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `UTIL` | extends [`UtilInputInput`](UtilInputInput.md)<`VALUE`\> = [`UtilInputInput`](UtilInputInput.md)<`VALUE`\> |

## Hierarchy

- [`EShapeActionRuntimeMiscInput`](EShapeActionRuntimeMiscInput.md)<`VALUE`, `HTMLInputElement`, `UTIL`\>

  ↳ **`EShapeActionRuntimeMiscInputInput`**

  ↳↳ [`EShapeActionRuntimeMiscInputNumber`](EShapeActionRuntimeMiscInputNumber.md)

  ↳↳ [`EShapeActionRuntimeMiscInputText`](EShapeActionRuntimeMiscInputText.md)

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeMiscInputInput.md#constructor)

### Properties

- [condition](EShapeActionRuntimeMiscInputInput.md#condition)
- [onInputAction](EShapeActionRuntimeMiscInputInput.md#oninputaction)
- [reset](EShapeActionRuntimeMiscInputInput.md#reset)
- [target](EShapeActionRuntimeMiscInputInput.md#target)
- [utils](EShapeActionRuntimeMiscInputInput.md#utils)
- [WORK](EShapeActionRuntimeMiscInputInput.md#work)

### Methods

- [containsPoint](EShapeActionRuntimeMiscInputInput.md#containspoint)
- [execute](EShapeActionRuntimeMiscInputInput.md#execute)
- [getClipperExRects](EShapeActionRuntimeMiscInputInput.md#getclipperexrects)
- [getClipperToRect](EShapeActionRuntimeMiscInputInput.md#getclippertorect)
- [getElementMatrix](EShapeActionRuntimeMiscInputInput.md#getelementmatrix)
- [getElementRect](EShapeActionRuntimeMiscInputInput.md#getelementrect)
- [getPadding](EShapeActionRuntimeMiscInputInput.md#getpadding)
- [getUtil](EShapeActionRuntimeMiscInputInput.md#getutil)
- [initialize](EShapeActionRuntimeMiscInputInput.md#initialize)
- [newElementCreator](EShapeActionRuntimeMiscInputInput.md#newelementcreator)
- [newOperation](EShapeActionRuntimeMiscInputInput.md#newoperation)
- [newUtil](EShapeActionRuntimeMiscInputInput.md#newutil)
- [newUtilOptions](EShapeActionRuntimeMiscInputInput.md#newutiloptions)
- [onBlur](EShapeActionRuntimeMiscInputInput.md#onblur)
- [onClick](EShapeActionRuntimeMiscInputInput.md#onclick)
- [onDblClick](EShapeActionRuntimeMiscInputInput.md#ondblclick)
- [onDown](EShapeActionRuntimeMiscInputInput.md#ondown)
- [onDowning](EShapeActionRuntimeMiscInputInput.md#ondowning)
- [onFocus](EShapeActionRuntimeMiscInputInput.md#onfocus)
- [onKeyDown](EShapeActionRuntimeMiscInputInput.md#onkeydown)
- [onKeyUp](EShapeActionRuntimeMiscInputInput.md#onkeyup)
- [onMove](EShapeActionRuntimeMiscInputInput.md#onmove)
- [onOut](EShapeActionRuntimeMiscInputInput.md#onout)
- [onOver](EShapeActionRuntimeMiscInputInput.md#onover)
- [onPressed](EShapeActionRuntimeMiscInputInput.md#onpressed)
- [onRender](EShapeActionRuntimeMiscInputInput.md#onrender)
- [onResize](EShapeActionRuntimeMiscInputInput.md#onresize)
- [onRightClick](EShapeActionRuntimeMiscInputInput.md#onrightclick)
- [onRightDown](EShapeActionRuntimeMiscInputInput.md#onrightdown)
- [onRightDowning](EShapeActionRuntimeMiscInputInput.md#onrightdowning)
- [onRightPressed](EShapeActionRuntimeMiscInputInput.md#onrightpressed)
- [onRightUnpressed](EShapeActionRuntimeMiscInputInput.md#onrightunpressed)
- [onRightUp](EShapeActionRuntimeMiscInputInput.md#onrightup)
- [onRightUpOutside](EShapeActionRuntimeMiscInputInput.md#onrightupoutside)
- [onUnpressed](EShapeActionRuntimeMiscInputInput.md#onunpressed)
- [onUp](EShapeActionRuntimeMiscInputInput.md#onup)
- [onUpOutside](EShapeActionRuntimeMiscInputInput.md#onupoutside)
- [onValueChange](EShapeActionRuntimeMiscInputInput.md#onvaluechange)
- [toWhen](EShapeActionRuntimeMiscInputInput.md#towhen)

## Constructors

### constructor

• **new EShapeActionRuntimeMiscInputInput**<`VALUE`, `UTIL`\>(`value`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `UTIL` | extends [`UtilInputInput`](UtilInputInput.md)<`VALUE`, [`UtilInputInputTarget`](../interfaces/UtilInputInputTarget.md), [`UtilInputInputOperation`](../interfaces/UtilInputInputOperation.md)<`VALUE`\>, [`UtilThemeInputInput`](../interfaces/UtilThemeInputInput.md)<`VALUE`\>, [`UtilInputInputOptions`](../interfaces/UtilInputInputOptions.md)<`VALUE`\>, `UTIL`\> = [`UtilInputInput`](UtilInputInput.md)<`VALUE`, [`UtilInputInputTarget`](../interfaces/UtilInputInputTarget.md), [`UtilInputInputOperation`](../interfaces/UtilInputInputOperation.md)<`VALUE`\>, [`UtilThemeInputInput`](../interfaces/UtilThemeInputInput.md)<`VALUE`\>, [`UtilInputInputOptions`](../interfaces/UtilInputInputOptions.md)<`VALUE`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueMisc`](EShapeActionValueMisc.md) |

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[constructor](EShapeActionRuntimeMiscInput.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L28)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[condition](EShapeActionRuntimeMiscInput.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L36)

___

### onInputAction

• `Protected` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction-1)

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onInputAction](EShapeActionRuntimeMiscInput.md#oninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L26)

___

### reset

• `Readonly` **reset**: `number`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[reset](EShapeActionRuntimeMiscInput.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L18)

___

### target

• `Protected` `Readonly` **target**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[target](EShapeActionRuntimeMiscInput.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L25)

___

### utils

• `Protected` **utils**: `Map`<[`EShape`](../interfaces/EShape.md), `UTIL`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[utils](EShapeActionRuntimeMiscInput.md#utils)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L37)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Point`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[WORK](EShapeActionRuntimeMiscInput.md#work)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L35)

## Methods

### containsPoint

▸ `Protected` **containsPoint**(`shape`, `runtime`, `point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[containsPoint](EShapeActionRuntimeMiscInput.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L143)

___

### execute

▸ **execute**(`shape`, `runtime`, `time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `time` | `number` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[execute](EShapeActionRuntimeMiscInput.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L28)

___

### getClipperExRects

▸ `Protected` **getClipperExRects**(`shape`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `result` | [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getClipperExRects](EShapeActionRuntimeMiscInput.md#getclipperexrects)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L190)

___

### getClipperToRect

▸ `Protected` **getClipperToRect**(`shape`, `runtime`, `resolution`, `point`, `result`): ``null`` \| `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `resolution` | `number` |
| `point` | `Point` |
| `result` | `Rectangle` |

#### Returns

``null`` \| `Rectangle`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getClipperToRect](EShapeActionRuntimeMiscInput.md#getclippertorect)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L179)

___

### getElementMatrix

▸ `Protected` **getElementMatrix**(`shape`, `runtime`): ``null`` \| `Matrix`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

``null`` \| `Matrix`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getElementMatrix](EShapeActionRuntimeMiscInput.md#getelementmatrix)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L174)

___

### getElementRect

▸ `Protected` **getElementRect**(`shape`, `runtime`, `resolution`, `point`, `result`): ``null`` \| `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `resolution` | `number` |
| `point` | `Point` |
| `result` | `Rectangle` |

#### Returns

``null`` \| `Rectangle`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getElementRect](EShapeActionRuntimeMiscInput.md#getelementrect)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L156)

___

### getPadding

▸ `Protected` **getPadding**(`shape`, `runtime`): ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getPadding](EShapeActionRuntimeMiscInput.md#getpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L112)

___

### getUtil

▸ `Protected` **getUtil**(`shape`, `runtime`): `UTIL`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`UTIL`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getUtil](EShapeActionRuntimeMiscInput.md#getutil)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L45)

___

### initialize

▸ **initialize**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[initialize](EShapeActionRuntimeMiscInput.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L24)

___

### newElementCreator

▸ `Protected` **newElementCreator**(`shape`, `runtime`): `undefined` \| [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLInputElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`undefined` \| [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLInputElement`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[newElementCreator](EShapeActionRuntimeMiscInput.md#newelementcreator)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L105)

___

### newOperation

▸ `Protected` **newOperation**(`shape`, `runtime`): [`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`VALUE`, `HTMLInputElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

[`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`VALUE`, `HTMLInputElement`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[newOperation](EShapeActionRuntimeMiscInput.md#newoperation)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L34)

___

### newUtil

▸ `Protected` **newUtil**(`shape`, `runtime`): `UTIL`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`UTIL`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[newUtil](EShapeActionRuntimeMiscInput.md#newutil)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L55)

___

### newUtilOptions

▸ `Protected` **newUtilOptions**(`shape`, `runtime`): [`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)<`HTMLInputElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

[`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)<`HTMLInputElement`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[newUtilOptions](EShapeActionRuntimeMiscInput.md#newutiloptions)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L115)

___

### onBlur

▸ **onBlur**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onBlur](EShapeActionRuntimeMiscInput.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L228)

___

### onClick

▸ **onClick**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onClick](EShapeActionRuntimeMiscInput.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L44)

___

### onDblClick

▸ **onDblClick**(`shape`, `runtime`, `e`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onDblClick](EShapeActionRuntimeMiscInput.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:240](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L240)

___

### onDown

▸ **onDown**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onDown](EShapeActionRuntimeMiscInput.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L236)

___

### onDowning

▸ **onDowning**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onDowning](EShapeActionRuntimeMiscInput.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L232)

___

### onFocus

▸ **onFocus**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onFocus](EShapeActionRuntimeMiscInput.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L224)

___

### onKeyDown

▸ **onKeyDown**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onKeyDown](EShapeActionRuntimeMiscInput.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L93)

___

### onKeyUp

▸ **onKeyUp**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onKeyUp](EShapeActionRuntimeMiscInput.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L97)

___

### onMove

▸ **onMove**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onMove](EShapeActionRuntimeMiscInput.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L65)

___

### onOut

▸ **onOut**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onOut](EShapeActionRuntimeMiscInput.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L73)

___

### onOver

▸ **onOver**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onOver](EShapeActionRuntimeMiscInput.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L69)

___

### onPressed

▸ **onPressed**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onPressed](EShapeActionRuntimeMiscInput.md#onpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L85)

___

### onRender

▸ **onRender**(`shape`, `runtime`, `time`, `renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `time` | `number` |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRender](EShapeActionRuntimeMiscInput.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L220)

___

### onResize

▸ **onResize**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onResize](EShapeActionRuntimeMiscInput.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L32)

___

### onRightClick

▸ **onRightClick**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRightClick](EShapeActionRuntimeMiscInput.md#onrightclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L101)

___

### onRightDown

▸ **onRightDown**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRightDown](EShapeActionRuntimeMiscInput.md#onrightdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L109)

___

### onRightDowning

▸ **onRightDowning**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRightDowning](EShapeActionRuntimeMiscInput.md#onrightdowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L105)

___

### onRightPressed

▸ **onRightPressed**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRightPressed](EShapeActionRuntimeMiscInput.md#onrightpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L121)

___

### onRightUnpressed

▸ **onRightUnpressed**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRightUnpressed](EShapeActionRuntimeMiscInput.md#onrightunpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L125)

___

### onRightUp

▸ **onRightUp**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRightUp](EShapeActionRuntimeMiscInput.md#onrightup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L113)

___

### onRightUpOutside

▸ **onRightUpOutside**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRightUpOutside](EShapeActionRuntimeMiscInput.md#onrightupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L117)

___

### onUnpressed

▸ **onUnpressed**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onUnpressed](EShapeActionRuntimeMiscInput.md#onunpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L89)

___

### onUp

▸ **onUp**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onUp](EShapeActionRuntimeMiscInput.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L77)

___

### onUpOutside

▸ **onUpOutside**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onUpOutside](EShapeActionRuntimeMiscInput.md#onupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L81)

___

### onValueChange

▸ `Protected` **onValueChange**(`shape`, `runtime`, `newValue`, `oldValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `newValue` | `VALUE` |
| `oldValue` | `VALUE` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onValueChange](EShapeActionRuntimeMiscInput.md#onvaluechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L116)

___

### toWhen

▸ `Protected` **toWhen**(`shape`, `runtime`): `undefined` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`undefined` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen-1)

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[toWhen](EShapeActionRuntimeMiscInput.md#towhen)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L135)
