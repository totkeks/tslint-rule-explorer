import { Component, OnInit } from "@angular/core";
import { RuleMetadata } from "projects/datasource/src/rule-metadata";
import { RuleService } from "../../services/rule.service";
import { Observable } from "rxjs";
import { ClrDatagridSortOrder } from "@clr/angular";

@Component({
	selector: "app-rules",
	templateUrl: "rules.component.html",
})
export class RulesComponent implements OnInit {
	public sortOrder = ClrDatagridSortOrder;
	public rules$: Observable<RuleMetadata[]>;

	constructor(private ruleService: RuleService) {}

	public ngOnInit() {
		this.rules$ = this.ruleService.getRules();
	}
}
