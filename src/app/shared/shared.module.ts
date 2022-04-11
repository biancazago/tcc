import { NgModule } from '@angular/core';
import { PRIMENG_IMPORTS } from './imports/primeng-imports';
import { ANGULAR_IMPORTS } from './imports/angular-imports';

const MODULE_DECLARATIONS: any[] = [];

@NgModule({
  declarations: [MODULE_DECLARATIONS],
  imports: [
    ANGULAR_IMPORTS,
    PRIMENG_IMPORTS
  ],
  exports: [
    PRIMENG_IMPORTS,
    ANGULAR_IMPORTS,
    MODULE_DECLARATIONS
  ],
  providers: []
})
export class SharedModule { }
