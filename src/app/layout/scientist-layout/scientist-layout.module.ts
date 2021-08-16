import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';
import { ProjectsComponent } from './projects/projects.component';
import { ScientistLayoutComponent } from './scientist-layout.component';
import { ScientistLayoutRoutingModule } from './scientist-layout-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ScientistLayoutRoutingModule,
    SharedComponentModule
  ],
  declarations: [
    ProjectsComponent, ScientistLayoutComponent
  ]
})
export class ScientistLayoutModule { }
