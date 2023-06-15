import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSlideToggleModule
  ]
})
export class SharedModule { }