import { HttpClientModule } from '@angular/common/http';
import { PerguntaRoutes } from './pergunta.routes';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {DataViewModule} from 'primeng/dataview';
import { FormPerguntaComponent } from './components/form-pergunta/form-pergunta.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ChipsModule} from 'primeng/chips';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TooltipModule} from 'primeng/tooltip';
import {TabViewModule} from 'primeng/tabview';
import { PerguntaService } from './service/pergunta.service';
import { ListPerguntaComponent } from './components/list-pergunta/list-pergunta.component';
import { ButtonModule, InputTextModule, CheckboxModule, DropdownModule, EditorModule, TableModule } from 'primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
      FormPerguntaComponent,
      ListPerguntaComponent
  ],
  imports: [    
    CommonModule,
    FormsModule,
    DataViewModule,
    InputSwitchModule,
    ReactiveFormsModule,
    RouterModule.forChild(PerguntaRoutes),
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
    PerguntaService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PerguntaModule { }
