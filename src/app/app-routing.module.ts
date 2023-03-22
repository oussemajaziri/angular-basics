import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesDAttributComponent } from './components/directives-dattribut/directives-dattribut.component';
import { DirectivesStructurellesComponent } from './components/directives-structurelles/directives-structurelles.component';
import { DynamiqueComponent } from './components/dynamique/dynamique.component';
import { ExempleComponent } from './components/exemple/exemple.component';
import { HomeComponent } from './components/home/home.component';
import { InputParentComponent } from './components/input-parent/input-parent.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { OutputParentComponent } from './components/output-parent/output-parent.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'exp', component: ExempleComponent},
  { path: 'dynamique/:id', component: DynamiqueComponent},
  { path: 'directives/structurelles', component: DirectivesStructurellesComponent},
  { path: 'directives/attributs', component: DirectivesDAttributComponent},
  { path: 'mycomponent', component: MyComponentComponent},
  { path: 'login', component: TemplateDrivenFormComponent},
  { path: 'contact', component: ReactiveFormComponent},
  { path: 'input', component: InputParentComponent},
  { path: 'output', component: OutputParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
