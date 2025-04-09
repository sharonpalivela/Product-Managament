import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
    UseGuards,
  } from '@nestjs/common';
  import { ProductService } from './product.service';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  
  @UseGuards(JwtAuthGuard)
  @Controller('products')
  export class ProductController {
    constructor(private readonly productService: ProductService) {}
  
    @Post()
    create(@Body() productData: any) {
      return this.productService.create(productData);
    }
  
    @Get()
    findAll() {
      return this.productService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.productService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateData: any) {
      return this.productService.update(id, updateData);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.productService.remove(id);
    }
  }
  