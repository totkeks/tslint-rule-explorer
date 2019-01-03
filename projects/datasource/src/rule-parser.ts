import * as glob from "glob";
import * as fs from "fs";
import { RuleMetadata } from "./rule-metadata";

const ruleProviders = ["tslint", "codelyzer"];
const rules: Array<RuleMetadata> = [];

ruleProviders.forEach(provider =>
	glob
		.sync(`${provider}/**/*Rule.js`, { cwd: "node_modules" })
		.forEach(matches => parseRule(matches, provider))
);

function parseRule(match: string, provider: string) {
	const rule = require(match).Rule;

	if (rule === undefined) {
		return;
	}

	const metadata = rule.metadata as RuleMetadata;
	metadata.provider = provider;

	rules.push(metadata);
}

fs.writeFileSync("projects/explorer/src/assets/rules.json", JSON.stringify(rules));
