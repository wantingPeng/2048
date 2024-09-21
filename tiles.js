export default class Tile {
  #mergenMark = false;
  constructor(container, value = Math.random() > 0.5 ? 2 : 4) {
    this.tileElement = document.createElement("div");
    this.tileElement.classList.add("tile");
    this.tileElement.textContent = value;
    container.append(this.tileElement);
    this.value = value;
    this.x = null;
    this.y = null;
    this.lightness = value; //call set lightness(value)
  }
  set mergenValue(value) {
    this.tileElement.textContent = value;
    this.value = value;
    this.lightness = value;
  }
  remove() {
    this.tileElement.remove();
  }

  set mergenMark(value) {
    this.#mergenMark = value;
  }
  get mergenMark() {
    return this.#mergenMark;
  }

  set content(value) {
    this.tileElement.textContent = value;
  }
  set tile_x(xvalue) {
    this.tileElement.style.setProperty("--tileIndex-x", xvalue);
    this.x = xvalue;
  }
  set tile_y(yvalue) {
    this.tileElement.style.setProperty("--tileIndex-y", yvalue);
    this.y = yvalue;
  }
  set lightness(value) {
    //Math.log2(2048) returns 11. So 100% is divided into 11 gears, and each time the lightness changes by 9
    const lightness = 100 - Math.log2(this.value) * 9; //The smaller the brighter
    this.tileElement.style.setProperty("--lightness", `${lightness}%`);
  }
}
