import {ElementSchemaRegistry} from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Client } from '../../models/client';
import { UserService } from '../../service/user.service';
import {allowedNodeEnvironmentFlags} from 'process';


@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  public client: Client;


  constructor(private clientService:UserService) {
    this.client = new Client('','','','',0,'');
    
  }

  ngOnInit(): void { }

cotizar(){

  this.clientService.registrarCotizacion(this.client).subscribe(
    (res:any) => {
      console.log(res);
      if(res.statusCode != 200){
        alert('No enviar la solicitud')
      } else{
        alert('¡Solicitud realizada!')
      }
    },
    (error) =>{
      var errorMensaje = <any>error;
      if(errorMensaje != null){
        console.log(error);

      }


    }
  )
  console.log( this.clientService);
}
}


  

  

