import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RuleDetailComponent } from "./components/rule-detail/rule-detail.component";
import { RulesComponent } from "./components/rules/rules.component";

const routes: Routes = [
	{ path: "", redirectTo: "/rules", pathMatch: "full" },
	{ path: "rule/:name", component: RuleDetailComponent },
	{ path: "rules", component: RulesComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
