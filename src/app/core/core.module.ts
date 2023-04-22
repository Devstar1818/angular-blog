import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuSocialModule } from '../shared/components/menu-social/menu-social.module';

@NgModule({
    declarations: [   
        HeaderComponent,
        FooterComponent
  ],
    imports: [
        RouterModule,
        MenuSocialModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class CoreModule { }