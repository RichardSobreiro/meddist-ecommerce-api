import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductDTO } from './dto/ProductDTO ';
import { ProductsListDTO } from './dto/ProductsListDTO';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    new Product(
      '1',
      'Luva Cirúrgica Esterilizada 8 da marca Descarpack - 50 pares',
      'Luva Cirúrgica Esterilizada 8 da marca Descarpack. Caixa com 50 pares',
      102.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      100,
      [
        'https://d2xy0rxvtalsy9.cloudfront.net/LUVA%20CIRURGICA%20EST.%208,5%20DESCARPACK.png',
      ],
      'Descarpack',
    ),
    new Product(
      '2',
      'Máscara Respiratória Com Válvula PFF2V Elástico Na Cabeça Azul Átomos',
      'Máscara Respiratória Com Válvula PFF2V Elástico Na Cabeça Azul Átomos',
      0.89,
      'https://d2xy0rxvtalsy9.cloudfront.net/2.png',
      100,
      ['https://d2xy0rxvtalsy9.cloudfront.net/2.png'],
      'Átomos',
    ),
    new Product(
      '3',
      'Touca Descartável Sanfonada com Elástico - 100 unidades',
      'Touca Descartável Sanfonada com Elástico - 100 unidades',
      10.64,
      'https://d2xy0rxvtalsy9.cloudfront.net/3.png',
      100,
      ['https://d2xy0rxvtalsy9.cloudfront.net/3.png'],
      'Dipromed',
    ),
    new Product(
      '4',
      'Abaixador de Língua em Madeira com 100 Unidades THEOTO',
      'Abaixador de Língua em Madeira com 100 Unidades THEOTO',
      7.1,
      'https://d2xy0rxvtalsy9.cloudfront.net/4.png',
      100,
      [''],
      'Theoto',
    ),
    new Product(
      '5',
      'Máscara de Proteção N95 PFF2 Descarpack com 160 Unidades',
      'Máscara de Proteção N95 PFF2 Descarpack com 160 Unidades',
      36.4,
      'https://d2xy0rxvtalsy9.cloudfront.net/5.jpg',
      100,
      [''],
      'Descarpack',
    ),
    new Product(
      '6',
      'Seringa Hipodérmica Bico Cateter 60ml Sem Agulha Descarpack com 300 Unidades',
      'Seringa Hipodérmica Bico Cateter 60ml Sem Agulha Descarpack com 300 Unidades',
      56.9,
      'https://d2xy0rxvtalsy9.cloudfront.net/6.jpg',
      100,
      [''],
      'Descarpack',
    ),
    new Product(
      '7',
      'Seringa Hipodérmica Luer Lock Sem Agulha Descarpack - 100 unidades',
      'Seringa Hipodérmica Luer Lock Sem Agulha Descarpack - 100 unidades',
      22.92,
      'https://d2xy0rxvtalsy9.cloudfront.net/7.jpg',
      100,
      [''],
      'Descarpack',
    ),
    new Product(
      '8',
      'Máscara Cirúrgica Tripla com Elástico Descarpack com 50 Unidades',
      'Máscara Cirúrgica Tripla com Elástico Descarpack com 50 Unidades',
      5.98,
      'https://d2xy0rxvtalsy9.cloudfront.net/8.jpg',
      100,
      [''],
      'Descarpack',
    ),
    new Product(
      '9',
      'Dosador Oral 3mL pacote com 150 Unidades Descarpack',
      'Dosador Oral 3mL pacote com 150 Unidades Descarpack',
      56.99,
      'https://d2xy0rxvtalsy9.cloudfront.net/9.jpg',
      100,
      [''],
      'Descarpack',
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
