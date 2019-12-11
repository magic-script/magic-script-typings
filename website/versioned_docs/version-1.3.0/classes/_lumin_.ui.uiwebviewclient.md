---
id: "_lumin_.ui.uiwebviewclient"
title: "UiWebViewClient"
sidebar_label: "UiWebViewClient"
---

UiWebViewClient Applications should implement this interface
to receive events from UiWebView. Register an instance of
UiWebViewClient with the UiWebView instance using the API:
'setWebViewClient'.

## Hierarchy

* **UiWebViewClient**

## Constructors

###  constructor

\+ **new UiWebViewClient**(): *[UiWebViewClient](_lumin_.ui.uiwebviewclient.md)*

**Returns:** *[UiWebViewClient](_lumin_.ui.uiwebviewclient.md)*

## Methods

###  onBeforeResourceLoad

▸ **onBeforeResourceLoad**(`webview`: [UiWebView](_lumin_.ui.uiwebview.md), `resource_url`: string): *void*

Notify the host application that resource will be loaded.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`webview` | [UiWebView](_lumin_.ui.uiwebview.md) | the UiWebView that triggered this call. |
`resource_url` | string | the url of the resource about to be loaded.  |

**Returns:** *void*

___

###  onExternalProtocol

▸ **onExternalProtocol**(`webview`: [UiWebView](_lumin_.ui.uiwebview.md), `url`: string): *void*

Notify host application to handle external schemes/protocols (that
are not handled by webview). Any non-standard browser schemes
(other than: http, https, file etc) are treated as external schemes.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`webview` | [UiWebView](_lumin_.ui.uiwebview.md) | the UiWebView that triggered this call. |
`url` | string | the url for external scheme or protocol  |

**Returns:** *void*

___

###  onLoadEnd

▸ **onLoadEnd**(`webview`: [UiWebView](_lumin_.ui.uiwebview.md), `is_main_frame`: boolean, `http_error_code`: number): *void*

Notify host application of load completion. http error code is set if any error
occurred. 0 error code implies no error.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`webview` | [UiWebView](_lumin_.ui.uiwebview.md) | the UiWebView that triggered this call. |
`is_main_frame` | boolean | if this event was for the main frame. |
`http_error_code` | number | the standard http error code, 0 is returned for success.  |

**Returns:** *void*

___

###  onLoadError

▸ **onLoadError**(`webview`: [UiWebView](_lumin_.ui.uiwebview.md), `is_main_frame`: boolean, `error_code`: number, `error_str`: string, `failed_url`: string): *void*

Notify host application of load error. These errors could be due to connectivity,
certificate errors etc. The error string is the stringified version of the
error code.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`webview` | [UiWebView](_lumin_.ui.uiwebview.md) | the UiWebView that triggered this call. |
`is_main_frame` | boolean | if this event was for the main frame. |
`error_code` | number | error code for the error |
`error_str` | string | human readable error string |
`failed_url` | string | the url that caused the load error  |

**Returns:** *void*
