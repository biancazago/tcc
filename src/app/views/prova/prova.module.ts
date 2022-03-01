import { HttpClientModule } from '@angular/common/http';
import { ProvaRoutes } from './prova.routes';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormProvaComponent } from './components/form-prova/form-prova.component';

import { ProvaService } from './service/prova.service';
import { ListProvaComponent } from './components/list-prova/list-prova.component';


import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ButtonModule, DropdownModule,InputTextModule, DataViewModule, InputSwitchModule, InputTextareaModule, ChipsModule, TooltipModule, PickList, PickListModule, TableModule, CheckboxModule } from 'primeng';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
      FormProvaComponent,
      ListProvaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataViewModule,
    InputSwitchModule,
    ReactiveFormsModule,
    RouterModule.forChild(ProvaRoutes),
    HttpClientModule,
    InputTextareaModule,
    ChipsModule,
    MessagesModule,
    MessageModule,
    TooltipModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    ButtonModule,
    DataViewModule,
    InputSwitchModule,
    ReactiveFormsModule,
    DataViewModule,
    InputSwitchModule,
    TableModule,
  ],
  providers: [
    ProvaService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProvaModule { }
