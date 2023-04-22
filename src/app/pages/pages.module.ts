import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { CardModule } from '../shared/components/card/card.module';

@NgModule({
    declarations: [  
        HomeComponent,
        ContentComponent
  ],
    imports: [
        RouterModule,
        CardModule
    ],
    exports: [
        HomeComponent,
        ContentComponent
    ]
})
export class PagesModule { }