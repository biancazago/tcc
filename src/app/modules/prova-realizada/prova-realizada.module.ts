import { HttpClientModule } from '@angular/common/http';
import { ProvaRealizadaRoutes } from './prova-realizada.routes';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {DataViewModule} from 'primeng/dataview';
import { FormProvaRealizadaComponent } from './components/form-prova-realizada/form-prova-realizada.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ChipsModule} from 'primeng/chips';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TooltipModule} from 'primeng/tooltip';
import {TabViewModule} from 'primeng/tabview';
import { ListProvaRealizadaComponent } from './components/list-prova-realizada/list-prova-realizada.component';
import { RadioButtonModule, InputTextModule, CheckboxModule, DropdownModule, ButtonModule, TableModule } from 'primeng';
import {EditorModule} from 'primeng/editor';
import { ProvaRealizadaService } from './service/prova-realizada.service';

@NgModule({
  declarations: [
      FormProvaRealizadaComponent,
      ListProvaRealizadaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataViewModule,
    InputSwitchModule,
    ReactiveFormsModule,
    RouterModule.forChild(ProvaRealizadaRoutes),
    HttpClientModule,
    InputTextareaModule,
    ChipsModule,
    MessagesModule,
    MessageModule,
    TooltipModule,
    TabViewModule,
    RadioButtonModule,
    EditorModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    ButtonModule,
    DataViewModule,
    InputSwitchModule,
    ReactiveFormsModule,
    DataViewModule,
    InputSwitchModule,
    TableModule

    
  ],
  providers: [
    ProvaRealizadaService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProvaRealizadaModule { }
