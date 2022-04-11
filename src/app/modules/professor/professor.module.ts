import { HttpClientModule } from '@angular/common/http';
import { ProfessorRoutes } from './professor.routes';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {DataViewModule} from 'primeng/dataview';
import { FormProfessorComponent } from './components/form-professor/form-professor.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ChipsModule} from 'primeng/chips';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TooltipModule} from 'primeng/tooltip';
import {TabViewModule} from 'primeng/tabview';
import { ProfessorService } from './service/professor.service';
import { ListProfessorComponent } from './components/list-professor/list-professor.component';
import { InputTextModule, CheckboxModule, DropdownModule, ButtonModule, TableModule } from 'primeng';

@NgModule({
  declarations: [
      FormProfessorComponent,
      ListProfessorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataViewModule,
    InputSwitchModule,
    ReactiveFormsModule,
    RouterModule.forChild(ProfessorRoutes),
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
    ProfessorService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProfessorModule { }
