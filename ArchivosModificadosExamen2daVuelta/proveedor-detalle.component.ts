import { Component, OnInit, Input } from '@angular/core'
import { Proveedor } from '../proveedor';
import { ProveedorDataSource } from '../proveedor-datasource';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedor-detalle',
  templateUrl: './proveedor-detalle.component.html',
  styleUrls: ['./proveedor-detalle.component.css']
})
export class ProveedorDetalleComponent implements OnInit {

  @Input() proveedor?: Proveedor;
  dataSource: ProveedorDataSource;
  
  constructor(private datosProveedor: ProveedorService) { }

  ngOnInit(): void {
  }

  eliminar(name: string, id: number)
  {
	
	
	var newProveedor = <Proveedor>{};
    
    newProveedor.id=id;
    newProveedor.name=name;
    newProveedor.type="proveedor";
    newProveedor.saldo=0;
    newProveedor.estado= "nuevo";
    
    if (!name) { return; }
    
        this.datosProveedor.eliminarProveedor(newProveedor).suscribe(this.datosProveedor);
		console.log("Proveedor eliminado")
    };
	

}
