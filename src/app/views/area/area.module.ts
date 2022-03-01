import { HttpClientModule } from '@angular/common/http';
import { AreaRoutes } from './area.routes';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {DataViewModule} from 'primeng/dataview';
import { FormAreaComponent } from './components/form-area/form-area.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ChipsModule} from 'primeng/chips';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TooltipModule} from 'primeng/tooltip';
import {TabViewModule} from 'primeng/tabview';
import { AreaService } from './service/area.service';
import { ListAreaComponent } from './components/list-area/list-area.component';
import { InputTextModule, CheckboxModule, DropdownModule, ButtonModule, TableModule } from 'primeng';

@NgModule({
  declarations: [
      FormAreaComponent,
      ListAreaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataViewModule,
    InputSwitchModule,
    ReactiveFormsModule,
    RouterModule.forChild(AreaRoutes),
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
    AreaService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AreaModule { }
