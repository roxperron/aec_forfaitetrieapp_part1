import { Component, OnInit, Input} from '@angular/core';
import { Package } from '../package';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  @Input() package?: Package;
  @Input() code?= '';
  @Input() name? = '';
  @Input() description? = ''; 
  @Input() categorie? ='';
  


  constructor() { }

  ngOnInit(): void {
  }

}
