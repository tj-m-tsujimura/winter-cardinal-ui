[Winter Cardinal UI - v0.310.1](../index.md) / DButtonBaseEvents

# Interface: DButtonBaseEvents<VALUE, EMITTER\>

[DButtonBase](../classes/DButtonBase.md) events.

## Type parameters

| Name |
| :------ |
| `VALUE` |
| `EMITTER` |

## Hierarchy

- [`DImageBaseEvents`](DImageBaseEvents.md)<`VALUE`, `EMITTER`\>

  ↳ **`DButtonBaseEvents`**

  ↳↳ [`DButtonEvents`](DButtonEvents.md)

  ↳↳ [`DDropdownBaseEvents`](DDropdownBaseEvents.md)

## Table of contents

### Methods

- [active](DButtonBaseEvents.md#active)
- [added](DButtonBaseEvents.md#added)
- [click](DButtonBaseEvents.md#click)
- [dblclick](DButtonBaseEvents.md#dblclick)
- [down](DButtonBaseEvents.md#down)
- [inactive](DButtonBaseEvents.md#inactive)
- [init](DButtonBaseEvents.md#init)
- [keydown](DButtonBaseEvents.md#keydown)
- [keyup](DButtonBaseEvents.md#keyup)
- [move](DButtonBaseEvents.md#move)
- [out](DButtonBaseEvents.md#out)
- [over](DButtonBaseEvents.md#over)
- [press](DButtonBaseEvents.md#press)
- [removed](DButtonBaseEvents.md#removed)
- [resize](DButtonBaseEvents.md#resize)
- [scale](DButtonBaseEvents.md#scale)
- [shortcut](DButtonBaseEvents.md#shortcut)
- [skew](DButtonBaseEvents.md#skew)
- [statechange](DButtonBaseEvents.md#statechange)
- [unpress](DButtonBaseEvents.md#unpress)
- [up](DButtonBaseEvents.md#up)
- [wheel](DButtonBaseEvents.md#wheel)

## Methods

### active

▸ **active**(`emitter`): `void`

Triggered when the button is activated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L26)

___

### added

▸ **added**(`container`): `void`

Triggered when added to a container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `Container` | a container added to |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[added](DImageBaseEvents.md#added)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L101)

___

### click

▸ **click**(`e`, `emitter`): `void`

Triggered when an emitter is clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `InteractionEvent` | an interaction event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[click](DImageBaseEvents.md#click)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L233)

___

### dblclick

▸ **dblclick**(`e`, `interactionManager`, `emitter`): `void`

Triggered when an emitter is double clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` | an event |
| `interactionManager` | `InteractionManager` | an interaction manager |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[dblclick](DImageBaseEvents.md#dblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L242)

___

### down

▸ **down**(`e`, `emitter`): `void`

Triggered when a pointer gets down on an emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `InteractionEvent` | an interaction event. |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[down](DImageBaseEvents.md#down)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:217](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L217)

___

### inactive

▸ **inactive**(`emitter`): `void`

Triggered when the button is inactivated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L33)

___

### init

▸ **init**(`emitter`): `void`

Triggered when an initialization is finished.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[init](DImageBaseEvents.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L94)

___

### keydown

▸ **keydown**(`e`, `emitter`): `void`

Triggered when a key gets down.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | a keyboard event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[keydown](DImageBaseEvents.md#keydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L185)

___

### keyup

▸ **keyup**(`e`, `emitter`): `void`

Triggered when a key gets up.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | a keyboard event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[keyup](DImageBaseEvents.md#keyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L193)

___

### move

▸ **move**(`newX`, `newY`, `oldX`, `oldY`, `emitter`): `void`

Triggered when moved.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newX` | `number` | a new x |
| `newY` | `number` | a new y |
| `oldX` | `number` | an old x |
| `oldY` | `number` | an old y |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[move](DImageBaseEvents.md#move)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L119)

___

### out

▸ **out**(`e`, `emitter`): `void`

Triggered when a pointer gets out of an emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `InteractionEvent` | an interaction event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[out](DImageBaseEvents.md#out)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L209)

___

### over

▸ **over**(`e`, `emitter`): `void`

Triggered when a pointer gets on an emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `InteractionEvent` | an interaction event. |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[over](DImageBaseEvents.md#over)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L201)

___

### press

▸ **press**(`emitter`): `void`

Triggered when the button is pressed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L40)

___

### removed

▸ **removed**(`container`): `void`

Triggered when removed from a container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `Container` | a container removed from |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[removed](DImageBaseEvents.md#removed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L108)

___

### resize

▸ **resize**(`newWidth`, `newHeight`, `oldWidth`, `oldHeight`, `emitter`): `void`

Triggered when resized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newWidth` | `number` | a new width |
| `newHeight` | `number` | a new height |
| `oldWidth` | `number` | an old width |
| `oldHeight` | `number` | an old height |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[resize](DImageBaseEvents.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L130)

___

### scale

▸ **scale**(`newX`, `newY`, `oldX`, `oldY`, `emitter`): `void`

Triggered when scaled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newX` | `number` | a new x |
| `newY` | `number` | a new y |
| `oldX` | `number` | an old x |
| `oldY` | `number` | an old y |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[scale](DImageBaseEvents.md#scale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L147)

___

### shortcut

▸ **shortcut**(`e`, `emitter`): `void`

Triggered when a shortcut is pressed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | an event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[shortcut](DImageBaseEvents.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:254](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L254)

___

### skew

▸ **skew**(`newX`, `newY`, `oldX`, `oldY`, `emitter`): `void`

Triggered when skewed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newX` | `number` | a new x |
| `newY` | `number` | a new y |
| `oldX` | `number` | an old x |
| `oldY` | `number` | an old y |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[skew](DImageBaseEvents.md#skew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L158)

___

### statechange

▸ **statechange**(`newState`, `oldState`, `emitter`): `void`

Triggered when a state is changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newState` | [`DBaseStateSet`](DBaseStateSet.md) | a new state |
| `oldState` | [`DBaseStateSet`](DBaseStateSet.md) | an old state |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[statechange](DImageBaseEvents.md#statechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L167)

___

### unpress

▸ **unpress**(`emitter`): `void`

Triggered when the button is released.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L47)

___

### up

▸ **up**(`e`, `emitter`): `void`

Triggered when a pointer gets up on an emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `InteractionEvent` | an interaction event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[up](DImageBaseEvents.md#up)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:225](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L225)

___

### wheel

▸ **wheel**(`e`, `deltas`, `global`, `emitter`): `void`

Triggered when a wheel moves.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `WheelEvent` | a wheel event |
| `deltas` | [`UtilWheelEventDeltas`](UtilWheelEventDeltas.md) | wheel move amounts |
| `global` | `Point` | a point wheel moved |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DImageBaseEvents](DImageBaseEvents.md).[wheel](DImageBaseEvents.md#wheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L177)
