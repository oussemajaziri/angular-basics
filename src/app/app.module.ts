import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExempleComponent } from './components/exemple/exemple.component';
import { DynamiqueComponent } from './components/dynamique/dynamique.component';
import { DirectivesStructurellesComponent } from './components/directives-structurelles/directives-structurelles.component';
import { DirectivesDAttributComponent } from './components/directives-dattribut/directives-dattribut.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { HttpClientModule } from '@angular/common/http';
import { InputParentComponent } from './components/input-parent/input-parent.component';
import { InputChildComponent } from './components/input-child/input-child.component';
import { OutputChildComponent } from './components/output-child/output-child.component';
import { OutputParentComponent } from './components/output-parent/output-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ExempleComponent,
    DynamiqueComponent,
    DirectivesStructurellesComponent,
    DirectivesDAttributComponent,
    MyComponentComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    InputParentComponent,
    InputChildComponent,
    OutputChildComponent,
    OutputParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
