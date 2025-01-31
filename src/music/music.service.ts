import { Injectable } from '@nestjs/common';
import { music } from './music.model';

@Injectable()
export class MusicService {
    musicList = []

    constructor() {
        const music : music = {
            id: 1,
            nombre: "twist and shout",
            artista: "the beatles"
        }
        this.musicList.push( music );
    }

    getMusic () {
        return this.musicList
    }

    getMusicById ( id:number ) {
        return this.musicList.find (m => m.id === id);
    }

    getMusicByName ( name: string) {
        return this.musicList.find ( m => m.nombre === name);
    }

    getMusicByArtista (artista: string) {
        return this.musicList.find( m => m.artista === artista);
    }

    postMusic( newmusic : music ):string {
        this.musicList.push( newmusic );
        return newmusic.nombre;
    }

    putMusic (nuevosDatos: music, musicToUpdateId:number ) : boolean {
        const musicToUpdate : music = this.musicList.find (m => m.id === musicToUpdateId );
        if( musicToUpdate != undefined ){
            musicToUpdate.nombre = nuevosDatos.nombre;
            musicToUpdate.artista = nuevosDatos.artista;
            return true;
        }else
            return false;
    }

    deleteMusic( id:number ): boolean {
        const indiceMusicaAEliminar = this.musicList.findIndex(u =>u.id === id);
        if( indiceMusicaAEliminar == -1)
            return false;
        this.musicList.splice (indiceMusicaAEliminar, 1);
        return true;
    }
}


