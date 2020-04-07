// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
// Distributed under Apache 2.0 License.
// See LICENSE file in the project root for full license information.

import React from "react";

const options = {
  apiKey: "bd100834001edf98bd5458ce61e48ca552418f9c",
  footerSelector: "#foot-boi"
};

let loaded = false;
function loadCookieControl() {
  if (loaded || typeof document === 'undefined') return;
  loaded = true;
  const script = document.createElement('script');
  script.setAttribute('src', 'https://magicleap.com/assets/js/cookie-control-js/cookie-control-vanilla.min.js')
  script.onload = () => {
    window.startCookieControl.load(options)
  }
  document.body.appendChild(script);
}

const MLFooter = () => {
  loadCookieControl();
  return <section id="foot-boi" />
}

export default MLFooter;

