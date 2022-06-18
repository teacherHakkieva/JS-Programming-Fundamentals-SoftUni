function distanceBetweenPoints(x1, y1, x2, y2) {
  let xx = x2 - x1;
  let yy = y2 - y1;
  let destance = (xx ** 2)+ (yy * 2);

  console.log(destance);
}
distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);
