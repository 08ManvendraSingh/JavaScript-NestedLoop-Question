// 1.
for (var a = 1; a < 5; a++) {
  for (var x = 1; x < 5; x++) {
    document.write("x ");
  }
  document.write("<br>");
}
document.write("<br>");
// 2.
for (var a = 1; a < 5; a++) {
  for (var x = 1; x < 5; x++) {
    document.write(a + " ");
  }
  document.write("<br>");
}
document.write("<br>");
// 3.
for (var a = 1; a < 5; a++) {
  for (var x = 1; x < 5; x++) {
    document.write(x + " ");
  }
  document.write("<br>");
}
document.write("<br>");
// 4.
for (var a = 1; a < 5; a++) {
  for (var x = 4; x > 0; x--) {
    document.write(x + " ");
  }
  document.write("<br>");
}
document.write("<br>");
// 5.
for (var a = 4; a > 0; a--) {
  for (var x = 1; x < 5; x++) {
    document.write(a + " ");
  }
  document.write("<br>");
}
document.write("<br>");
// 6.
for (var a = 1; a < 5; a++) {
  for (var x = 1; x <= a; x++) {
    document.write("x ");
  }
  document.write("<br>");
}
document.write("<br>");
// 7.
for (var a = 1; a < 5; a++) {
  for (var x = 1; x <= a; x++) {
    document.write(x + " ");
  }
  document.write("<br>");
}
document.write("<br>");
// 8.
for (var a = 1; a < 5; a++) {
  for (var x = 1; x <= a; x++) {
    document.write(a + " ");
  }
  document.write("<br>");
}
document.write("<br>");
// 9.
for (var a = 1; a < 8; a = a + 2) {
  for (var x = 1; x <= a; x++) {
    document.write("x ");
  }
  document.write("<br>");
}
document.write("<br>");
// 10.
for (var a = 4; a > 0; a--) {
  for (var x = 1; x <= a; x++) {
    document.write("x ");
  }
  document.write("<br>");
}
document.write("<br>");
// 11.
for (var a = 4; a > 0; a--) {
  for (var x = 1; x <= a; x++) {
    document.write(a + " ");
  }
  document.write("<br>");
}
document.write("<br>");
// 12.
for (var a = 4; a > 0; a--) {
  for (var x = 1; x <= a; x++) {
    document.write(x + " ");
  }
  document.write("<br>");
}
document.write("<br>");
// 13.
for (var a = 1; a < 5; a++) {
  for (var x = a; x < 4; x++) {
    document.write("$ ");
  }
  for (var i = 1; i <= a; i++) {
    document.write("x ");
  }
  document.write("<br>");
}
document.write("<br>");
// 14.
for (var a = 1; a < 5; a++) {
  for (var x = a; x < 4; x++) {
    document.write("$ ");
  }
  for (var i = 1; i <= a; i++) {
    document.write(i + " ");
  }
  document.write("<br>");
}
document.write("<br>");
// 15.
for (var a = 1; a < 5; a++) {
  for (var x = a; x < 4; x++) {
    document.write("$ ");
  }
  for (var i = 1; i <= a; i++) {
    document.write(a + " ");
  }
  document.write("<br>");
}
document.write("<br>");
// 16.
for (a = 1; a <= 4; a++) {
  for (i = 4 - a; i > 0; i--) {
    document.write("$ ");
  }
  for (j = 1; j <= a; j++) {
    document.write("*" + " " + "1");
  }
  document.write("<br>");
}
document.write("<br>");
// 17.
for (a = 1; a < 9; a = a + 2) {
  for (i = 9 - a; i > 0; i--) {
    document.write("$ ");
  }
  for (x = 1; x <= a; x++) {
    document.write("x " + "1 ");
  }
  document.write("<br>");
}
document.write("<br>");
// 18.
for (a = 1; a < 9; a = a + 2) {
  for (i = 9 - a; i > 0; i--) {
    document.write("$ ");
  }
  for (x = 1; x <= a; x++) {
    document.write(x + " ! ");
  }
  document.write("<br>");
}
document.write("<br>");
// 20.
for (a = 1; a < 9; a = a + 2) {
  for (i = 9 - a; i > 0; i--) {
    document.write("$ ");
  }
  for (x = 1; x <= a; x++) {
    document.write(a + " 1 ");
  }
  document.write("<br>");
}
document.write("<br>");
// 21.
for (var a = 1; a < 5; a++) {
  for (var x = 1; x <= a; x++) {
    document.write("x ");
  }
  document.write("<br>");
}
for (var i = 3; i > 0; i--) {
  for (var n = 1; n <= i; n++) {
    document.write("x ");
  }
  document.write("<br>");
}
document.write("<br>");
// 22.
for (var a = 1; a < 5; a++) {
  for (var x = a; x < 4; x++) {
    document.write("$ ");
  }
  for (var i = 1; i <= a; i++) {
    document.write("x ");
  }
  document.write("<br>");
}
for (var a = 3; a > 0; a--) {
  for (var x = 1; x < 3; x++) {
    document.write("$ ");
  }
  for (var i = a; i > 0; i--) {
    document.write("x ");
  }
  document.write("<br>");
}
document.write("<br>");
// 23.
for (a = 7; a > 0; a = a - 2) {
  for (x = 7 - a; x > 0; x--) {
    document.write("$ ");
  }
  for (i = 1; i <= a; i++) {
    document.write("x " + "! ");
  }
  document.write("<br>");
}
document.write("<br>");
// 24.
for (a = 7; a > 0; a = a - 2) {
  for (x = 7 - a; x > 0; x--) {
    document.write("$ ");
  }
  for (i = 1; i <= a; i++) {
    document.write(i + " ! ");
  }
  document.write("<br>");
}
document.write("<br>");
// 25.
for (a = 7; a > 0; a = a - 2) {
  for (x = 7 - a; x > 0; x--) {
    document.write("$ ");
  }
  for (i = 1; i <= a; i++) {
    document.write(1 + " ! ");
  }
  document.write("<br>");
}
document.write("<br>");
// 26.
for (a = 5; a > 0; a = a - 2) {
  for (x = 5 - a; x > 0; x--) {
    document.write("$ ");
  }
  for (i = 1; i <= a; i++) {
    document.write(5 + " ! ");
  }
  document.write("<br>");
}
document.write("<br>");
// 27.
for (a = 5; a > 0; a--) {
  for (x = 5 - a; x > 0; x--) {
    document.write("$ ");
  }
  for (i = 1; i <= a; i++) {
    document.write("x " + "! ");
  }
  document.write("<br>");
}
document.write("<br>");
// 30.
for (a = 1; a < 6; a++) {
  for (x = 1; x <= a - 1; x++) {
    document.write("$ ");
  }
  for (i = 1; i <= 6 - a; i++) {
    document.write("x ");
  }
  document.write("<br>");
}
document.write("<br>");
// 37.
for (a = 1; a < 6; a++) {
  for (i = 1; i <= 6 - a; i++) {
    document.write(a + " ");
  }
  document.write("<br>");
}
document.write("<br>");
// 38.
for (a = 5; a > 0; a--) {
  for (i = 5; i > 5 - a; i--) {
    document.write(i + " ");
  }
  document.write("<br>");
}
document.write("<br>");
// 39.
for (a = 5; a > 0; a--) {
  for (i = 5; i >= a; i--) {
    document.write(i + " ");
  }
  document.write("<br>");
}
document.write("<br>");
