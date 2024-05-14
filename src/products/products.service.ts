import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductDto } from './dto/product-dto';

@Injectable()
export class ProductsService {
  products: ProductDto[] = [
    {
      id: 1,
      name: 'Pizza',
      price: 10,
    },
    {
      id: 2,
      name: 'Burger',
      price: 5,
    },
    {
      id: 3,
      name: 'Pasta',
      price: 8,
    },
    {
      id: 4,
      name: 'Ice Cream',
      price: 2,
    },
  ];

  create(product: CreateProductDto) {
    this.products.push(product);
    return this.products;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
