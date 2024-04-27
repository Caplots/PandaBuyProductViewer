fetch("./data/products_27-04-24.csv")
  .then((res) => res.text())
  .then((text) => {
    // do something with "text"
    var lines = text.split("\n");

    alert(lines[0])
   })
  .catch((e) => console.error(e));
