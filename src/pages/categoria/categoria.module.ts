import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaPage } from './categoria';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CategoriaPage,
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(CategoriaPage),
  ],
})
export class CategoriaPageModule { }
