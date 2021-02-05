import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../../cargar-scripts.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService) { 
    _CargarScripts.carga(["scrolltop"]);
  }

  ngOnInit(): void {
  }

}
