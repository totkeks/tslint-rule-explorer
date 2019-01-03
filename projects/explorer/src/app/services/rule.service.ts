import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RuleMetadata } from "projects/datasource/src/rule-metadata";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class RuleService {
	private rules$: Observable<RuleMetadata[]>;

	constructor(private httpClient: HttpClient) {
		this.rules$ = this.httpClient.get<RuleMetadata[]>("/assets/rules.json");
	}

	public getRules(): Observable<RuleMetadata[]> {
		return this.rules$;
	}

	public getRule(name: string): Observable<RuleMetadata> {
		return this.rules$.pipe(map(rules => rules.find(rule => rule.ruleName === name)));
	}
}
