import { Component, OnInit } from '@angular/core';
import {ElementSchemaRegistry} from '@angular/compiler';
import { from } from 'rxjs';
import { Program } from '../../models/program';
import { ProgramService } from '../../service/program.service';
import {allowedNodeEnvironmentFlags} from 'process';


@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})
export class ProgramaComponent implements OnInit {

  public program: Program;

  constructor(private  programService:ProgramService) { 

    this.program = new Program('','','','',0,'');
  
  }

  ngOnInit(): void {
  }
  programar(){

    this.programService.programarServicio(this.program).subscribe(
      (res:any) => {
        console.log(res);
        if(res.statusCode != 200){
          alert('No se pudo enviar la solicitud');
        } else{
          alert('¡Solicitud realizada!');
        }
      },
      (error) =>{
        var errorMensaje = <any>error;
        if(errorMensaje != null){
          console.log(error);
  
        }
  
  
      }
    )
    console.log( this.programService);
  }
  }
  
  
    
  
    
  
  

