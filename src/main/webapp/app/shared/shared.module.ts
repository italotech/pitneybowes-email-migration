import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  PitneyBowesEmailMigrationApplicationSharedLibsModule,
  PitneyBowesEmailMigrationApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [PitneyBowesEmailMigrationApplicationSharedLibsModule, PitneyBowesEmailMigrationApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [PitneyBowesEmailMigrationApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PitneyBowesEmailMigrationApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: PitneyBowesEmailMigrationApplicationSharedModule
    };
  }
}
