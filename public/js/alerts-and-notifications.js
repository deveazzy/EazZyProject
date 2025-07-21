/*
 * @author    [EazZy Project]
 * @copyright Copyright (c) [2025] [EazZy Project]
 * @license   https://opensource.org/licenses/MIT MIT License
*/

import PNotify from "/assets/vendor/pnotify/PNotify.js";

PNotify.defaults.delay = 2000;
PNotify.defaults.closerHover = false;
PNotify.defaults.stack = {
  dir1: "up",
  dir2: "left",
  firstpos1: 25,
  firstpos2: 25,
  push: "top",
};

document.getElementById("notify-success").addEventListener("click", () => {
  PNotify.success({
    title: "Success!",
    text: "This is a success notification.",
  });
});

document.getElementById("notify-info").addEventListener("click", () => {
  PNotify.info({
    title: "Information",
    text: "A new update is available for download.",
  });
});

document.getElementById("notify-error").addEventListener("click", () => {
  PNotify.error({
    title: "Error!",
    text: "Could not save changes. Please try again.",
  });
});

document.getElementById("notify-notice").addEventListener("click", () => {
  PNotify.notice({
    title: "Notice",
    text: "Your subscription is about to expire.",
  });
});
