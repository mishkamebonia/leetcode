// function christmasTree(n) {
//   let str = "";
//   let m = Math.round(n / 2);

//   for (let i = 0; i < n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (j >= m - i && j <= m + i) {
//         str += "*";
//       } else {
//         str += "-";
//       }
//     }

//     str += "\n";
//   }

//   return str;
// }

function christmasTree(n, c) {
  let t = 0;
  let counter = 1;
  let mid = Math.round(n / 2);
  let str = "";

  while (t < mid) {
    for (let i = 1; i <= n; i++) {
      if (i >= mid - t && i <= mid + t) {
        str += "*";
      } else {
        str += "-";
      }
    }

    str += "\n";

    if (counter === c && t < mid - 1) {
      t -= 1;
      counter = 1;
    } else {
      counter++;
      t++;
    }
  }

  return str;
}

console.log(christmasTree(41, 5));

/**

-----*----- 1
----***---- 3
---*****--- 5

----***---- 3
---*****--- 5
--*******-- 7

---*****--- 5
--*******-- 7
-*********- 9

--*******-- 7
-*********- 9
*********** 11

**/
