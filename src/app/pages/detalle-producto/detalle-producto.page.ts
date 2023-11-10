import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constants/categorias';
import { Producto } from 'src/app/core/interfaces/producto';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    public cartService: CartService
    ) {
    activatedRoute.params.subscribe( params =>{
      this.buscarProducto(params['nombre']);
    })
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

cantidad = 1;

buscarProducto(nombreProductoAbuscar:string){
  CATEGORIAS

  for (let i = 0; i < CATEGORIAS.length; i++) {
    const categoriaActual = CATEGORIAS[i];
    for (let j = 0; j < categoriaActual.productos.length; j++) {
        const productoActual = categoriaActual.productos[j];
        if(productoActual.nombre === nombreProductoAbuscar){
          this.producto = productoActual;
          console.log(productoActual.nombre)
        }
      
    }
    
  }
}

 

  producto:Producto = {
    imagen: '',
    nombre: 'HOLA',
    descripcion: 'CHAU',
    precio: 5000
  }

}
