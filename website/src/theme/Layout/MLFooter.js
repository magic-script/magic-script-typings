// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
// Distributed under Apache 2.0 License.
// See LICENSE file in the project root for full license information.

import React from "react";
const options = {
  apiKey: "bd100834001edf98bd5458ce61e48ca552418f9c",
  footerSelector: "#foot-boi"
};
const MLFooter = () => (
  <>
    <section id="foot-boi" />
    <script src="https://magicleap.com/assets/js/cookie-control-js/cookie-control-vanilla.min.js" onLoad={() => window.startCookieControl.load(JSON.stringify(options))} />
  </>
);
export default MLFooter;

