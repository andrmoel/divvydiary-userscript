// ==UserScript==
// @name         DivvyDiary Blur entfernen
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Entfernt Blur-Effekte auf der Kalenderseite von DivvyDiary
// @author       Du
// @match        https://divvydiary.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const style = document.createElement('style');
    style.textContent = `
        .blur-sm, .blur-md, .blur-xl {
            filter: none !important;
        }
    `;
    document.head.appendChild(style);
})();