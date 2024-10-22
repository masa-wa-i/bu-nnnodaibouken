let enemies_status = {
  enemy1: {
    enemy: ["　　　　∧__∧", "　　　（　´∀｀）", "　　　(　O┬O", "≡◎-ヽJ┴◎"],
    add_x: -35,
    add_y: 15,
    space: 12,
    shot_times: 5,
    detection: [["rect", 16, 22, -40, 17]],
    reverse: "TRUE",
    font_size: 10,
  },
  enemy2: {
    enemy: ["　△", "( ﾟдﾟ)", "(　　)", "　)ノ"],
    add_x: -15,
    add_y: 13,
    space: 15,
    shot_times: 0,
    detection: [
      ["rect", 17, 20, -18, 17],
      ["rect", 5, 30, -18, 17],
    ],
    reverse: "TRUE",
    font_size: 15,
  },
  enemy3: {
    enemy: ["ﾟ ｡　∧＿∧　ﾟ。", "ﾟ　・（ﾟ´Д｀ﾟ ）。　", "　　 （つ　　 ⊃　", "　　　 ヾ(⌒ﾉ", "　　　　　` J"],
    add_x: 40,
    add_y: 20,
    space: 15,
    shot_times: 3,
    detection: [
      ["rect", 25, 20, 45, 10],
      ["rect", 10, 15, 55, 45],
    ],
    reverse: "FALSE",
    font_size: 13,
  },
  enemy4: {
    enemy: [" ∧＿∧", "（　´∀｀）", "（　　　　）", "｜ ｜　|", "（_＿）＿）"],
    add_x: -40,
    add_y: 10,
    space: 15,
    shot_times: 2,
    detection: [["rect", 23, 35, -24, 28]],
    reverse: "TRUE",
    font_size: 13,
  },
  enemy5: {
    enemy: [" ｳｨｰｯｽ　 ∧＿∧∩", " 　　　　　（´∀｀*//", "　　　⊂二 　 　 ／", "　　　 |　　)　　/", "　 口口/　　 ￣）", "　　　　 ( <⌒<.<", "　　　　　>/"],
    add_x: 0,
    add_y: 0,
    space: 15,
    shot_times: 0,
    detection: [
      ["rect", 25, 15, 77, 5],
      ["rect", 35, 5, 62, 25],
      ["rect", 15, 10, 65, 40],
      ["rect", 23, 13, 69, 63],
      ["rect", 7, 7, 50, 83],
    ],
    reverse: "FALSE",
    font_size: 13,
  },
  enemy6: {
    enemy: [
      "　　 おまいら、もちつけ",
      "　　　　　／＼⌒ヽﾍﾟﾀﾝ",
      "　　　／　 ／⌒)ﾉ ﾍﾟﾀﾝ",
      "　 ∧＿∧ ＼ （(　∧＿∧",
      "　（； ´Д｀））'　））（・∀・ ；）",
      "　/　　⌒ノ　（ ⌒ヽ⊂⌒ヽ",
      ".（O　　 ﾉ　)￣￣￣(）__ 　 ）",
      "　）_）＿） （;;;;;;;;;;;;;;;;;;;）（＿（",
    ],
    add_x: 80,
    add_y: 70,
    space: 15,
    shot_times: 1,
    detection: [
      ["rect", 65, 35, 77, 70],
      ["rect", 35, 20, 80, 25],
    ],
    reverse: "FALSE",
    font_size: 13,
  },
  enemy7: {
    enemy: [
      ".　　　　　　　∧＿∧",
      "　　　　　　　（；´Д｀）",
      "　　-=≡ 　/　　　 ヽ",
      ".　　　　　 /|　|　　 |. |",
      "　-=≡　/.　＼ヽ／＼＼_",
      "　　　　/　　　 ヽ⌒)==ヽ_）=　∧＿∧",
      "-= 　 /　/⌒＼.＼　||　　|| 　(´･ω･`)",
      "　　／ ／　　　 >　） || 　 ||　( つ旦O",
      "　/　/ 　　　　/ ／＿||＿ ||　と＿)＿) ＿.",
      "　し'　　　　　（＿つ￣(_））￣ (.)）￣ (_））￣(.)）",
    ],
    add_x: 0,
    add_y: 0,
    space: 10,
    shot_times: 0,
    detection: [
      ["rect", 20, 40, -65, 35],
      ["rect", 58, 25, -85, 65],
      ["rect", 85, 7, -90, 85],
    ],
    reverse: "TRUE",
    font_size: 10,
  },
  enemy8: {
    enemy: [
      "　　　　　　　　おにぎりワッショイ！！",
      "　　　　　＼＼　 おにぎりワッショイ！！　／／",
      "　+　　　+　＼＼　おにぎりワッショイ！！／+",
      "　　　　　　　　　　　　　　　　　　　　　　　　　　　　+",
      ".　　　+　　 ／■＼　　／■＼　 ／■＼　　+",
      "　　　　　　（　´∀｀∩（´∀｀∩）（　´∀｀）",
      "　+　　（(　（つ　　　ノ（つ　　丿（つ　　つ　)）　　+",
      "　　　　　　 ヽ　 （　ﾉ　（　ヽノ　　）　）　）",
      "　　　　　　　（＿）し'　し（＿）　（＿）＿）",
    ],
    add_x: 100,
    add_y: 60,
    space: 10,
    shot_times: 5,
    detection: [["rect", 60, 25, 100, 55]],
    reverse: "FALSE",
    font_size: 10,
  },
  enemy9: {
    enemy: ["　　　　　＿＿＿", "∧ ∧ ＜ ﾁﾗﾈｰﾖ", "(´ー｀)_/|￣￣￣", "　UU UU"],
    add_x: 20,
    add_y: 23,
    space: 15,
    shot_times: 5,
    detection: [
      ["rect", 23, 13, 33, 32],
      ["rect", 15, 13, 15, 20],
    ],
    reverse: "FALSE",
    font_size: 15,
  },
  enemy10: {
    enemy: [
      "　　　　　　ｵ､ｵ、ｵﾜﾀｰｵﾜｵﾜｵﾜﾀｰ♪",
      "　　　　　　＼　　　　ｵｵｵｵﾜﾀｰｵﾜｵｵﾜｵﾜﾀ／",
      "　　　　　　　　　♪＼(^o^)　♪",
      "　　　　　　　　　 ＿　 ) 　> ＿ ｷｭｯｷｭ♪",
      "　　　　　　　　／.◎。／◎｡／|",
      "　 ＼(^o^)／.|￣￣￣￣￣|　 | 　＼(^o^)／",
      "　　　 )　 )　 .| 　 　 　 　 　|／　　　ノ　ノ",
      "((((　 >￣ > ))))　＼(^o^)／　(((　<￣<　))))",
      "　　　　　　　　　 　 　)　　)",
      "　　　　　　　　　((( 　 >￣ > ))))",
    ],
    add_x: 110,
    add_y: 50,
    space: 13,
    shot_times: 1,
    detection: [
      ["rect", 105, 20, 115, 70],
      ["rect", 40, 50, 120, 65],
    ],
    reverse: "FALSE",
    font_size: 13,
  },
  enemy11: {
    enemy: ["　　　∧ ∧＿__", " 　／(ﾟーﾟ*)　／＼", "／|￣∪∪￣|＼／", "　 |　 しぃ 　 |／", "　 ￣￣￣￣"],
    add_x: 45,
    add_y: 25,
    space: 15,
    shot_times: 5,
    detection: [
      ["rect", 35, 25, 50, 25],
      ["circle", 20, 20, 85, 20],
      ["rect", 15, 10, 47, 0],
    ],
    reverse: "FALSE",
    font_size: 15,
  },
  enemy12: {
    enemy: ["　　m9　三　9m", "　彡　　∧∧　　ミ", "m9　　(^Д^)　　9m　ﾌﾟｷﾞｬﾌﾟｷﾞｬﾌﾟｷﾞｬﾌﾟｷﾞｬｰ!!", "　ヾヽ＼　ｙ　 ）　彡", "　　m9／三　9m", "　　　∪￣￣￣＼)"],
    add_x: 50,
    add_y: 30,
    space: 13,
    shot_times: 5,
    detection: [["rect", 40, 37, 58, 27]],
    reverse: "FALSE",
    font_size: 13,
  },
  enemy13: {
    enemy: [
      "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　＿_ ＿",
      "　 　 　 ┏┳┳┓ 　 　┏┓ 　　　　　　　　　　　　　_ _(_)／ 　 　 　　＼　プギャー！！",
      "┏━━┛┗╋┛┏━┛┗━┓ 　　　　　　　　　l_j_j_j^⊃へ、 　 へ　ヽ",
      "┗━━┓┏┛　 ┗━┓┏━┛ 　 　┏┓ 　　　　ヽ　| 　 　 |￣|　　　゜　| (_) _ _",
      "　 　 　 ┃┃　 　 ┏━┛┗━┓┏━┛┗━┓ 　　ヽヽ　　ノ＿ｊ　　　 ⊂_　l_j_j_j",
      "┏━━┛┃ 　 　┗━┓┏━┛┗━┓┏┳┛　　 /　　　ー―― 　／　 ノ￣",
      "┃┏━━┛　 　 ┏━┛┗━┓┏━┛　 ┗┓　 /　　　　　　　　／ー",
      "┃┃ 　 　 　 　 　┃┏┓┏━┛┃ ━　　┛ ┃┏┳┳┓┏┳┳┓┏┳┳┓┏┳┳┓",
      "┃┗━━┓　 　 ┃┗┛┃ 　 　┗━┓┏┫┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃",
      "┗━━━┛ 　 　┗━━┛　 　 　 　 ┗┛┗┛┗━━┛┗━━┛┗━━┛┗━━┛",
    ],
    add_x: 0,
    add_y: 0,
    space: 7,
    shot_times: 0,
    detection: [["rect", 120, 30, 120, 30]],
    reverse: "FALSE",
    font_size: 7,
  },
  enemy14: {
    enemy: ["ｌヽ", "ｌ 」∧＿∧", "∥（　ﾟ∀ﾟ ）", "⊂　　　 つ", "　 人　 Ｙ", "　し（＿）"],
    add_x: -45,
    add_y: 38,
    space: 15,
    shot_times: 5,
    detection: [["rect", 30, 36, -27, 42]],
    reverse: "TRUE",
    font_size: 13,
  },
  enemy15: {
    enemy: [
      "　 ┏┓　 ┏━━┓　 　 　 　 　 　 　 　 　 　 　 　 　 　 ┏┓┏┓┏┓┏┓",
      "┏┛┗┓┃┏┓┃　 　 　 　 　 　 　 　 　 　 　 　 　 　 ┃┃┃┃┃┃┃┃",
      "┗┓┏┛┃┗┛┃┏━━━━━━━━━━━━┓┃┃┃┃┃┃┃┃",
      "┏┛┗┓┃┏┓┃┃ 　 　ｷﾀ━━(ﾟ∀ﾟ)━━ !!!!　　┃┃┃┃┃┃┃┃┃",
      "┗┓┏┛┗┛┃┃┗━━━━━━━━━━━━┛┗┛┗┛┗┛┗┛",
      "　 ┃┃ 　　 　 ┃┃　　　　　　　　　　　　　　　　　 　 　 ┏┓┏┓┏┓┏┓",
      "　 ┗┛ 　　 　 ┗┛　　　　　　　　　　　　　　　　　 　 　 ┗┛┗┛┗┛┗┛",
    ],
    add_x: 0,
    add_y: 0,
    space: 15,
    shot_times: 0,
    detection: [["rect", 235, 48, 240, 40]],
    reverse: "FALSE",
    font_size: 16,
  },
  enemy16: {
    enemy: ["(´･ω･`)･ω･`)　ｷｬｰ", "/　　つ⊂　　＼　　ｺﾜｰｲ"],
    add_x: 50,
    add_y: 10,
    space: 15,
    shot_times: 2,
    detection: [["rect", 70, 15, 70, 0]],
    reverse: "FALSE",
    font_size: 15,
  },
  enemy17: {
    enemy: ["　　( ﾟдﾟ )", "＿(__つ/￣￣￣/＿", "　　＼/　　　　 /", "　　　　￣￣￣"],
    add_x: -40,
    add_y: 10,
    space: 15,
    shot_times: 2,
    detection: [["rect", 60, 23, -60, 10]],
    reverse: "TRUE",
    font_size: 15,
  },
  enemy18: {
    enemy: ["お茶ﾄﾞｿﾞﾄﾞｿﾞﾄﾞｿﾞｰ。", "　　　　 旦~", "　旦~ 　　　　旦~", "　　 　 ヽ ）ﾉ", "旦~ ⌒(ﾟдﾟ)ノ　旦~", "　　　 /. （　ヽ", "　旦~ 　　　　旦~", "　　　　 旦~"],
    add_x: 57,
    add_y: 53,
    space: 15,
    shot_times: 2,
    detection: [["rect", 57, 60, 57, 47]],
    reverse: "FALSE",
    font_size: 15,
  },
  enemy19: {
    enemy: ["　　　　　(＼　 ∧ ∧", "　　　　　　< ｀(　ﾟДﾟ)", "　　　　　　　＼　ｙ⊂ ）", "　　　　　　　／　　　　＼", "　　　　　　　∪￣￣￣＼)"],
    add_x: -100,
    add_y: 25,
    space: 15,
    shot_times: 2,
    detection: [["rect", 35, 35, -95, 25]],
    reverse: "TRUE",
    font_size: 15,
  },
  enemy20: {
    enemy: [
      "　　　　　　　　　　　 *　　　*　　　*",
      "　　　　　　　　　*　　.※　 ※ 　※.　　*",
      "　　　　　　　*　　※　☆ ☆ ☆ ☆ ※　　*",
      "　　　　　 *　　※ ☆ 　 ※　※ 　 ☆ ※　　*",
      "　　　　 *　 ※ ☆　 ※ 　 ※ 　 ※ 　☆ ※　 *",
      "　　　 *　※ ☆　※ 　 ※ ☆ ※　　※　☆ ※　*",
      "　　 *　※ ☆ ※　 ※ ☆　　.☆ ※　 ※ ☆ ※　*",
      "　　*　※ ☆ ※　※☆　　　　　☆※　※ ☆ ※　*",
      "　　*　※ｷﾀ━━━━━(ﾟ∀ﾟ)━━━━━!!!!※　*",
      "　　*　※ ☆ ※　※☆　　　　　☆※　※ ☆ ※　*",
      "　　 *　※ ☆ ※　　※☆　　.☆※　　※ ☆ ※　*",
      "　　　 *　※ ☆　※ 　 ※ ☆ ※　　※　☆ ※　*",
      "　　　　 *　 ※ ☆　 ※ 　 ※ 　 ※ 　☆ ※　 *",
      "　　　　　 *　　※ ☆ 　 ※　※ 　 ☆ ※　　*",
      "　　　　　　　*　　※　☆ ☆ ☆ ☆ ※　　*",
      "　　　　　　　　　*　　.※　 ※ 　※.　　*",
      "　　　　　　　　　　　 *　　　*　　　*",
    ],
    add_x: 125,
    add_y: 100,
    space: 13,
    shot_times: 2,
    detection: [["circle", 110, 0, 125, 100]],
    reverse: "FALSE",
    font_size: 12,
  },
  enemy21: {
    enemy: ["　　／⌒ヽ", "　く/･〝　⌒ヽ", "　 |　3　(∪￣]", "　く､･〟 (∩￣]", "￣￣￣￣￣￣￣￣"],
    add_x: 40,
    add_y: 25,
    space: 15,
    shot_times: 2,
    detection: [["rect", 40, 25, 50, 25]],
    reverse: "FALSE",
    font_size: 15,
  },
  enemy22: {
    enemy: [" 　　*'``・* 。", "　 　|　　　　 `*。", " ｡∩　　　　 　* ", " +　(´･ω･`)　*｡+ﾟ", " `*｡ ヽ、　 つ *ﾟ*", "　 `・+｡*・' ﾟ⊃ +ﾟ", "　 ☆　　 ∪~ ｡*ﾟ", "　 　`・+｡*・ ﾟ"],
    add_x: 30,
    add_y: 10,
    space: 15,
    shot_times: 2,
    detection: [["rect", 40, 50, 60, 50]],
    reverse: "FALSE",
    font_size: 15,
  },
  enemy23: {
    enemy: ["♪ 　 ／⌒ヽ", "　　 （　＾ω＾）))", "　(( (　つ　ヽ、　　　♪", "　　　〉 と/　 )))", "　　（__／^(＿)"],
    add_x: 55,
    add_y: 25,
    space: 15,
    shot_times: 2,
    detection: [["rect", 30, 35, 55, 25]],
    reverse: "FALSE",
    font_size: 15,
  },
  enemy24: {
    enemy: ["　ｶﾀｶﾀ　／⌒ヽ", "　　　　 （＾ω＾　）", "　　 ＿|￣￣||＿）＿", "　／旦|――||/／ ／|", "　|￣￣￣￣￣|￣| . |", "　|＿＿＿＿＿|三|／"],
    add_x: 60,
    add_y: 30,
    space: 15,
    shot_times: 2,
    detection: [
      ["rect", 25, 35, 70, 25],
      ["rect", 60, 25, 70, 55],
    ],
    reverse: "FALSE",
    font_size: 15,
  },
  enemy25: {
    enemy: [
      "　 　　　　 |",
      "　 　＼　　__　　／",
      "　 　＿　（ｍ）　＿ﾋﾟｺｰﾝ",
      "　 　　　　|ミ|",
      "　 　／ 　.｀´　 ＼",
      "　　　 　∧＿∧",
      "　　　　（・∀・∩",
      "　　　　（つ　　丿",
      "　　　　⊂＿ ノ",
      "　　　　 　（＿）",
    ],
    add_x: 65,
    add_y: 30,
    space: 15,
    shot_times: 2,
    detection: [
      ["rect", 10, 15, 65, 30],
      ["rect", 25, 35, 65, 100],
    ],
    reverse: "FALSE",
    font_size: 15,
  },
  enemy26: {
    enemy: ["　　 　 　 ∧＿∧", "　　　 ⊂（ ･∀･ ）", " 　　　　 ヽ　⊂　）", "　　　　　（⌒） ｜どどどどど・・・・・", "　 　 　 　 三 `Ｊ"],
    add_x: 80,
    add_y: 15,
    space: 15,
    shot_times: 2,
    detection: [
      ["rect", 25, 35, 75, 25],
      ["rect", 47, 7, 150, 38],
    ],
    reverse: "FALSE",
    font_size: 15,
  },
  enemy27: {
    enemy: ["　　　　-＝　∧＿∧", "　　-＝≡　（　´∀｀）", "　　　　-＝（　つ┯つ", "　　 -＝≡/　 / //", "　 -＝≡（_＿）/ ）"],
    add_x: -100,
    add_y: 25,
    space: 15,
    shot_times: 2,
    detection: [["rect", 40, 35, -80, 25]],
    reverse: "TRUE",
    font_size: 15,
  },
  enemy28: {
    enemy: [
      "　　　　　／⌒ヽ",
      "　　　　 （ ＾ω＾ ／⌒ヽ",
      "　　　／⌒ヽつ（ ＾ω＾ ） ))",
      "((　 （ ＾ω＾ ）　(　つ　)",
      "　 　 (　つ　ヽ　　 とノ",
      "　　　 〉 とノ　） ^(＿)",
      "　　 （__ノ⌒(＿)",
    ],
    add_x: 85,
    add_y: 45,
    space: 15,
    shot_times: 2,
    detection: [
      ["rect", 40, 35, 90, 40],
      ["rect", 15, 40, 70, 30],
      ["rect", 30, 35, 60, 55],
    ],
    reverse: "FALSE",
    font_size: 15,
  },
  enemy29: {
    enemy: ["　 n ／⌒ヽ", "　(ﾖ（＾ω＾　）　ｸﾞｯｼﾞｮﾌﾞ!", "　　Y 　　　つ"],
    add_x: 25,
    add_y: 12,
    space: 15,
    shot_times: 2,
    detection: [
      ["rect", 30, 20, 45, 10],
      ["rect", 27, 8, 117, 10],
    ],
    reverse: "FALSE",
    font_size: 15,
  },
  enemy30: {
    enemy: ["┗(^o^ )┛", "　 ┗┃　ヽヾ＼", "　　　 　　　ヽ＼＼"],
    add_x: 25,
    add_y: -3,
    space: 15,
    shot_times: 2,
    detection: [
      ["rect", 30, 8, 30, -5],
      ["rect", 35, 8, 55, 10],
      ["rect", 20, 8, 85, 25],
    ],
    reverse: "FALSE",
    font_size: 15,
  },
};
class Bullet {
  constructor(x, y, angle, speed, shape, size_x, size_y, color) {
    this.position = { x: x, y: y };
    this.angle = angle;
    this.speed = speed;
    this.size = { shape: shape, x: size_x, y: size_y };
    this.color = color;
  }
  delete() {
    return this.position.x < -100 || this.position.x > SCREEN_WIDTH + 100 || this.position.y < -100 || this.position.y > SCREEN_HEIGHT + 100;
  }
  draw() {
    c.fillStyle = this.color;
    if (this.size.shape == "circle") {
      c.fillStyle = this.color;
      c.beginPath();
      c.arc(this.position.x, this.position.y, this.size.x, 0, 2 * Math.PI);
      c.closePath();
      c.fill();
    } else if (this.size.shape == "rect") {
      c.fillStyle = this.color;
      c.fillRect(this.position.x - this.size.x, this.position.y - this.size.y, this.size.x * 2, this.size.y * 2);
    }
  }
  update() {
    this.position.x += this.speed * delta * Math.cos((Math.PI / 180) * this.angle);
    this.position.y += this.speed * delta * Math.sin((Math.PI / 180) * this.angle);
    this.draw();
    return this.delete();
  }
}

class Bullet_01 extends Bullet {}

class Bullet_02 extends Bullet {
  constructor(x1, y1, x2, y2, speed, shape, size_x, size_y, color) {
    super();
    this.position = { x: x2, y: y2 };
    this.angle = Math.atan2(y2 - y1, x2 - x1);
    this.speed = speed;
    this.size = { shape: shape, x: size_x, y: size_y };
    this.color = color;
  }
  update() {
    this.position.x -= this.speed * delta * Math.cos(this.angle);
    this.position.y -= this.speed * delta * Math.sin(this.angle);
    this.draw();
    return this.delete();
  }
}

class Bullet_03 extends Bullet {
  constructor(x, y, angle, speed, shape, size_x, size_y, color) {
    super(x, y, angle, speed, shape, size_x, size_y, color);
  }
  update() {
    this.position.x += this.speed * delta * Math.cos((Math.PI / 180) * this.angle) - 7;
    this.position.y += this.speed * delta * Math.sin((Math.PI / 180) * this.angle);
    this.draw();
    return this.delete();
  }
}

class Bullet_04 extends Bullet {
  constructor(x, y, angle, speed, shape, size_x, size_y, color) {
    super(x, y, angle, speed, shape, size_x, size_y, color);
    this.time = 0;
  }
  update() {
    this.position.x += this.speed * delta * Math.cos((Math.PI / 180) * this.angle);
    this.position.y += this.speed * delta * Math.sin((Math.PI / 180) * this.angle);
    this.time += delta;
    if (this.time >= 1) {
      for (var i = 0; i < 20; i++) {
        add_enemys_bullets.push(new Bullet_01(this.position.x, this.position.y, i * 18, 300, "circle", 5, 5, this.color));
      }
      return true;
    }
    this.draw();
    return this.delete();
  }
}

class Bullet_05 extends Bullet {
  constructor(x1, y1, x2, y2, add_angle, speed, shape, size_x, size_y, color) {
    super();
    this.position = { x: x2, y: y2 };
    this.angle = Math.atan2(y2 - y1, x2 - x1);
    this.angle += (Math.PI / 180) * add_angle;
    this.speed = speed;
    this.size = { shape: shape, x: size_x, y: size_y };
    this.color = color;
  }
  update() {
    this.position.x -= this.speed * delta * Math.cos(this.angle);
    this.position.y -= this.speed * delta * Math.sin(this.angle);
    this.draw();
    return this.delete();
  }
}

class Bullet_06 extends Bullet {
  constructor(x, y, interval_time, move_time, angle, speed, shape, size_x, size_y, color) {
    super();
    this.position = { x: x, y: y };
    this.interval = { now: 0, time: interval_time };
    this.angle = angle;
    this.speed = speed;
    this.size = { shape: shape, x: size_x, y: size_y };
    this.color = color;
    this.move_time = move_time;
    this.time = 0;
  }
  update() {
    this.position.x += this.speed * delta * Math.cos((Math.PI / 180) * this.angle);
    this.position.y += this.speed * delta * Math.sin((Math.PI / 180) * this.angle);
    this.interval.now += delta;
    this.time += delta;
    if (this.interval.now >= this.interval.time) {
      this.interval.now = 0;
      add_enemys_bullets.push(new Bullet_07(this.position.x, this.position.y, this.move_time, this.time, this.speed, "circle", 5, 5, this.color));
    }
    this.draw();
    return this.delete();
  }
}

class Bullet_07 extends Bullet {
  constructor(x, y, interval_time, time, speed, shape, size_x, size_y, color) {
    super();
    this.position = { x: x, y: y };
    this.interval = { time: interval_time };
    this.angle = Math.random() * 360;
    this.speed = speed;
    this.size = { shape: shape, x: size_x, y: size_y };
    this.color = color;
    this.time = time;
  }
  update() {
    this.time += delta;
    if (this.time >= this.interval.time) {
      this.position.x += this.speed * delta * Math.cos((Math.PI / 180) * this.angle);
      this.position.y += this.speed * delta * Math.sin((Math.PI / 180) * this.angle);
    }
    this.draw();
    return this.delete();
  }
}

class Bullet_08 extends Bullet {
  constructor(x, y, stay_time, reverse_time, angle, speed, shape, size_x, size_y, color) {
    super(x, y, angle, speed, shape, size_x, size_y, color);
    this.reverse_time = reverse_time;
    this.time = 0;
    this.original_angle = angle;
    this.stay_time = stay_time;
    this.stay_flag = true;
    this.reverse_flag = true;
  }
  update() {
    this.time += delta;
    if (this.time > this.reverse_time && this.reverse_flag) {
      this.angle = this.original_angle - 180;
      this.reverse_flag = false;
    }
    if (this.time > this.stay_time && this.time < this.reverse_time) {
    } else {
      this.position.x += this.speed * delta * Math.cos((Math.PI / 180) * this.angle);
      this.position.y += this.speed * delta * Math.sin((Math.PI / 180) * this.angle);
    }
    this.draw();
    return this.delete();
  }
}

class Bullet_09 extends Bullet {
  constructor(x, y, angle, change_angle, speed, shape, size_x, size_y, color) {
    super(x, y, angle, speed, shape, size_x, size_y, color);
    this.change_angle = change_angle;
  }
  update() {
    this.angle += this.change_angle * delta;
    this.position.x += this.speed * delta * Math.cos((Math.PI / 180) * this.angle);
    this.position.y += this.speed * delta * Math.sin((Math.PI / 180) * this.angle);
    this.draw();
    return this.delete();
  }
}

class Enemy {
  constructor(status, position, difficulty) {
    this.enemy = status.enemy;
    this.add_shot_position = { x: status.add_x, y: status.add_y };
    this.space = status.space;
    this.shot_times = status.shot_times;
    this.sizes = status.detection;
    this.reverse = status.reverse;
    this.font_size = status.font_size;
    this.position = position;
    this.shot_position = { x: this.position.x + this.add_shot_position.x, y: this.position.y + this.add_shot_position.y };
    this.relode = 0;
    this.hp = 12;
    this.difficulty = difficulty;
  }
  move() {}
  bullet() {}
  shot() {
    this.relode -= delta * this.shot_times;
    this.shot_position = { x: this.position.x + this.add_shot_position.x, y: this.position.y + this.add_shot_position.y };
    if (this.relode <= 0) {
      this.bullet();
      this.relode = 1;
    }
  }
  draw() {
    c.font = this.font_size + "px ＭＳ Ｐゴシック";
    c.textAlign = "left";
    c.fillStyle = "white";
    if (this.reverse == "TRUE") {
      c.scale(-1, 1);
      for (var i in this.enemy) {
        c.fillText(this.enemy[i], -this.position.x, this.position.y + this.space * i);
      }
      c.setTransform(1, 0, 0, 1, 0, 0);
    } else if (this.reverse == "FALSE") {
      for (var i in this.enemy) {
        c.fillText(this.enemy[i], this.position.x, this.position.y + this.space * i);
      }
    }
  }
  detection() {
    for (var i in character.bullets) {
      for (var j in this.sizes) {
        if (collision_detection(character.bullets[i].position, character.bullets[i].size, this.position, this.sizes[j])) {
          character.bullets.splice(i, 1);
          this.hp--;
          return;
        }
      }
    }
  }
  delete() {
    return this.position.x < -500 || this.position.x > SCREEN_WIDTH + 500 || this.position.y < -500 || this.position.y > SCREEN_HEIGHT + 500 || this.hp <= 0;
  }
  update() {
    this.move();
    this.draw();
    this.shot();
    this.detection();
    return this.delete();
  }
}

class Enemy_001 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy1, position, difficulty);
  }
  move() {
    this.position.x -= 300 * delta;
  }
  bullet() {
    enemys_bullets.push(
      new Bullet_02(character.position.x, character.position.y, this.shot_position.x, this.shot_position.y, 500, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50))
    );
  }
}

class Enemy_002 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy2, position, difficulty);
    this.initial_position = { x: position.x + Math.random() * 300, y: position.y };
  }
  move() {
    this.position.x -= 5 * delta * 60;
    this.position.y = this.initial_position.y + 50 * Math.sin((this.initial_position.x - this.position.x) / 70);
  }
}

class Enemy_003 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy3, position, difficulty);
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 2;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 1.5;
    }
  }
  move() {
    this.position.x -= 5 * delta * 60;
  }
  bullet() {
    for (var i = 0; i < 5; i++) {
      enemys_bullets.push(
        new Bullet_05(
          character.position.x,
          character.position.y,
          this.shot_position.x,
          this.shot_position.y,
          i * 5 - 10,
          500,
          "circle",
          5,
          5,
          hsl(Math.floor(Math.random() * 360), 100, 50)
        )
      );
    }
  }
}

class Enemy_004 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy4, position, difficulty);
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times * 1.25;
    } else if (this.difficulty == "hard") {
      this.shot_times = this.shot_times * 2;
    }
  }
  move() {
    this.position.x -= 5 * delta * 60;
  }
  bullet() {
    if (this.difficulty == "easy") {
      for (var i = 0; i < 6; i++) {
        enemys_bullets.push(new Bullet_03(this.shot_position.x, this.shot_position.y, i * 60, 250, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 9; i++) {
        enemys_bullets.push(new Bullet_03(this.shot_position.x, this.shot_position.y, i * 40, 250, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard" || this.difficulty == "EX") {
      for (var i = 0; i < 18; i++) {
        enemys_bullets.push(new Bullet_03(this.shot_position.x, this.shot_position.y, i * 20, 250, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_005 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy5, position, difficulty);
    this.time = 0;
  }
  move() {
    this.time += delta;
    if (this.position.x > 600) {
      this.position.x -= 5 * delta * 60;
    }
    if (this.time > 3) {
      this.position.x += 10 * delta * 60;
    }
  }
  bullet() {
    if (this.difficulty == "easy") {
      for (var i = 0; i < 4; i++) {
        enemys_bullets.push(new Bullet_06(240 * i, 0, 0.3, 3, 90, 300, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 5; i++) {
        enemys_bullets.push(new Bullet_06(180 * i, 0, 0.3, 3, 90, 300, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard" || this.difficulty == "EX") {
      for (var i = 0; i < 9; i++) {
        enemys_bullets.push(new Bullet_06(100 * i, 0, 0.3, 3, 90, 300, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_006 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy6, position, difficulty);
    this.time = 0;
    this.hp = this.hp * 2;
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 2;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 1.5;
    }
  }
  move() {
    this.time += delta;
    if (this.position.x > 450 && this.time < 10) {
      this.position.x -= 5 * delta * 60;
    } else if ((this.difficulty == "easy" || this.difficulty == "normal" || this.difficulty == "hard") && this.time > 10) {
      this.position.x += 5 * delta * 60;
    }
  }
  bullet() {
    if (this.difficulty == "easy") {
      for (var i = 0; i < 4; i++) {
        enemys_bullets.push(new Bullet_04(this.shot_position.x, this.shot_position.y, 90 * i, 300, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 6; i++) {
        enemys_bullets.push(new Bullet_04(this.shot_position.x, this.shot_position.y, 60 * i, 300, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard") {
      for (var i = 0; i < 9; i++) {
        enemys_bullets.push(new Bullet_04(this.shot_position.x, this.shot_position.y, 40 * i, 300, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "EX") {
      for (var i = 0; i < 18; i++) {
        enemys_bullets.push(new Bullet_04(this.shot_position.x, this.shot_position.y, 20 * i, 300, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_007 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy7, position, difficulty);
  }
  move() {
    this.position.x -= 700 * delta;
  }
}

class Enemy_008 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy8, position, difficulty);
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 5;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 3;
    } else if (this.difficulty == "hard") {
      this.shot_times = this.shot_times / 2;
    }
  }
  move() {
    this.position.x -= 200 * delta;
  }
  bullet() {
    if (this.difficulty == "easy") {
      for (var i = 0; i < 9; i++) {
        enemys_bullets.push(new Bullet_09(this.shot_position.x, this.shot_position.y, 40 * i, 50, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
        enemys_bullets.push(new Bullet_09(this.shot_position.x, this.shot_position.y, 40 * i + 10, -50, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 12; i++) {
        enemys_bullets.push(new Bullet_09(this.shot_position.x, this.shot_position.y, 30 * i, 50, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
        enemys_bullets.push(new Bullet_09(this.shot_position.x, this.shot_position.y, 30 * i + 10, -50, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard" || this.difficulty == "EX") {
      for (var i = 0; i < 18; i++) {
        enemys_bullets.push(new Bullet_09(this.shot_position.x, this.shot_position.y, 20 * i, 50, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
        enemys_bullets.push(new Bullet_09(this.shot_position.x, this.shot_position.y, 20 * i + 10, -50, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_009 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy9, position, difficulty);
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 3;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 2;
    }
  }
  move() {
    this.position.x -= 300 * delta;
  }
  bullet() {
    if (this.difficulty == "easy") {
      for (var i = 0; i < 10; i++) {
        enemys_bullets.push(
          new Bullet_01(this.shot_position.x, this.shot_position.y, Math.random() * 360, Math.random() * 200 + 200, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50))
        );
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 15; i++) {
        enemys_bullets.push(
          new Bullet_01(this.shot_position.x, this.shot_position.y, Math.random() * 360, Math.random() * 200 + 200, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50))
        );
      }
    } else if (this.difficulty == "hard" || this.difficulty == "EX") {
      for (var i = 0; i < 20; i++) {
        enemys_bullets.push(
          new Bullet_01(this.shot_position.x, this.shot_position.y, Math.random() * 360, Math.random() * 200 + 200, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50))
        );
      }
    }
  }
}

class Enemy_010 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy10, position, difficulty);
    this.time = 0;
    this.hp = this.hp * 1.5;
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 2;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 1.5;
    }
  }
  move() {
    this.time += delta;
    if (this.position.x > 450 && this.time < 10) {
      this.position.x -= 5 * delta * 60;
    } else if ((this.difficulty == "easy" || this.difficulty == "normal" || this.difficulty == "hard") && this.time > 10) {
      this.position.x += 5 * delta * 60;
    }
  }
  bullet() {
    if (this.difficulty == "easy") {
      for (var i = 0; i < 4; i++) {
        enemys_bullets.push(new Bullet_06(Math.random() * 720, 0, 0.3, 2.5, Math.random() * 180, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 7; i++) {
        enemys_bullets.push(new Bullet_06(Math.random() * 720, 0, 0.3, 2.5, Math.random() * 180, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard" || this.difficulty == "EX") {
      for (var i = 0; i < 10; i++) {
        enemys_bullets.push(new Bullet_06(Math.random() * 720, 0, 0.3, 2.5, Math.random() * 180, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_011 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy11, position, difficulty);
    this.hp = this.hp * 1.8;
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 5;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 3;
    } else if (this.difficulty == "hard") {
      this.shot_times = this.shot_times / 2.5;
    }
  }
  move() {
    this.position.x -= 300 * delta;
  }
  bullet() {
    if (this.difficulty == "easy") {
      for (var i = 0; i < 9; i++) {
        enemys_bullets.push(new Bullet_08(this.position.x, this.position.y, 0.5, 1.5, i * 40, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 12; i++) {
        enemys_bullets.push(new Bullet_08(this.position.x, this.position.y, 0.5, 1.5, i * 30, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard" || this.difficulty == "EX") {
      for (var i = 0; i < 18; i++) {
        enemys_bullets.push(new Bullet_08(this.position.x, this.position.y, 0.5, 1.5, i * 20, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_012 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy12, position, difficulty);
    this.time = 0;
    this.hp = this.hp * 1.3;
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 7;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 5;
    } else if (this.difficulty == "hard") {
      this.shot_times = this.shot_times / 3;
    }
  }
  move() {
    this.position.x -= 200 * delta;
  }
  bullet() {
    this.time += 4;
    if (this.difficulty == "easy") {
      for (var i = 0; i < 9; i++) {
        enemys_bullets.push(new Bullet_01(this.shot_position.x, this.shot_position.y, i * 40 + this.time, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 18; i++) {
        enemys_bullets.push(new Bullet_01(this.shot_position.x, this.shot_position.y, i * 20 + this.time, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard" || this.difficulty == "EX") {
      for (var i = 0; i < 36; i++) {
        enemys_bullets.push(new Bullet_01(this.shot_position.x, this.shot_position.y, i * 10 + this.time, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_013 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy13, position, difficulty);
  }
  move() {
    this.position.x -= 700 * delta;
  }
}

class Enemy_014 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy14, position, difficulty);
    this.hp = this.hp * 1.5;
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 4;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 3;
    } else if (this.difficulty == "hard") {
      this.shot_times = this.shot_times / 2;
    }
  }
  move() {
    this.position.x -= 300 * delta;
  }
  bullet() {
    for (var i = 0; i < 5; i++) {
      enemys_bullets.push(
        new Bullet_05(
          character.position.x,
          character.position.y,
          this.shot_position.x,
          this.shot_position.y,
          i * 5 - 10,
          500,
          "circle",
          5,
          5,
          hsl(Math.floor(Math.random() * 360), 100, 50)
        )
      );
    }
  }
}

class Enemy_015 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy15, position, difficulty);
    this.hp = this.hp * 1.5;
  }
  move() {
    this.position.x -= 700 * delta;
  }
}

class Enemy_016 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy16, position, difficulty);
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 3;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 2;
    }
  }
  move() {
    this.position.x -= 300 * delta;
  }
  bullet() {
    for (var i = 0; i < 18; i++) {
      enemys_bullets.push(new Bullet_08(this.position.x, this.position.y, 0.5, 1.5, i * 20, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
    }
  }
}

class Enemy_017 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy17, position, difficulty);
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 3;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 2;
    }
  }
  move() {
    this.position.x -= 5 * delta * 60;
  }
  bullet() {
    if (this.difficulty == "easy") {
      for (var i = 0; i < 9; i++) {
        enemys_bullets.push(new Bullet_03(this.shot_position.x, this.shot_position.y, i * 40, 250, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 12; i++) {
        enemys_bullets.push(new Bullet_03(this.shot_position.x, this.shot_position.y, i * 30, 250, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard") {
      for (var i = 0; i < 18; i++) {
        enemys_bullets.push(new Bullet_03(this.shot_position.x, this.shot_position.y, i * 20, 250, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_018 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy18, position, difficulty);
    this.time = 0;
    this.hp = this.hp * 2.8;
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 3;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 2;
    }
  }
  move() {
    this.position.x -= 200 * delta;
  }
  bullet() {
    this.time += 4;
    if (this.difficulty == "easy") {
      for (var i = 0; i < 18; i++) {
        enemys_bullets.push(new Bullet_01(this.shot_position.x, this.shot_position.y, i * 20 + this.time, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 24; i++) {
        enemys_bullets.push(new Bullet_01(this.shot_position.x, this.shot_position.y, i * 15 + this.time, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard") {
      for (var i = 0; i < 36; i++) {
        enemys_bullets.push(new Bullet_01(this.shot_position.x, this.shot_position.y, i * 10 + this.time, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_019 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy19, position, difficulty);
    this.time = 0;
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 10;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 8;
    } else if (this.difficulty == "hard") {
      this.shot_times = this.shot_times / 5;
    }
  }
  move() {
    this.time += delta;
    if (this.position.x > 600) {
      this.position.x -= 5 * delta * 60;
    }
    if (this.time > 3) {
      this.position.x += 10 * delta * 60;
    }
  }

  bullet() {
    if (this.difficulty == "easy") {
      for (var i = 0; i < 4; i++) {
        enemys_bullets.push(new Bullet_06(240 * i, 0, 0.3, 3, 90, 300, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 5; i++) {
        enemys_bullets.push(new Bullet_06(180 * i, 0, 0.3, 3, 90, 300, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard") {
      for (var i = 0; i < 9; i++) {
        enemys_bullets.push(new Bullet_06(100 * i, 0, 0.3, 3, 90, 300, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_020 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy20, position, difficulty);
    this.time = 0;
    this.hp = this.hp * 2.5;
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 3;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 2;
    }
  }
  move() {
    this.position.x -= 200 * delta;
  }
  bullet() {
    this.time += 4;
    if (this.difficulty == "easy") {
      for (var i = 0; i < 9; i++) {
        enemys_bullets.push(new Bullet_01(this.shot_position.x, this.shot_position.y, i * 40 + this.time, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 18; i++) {
        enemys_bullets.push(new Bullet_01(this.shot_position.x, this.shot_position.y, i * 20 + this.time, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard") {
      for (var i = 0; i < 36; i++) {
        enemys_bullets.push(new Bullet_01(this.shot_position.x, this.shot_position.y, i * 10 + this.time, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_021 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy21, position, difficulty);
    this.hp = this.hp * 1.3;
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 2;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 1.5;
    }
  }
  move() {
    this.position.x -= 300 * delta;
  }
  bullet() {
    if (this.difficulty == "easy") {
      for (var i = 0; i < 10; i++) {
        enemys_bullets.push(
          new Bullet_01(this.shot_position.x, this.shot_position.y, Math.random() * 360, Math.random() * 200 + 200, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50))
        );
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 15; i++) {
        enemys_bullets.push(
          new Bullet_01(this.shot_position.x, this.shot_position.y, Math.random() * 360, Math.random() * 200 + 200, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50))
        );
      }
    } else if (this.difficulty == "hard") {
      for (var i = 0; i < 20; i++) {
        enemys_bullets.push(
          new Bullet_01(this.shot_position.x, this.shot_position.y, Math.random() * 360, Math.random() * 200 + 200, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50))
        );
      }
    }
  }
}

class Enemy_022 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy22, position, difficulty);
    this.hp = this.hp * 1.5;
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 2;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 1.5;
    }
  }
  move() {
    this.position.x -= 200 * delta;
  }
  bullet() {
    if (this.difficulty == "easy") {
      for (var i = 0; i < 9; i++) {
        enemys_bullets.push(new Bullet_09(this.shot_position.x, this.shot_position.y, 40 * i, 50, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
        enemys_bullets.push(new Bullet_09(this.shot_position.x, this.shot_position.y, 40 * i + 10, -50, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 12; i++) {
        enemys_bullets.push(new Bullet_09(this.shot_position.x, this.shot_position.y, 30 * i, 50, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
        enemys_bullets.push(new Bullet_09(this.shot_position.x, this.shot_position.y, 30 * i + 10, -50, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard") {
      for (var i = 0; i < 18; i++) {
        enemys_bullets.push(new Bullet_09(this.shot_position.x, this.shot_position.y, 20 * i, 50, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
        enemys_bullets.push(new Bullet_09(this.shot_position.x, this.shot_position.y, 20 * i + 10, -50, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_023 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy23, position, difficulty);
    this.time = 0;
    this.hp = this.hp * 1.7;
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 6;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 4;
    } else if (this.difficulty == "hard") {
      this.shot_times = this.shot_times / 3;
    }
  }
  move() {
    this.time += delta;
    if (this.position.x > 450 && this.time < 5) {
      this.position.x -= 5 * delta * 60;
    } else if (this.time > 5) {
      this.position.x += 5 * delta * 60;
    }
  }
  bullet() {
    if (this.difficulty == "easy") {
      for (var i = 0; i < 4; i++) {
        enemys_bullets.push(new Bullet_04(this.shot_position.x, this.shot_position.y, 90 * i, 300, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 6; i++) {
        enemys_bullets.push(new Bullet_04(this.shot_position.x, this.shot_position.y, 60 * i, 300, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard") {
      for (var i = 0; i < 9; i++) {
        enemys_bullets.push(new Bullet_04(this.shot_position.x, this.shot_position.y, 40 * i, 300, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_024 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy24, position, difficulty);
    this.hp = this.hp * 1.5;
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 2;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 1.5;
    } else if (this.difficulty == "hard") {
      this.shot_times = this.shot_times / 1;
    }
  }
  move() {
    this.position.x -= 5 * delta * 60;
  }
  bullet() {
    if (this.difficulty == "easy") {
      for (var i = 0; i < 9; i++) {
        enemys_bullets.push(new Bullet_03(this.shot_position.x, this.shot_position.y, i * 40, 250, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 12; i++) {
        enemys_bullets.push(new Bullet_03(this.shot_position.x, this.shot_position.y, i * 30, 250, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard") {
      for (var i = 0; i < 18; i++) {
        enemys_bullets.push(new Bullet_03(this.shot_position.x, this.shot_position.y, i * 20, 250, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_025 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy25, position, difficulty);
    this.time = 0;
  }
  move() {
    this.position.x -= 200 * delta;
  }
  bullet() {
    this.time += 4;
    if (this.difficulty == "easy") {
      for (var i = 0; i < 12; i++) {
        enemys_bullets.push(new Bullet_01(this.shot_position.x, this.shot_position.y, i * 30 + this.time, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 18; i++) {
        enemys_bullets.push(new Bullet_01(this.shot_position.x, this.shot_position.y, i * 20 + this.time, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard") {
      for (var i = 0; i < 36; i++) {
        enemys_bullets.push(new Bullet_01(this.shot_position.x, this.shot_position.y, i * 10 + this.time, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_026 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy26, position, difficulty);
  }
  move() {
    this.position.x -= 700 * delta;
  }
}

class Enemy_027 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy27, position, difficulty);
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 3;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 2;
    }
  }
  move() {
    this.position.x -= 300 * delta;
  }
  bullet() {
    for (var i = 0; i < 5; i++) {
      enemys_bullets.push(
        new Bullet_05(
          character.position.x,
          character.position.y,
          this.shot_position.x,
          this.shot_position.y,
          i * 5 - 10,
          500,
          "circle",
          5,
          5,
          hsl(Math.floor(Math.random() * 360), 100, 50)
        )
      );
    }
  }
}

class Enemy_028 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy28, position, difficulty);
    this.time = 0;
    this.hp = this.hp * 1.8;
    if (this.difficulty == "easy") {
      this.shot_times = this.shot_times / 5;
    } else if (this.difficulty == "normal") {
      this.shot_times = this.shot_times / 3;
    } else if (this.difficulty == "hard") {
      this.shot_times = this.shot_times / 2;
    }
  }
  move() {
    this.time += delta;
    if (this.position.x > 450 && this.time < 5) {
      this.position.x -= 5 * delta * 60;
    } else if (this.time > 5) {
      this.position.x += 5 * delta * 60;
    }
  }
  bullet() {
    if (this.difficulty == "easy") {
      for (var i = 0; i < 5; i++) {
        enemys_bullets.push(new Bullet_06(Math.random() * 720, 0, 0.3, 2.5, Math.random() * 180, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 7; i++) {
        enemys_bullets.push(new Bullet_06(Math.random() * 720, 0, 0.3, 2.5, Math.random() * 180, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard") {
      for (var i = 0; i < 10; i++) {
        enemys_bullets.push(new Bullet_06(Math.random() * 720, 0, 0.3, 2.5, Math.random() * 180, 400, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_029 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy29, position, difficulty);
  }
  move() {
    this.position.x -= 5 * delta * 60;
  }
  bullet() {
    if (this.difficulty == "easy") {
      for (var i = 0; i < 6; i++) {
        enemys_bullets.push(new Bullet_03(this.shot_position.x, this.shot_position.y, i * 60, 250, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "normal") {
      for (var i = 0; i < 9; i++) {
        enemys_bullets.push(new Bullet_03(this.shot_position.x, this.shot_position.y, i * 40, 250, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    } else if (this.difficulty == "hard") {
      for (var i = 0; i < 18; i++) {
        enemys_bullets.push(new Bullet_03(this.shot_position.x, this.shot_position.y, i * 20, 250, "circle", 5, 5, hsl(Math.floor(Math.random() * 360), 100, 50)));
      }
    }
  }
}

class Enemy_030 extends Enemy {
  constructor(position, difficulty) {
    super(enemies_status.enemy30, position, difficulty);
    this.initial_position = { x: position.x + Math.random() * 300, y: position.y };
  }
  move() {
    this.position.x -= 5 * delta * 60;
    this.position.y = this.initial_position.y + 50 * Math.sin((this.initial_position.x - this.position.x) / 70);
  }
}

class Character {
  constructor() {
    this.name = "ブーン";
    this.life = 1;
    this.atk = 1;
    this.speed = 300; //一秒間に進む距離
    this.shot_times = 10; //一秒間に発射する回数
    this.position = { x: 50, y: 240 };
    this.size = { shape: "circle", x: 5, y: 5 };
    this.bullets = new Array();
    this.relode = 0;
    this.achievements = [false, false, false];
    this.clear_history = { stage1: false, stage2: false, stage3: false, stageEX: false };
  }
  shot() {
    if (this.life > 0 && !stage_add_enemies.game_clear) {
      if (key.shot) {
        if (this.relode <= 0) {
          this.bullets.push(new Bullet_01(this.position.x, this.position.y, 0, 720, "circle", 5, 5, "white"));
          this.bullets.push(new Bullet_01(this.position.x, this.position.y, 15, 720, "circle", 5, 5, "white"));
          this.bullets.push(new Bullet_01(this.position.x, this.position.y, -15, 720, "circle", 5, 5, "white"));
          this.relode = 1;
        } else {
          this.relode -= delta * this.shot_times;
        }
      }
    }
    this.bullets = this.bullets.filter((value) => {
      return !value.update();
    });
  }
  move() {
    if (this.life <= 0) {
      c.font = "15px ＭＳ Ｐゴシック";
      c.textAlign = "left";
      c.fillStyle = "white";
      var text = ["＼　｜ ／", "_____人_____", "　 　ヽ' 　　 ﾁｭﾄﾞｰﾝ", "／　｜　＼"];
      var aa = 15;
      var ab = -56;
      var ac = -16;
      for (var i in text) {
        c.fillText(text[i], this.position.x + ab, this.position.y + aa * i + ac);
      }
      this.shot();
      return;
    } else if (stage_add_enemies.game_clear) {
      this.shot();
      this.draw_chara();
      return;
    }
    if (key.shift) {
      this.speed = 100;
    } else {
      this.speed = 300;
    }
    if (key.up) {
      this.position.y -= this.speed * delta;
    }
    if (key.down) {
      this.position.y += this.speed * delta;
    }
    if (key.left) {
      this.position.x -= this.speed * delta;
    }
    if (key.right) {
      this.position.x += this.speed * delta;
    }
    if (this.position.x <= 0) {
      this.position.x = 1;
    }
    if (this.position.x >= SCREEN_WIDTH) {
      this.position.x = SCREEN_WIDTH - 1;
    }
    if (this.position.y <= 0) {
      this.position.y = 1;
    }
    if (this.position.y >= SCREEN_HEIGHT) {
      this.position.y = SCREEN_HEIGHT - 1;
    }
    this.shot();
    this.draw_chara();
    this.detection();
  }
  detection() {
    for (var i in enemys_bullets) {
      if (collision_detection(this.position, this.size, enemys_bullets[i].position, enemys_bullets[i].size)) {
        enemys_bullets.splice(i, 1);
        this.life--;
      }
    }
    for (var i in enemys) {
      for (var j in enemys[i].sizes) {
        if (collision_detection(this.position, this.size, enemys[i].position, enemys[i].sizes[j])) {
          this.life--;
        }
      }
    }
  }
  draw_chara() {
    c.font = "10px ＭＳ Ｐゴシック";
    c.textAlign = "left";
    var text = ["　　　　　　　／⌒ヽ", " ⊂二二二（　＾ω＾）二⊃", "　　　　　　|　　　 /", "　　 　　　 （　ヽノ", "　　　　　　 ﾉ>ノ", "　　 三　　レﾚ"];
    var aa = 10;
    var ab = -56;
    var ac = -16;
    c.fillStyle = "white";
    for (var i in text) {
      c.fillText(text[i], this.position.x + ab, this.position.y + aa * i + ac);
    }
    c.fillStyle = "red";
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.size.x, 0, 2 * Math.PI);
    c.closePath();
    c.fill();
  }
}
