var luni = require("lunicode");

const scriptCharMap = {
  a: "0x1D4B6",
  b: "0x1D4B7",
  c: "0x1D4B8",
  d: "0x1D4B9",
  e: "0x212f",
  f: "0x1D4BB",
  g: "0x210a",
  h: "0x1D4BD",
  i: "0x1D4BE",
  j: "0x1D4BF",
  k: "0x1D4C0",
  l: "0x1D4C1",
  m: "0x1D4C2",
  n: "0x1D4C3",
  o: "0x2134",
  p: "0x1D4C5",
  q: "0x1D4C6",
  r: "0x1D4C7",
  s: "0x1D4C8",
  t: "0x1D4C9",
  u: "0x1D4CA",
  v: "0x1D4CB",
  w: "0x1D4CC",
  x: "0x1D4CD",
  y: "0x1D4CE",
  z: "0x1D4CF",
  0: "0x1D7D8",
  1: "0x1D7D9",
  2: "0x1D7DA",
  3: "0x1D7DB",
  4: "0x1D7DC",
  5: "0x1D7DD",
  6: "0x1D7DE",
  7: "0x1D7DF",
  8: "0x1D7E0",
  9: "0x1D7E1",
};

export default {
  abomination: function (value) {
    luni.tools.creepify.options.top = true; // add diacritics on top. Default: true
    luni.tools.creepify.options.middle = true; // add diacritics in the middle. Default: true
    luni.tools.creepify.options.bottom = true; // add diacritics on the bottom. Default: true
    luni.tools.creepify.options.maxHeight = 15; // How many diacritic marks shall we put on top/bottom? Default: 15
    luni.tools.creepify.options.randomization = 100;

    return luni.tools.creepify.encode(value);
  },
  spongebob: function (value) {
    const charArray = value.split("");
    const retur = [];
    let flag = true;

    for (let i = 0; i < charArray.length; i++) {
      const char = charArray[i];
      if (char.match(/\w/g)) {
        if (flag) {
          retur.push(char.toUpperCase());
          flag = false;
        } else {
          retur.push(char);
          flag = true;
        }
      } else {
        retur.push(char);
      }
    }
    return retur;
  },
  tiny: function (value) {
    return luni.tools.tiny.encode(value);
  },
  mirror: function (value) {
    return luni.tools.mirror.encode(value);
  },
  flip: function (value) {
    return luni.tools.flip.encode(value);
  },
  bent: function (value) {
    return luni.tools.bent.encode(value);
  },
  bubbles: function (value) {
    return luni.tools.bubbles.encode(value);
  },
  friendly: function (value) {
    const regex = /[a-zA-Z0-9]+/g;
    let convertedString = [];

    for (var char of value) {
      if (char.match(regex)) {
        const newChar =
          typeof value === "number"
            ? scriptCharMap[char]
            : scriptCharMap[char.toLowerCase()] ?? "";
        if (newChar) {
          convertedString = convertedString + String.fromCodePoint(newChar);
        } else {
          convertedString = convertedString + char;
        }
      } else {
        convertedString = convertedString + char;
      }
    }

    return `${String.fromCodePoint("0x1F380")} ${String.fromCodePoint("0x1F36D")} ${convertedString} ${String.fromCodePoint("0x1F36D")} ${String.fromCodePoint("0x1F380")}`;
  },
  sparkles: function (value) {
    const regex = /[a-zA-Z0-9]+/g;
    const matches = value.match(regex);
    const joined = matches.join("");
    return `${String.fromCodePoint("0x2728")} ${joined.split("").join(" ")} ${String.fromCodePoint("0x2728")}`;
  },
};
