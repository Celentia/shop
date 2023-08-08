export class Cart {
  constructor(
    public id: number,
    public name: string,
    public quantity: number,
    public price: number
    // Обычно еще есть количество
  ) {}
}
