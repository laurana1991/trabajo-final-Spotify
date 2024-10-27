import { Injectable } from '@nestjs/common';
import { user } from './user.model';

@Injectable()
export class UserService {

    userList = []

        constructor() {
            const user : user = {
                id: 1,
                nombre: "ana ",
                apellido: "mansilla"
            }
            this.userList.push( user );
        }

        getUser () {
            return this.userList
        }

        getUserById ( id:number ) {
            return this.userList.find (u => u.id === id);
        }

        postUser( newuser : user ):string {
            this.userList.push( newuser );
            return newuser.nombre;
        }

        putUser (nuevosDatos: user, userToUpdateId:number ) : boolean {
            const userToUpdate : user = this.userList.find (u => u.id === userToUpdateId );
            if( userToUpdate != undefined ){
                userToUpdate.nombre = nuevosDatos.nombre;
                userToUpdate.apellido = nuevosDatos.apellido;
                return true;
            }else
                return false;
        }

        deleteUser( id:number ): boolean {
            const indiceUserAEliminar = this.userList.findIndex(u =>u.id === id);
            if( indiceUserAEliminar == -1)
                return false;
            this.userList.splice (indiceUserAEliminar, 1);
            return true;
        }
    }


