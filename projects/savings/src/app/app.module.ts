import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionComponent } from 'projects/clooper/common/ClooperCommon/accordion/accordion.component';
import { ButtonComponent } from 'projects/clooper/common/ClooperCommon/button/button.component';
import { FullNamePipe } from 'projects/clooper/common/ClooperCommon/full-name/full-name.pipe';
import { InputComponent } from 'projects/clooper/common/ClooperCommon/input/input.component';
import { PaginationComponent } from 'projects/clooper/common/ClooperCommon/pagination/pagination.component';
import { VisibilityToggleDirective } from 'projects/clooper/common/ClooperCommon/visibility-toggle/visibility-toggle.directive';
import { URLInterceptor } from 'projects/clooper/core/ClooperCore/URLInterceptor/url.interceptor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    VisibilityToggleDirective,
    AppComponent,
    AccordionComponent,
    ButtonComponent,
    PaginationComponent,
    FullNamePipe,
    InputComponent,
  ],
  imports: [BrowserModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: URLInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
