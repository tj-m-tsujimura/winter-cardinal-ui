[Winter Cardinal UI - v0.155.0](../index.md) / DDiagramSerializedLayer

# Interface: DDiagramSerializedLayer

A serialized layer.

## Table of contents

### Properties

- [0](DDiagramSerializedLayer.md#0)
- [1](DDiagramSerializedLayer.md#1)
- [2](DDiagramSerializedLayer.md#2)
- [3](DDiagramSerializedLayer.md#3)
- [4](DDiagramSerializedLayer.md#4)
- [5](DDiagramSerializedLayer.md#5)
- [6](DDiagramSerializedLayer.md#6)
- [7](DDiagramSerializedLayer.md#7)

## Properties

### 0

• **0**: `string` \| `number`

A name or a resource index number of a name

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:349](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L349)

___

### 1

• `Optional` **1**: `number`

A visibility.

* 1st bit
    * 0: Invisible when edit mode
    * 1: Visible when edit mode
* 2nd bit
    * 0: Invisible when non-edit mode
    * 1: Visible when non-edit mode

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L361)

___

### 2

• `Optional` **2**: `number`

A X-coordinate position.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:364](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L364)

___

### 3

• `Optional` **3**: `number`

A Y-coordinate position.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L367)

___

### 4

• `Optional` **4**: `number`

A width.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:370](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L370)

___

### 5

• `Optional` **5**: `number`

A height.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L373)

___

### 6

• `Optional` **6**: `number`

A resource index number of a stringified serialized fill,
JSON.stringify(DDiagramSerializedFill).

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:379](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L379)

___

### 7

• `Optional` **7**: `number`

* 1st bit
    * 0: Not interactive
    * 1: Interactive
* 2nd bit
    * 0: Not draggable
    * 1: Draggable
* 3rd bit
    * 0: Not pinchable
    * 1: Pinchable

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:392](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L392)