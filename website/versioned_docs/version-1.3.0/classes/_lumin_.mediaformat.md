---
id: "_lumin_.mediaformat"
title: "MediaFormat"
sidebar_label: "MediaFormat"
---

Class used to retrieve track media format info

## Hierarchy

* **MediaFormat**

## Properties

### `Static` KEY_AAC_DRC_ATTENUATION_FACTOR

▪ **KEY_AAC_DRC_ATTENUATION_FACTOR**: *string*

`value = "aac-drc-cut-level"`

___

### `Static` KEY_AAC_DRC_BOOST_FACTOR

▪ **KEY_AAC_DRC_BOOST_FACTOR**: *string*

`value = "aac-drc-boost-level"`

___

### `Static` KEY_AAC_DRC_HEAVY_COMPRESSION

▪ **KEY_AAC_DRC_HEAVY_COMPRESSION**: *string*

`value = "aac-drc-heavy-compression"`

___

### `Static` KEY_AAC_DRC_TARGET_REFERENCE_LEVEL

▪ **KEY_AAC_DRC_TARGET_REFERENCE_LEVEL**: *string*

`value = "aac-target-ref-level"`

___

### `Static` KEY_AAC_ENCODED_TARGET_LEVEL

▪ **KEY_AAC_ENCODED_TARGET_LEVEL**: *string*

`value = "aac-encoded-target-level"`

___

### `Static` KEY_AAC_MAX_OUTPUT_CHANNEL_COUNT

▪ **KEY_AAC_MAX_OUTPUT_CHANNEL_COUNT**: *string*

`value = "aac-max-output-channel_count"`

___

### `Static` KEY_AAC_PROFILE

▪ **KEY_AAC_PROFILE**: *string*

`value = "aac-profile"`

___

### `Static` KEY_AAC_SBR_MODE

▪ **KEY_AAC_SBR_MODE**: *string*

`value = "aac-sbr-mode"`

___

### `Static` KEY_BIT_DEPTH

▪ **KEY_BIT_DEPTH**: *string*

`value = "bits-persample"`

___

### `Static` KEY_BIT_RATE

▪ **KEY_BIT_RATE**: *string*

`value = "bitrate"`

___

### `Static` KEY_CAPTURE_RATE

▪ **KEY_CAPTURE_RATE**: *string*

`value = "capture-rate"`

___

### `Static` KEY_CHANNEL_COUNT

▪ **KEY_CHANNEL_COUNT**: *string*

`value = "channel-count"`

___

### `Static` KEY_CHANNEL_MASK

▪ **KEY_CHANNEL_MASK**: *string*

`value = "channel-mask"`

___

### `Static` KEY_COLOR_FORMAT

▪ **KEY_COLOR_FORMAT**: *string*

`value = "color-format"`

___

### `Static` KEY_CROP_BOTTOM

▪ **KEY_CROP_BOTTOM**: *string*

`value = "crop-bottom"`

___

### `Static` KEY_CROP_LEFT

▪ **KEY_CROP_LEFT**: *string*

`value = "crop-left"`

___

### `Static` KEY_CROP_RIGHT

▪ **KEY_CROP_RIGHT**: *string*

`value = "crop-right"`

___

### `Static` KEY_CROP_TOP

▪ **KEY_CROP_TOP**: *string*

`value = "crop-top"`

___

### `Static` KEY_DURATION

▪ **KEY_DURATION**: *string*

`value = "durationUs"`

___

### `Static` KEY_FLAC_COMPRESSION_LEVEL

▪ **KEY_FLAC_COMPRESSION_LEVEL**: *string*

`value = "flac-compression-level"`

___

### `Static` KEY_FRAME_RATE

▪ **KEY_FRAME_RATE**: *string*

`value = "frame-rate"`

___

### `Static` KEY_HEIGHT

▪ **KEY_HEIGHT**: *string*

`value = "height"`

___

### `Static` KEY_INTRA_REFRESH_PERIOD

▪ **KEY_INTRA_REFRESH_PERIOD**: *string*

`value = "intra-refresh-period"`

___

### `Static` KEY_IS_ADTS

▪ **KEY_IS_ADTS**: *string*

`value = "is-adts"`

___

### `Static` KEY_IS_AUTOSELECT

▪ **KEY_IS_AUTOSELECT**: *string*

`value = "is-autoselect"`

___

### `Static` KEY_IS_DEFAULT

▪ **KEY_IS_DEFAULT**: *string*

`value = "is-default"`

___

### `Static` KEY_IS_FORCED_SUBTITLE

▪ **KEY_IS_FORCED_SUBTITLE**: *string*

`value = "is-forced-subtitle"`

___

### `Static` KEY_I_FRAME_INTERVAL

▪ **KEY_I_FRAME_INTERVAL**: *string*

`value = "i-frame-interval"`

___

### `Static` KEY_LANGUAGE

▪ **KEY_LANGUAGE**: *string*

`value = "language"`

___

### `Static` KEY_MAX_HEIGHT

▪ **KEY_MAX_HEIGHT**: *string*

`value = "max-height"`

___

### `Static` KEY_MAX_INPUT_SIZE

▪ **KEY_MAX_INPUT_SIZE**: *string*

`value = "max-input-size"`

___

### `Static` KEY_MAX_WIDTH

▪ **KEY_MAX_WIDTH**: *string*

`value = "max-width"`

___

### `Static` KEY_MIME

▪ **KEY_MIME**: *string*

`value = "mime"`

___

### `Static` KEY_PCM_ENCODING

▪ **KEY_PCM_ENCODING**: *string*

`value = "pcm-encoding"`

___

### `Static` KEY_PUSH_BLANK_BUFFERS_ON_STOP

▪ **KEY_PUSH_BLANK_BUFFERS_ON_STOP**: *string*

`value = "push-blank-buffers-on-shutdown"`

___

### `Static` KEY_REPEAT_PREVIOUS_FRAME_AFTER

▪ **KEY_REPEAT_PREVIOUS_FRAME_AFTER**: *string*

`value = "repeat-previous-frame-after"`

___

### `Static` KEY_SAMPLE_RATE

▪ **KEY_SAMPLE_RATE**: *string*

`value = "sample-rate"`

___

### `Static` KEY_STRIDE

▪ **KEY_STRIDE**: *string*

`value = "stride"`

___

### `Static` KEY_TEMPORAL_LAYERING

▪ **KEY_TEMPORAL_LAYERING**: *string*

`value = "ts-schema"`

___

### `Static` KEY_WIDTH

▪ **KEY_WIDTH**: *string*

`value = "width"`

## Methods

###  setBuffer

▸ **setBuffer**(`name`: string, `buffer`: Array‹number›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`buffer` | Array‹number› |

**Returns:** *void*

___

###  setFloat

▸ **setFloat**(`name`: string, `value`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | number |

**Returns:** *void*

___

###  setInt32

▸ **setInt32**(`name`: string, `value`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | number |

**Returns:** *void*

___

###  setInt64

▸ **setInt64**(`name`: string, `value`: bigint): *void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | bigint |

**Returns:** *void*

___

###  setSize

▸ **setSize**(`name`: string, `value`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | number |

**Returns:** *void*

___

###  setString

▸ **setString**(`name`: string, `value`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | string |

**Returns:** *void*

___

###  toString

▸ **toString**(): *string*

Human readable representation of the format.

**Returns:** *string*
