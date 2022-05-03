import { AreaRoutingModule } from './area-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormAreaComponent } from './components/form-area/form-area.component';
import { AreaService } from './service/area.service';
import { ListAreaComponent } from './components/list-area/list-area.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
      FormAreaComponent,
      ListAreaComponent
  ],
  imports: [
    SharedModule,
    AreaRoutingModule,
  ],
  providers: [
    AreaService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AreaModule { }
