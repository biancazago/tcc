import { HttpClientModule } from '@angular/common/http';
import { AlunoRoutes } from './aluno.routes';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {DataViewModule} from 'primeng/dataview';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ChipsModule} from 'primeng/chips';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TooltipModule} from 'primeng/tooltip';
import {TabViewModule} from 'primeng/tabview';
import { FormAlunoComponent } from "./components/form-aluno/form-aluno.component";
import { AlunoService } from './service/aluno.service';
import { ListAlunoComponent } from './components/list-aluno/list-aluno.component';
import { InputTextModule, CheckboxModule, DropdownModule, ButtonModule, TableModule } from 'primeng';

@NgModule({
  declarations: [
      FormAlunoComponent,
      ListAlunoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataViewModule,
    InputSwitchModule,
    ReactiveFormsModule,
    RouterModule.forChild(AlunoRoutes),
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
    AlunoService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AlunoModule { }
