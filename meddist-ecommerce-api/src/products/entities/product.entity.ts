export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public imageUrl: string,
    public stockQuantity: number,
    public imageUrls: string[],
    public brand: string,
  ) {}
}
