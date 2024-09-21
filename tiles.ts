export default class Tile {
  tileElement: HTMLElement;
  value: number;
  x: number | null;
  y: number | null;
  #mergenMark = false;
  constructor(container: HTMLElement, value = Math.random() > 0.5 ? 2 : 4) {
    this.tileElement = document.createElement("div");
    this.tileElement.classList.add("tile");
    this.tileElement.textContent = value.toString();
    container.append(this.tileElement);
    this.value = value;
    this.x = null;
    this.y = null;
    this.lightness = value; //call set lightness(value)
  }
  set mergenValue(value: number) {
    this.tileElement.textContent = value.toString();
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

  set content(value: string | number) {
    this.tileElement.textContent = value.toString();
  }
  set tile_x(xvalue: number) {
    this.tileElement.style.setProperty("--tileIndex-x", xvalue.toString());
    this.x = xvalue;
  }
  set tile_y(yvalue: number) {
    this.tileElement.style.setProperty("--tileIndex-y", yvalue.toString());
    this.y = yvalue;
  }
  set lightness(value: number) {
    //Math.log2(2048) returns 11. So 100% is divided into 11 gears, and each time the lightness changes by 9
    const lightness = 100 - Math.log2(value) * 9; //The smaller the brighter
    this.tileElement.style.setProperty("--lightness", `${lightness}%`);
  }
}
