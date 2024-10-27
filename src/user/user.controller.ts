import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from './user.model';

@Controller('user')
export class UserController {
    constructor(private readonly service: UserService ){}

    @Get()
    getuser(){
        return this.service.getUser();
    }

    @Get(':id')
    getuserById( @Param('id') id:string) {
        return this.service.getUserById( Number( id ) );
    }



    @Post()
    postuser (@Body() newUser : user) {
        return this.service.postUser( newUser );
    }

    @Put(":id")
    putuser( @Body() nuevosDatos: user, @Param("id") id:string ):boolean {
        return this.service.putUser( nuevosDatos, Number(id) );
    }

    @Delete(":id")
    deleteuser( @Param("id") id:string) : boolean {
        return this.service.deleteUser( Number(id) );
    }
}


