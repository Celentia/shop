export function* genID() {
  let id = 1;

  while (true) {
    yield id++;
  }
}
