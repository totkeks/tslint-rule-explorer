import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { RulesComponent } from "./components/rules/rules.component";
import { AppRoutingModule } from "./app-routing.module";
import { RuleDetailComponent } from "./components/rule-detail/rule-detail.component";
import { MarkdownPipe } from "./pipes/markdown.pipe";
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [AppComponent, RulesComponent, RuleDetailComponent, MarkdownPipe],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule, ClarityModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
