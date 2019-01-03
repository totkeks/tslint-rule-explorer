import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RuleMetadata } from "projects/datasource/src/rule-metadata";
import { RuleService } from "../../services/rule.service";
import { Location } from "@angular/common";

@Component({
	selector: "app-rule-detail",
	templateUrl: "rule-detail.component.html",
})
export class RuleDetailComponent implements OnInit {
	public rule: RuleMetadata;

	constructor(
		private ruleService: RuleService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	public ngOnInit() {
		const name = this.route.snapshot.paramMap.get("name");

		if (!name) {
			this.goBack();
		}

		this.ruleService.getRule(name).subscribe(value => (this.rule = value));
	}

	public goBack() {
		this.location.back();
	}
}
