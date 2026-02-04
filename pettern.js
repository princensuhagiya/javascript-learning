// Square Fill Pattern

// for (let i = 1; i <= 6; i++) {
//   for (let j = 1; j <= 6; j++) {
//     document.writeln("*", "&nbsp;");
//   }
//   document.writeln("<br>");
// }

// Right Half Pyramid

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.writeln("*", "&nbsp;");
//   }
//   document.writeln("<br>");
// }

// Revers Right Half Pyramid

// for (let i = 1; i <= 5; i++) {
//   // this loop is run 5 time
//   for (let j = 5; j >= i; j--) {
//     document.writeln("*", "&nbsp;");
//   }

//   document.writeln("<br>");
// }

//  Left Half Pyramid

// for (let i = 1; i <= 5; i++) {
//   for (let j = 5; j >= i; j--) {
//     document.writeln("&nbsp;&nbsp;&nbsp;");
//   }

//   for (let j = i; j >= 1; j--) {
//     document.writeln("*", "&nbsp;");
//   }
//   document.writeln("<br>");
// }

//  Revers Left Half Pyramid

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.writeln("&nbsp;&nbsp;&nbsp;");
//   }

//   for (let j = 5; j >= i; j--) {
//     document.writeln("*", "&nbsp;");
//   }
//   document.writeln("<br>");
// }

//  Revers Left Half Pyramid

// for (let i = 1; i <= 7; i++) {
//   for (let j = i; j < 4; j++) {
//     document.writeln("*", "&nbsp;");
//   }

//   document.writeln("*", "&nbsp;");

//   for (let h = 5; h <= i; h++) {
//     document.writeln("*", "&nbsp;");
//   }
//   document.writeln("<br>");
// }

// Reverse number Triangle Pattern Start

// for (let i = 1; i <= 5; i++) {
//   for (let j = 5; j >= i; j--) {
//     document.writeln("&nbsp;");
//   }
//   for (let h = 1; h <= i; h++) {
//     document.writeln("*", "&nbsp;");
//   }

//   document.writeln("<br>");
// }

// Mirror Image Triangle Pattern

// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.writeln("&nbsp;");
//   }
//   for (let k = i; k <= 4; k++) {
//     document.writeln(k, "&nbsp;&nbsp;");
//   }

//   document.writeln("<br>");
// }

// for (let h = 3; h >= 1; h--) {
//   for (let g = h; g >= 1; g--) {
//     document.writeln("&nbsp;");
//   }
//   for (let f = h; f <= 4; f++) {
//     document.writeln(f, "&nbsp;&nbsp;");
//   }
//   document.writeln("<br>");
// }

// Hollow Triangle Pattern

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     document.writeln("*");
//   }
//   document.writeln("</br>");
// }

let n = 10;

for (let i = 1; i <= n; i++) {
  for (let k = i; k <= n; k++) {
    document.writeln("&nbsp;");
  }

  for (let j = 1; j <= i; j++) {
    if (i == j) {
      document.writeln("*");
    } else if (j == 1) {
      document.writeln("*");
    } else if (i == n) {
      document.writeln("*");
    } else {
      document.writeln("&nbsp;&nbsp;");
    }
  }

  document.writeln("<br/>");
}
