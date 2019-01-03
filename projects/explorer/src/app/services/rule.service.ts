import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RuleMetadata } from "projects/datasource/src/rule-metadata";

@Injectable({ providedIn: "root" })
export class RuleService {
	constructor(private httpClient: HttpClient) {}

	public getRules(): Observable<Array<RuleMetadata>> {
		return this.httpClient.get<Array<RuleMetadata>>("/assets/rules.json");
	}

	public getRule(name: string): Observable<RuleMetadata | undefined> {
		return this.httpClient
			.get<Array<RuleMetadata>>("/assets/rules.json")
			.pipe(map(rules => rules.find(rule => rule.ruleName === name)));
	}
}
