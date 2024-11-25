import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { ProductsListDTO } from './dto/ProductsListDTO';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(
    @Query('offset') offset?: number,
    @Query('limit') limit?: number,
  ): ProductsListDTO {
    return this.productsService.findAll(+offset, +limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Product {
    return this.productsService.findOne(id);
  }
}
