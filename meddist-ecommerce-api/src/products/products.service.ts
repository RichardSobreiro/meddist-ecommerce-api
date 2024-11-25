import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductDTO } from './dto/ProductDTO ';
import { ProductsListDTO } from './dto/ProductsListDTO';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    new Product(
      '1',
      'LUVA CIRURGICA EST. 8 DESCARPACK CAIXA 50 PARES',
      'Luva Cirúrgica Esterilizada 8 da marca Descarpack. Caixa com 50 pares',
      102.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [
        'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      ],
      'DESCARPACK',
    ),
    new Product(
      '2',
      'Smartphone',
      'Latest model smartphone',
      699.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [''],
      'DESCARPACK',
    ),
    new Product(
      '3',
      'LUVA CIRURGICA EST. 8 DESCARPACK CAIXA 50 PARES',
      'Luva Cirúrgica Esterilizada 8 da marca Descarpack. Caixa com 50 pares',
      102.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [
        'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      ],
      'DESCARPACK',
    ),
    new Product(
      '4',
      'Smartphone',
      'Latest model smartphone',
      699.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [''],
      'DESCARPACK',
    ),
    new Product(
      '5',
      'LUVA CIRURGICA EST. 8 DESCARPACK CAIXA 50 PARES',
      'Luva Cirúrgica Esterilizada 8 da marca Descarpack. Caixa com 50 pares',
      102.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [
        'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      ],
      'DESCARPACK',
    ),
    new Product(
      '6',
      'Smartphone',
      'Latest model smartphone',
      699.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [''],
      'DESCARPACK',
    ),
    new Product(
      '7',
      'LUVA CIRURGICA EST. 8 DESCARPACK CAIXA 50 PARES',
      'Luva Cirúrgica Esterilizada 8 da marca Descarpack. Caixa com 50 pares',
      102.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [
        'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      ],
      'DESCARPACK',
    ),
    new Product(
      '8',
      'Smartphone',
      'Latest model smartphone',
      699.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [''],
      'DESCARPACK',
    ),
    new Product(
      '9',
      'LUVA CIRURGICA EST. 8 DESCARPACK CAIXA 50 PARES',
      'Luva Cirúrgica Esterilizada 8 da marca Descarpack. Caixa com 50 pares',
      102.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [
        'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      ],
      'DESCARPACK',
    ),
    new Product(
      '10',
      'Smartphone',
      'Latest model smartphone',
      699.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [''],
      'DESCARPACK',
    ),
    new Product(
      '11',
      'LUVA CIRURGICA EST. 8 DESCARPACK CAIXA 50 PARES',
      'Luva Cirúrgica Esterilizada 8 da marca Descarpack. Caixa com 50 pares',
      102.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [
        'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      ],
      'DESCARPACK',
    ),
    new Product(
      '12',
      'Smartphone',
      'Latest model smartphone',
      699.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [''],
      'DESCARPACK',
    ),
    new Product(
      '13',
      'LUVA CIRURGICA EST. 8 DESCARPACK CAIXA 50 PARES',
      'Luva Cirúrgica Esterilizada 8 da marca Descarpack. Caixa com 50 pares',
      102.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [
        'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      ],
      'DESCARPACK',
    ),
    new Product(
      '14',
      'Smartphone',
      'Latest model smartphone',
      699.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [''],
      'DESCARPACK',
    ),
    new Product(
      '15',
      'LUVA CIRURGICA EST. 8 DESCARPACK CAIXA 50 PARES',
      'Luva Cirúrgica Esterilizada 8 da marca Descarpack. Caixa com 50 pares',
      102.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [
        'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      ],
      'DESCARPACK',
    ),
    new Product(
      '16',
      'Smartphone',
      'Latest model smartphone',
      699.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [''],
      'DESCARPACK',
    ),
    new Product(
      '17',
      'Smartphone',
      'Latest model smartphone',
      699.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [''],
      'DESCARPACK',
    ),
    new Product(
      '18',
      'LUVA CIRURGICA EST. 8 DESCARPACK CAIXA 50 PARES',
      'Luva Cirúrgica Esterilizada 8 da marca Descarpack. Caixa com 50 pares',
      102.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [
        'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      ],
      'DESCARPACK',
    ),
    new Product(
      '19',
      'Smartphone',
      'Latest model smartphone',
      699.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [''],
      'DESCARPACK',
    ),
    new Product(
      '20',
      'LUVA CIRURGICA EST. 8 DESCARPACK CAIXA 50 PARES',
      'Luva Cirúrgica Esterilizada 8 da marca Descarpack. Caixa com 50 pares',
      102.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [
        'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      ],
      'DESCARPACK',
    ),
    new Product(
      '21',
      'Smartphone',
      'Latest model smartphone',
      699.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [''],
      'DESCARPACK',
    ),
    new Product(
      '22',
      'LUVA CIRURGICA EST. 8 DESCARPACK CAIXA 50 PARES',
      'Luva Cirúrgica Esterilizada 8 da marca Descarpack. Caixa com 50 pares',
      102.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [
        'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      ],
      'DESCARPACK',
    ),
    new Product(
      '23',
      'Smartphone',
      'Latest model smartphone',
      699.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [''],
      'DESCARPACK',
    ),
  ];

  findAll(offset?: number, limit?: number): ProductsListDTO {
    const products = new ProductsListDTO();
    const start = offset || 0;
    const end = limit ? start + limit : this.products.length;
    products.products = this.products
      .slice(start, end)
      .map((product) => this.toDTO(product));
    products.total = this.products.length;
    return products;
  }

  findOne(id: string): ProductDTO {
    const product = this.products.find((product) => product.id === id);
    return this.toDTO(product);
  }

  private toDTO(product: Product): ProductDTO {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
      stockQuantity: product.stockQuantity,
      imageUrls: product.imageUrls,
      brand: product.brand,
    };
  }
}
