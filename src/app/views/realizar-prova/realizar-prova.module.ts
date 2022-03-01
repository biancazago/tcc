import { HttpClientModule } from '@angular/common/http';
import { RealizarProvaRoutes } from './realizar-prova.routes';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {DataViewModule} from 'primeng/dataview';
import { FormRealizarProvaComponent } from './components/form-realizar-prova/form-realizar-prova.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ChipsModule} from 'primeng/chips';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TooltipModule} from 'primeng/tooltip';
import {TabViewModule} from 'primeng/tabview';
import { RealizarProvaService } from './service/realizar-prova.service';
import { ListRealizarProvaComponent } from './components/list-realizar-prova/list-realizar-prova.component';
import { RadioButtonModule, InputTextModule, CheckboxModule, DropdownModule, ButtonModule, TableModule } from 'primeng';
import {EditorModule} from 'primeng/editor';

@NgModule({
  declarations: [
      FormRealizarProvaComponent,
      ListRealizarProvaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataViewModule,
    InputSwitchModule,
    ReactiveFormsModule,
    RouterModule.forChild(RealizarProvaRoutes),
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
    RealizarProvaService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class RealizarProvaModule { }
