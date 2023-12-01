function time(num) {
    x = num % 60;
    y = (num - x) / 60;
    console.log("Time:", y, "m", x, "s");
  }
  time(200);
  