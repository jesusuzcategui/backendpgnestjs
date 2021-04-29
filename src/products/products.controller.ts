import { Controller, Get, Req, Res, Query, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Request, response, Response }              from 'express';
import { ProductsService }  from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product }          from './interfaces/product.interface';

@Controller('products')
export class ProductsController {


    constructor(
        private productsService: ProductsService
    ){}

    @Get('newitem')
    newitem():any{
	    return 'Hello';
    }
    

    @Post()
    async create( @Body() product: CreateProductDTO ) : Promise<Product[]> {
        return this.productsService.create(product);
    }

    @Put()
    update():any {
        return 'actualizar';
    }

    @Delete('/eliminar')
    delete():any{
        return 'Hello';
    }

    @Get('/all')
    findAll(
        @Req() request: Request,
        @Res() response: Response,
        @Query() query
    ): any {
        console.log(query);
        return response.json({msg: 'FIND ALL'});
    }

    @Get(':id')
    findOne(@Param() params): any {
        return params;
    }
}
