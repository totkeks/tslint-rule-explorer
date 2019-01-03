import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { RuleMetadata } from "projects/datasource/src/rule-metadata";
import { RuleService } from "../../services/rule.service";

@Component({
	selector: "app-rules",
	templateUrl: "rules.component.html",
})
export class RulesComponent implements OnInit {
	public rules$: Observable<Array<RuleMetadata>> | undefined = undefined;

	constructor(private ruleService: RuleService) {}

	public ngOnInit() {
		this.rules$ = this.ruleService.getRules();
	}
}
