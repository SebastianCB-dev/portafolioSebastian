import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { TabMenuModule } from 'primeng/tabmenu';
import { ListboxModule } from 'primeng/listbox';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { SidebarModule } from 'primeng/sidebar';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    TabMenuModule,
    ListboxModule,
    MessageModule,
    MessagesModule,
    SidebarModule
  ]
})
export class PrimeNgModule { }
