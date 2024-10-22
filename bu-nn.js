const cv = document.getElementById("cv");
const c = cv.getContext("2d");
const SCREEN_WIDTH = 720;
const SCREEN_HEIGHT = 480;

let first = performance.now();
let then = 0;
let now = 0;
let fps = 0;
let key = {
  up: false,
  down: false,
  right: false,
  left: false,
  ok: false,
  back: false,
  shift: false,
  shot: false,
  restart: false,
  back_to_select_stages: false,
};
let key_code = {
  up: 87,
  down: 83,
  right: 68,
  left: 65,
  ok: 32,
  back: 66,
  shift: 16,
  shot: 32,
  restart: 82,
  back_to_title: 84,
};
let enemys_bullets = new Array();
let add_enemys_bullets = new Array();
let enemys = new Array();

function hsl(h, s, l) {
  if (h < 0) h = 0;
  if (s < 0) s = 0;
  if (l < 0) l = 0;
  if (h >= 360) h = 359;
  if (s > 100) s = 100;
  if (l > 100) l = 100;
  s /= 100;
  l /= 100;
  Cy = (1 - Math.abs(2 * l - 1)) * s;
  hh = h / 60;
  X = Cy * (1 - Math.abs((hh % 2) - 1));
  r = g = b = 0;
  if (hh >= 0 && hh < 1) {
    r = Cy;
    g = X;
  } else if (hh >= 1 && hh < 2) {
    r = X;
    g = Cy;
  } else if (hh >= 2 && hh < 3) {
    g = Cy;
    b = X;
  } else if (hh >= 3 && hh < 4) {
    g = X;
    b = Cy;
  } else if (hh >= 4 && hh < 5) {
    r = X;
    b = Cy;
  } else {
    r = Cy;
    b = X;
  }
  m = l - Cy / 2;
  r += m;
  g += m;
  b += m;
  r *= 255.0;
  g *= 255.0;
  b *= 255.0;
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);
  return "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")";
}

function rect_circle(position_01, size_01, position_02, size_02) {
  var point = { x: 0, y: 0 };
  var min01 = position_01.x - size_01[1];
  var max01 = position_01.x + size_01[1];
  var min02 = position_01.y - size_01[2];
  var max02 = position_01.y + size_01[2];
  if (position_02.x < min01) {
    point.x = min01;
  } else if (position_02.x > max01) {
    point.x = max01;
  } else {
    point.x = position_02.x;
  }
  if (position_02.y < min02) {
    point.y = min02;
  } else if (position_02.y > max02) {
    point.y = max02;
  } else {
    point.y = position_02.y;
  }
  if ((position_02.x - point.x) ** 2 + (position_02.y - point.y) ** 2 <= size_02.x ** 2) {
    return true;
  } else {
    return false;
  }
}

function circle_circle(position_01, size_01, position_02, size_02) {
  if ((position_01.x - position_02.x) ** 2 + (position_01.y - position_02.y) ** 2 <= (size_01.x + size_02[1]) ** 2) {
    return true;
  } else {
    return false;
  }
}

function rect_circle1(position_01, size_01, position_02, size_02) {
  var point = { x: 0, y: 0 };
  var min01 = position_01.x - size_01.x;
  var max01 = position_01.x + size_01.x;
  var min02 = position_01.y - size_01.y;
  var max02 = position_01.y + size_01.y;
  if (position_02.x < min01) {
    point.x = min01;
  } else if (position_02.x > max01) {
    point.x = max01;
  } else {
    point.x = position_02.x;
  }
  if (position_02.y < min02) {
    point.y = min02;
  } else if (position_02.y > max02) {
    point.y = max02;
  } else {
    point.y = position_02.y;
  }
  if ((position_02.x - point.x) ** 2 + (position_02.y - point.y) ** 2 <= size_02.x ** 2) {
    return true;
  } else {
    return false;
  }
}

function circle_circle1(position_01, size_01, position_02, size_02) {
  if ((position_01.x - position_02.x) ** 2 + (position_01.y - position_02.y) ** 2 <= (size_01.x + size_02.x) ** 2) {
    return true;
  } else {
    return false;
  }
}

function collision_detection(position_01, size_01, position_02, size_02) {
  if (size_02.length == 5) {
    position_02 = { x: position_02.x + size_02[3], y: position_02.y + size_02[4] };
    if (size_02[0] == "circle") {
      return circle_circle(position_01, size_01, position_02, size_02);
    } else {
      return rect_circle(position_02, size_02, position_01, size_01);
    }
  }
  if (size_02.shape == "circle") {
    return circle_circle1(position_01, size_01, position_02, size_02);
  } else {
    return rect_circle1(position_02, size_02, position_01, size_01);
  }
}

class Stage_add_enemies {
  constructor(stage = "stage1", difficulty = "normal") {
    this.stage = stage;
    this.difficulty = difficulty;
    this.time = 0;
    this.game_clear = false;
    this.add_enemies_list = {
      //id 1,5,8,10,15,16,19,20,25,29
      stage1: {
        easy: [
          { time: 1, id: 1, position: { x: 820, y: 100 }, appear: true },
          { time: 3, id: 1, position: { x: 820, y: 180 }, appear: true },
          { time: 5, id: 1, position: { x: 820, y: 250 }, appear: true },
          { time: 8, id: 25, position: { x: 820, y: 240 }, appear: true },
          { time: 14, id: 29, position: { x: 820, y: 180 }, appear: true },
          { time: 18, id: 29, position: { x: 820, y: 380 }, appear: true },
          { time: 22, id: 5, position: { x: 820, y: 240 }, appear: true },
          { time: 28, id: 8, position: { x: 820, y: 240 }, appear: true },
          { time: 35.5, id: 10, position: { x: 820, y: 240 }, appear: true },
          { time: 42.5, id: 16, position: { x: 820, y: 240 }, appear: true },
          { time: 47, id: 19, position: { x: 820, y: 240 }, appear: true },
          { time: 52, id: 20, position: { x: 820, y: 240 }, appear: true },
          { time: 57, id: 15, position: { x: 820, y: 240 }, appear: true },
        ],
        normal: [
          { time: 1, id: 1, position: { x: 820, y: 100 }, appear: true },
          { time: 2, id: 1, position: { x: 820, y: 300 }, appear: true },
          { time: 3, id: 1, position: { x: 820, y: 180 }, appear: true },
          { time: 4, id: 1, position: { x: 820, y: 400 }, appear: true },
          { time: 5, id: 1, position: { x: 820, y: 250 }, appear: true },
          { time: 8, id: 25, position: { x: 820, y: 240 }, appear: true },
          { time: 13, id: 29, position: { x: 820, y: 240 }, appear: true },
          { time: 16, id: 29, position: { x: 820, y: 100 }, appear: true },
          { time: 19, id: 29, position: { x: 820, y: 380 }, appear: true },
          { time: 22, id: 5, position: { x: 820, y: 240 }, appear: true },
          { time: 28, id: 8, position: { x: 820, y: 240 }, appear: true },
          { time: 33, id: 10, position: { x: 820, y: 240 }, appear: true },
          { time: 39, id: 16, position: { x: 820, y: 240 }, appear: true },
          { time: 42, id: 16, position: { x: 820, y: 360 }, appear: true },
          { time: 45, id: 16, position: { x: 820, y: 120 }, appear: true },
          { time: 48, id: 19, position: { x: 820, y: 240 }, appear: true },
          { time: 52, id: 20, position: { x: 820, y: 240 }, appear: true },
          { time: 57, id: 15, position: { x: 820, y: 100 }, appear: true },
          { time: 57, id: 15, position: { x: 820, y: 300 }, appear: true },
        ],
        hard: [
          { time: 1, id: 1, position: { x: 820, y: 100 }, appear: true },
          { time: 2, id: 1, position: { x: 820, y: 300 }, appear: true },
          { time: 3, id: 1, position: { x: 820, y: 180 }, appear: true },
          { time: 4, id: 1, position: { x: 820, y: 400 }, appear: true },
          { time: 5, id: 1, position: { x: 820, y: 250 }, appear: true },
          { time: 8, id: 25, position: { x: 820, y: 240 }, appear: true },
          { time: 13, id: 29, position: { x: 820, y: 240 }, appear: true },
          { time: 16, id: 29, position: { x: 820, y: 100 }, appear: true },
          { time: 19, id: 29, position: { x: 820, y: 380 }, appear: true },
          { time: 22, id: 5, position: { x: 820, y: 240 }, appear: true },
          { time: 28, id: 8, position: { x: 820, y: 240 }, appear: true },
          { time: 33, id: 10, position: { x: 820, y: 240 }, appear: true },
          { time: 39, id: 16, position: { x: 820, y: 240 }, appear: true },
          { time: 42, id: 16, position: { x: 820, y: 360 }, appear: true },
          { time: 45, id: 16, position: { x: 820, y: 120 }, appear: true },
          { time: 48, id: 19, position: { x: 820, y: 240 }, appear: true },
          { time: 52, id: 20, position: { x: 820, y: 240 }, appear: true },
          { time: 57, id: 15, position: { x: 820, y: 100 }, appear: true },
          { time: 57, id: 15, position: { x: 820, y: 300 }, appear: true },
        ],
      },
      //id 3,4,7,12,17,21,22,23,26,30
      stage2: {
        easy: [
          { time: 1, id: 30, position: { x: 820, y: 100 }, appear: true },
          { time: 1.4, id: 30, position: { x: 820, y: 200 }, appear: true },
          { time: 1.8, id: 30, position: { x: 820, y: 420 }, appear: true },
          { time: 2.2, id: 30, position: { x: 820, y: 260 }, appear: true },
          { time: 5, id: 3, position: { x: 820, y: 40 }, appear: true },
          { time: 11, id: 3, position: { x: 820, y: 260 }, appear: true },
          { time: 14, id: 4, position: { x: 820, y: 260 }, appear: true },
          { time: 17, id: 7, position: { x: 820, y: 260 }, appear: true },
          { time: 17.6, id: 7, position: { x: 820, y: 70 }, appear: true },
          { time: 18.2, id: 7, position: { x: 820, y: 340 }, appear: true },
          { time: 18.8, id: 7, position: { x: 820, y: 150 }, appear: true },
          { time: 20, id: 12, position: { x: 820, y: 150 }, appear: true },
          { time: 26, id: 17, position: { x: 820, y: 100 }, appear: true },
          { time: 30, id: 17, position: { x: 820, y: 190 }, appear: true },
          { time: 34, id: 17, position: { x: 820, y: 290 }, appear: true },
          { time: 38, id: 21, position: { x: 820, y: 150 }, appear: true },
          { time: 42, id: 21, position: { x: 820, y: 330 }, appear: true },
          { time: 46, id: 22, position: { x: 820, y: 240 }, appear: true },
          { time: 51, id: 23, position: { x: 820, y: 240 }, appear: true },
          { time: 57, id: 26, position: { x: 820, y: 100 }, appear: true },
          { time: 57, id: 26, position: { x: 820, y: 300 }, appear: true },
        ],
        normal: [
          { time: 1, id: 30, position: { x: 820, y: 100 }, appear: true },
          { time: 1.2, id: 30, position: { x: 820, y: 300 }, appear: true },
          { time: 1.4, id: 30, position: { x: 820, y: 200 }, appear: true },
          { time: 1.6, id: 30, position: { x: 820, y: 130 }, appear: true },
          { time: 1.8, id: 30, position: { x: 820, y: 420 }, appear: true },
          { time: 2, id: 30, position: { x: 820, y: 340 }, appear: true },
          { time: 2.2, id: 30, position: { x: 820, y: 260 }, appear: true },
          { time: 2.4, id: 30, position: { x: 820, y: 40 }, appear: true },
          { time: 5, id: 3, position: { x: 820, y: 40 }, appear: true },
          { time: 8, id: 3, position: { x: 820, y: 400 }, appear: true },
          { time: 11, id: 3, position: { x: 820, y: 260 }, appear: true },
          { time: 14, id: 4, position: { x: 820, y: 260 }, appear: true },
          { time: 17, id: 7, position: { x: 820, y: 260 }, appear: true },
          { time: 17.3, id: 7, position: { x: 820, y: 100 }, appear: true },
          { time: 17.6, id: 7, position: { x: 820, y: 400 }, appear: true },
          { time: 17.9, id: 7, position: { x: 820, y: 220 }, appear: true },
          { time: 18.2, id: 7, position: { x: 820, y: 340 }, appear: true },
          { time: 18.5, id: 7, position: { x: 820, y: 50 }, appear: true },
          { time: 18.8, id: 7, position: { x: 820, y: 150 }, appear: true },
          { time: 20, id: 12, position: { x: 820, y: 150 }, appear: true },
          { time: 26, id: 17, position: { x: 820, y: 100 }, appear: true },
          { time: 29, id: 17, position: { x: 820, y: 380 }, appear: true },
          { time: 32, id: 17, position: { x: 820, y: 190 }, appear: true },
          { time: 35, id: 17, position: { x: 820, y: 290 }, appear: true },
          { time: 38, id: 21, position: { x: 820, y: 150 }, appear: true },
          { time: 41, id: 21, position: { x: 820, y: 330 }, appear: true },
          { time: 44, id: 21, position: { x: 820, y: 240 }, appear: true },
          { time: 47, id: 22, position: { x: 820, y: 240 }, appear: true },
          { time: 51, id: 23, position: { x: 820, y: 240 }, appear: true },
          { time: 57, id: 26, position: { x: 820, y: 0 }, appear: true },
          { time: 57, id: 26, position: { x: 820, y: 100 }, appear: true },
          { time: 57, id: 26, position: { x: 820, y: 300 }, appear: true },
          { time: 57, id: 26, position: { x: 820, y: 400 }, appear: true },
        ],
        hard: [
          { time: 1, id: 30, position: { x: 820, y: 100 }, appear: true },
          { time: 1.2, id: 30, position: { x: 820, y: 300 }, appear: true },
          { time: 1.4, id: 30, position: { x: 820, y: 200 }, appear: true },
          { time: 1.6, id: 30, position: { x: 820, y: 130 }, appear: true },
          { time: 1.8, id: 30, position: { x: 820, y: 420 }, appear: true },
          { time: 2, id: 30, position: { x: 820, y: 340 }, appear: true },
          { time: 2.2, id: 30, position: { x: 820, y: 260 }, appear: true },
          { time: 2.4, id: 30, position: { x: 820, y: 40 }, appear: true },
          { time: 5, id: 3, position: { x: 820, y: 40 }, appear: true },
          { time: 8, id: 3, position: { x: 820, y: 400 }, appear: true },
          { time: 11, id: 3, position: { x: 820, y: 260 }, appear: true },
          { time: 14, id: 4, position: { x: 820, y: 260 }, appear: true },
          { time: 17, id: 7, position: { x: 820, y: 260 }, appear: true },
          { time: 17.3, id: 7, position: { x: 820, y: 100 }, appear: true },
          { time: 17.6, id: 7, position: { x: 820, y: 400 }, appear: true },
          { time: 17.9, id: 7, position: { x: 820, y: 220 }, appear: true },
          { time: 18.2, id: 7, position: { x: 820, y: 340 }, appear: true },
          { time: 18.5, id: 7, position: { x: 820, y: 50 }, appear: true },
          { time: 18.8, id: 7, position: { x: 820, y: 150 }, appear: true },
          { time: 20, id: 12, position: { x: 820, y: 150 }, appear: true },
          { time: 26, id: 17, position: { x: 820, y: 100 }, appear: true },
          { time: 29, id: 17, position: { x: 820, y: 380 }, appear: true },
          { time: 32, id: 17, position: { x: 820, y: 190 }, appear: true },
          { time: 35, id: 17, position: { x: 820, y: 290 }, appear: true },
          { time: 38, id: 21, position: { x: 820, y: 150 }, appear: true },
          { time: 41, id: 21, position: { x: 820, y: 330 }, appear: true },
          { time: 44, id: 21, position: { x: 820, y: 240 }, appear: true },
          { time: 47, id: 22, position: { x: 820, y: 240 }, appear: true },
          { time: 51, id: 23, position: { x: 820, y: 240 }, appear: true },
          { time: 57, id: 26, position: { x: 820, y: 0 }, appear: true },
          { time: 57, id: 26, position: { x: 820, y: 100 }, appear: true },
          { time: 57, id: 26, position: { x: 820, y: 300 }, appear: true },
          { time: 57, id: 26, position: { x: 820, y: 400 }, appear: true },
        ],
      },
      //id 2,6,9,11,13,14,18,24,27,28
      stage3: {
        easy: [
          { time: 1, id: 27, position: { x: 820, y: 100 }, appear: true },
          { time: 3, id: 27, position: { x: 820, y: 100 }, appear: true },
          { time: 5, id: 27, position: { x: 820, y: 380 }, appear: true },
          { time: 7, id: 27, position: { x: 820, y: 380 }, appear: true },
          { time: 9, id: 2, position: { x: 820, y: 40 }, appear: true },
          { time: 9.3, id: 2, position: { x: 820, y: 150 }, appear: true },
          { time: 9.6, id: 2, position: { x: 820, y: 400 }, appear: true },
          { time: 9.9, id: 2, position: { x: 820, y: 320 }, appear: true },
          { time: 11, id: 6, position: { x: 820, y: 240 }, appear: true },
          { time: 16, id: 9, position: { x: 820, y: 240 }, appear: true },
          { time: 21, id: 9, position: { x: 820, y: 120 }, appear: true },
          { time: 26, id: 11, position: { x: 820, y: 120 }, appear: true },
          { time: 30, id: 11, position: { x: 820, y: 220 }, appear: true },
          { time: 34, id: 13, position: { x: 820, y: 50 }, appear: true },
          { time: 34, id: 13, position: { x: 820, y: 390 }, appear: true },
          { time: 36.5, id: 14, position: { x: 820, y: 240 }, appear: true },
          { time: 41, id: 28, position: { x: 820, y: 220 }, appear: true },
          { time: 47, id: 18, position: { x: 820, y: 220 }, appear: true },
          { time: 51, id: 24, position: { x: 820, y: 140 }, appear: true },
          { time: 55, id: 24, position: { x: 820, y: 320 }, appear: true },
        ],
        normal: [
          { time: 1, id: 27, position: { x: 820, y: 100 }, appear: true },
          { time: 2, id: 27, position: { x: 820, y: 100 }, appear: true },
          { time: 3, id: 27, position: { x: 820, y: 100 }, appear: true },
          { time: 5, id: 27, position: { x: 820, y: 380 }, appear: true },
          { time: 6, id: 27, position: { x: 820, y: 380 }, appear: true },
          { time: 7, id: 27, position: { x: 820, y: 380 }, appear: true },
          { time: 9, id: 2, position: { x: 820, y: 40 }, appear: true },
          { time: 9.2, id: 2, position: { x: 820, y: 450 }, appear: true },
          { time: 9.4, id: 2, position: { x: 820, y: 200 }, appear: true },
          { time: 9.6, id: 2, position: { x: 820, y: 370 }, appear: true },
          { time: 9.8, id: 2, position: { x: 820, y: 220 }, appear: true },
          { time: 10, id: 2, position: { x: 820, y: 100 }, appear: true },
          { time: 11, id: 6, position: { x: 820, y: 240 }, appear: true },
          { time: 16, id: 9, position: { x: 820, y: 240 }, appear: true },
          { time: 19, id: 9, position: { x: 820, y: 120 }, appear: true },
          { time: 22, id: 9, position: { x: 820, y: 360 }, appear: true },
          { time: 25, id: 11, position: { x: 820, y: 120 }, appear: true },
          { time: 28, id: 11, position: { x: 820, y: 300 }, appear: true },
          { time: 31, id: 11, position: { x: 820, y: 220 }, appear: true },
          { time: 35, id: 13, position: { x: 820, y: 50 }, appear: true },
          { time: 35, id: 13, position: { x: 820, y: 220 }, appear: true },
          { time: 35, id: 13, position: { x: 820, y: 390 }, appear: true },
          { time: 38, id: 14, position: { x: 820, y: 240 }, appear: true },
          { time: 42, id: 28, position: { x: 820, y: 220 }, appear: true },
          { time: 47, id: 18, position: { x: 820, y: 220 }, appear: true },
          { time: 51, id: 24, position: { x: 820, y: 140 }, appear: true },
          { time: 55, id: 24, position: { x: 820, y: 320 }, appear: true },
        ],
        hard: [
          { time: 1, id: 27, position: { x: 820, y: 100 }, appear: true },
          { time: 2, id: 27, position: { x: 820, y: 100 }, appear: true },
          { time: 3, id: 27, position: { x: 820, y: 100 }, appear: true },
          { time: 5, id: 27, position: { x: 820, y: 380 }, appear: true },
          { time: 6, id: 27, position: { x: 820, y: 380 }, appear: true },
          { time: 7, id: 27, position: { x: 820, y: 380 }, appear: true },
          { time: 9, id: 2, position: { x: 820, y: 40 }, appear: true },
          { time: 9.2, id: 2, position: { x: 820, y: 450 }, appear: true },
          { time: 9.4, id: 2, position: { x: 820, y: 200 }, appear: true },
          { time: 9.6, id: 2, position: { x: 820, y: 370 }, appear: true },
          { time: 9.8, id: 2, position: { x: 820, y: 220 }, appear: true },
          { time: 10, id: 2, position: { x: 820, y: 100 }, appear: true },
          { time: 11, id: 6, position: { x: 820, y: 240 }, appear: true },
          { time: 16, id: 9, position: { x: 820, y: 240 }, appear: true },
          { time: 19, id: 9, position: { x: 820, y: 120 }, appear: true },
          { time: 22, id: 9, position: { x: 820, y: 360 }, appear: true },
          { time: 25, id: 11, position: { x: 820, y: 120 }, appear: true },
          { time: 28, id: 11, position: { x: 820, y: 300 }, appear: true },
          { time: 31, id: 11, position: { x: 820, y: 220 }, appear: true },
          { time: 35, id: 13, position: { x: 820, y: 50 }, appear: true },
          { time: 35, id: 13, position: { x: 820, y: 220 }, appear: true },
          { time: 35, id: 13, position: { x: 820, y: 390 }, appear: true },
          { time: 38, id: 14, position: { x: 820, y: 240 }, appear: true },
          { time: 42, id: 28, position: { x: 820, y: 220 }, appear: true },
          { time: 47, id: 18, position: { x: 820, y: 220 }, appear: true },
          { time: 51, id: 24, position: { x: 820, y: 140 }, appear: true },
          { time: 55, id: 24, position: { x: 820, y: 320 }, appear: true },
        ],
      },
      stageEX: {
        EX: [
          { time: 1, id: 1, position: { x: 820, y: 100 }, appear: true },
          { time: 1.5, id: 1, position: { x: 820, y: 100 }, appear: true },
          { time: 2, id: 1, position: { x: 820, y: 100 }, appear: true },
          { time: 2.5, id: 1, position: { x: 820, y: 100 }, appear: true },
          { time: 3, id: 1, position: { x: 820, y: 100 }, appear: true },
          { time: 4, id: 2, position: { x: 780, y: 100 }, appear: true },
          { time: 4, id: 2, position: { x: 800, y: 220 }, appear: true },
          { time: 4, id: 2, position: { x: 784, y: 400 }, appear: true },
          { time: 4, id: 2, position: { x: 830, y: 360 }, appear: true },
          { time: 4, id: 2, position: { x: 830, y: 200 }, appear: true },
          { time: 4, id: 2, position: { x: 810, y: 300 }, appear: true },
          { time: 6, id: 3, position: { x: 810, y: 300 }, appear: true },
          { time: 7, id: 3, position: { x: 810, y: 300 }, appear: true },
          { time: 8, id: 3, position: { x: 810, y: 300 }, appear: true },
          { time: 9, id: 4, position: { x: 810, y: 300 }, appear: true },
          { time: 11, id: 4, position: { x: 810, y: 100 }, appear: true },
          { time: 13, id: 4, position: { x: 810, y: 200 }, appear: true },
          { time: 15, id: 5, position: { x: 810, y: 200 }, appear: true },
          { time: 18, id: 6, position: { x: 810, y: 200 }, appear: true },
          { time: 22, id: 7, position: { x: 810, y: 200 }, appear: true },
          { time: 22.5, id: 7, position: { x: 810, y: 100 }, appear: true },
          { time: 23, id: 7, position: { x: 810, y: 370 }, appear: true },
          { time: 23.5, id: 7, position: { x: 810, y: 280 }, appear: true },
          { time: 24, id: 8, position: { x: 810, y: 370 }, appear: true },
          { time: 25, id: 8, position: { x: 810, y: 50 }, appear: true },
          { time: 26, id: 8, position: { x: 810, y: 250 }, appear: true },
          { time: 28.5, id: 9, position: { x: 810, y: 250 }, appear: true },
          { time: 29, id: 9, position: { x: 810, y: 100 }, appear: true },
          { time: 29.5, id: 9, position: { x: 810, y: 350 }, appear: true },
          { time: 30, id: 9, position: { x: 810, y: 170 }, appear: true },
          { time: 30.5, id: 9, position: { x: 810, y: 290 }, appear: true },
          { time: 32, id: 10, position: { x: 810, y: 210 }, appear: true },
          { time: 36, id: 11, position: { x: 810, y: 100 }, appear: true },
          { time: 37, id: 11, position: { x: 810, y: 310 }, appear: true },
          { time: 38, id: 11, position: { x: 810, y: 210 }, appear: true },
          { time: 41, id: 12, position: { x: 810, y: 210 }, appear: true },
          { time: 46, id: 13, position: { x: 810, y: 10 }, appear: true },
          { time: 46, id: 13, position: { x: 810, y: 105 }, appear: true },
          { time: 46, id: 13, position: { x: 810, y: 200 }, appear: true },
          { time: 46, id: 13, position: { x: 810, y: 295 }, appear: true },
          { time: 46, id: 13, position: { x: 810, y: 390 }, appear: true },
          { time: 46, id: 13, position: { x: 810, y: 485 }, appear: true },
        ],
      },
    };
  }
  add_enemies() {
    let list = this.add_enemies_list[this.stage][this.difficulty];
    if (character.life > 0) {
      if ((this.difficulty == "easy" || this.difficulty == "normal" || this.difficulty == "hard") && this.time > 60) {
        enemys_bullets = new Array();
        add_enemys_bullets = new Array();
        this.game_clear = true;
        character.clear_history[this.stage] = true;
        if (character.clear_history.stage1 && character.clear_history.stage2 && character.clear_history.stage3) character.achievements[0] = true;
        c.font = "50px ＭＳ Ｐゴシック";
        c.textAlign = "center";
        c.fillText("GAME CLEAR", 360, 250);
        c.font = "20px ＭＳ Ｐゴシック";
        c.fillText("restart: press r", 360, 280);
        c.fillText("select stages: press t", 360, 310);
        if (key.back_to_select_stages) {
          game_scene.scene = "select stages";
          this.reset_stage();
        } else if (key.restart) {
          this.reset_stage();
        }
      } else if (this.difficulty == "EX" && this.time > 50) {
        enemys_bullets = new Array();
        add_enemys_bullets = new Array();
        this.game_clear = true;
        character.clear_history[this.stage] = true;
        character.achievements[2] = true;
        c.font = "50px ＭＳ Ｐゴシック";
        c.textAlign = "center";
        c.fillText("GAME CLEAR", 360, 250);
        c.font = "20px ＭＳ Ｐゴシック";
        c.fillText("restart: press r", 360, 280);
        c.fillText("select stages: press t", 360, 310);
        if (key.back_to_select_stages) {
          game_scene.scene = "select stages";
          this.reset_stage();
        } else if (key.restart) {
          this.reset_stage();
        }
      } else {
        for (let i = 0; i < list.length; i++) {
          if (list[i].appear) {
            if (this.time >= list[i].time) {
              if (list[i].id == 1) enemys.push(new Enemy_001(list[i].position, this.difficulty));
              if (list[i].id == 2) enemys.push(new Enemy_002(list[i].position, this.difficulty));
              if (list[i].id == 3) enemys.push(new Enemy_003(list[i].position, this.difficulty));
              if (list[i].id == 4) enemys.push(new Enemy_004(list[i].position, this.difficulty));
              if (list[i].id == 5) enemys.push(new Enemy_005(list[i].position, this.difficulty));
              if (list[i].id == 6) enemys.push(new Enemy_006(list[i].position, this.difficulty));
              if (list[i].id == 7) enemys.push(new Enemy_007(list[i].position, this.difficulty));
              if (list[i].id == 8) enemys.push(new Enemy_008(list[i].position, this.difficulty));
              if (list[i].id == 9) enemys.push(new Enemy_009(list[i].position, this.difficulty));
              if (list[i].id == 10) enemys.push(new Enemy_010(list[i].position, this.difficulty));
              if (list[i].id == 11) enemys.push(new Enemy_011(list[i].position, this.difficulty));
              if (list[i].id == 12) enemys.push(new Enemy_012(list[i].position, this.difficulty));
              if (list[i].id == 13) enemys.push(new Enemy_013(list[i].position, this.difficulty));
              if (list[i].id == 14) enemys.push(new Enemy_014(list[i].position, this.difficulty));
              if (list[i].id == 15) enemys.push(new Enemy_015(list[i].position, this.difficulty));
              if (list[i].id == 16) enemys.push(new Enemy_016(list[i].position, this.difficulty));
              if (list[i].id == 17) enemys.push(new Enemy_017(list[i].position, this.difficulty));
              if (list[i].id == 18) enemys.push(new Enemy_018(list[i].position, this.difficulty));
              if (list[i].id == 19) enemys.push(new Enemy_019(list[i].position, this.difficulty));
              if (list[i].id == 20) enemys.push(new Enemy_020(list[i].position, this.difficulty));
              if (list[i].id == 21) enemys.push(new Enemy_021(list[i].position, this.difficulty));
              if (list[i].id == 22) enemys.push(new Enemy_022(list[i].position, this.difficulty));
              if (list[i].id == 23) enemys.push(new Enemy_023(list[i].position, this.difficulty));
              if (list[i].id == 24) enemys.push(new Enemy_024(list[i].position, this.difficulty));
              if (list[i].id == 25) enemys.push(new Enemy_025(list[i].position, this.difficulty));
              if (list[i].id == 26) enemys.push(new Enemy_026(list[i].position, this.difficulty));
              if (list[i].id == 27) enemys.push(new Enemy_027(list[i].position, this.difficulty));
              if (list[i].id == 28) enemys.push(new Enemy_028(list[i].position, this.difficulty));
              if (list[i].id == 29) enemys.push(new Enemy_029(list[i].position, this.difficulty));
              if (list[i].id == 30) enemys.push(new Enemy_030(list[i].position, this.difficulty));
              list[i].appear = false;
            }
          }
        }
      }
    } else {
      c.font = "50px ＭＳ Ｐゴシック";
      c.textAlign = "center";
      c.fillText("GAME OVER", 360, 250);
      c.font = "20px ＭＳ Ｐゴシック";
      c.fillText("restart: press r", 360, 280);
      c.fillText("select stages: press t", 360, 310);
      if (key.back_to_select_stages) {
        game_scene.scene = "select stages";
        this.reset_stage();
      } else if (key.restart) {
        this.reset_stage();
      }
    }
  }
  reset_stage() {
    character.life = 1;
    character.position = { x: 50, y: 240 };
    character.bullets = new Array();
    character.relode = 0;
    enemys_bullets = new Array();
    add_enemys_bullets = new Array();
    enemys = new Array();
    stage_add_enemies = new Stage_add_enemies(this.stage, this.difficulty);
  }
  get_difficulties_list() {
    return Object.keys(this.add_enemies_list[this.stage]);
  }
  update() {
    this.time += delta;
    this.add_enemies();
  }
}

let stage_add_enemies = new Stage_add_enemies();
let character = new Character();

class Game_scene {
  constructor() {
    this.scene = "title";
    this.text_transparency = 1;
    this.title_character_height = 0;
    this.key_count = [0, 0, 0, 0, 0, 0];
    this.select_slide = 720;
    this.select_menus_cursor = { x: 0, y: 0 };
    this.select_stages_cursor = { x: 0, y: 0 };
    this.select_difficulties_cursor = { x: 0, y: 0 };
    this.tutorial_time = 0;
  }
  update() {
    for (var i = 0; i < 6; i++) {
      this.key_count[i] -= delta;
    }
    if (this.scene == "title") {
      this.title();
    } else if (this.scene == "select") {
      this.select();
    } else if (this.scene == "tutorial") {
      this.tutorial();
    } else if (this.scene == "select stages") {
      this.select_stages();
    } else if (this.scene == "select_difficulties") {
      this.select_difficulties();
    } else if (this.scene == "play_stage") {
      this.play_stage();
    } else if (this.scene == "settings") {
      this.settings();
    } else if (this.scene == "achievements") {
      this.achievements();
    }
  }
  title() {
    c.font = "50px Arial";
    c.fillText("ブーンの大冒険", 360, 100);
    c.font = "20px ＭＳ Ｐゴシック";
    c.textAlign = "left";
    let text = ["　　　　　　　／⌒ヽ", " ⊂二二二（　＾ω＾）二⊃", "　　　　　　|　　　 /", "　　 　　　 （　ヽノ", "　　　　　　 ﾉ>ノ", "　　 三　　レﾚ"];
    this.title_character_height += 1.5 * delta;
    for (let i in text) {
      c.fillText(text[i], 360 - 106, 210 + 19 * i - 16 + Math.cos(this.title_character_height) * 20);
    }
    c.fillStyle = "red";
    c.beginPath();
    c.arc(360, 220 + Math.cos(this.title_character_height) * 20, 5, 0, 2 * Math.PI);
    c.closePath();
    c.fill();
    c.textAlign = "center";
    c.fillStyle = "yellow";
    c.font = "30px Arial";
    this.text_transparency += 0.8 * delta;
    c.globalAlpha = Math.abs(Math.cos(this.text_transparency));
    c.fillText("press   space", 360, 370);
    c.globalAlpha = 1;
    if (key.ok && this.key_count[4] < 0) {
      this.key_count[4] = 1;
      this.scene = "select";
    }
  }
  select() {
    this.select_slide -= 720 * 5 * delta;
    if (this.select_slide < 0) this.select_slide = 0;
    c.textAlign = "center";
    c.fillStyle = "white";
    c.font = "30px Arial";
    c.fillText("selecting menus", 360, 50);
    c.save();
    c.translate(this.select_slide, 0);
    let select_menus_text = [
      ["tutorial", "select stages"],
      ["settings", "achievements"],
    ];
    if (key.up) {
      this.select_menus_cursor.y = 0;
    } else if (key.left) {
      this.select_menus_cursor.x = 0;
    } else if (key.down) {
      this.select_menus_cursor.y = 1;
    } else if (key.right) {
      this.select_menus_cursor.x = 1;
    } else if (key.ok && this.key_count[4] < 0) {
      this.select_slide = 720;
      this.key_count[4] = 1;
      this.scene = select_menus_text[this.select_menus_cursor.y][this.select_menus_cursor.x];
    }
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        if (j == this.select_menus_cursor.x && i == this.select_menus_cursor.y) {
          c.fillStyle = "yellow";
        } else {
          c.fillStyle = "white";
        }
        c.fillText(select_menus_text[i][j], 180 + 360 * j, 200 + 150 * i);
      }
    }
    c.restore();
  }
  tutorial() {
    this.tutorial_time += delta;
    character.move();
    c.font = "30px Arial";
    c.fillStyle = "white";
    c.textAlign = "center";
    c.fillText("操作してみよう!", 360, 430);
    if (this.tutorial_time < 3) {
      c.fillText("十字キーまたはwasdで移動", 360, 50);
    } else if (this.tutorial_time < 6) {
      c.fillText("shiftで移動速度を下げる", 360, 50);
    } else if (this.tutorial_time < 9) {
      c.fillText("spaceで弾を発射", 360, 50);
    } else if (this.tutorial_time < 12) {
      c.fillText("一度でも攻撃があたると", 360, 50);
      c.fillText("ステージの最初からやり直し", 360, 80);
    } else if (this.tutorial_time < 15) {
      c.fillText("60秒間生き残れたらクリア", 360, 50);
      c.fillText("(stageEXは50秒間)", 360, 80);
    } else if (this.tutorial_time < 18) {
      c.fillText("頑張ってクリアしてね", 360, 50);
    } else {
      character.position = { x: 50, y: 240 };
      character.bullets = new Array();
      character.relode = 0;
      this.scene = "select";
      this.tutorial_time = 0;
      this.key_count[4] = 1;
      this.key_count[0] = 1;
    }
  }
  select_stages() {
    this.select_slide -= 720 * 5 * delta;
    if (this.select_slide < 0) this.select_slide = 0;
    c.textAlign = "center";
    c.fillStyle = "white";
    c.font = "30px Arial";
    c.fillText("select stages", 360, 50);
    c.save();
    c.translate(this.select_slide, 0);
    let select_stages_text = [
      ["stage1", "stage2"],
      ["stage3", "stageEX"],
    ];
    if (key.back && this.key_count[5] < 0) {
      this.select_slide = 720;
      this.key_count[5] = 0.5;
      this.scene = "select";
    } else if (key.up) {
      this.select_stages_cursor.y = 0;
    } else if (key.left) {
      this.select_stages_cursor.x = 0;
    } else if (key.down) {
      this.select_stages_cursor.y = 1;
    } else if (key.right) {
      this.select_stages_cursor.x = 1;
    } else if (key.ok && this.key_count[4] < 0) {
      this.key_count[4] = 1;
      this.select_slide = 720;
      stage_add_enemies.stage = select_stages_text[this.select_stages_cursor.y][this.select_stages_cursor.x];
      this.scene = "select_difficulties";
    }
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        if (j == this.select_stages_cursor.x && i == this.select_stages_cursor.y) {
          c.fillStyle = "yellow";
        } else {
          c.fillStyle = "white";
        }
        c.fillText(select_stages_text[i][j], 180 + 360 * j, 200 + 150 * i);
      }
    }
    c.restore();
  }
  select_difficulties() {
    this.select_slide -= 720 * 5 * delta;
    if (this.select_slide < 0) this.select_slide = 0;
    c.textAlign = "center";
    c.fillStyle = "white";
    c.font = "30px Arial";
    c.fillText("select difficulties", 360, 50);
    c.save();
    c.translate(this.select_slide, 0);
    let select_difficulties_text = stage_add_enemies.get_difficulties_list();
    if (key.back && this.key_count[5] < 0) {
      this.select_difficulties_cursor = { x: 0, y: 0 };
      this.select_slide = 720;
      this.key_count[5] = 0.5;
      this.scene = "select stages";
    } else if (key.up && this.key_count[0] < 0) {
      this.key_count[0] = 0.3;
      this.select_difficulties_cursor.y--;
      if (this.select_difficulties_cursor.y < 0) {
        this.select_difficulties_cursor.y = 0;
      }
    } else if (key.down && this.key_count[0] < 0) {
      this.key_count[0] = 0.3;
      this.select_difficulties_cursor.y++;
      if (this.select_difficulties_cursor.y >= select_difficulties_text.length) {
        this.select_difficulties_cursor.y = select_difficulties_text.length - 1;
      }
    } else if (key.ok && this.key_count[4] < 0) {
      this.select_slide = 720;
      this.key_count[4] = 1;
      stage_add_enemies.difficulty = select_difficulties_text[this.select_difficulties_cursor.y];
      this.scene = "play_stage";
      this.select_difficulties_cursor = { x: 0, y: 0 };
    }
    for (let i = 0; i < select_difficulties_text.length; i++) {
      if (i == this.select_difficulties_cursor.y) {
        c.fillStyle = "yellow";
      } else {
        c.fillStyle = "white";
      }
      c.fillText(select_difficulties_text[i], 360, 150 + 120 * i);
    }
    c.restore();
  }
  play_stage() {
    stage_add_enemies.update();
    character.move();
    enemys = enemys.filter((value) => {
      return !value.update();
    });
    enemys_bullets = enemys_bullets.filter((value) => {
      return !value.update();
    });
    for (var i in add_enemys_bullets) {
      enemys_bullets.push(add_enemys_bullets[i]);
    }
    add_enemys_bullets = new Array();
  }
  settings() {
    c.textAlign = "center";
    c.fillStyle = "white";
    c.font = "30px Arial";
    c.fillText("tを押すとプレイヤーの体力を10億にするよ", 360, 240);
    c.fillText("(F5を押すまたはステージをクリアすると、リセット)", 360, 270);
    if (key.back_to_select_stages) {
      character.life = 1000000000;
    }
    if (key.back && this.key_count[5] < 0) {
      this.key_count[5] = 1;
      this.scene = "select";
    }
  }
  achievements() {
    c.textAlign = "left";
    c.fillStyle = "white";
    c.font = "30px Arial";
    c.fillText("実績1:", 50, 100);
    if (character.achievements[0]) c.fillText("Thank you for playing", 150, 100);
    c.fillText("実績2:", 50, 200);
    if (character.achievements[1]) c.fillText("時間の無駄遣い", 150, 200);
    c.fillText("実績3:", 50, 300);
    if (character.achievements[2]) c.fillText("チート使ったよね?", 150, 300);
    c.font = "20px Arial";
    c.fillText("stage1,2,3をクリアすると達成", 140, 130);
    c.fillText("プレイ時間が10分を超えると達成", 140, 230);
    c.fillText("stageEXをクリアすると達成", 140, 330);
    c.textAlign = "center";
    c.fillText("※セーブとか無いので、サイトを閉じると全てリセットされます", 360, 400);
    c.fillText("※実績を達成しても通知はないので、ここで確認してください", 360, 430);
    if (key.back && this.key_count[5] < 0) {
      this.key_count[5] = 1;
      this.scene = "select";
    }
  }
}

let game_scene = new Game_scene();

function style_reset() {
  c.fillStyle = "white";
  c.strokeStyle = "white";
  c.textAlign = "center";
  c.font = "25px Arial";
  c.textBaseline = "alphabetic";
  c.lineWidth = 2;
}

function main() {
  if (then == 0) {
    then = performance.now();
  } else {
    now = performance.now();
    if (now - first > 600000) {
      character.achievements[1] = true;
    }
    delta = (now - then) / 1000;
    fps = 1 / delta;
    then = performance.now();
    c.clearRect(-10000, -10000, 20000, 20000);
    c.fillStyle = "black";
    c.fillRect(0, 0, 720, 480);
    c.strokeStyle = "white";
    c.lineWidth = 2;
    c.strokeRect(0, 0, 720, 480);
    c.fillStyle = "white";
    c.textAlign = "right";
    c.font = "15px Arial";
    c.fillText("fps " + Math.floor(fps * 10) / 10, 718, 15);
    style_reset();
    game_scene.update();
  }
  requestAnimationFrame(main);
}
requestAnimationFrame(main);

window.onkeydown = function (e) {
  if (e.keyCode == key_code.up) key.up = true;
  if (e.keyCode == key_code.down) key.down = true;
  if (e.keyCode == key_code.right) key.right = true;
  if (e.keyCode == key_code.left) key.left = true;
  if (e.keyCode == key_code.ok) key.ok = true;
  if (e.keyCode == key_code.back) key.back = true;
  if (e.keyCode == key_code.shift) key.shift = true;
  if (e.keyCode == key_code.shot) key.shot = true;
  if (e.keyCode == key_code.restart) key.restart = true;
  if (e.keyCode == key_code.back_to_title) key.back_to_select_stages = true;
};
window.onkeyup = function (e) {
  if (e.keyCode == key_code.up) key.up = false;
  if (e.keyCode == key_code.down) key.down = false;
  if (e.keyCode == key_code.right) key.right = false;
  if (e.keyCode == key_code.left) key.left = false;
  if (e.keyCode == key_code.ok) key.ok = false;
  if (e.keyCode == key_code.back) key.back = false;
  if (e.keyCode == key_code.shift) key.shift = false;
  if (e.keyCode == key_code.shot) key.shot = false;
  if (e.keyCode == key_code.restart) key.restart = false;
  if (e.keyCode == key_code.back_to_title) key.back_to_select_stages = false;
};
