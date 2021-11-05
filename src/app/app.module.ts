import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandyPageComponent } from './componente/landy-page/landy-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmpresasComponent } from './componente/empresas/empresas.component';
import { ProductoComponent } from './componente/producto/producto.component';
import { FacturaComponent } from './componente/factura/factura.component';
import { HistoriaCompraComponent } from './componente/historia-compra/historia-compra.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcesoPagoComponent } from './componente/proceso-pago/proceso-pago.component';
import { EstadoComponent } from './componente/estado/estado.component';

@NgModule({
  declarations: [
    AppComponent,
    LandyPageComponent,
    EmpresasComponent,
    ProductoComponent,
    FacturaComponent,
    HistoriaCompraComponent,
    ProcesoPagoComponent,
    EstadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
