import { DestinoViaje } from './destino-viaje.model'

export class DestinosApiClient { 
     destinos: DestinoViaje[];
     constructor(){
         this.destinos=[];

     }

     add( d: DestinoViaje): void{
         this.destinos.push(d);
        }
    getAll():  DestinoViaje[]{
        return this.destinos;
    }    
}