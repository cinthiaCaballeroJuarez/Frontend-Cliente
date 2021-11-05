import { Component, OnInit } from '@angular/core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {
  faShoppingCart=faShoppingCart;


  constructor(private modalproductSelect:NgbModal ) { }

  ngOnInit(): void {
  }

  modalCantProduct(modal:any){
    this.modalproductSelect.open(modal,
      {
        size:'xs',
        centered:true

      }
      )

  }

}
