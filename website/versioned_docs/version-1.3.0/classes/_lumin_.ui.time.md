---
id: "_lumin_.ui.time"
title: "Time"
sidebar_label: "Time"
---

Simple Time class with access to hour/minute/second/period

## Hierarchy

* **Time**

## Constructors

###  constructor

\+ **new Time**(`hour`: number, `minute`: number, `second`: number): *[Time](_lumin_.ui.time.md)*

Creates Time object with hour, minute, second.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hour` | number | hour in the range 0-23. |
`minute` | number | minute in the range 0-59. |
`second` | number | second in the range 0-59.  |

**Returns:** *[Time](_lumin_.ui.time.md)*

\+ **new Time**(): *[Time](_lumin_.ui.time.md)*

Default ctr

**Returns:** *[Time](_lumin_.ui.time.md)*

## Methods

###  hour

▸ **hour**(): *number*

Get the hour in 24 hour time.

**Returns:** *number*

hour, hour in the range 0-23.

___

###  minute

▸ **minute**(): *number*

Gets the minute.

**Returns:** *number*

minute, minute in the range 0-59.

___

###  period

▸ **period**(): *[TimePeriod](../enums/_lumin_.ui.timeperiod.md)*

Gets the TimePeriod, kAM or kPM.

**Returns:** *[TimePeriod](../enums/_lumin_.ui.timeperiod.md)*

TimePeriod, will return kAM for hour 0-11, kPM for hour 12-23.

___

###  second

▸ **second**(): *number*

Gets the second.

**Returns:** *number*

second, second in the range 0-59.

___

###  setHour

▸ **setHour**(`hour`: number): *void*

Sets the hour in 24 hour time. Clamping will be applied for out of range values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hour` | number | hour to be set in the range 0-23.   |

**Returns:** *void*

___

###  setMinute

▸ **setMinute**(`minute`: number): *void*

Sets the minute. Clamping will be applied for out of range values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`minute` | number | minute in the range 0-59.   |

**Returns:** *void*

___

###  setSecond

▸ **setSecond**(`second`: number): *void*

Sets the second. Clamping will be applied for out of range values.

**Parameters:**

Name | Type |
------ | ------ |
`second` | number |

**Returns:** *void*

second, second in the range 0-59.

___

###  twelveHourForm

▸ **twelveHourForm**(): *number*

Get the hour in 12 hour time.

**Returns:** *number*

hour, hour in the range 1-12.
