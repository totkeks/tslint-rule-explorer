import * as glob from "glob";
import * as fs from "fs";
import { RuleMetadata } from "./rule-metadata";

const ruleProviders = [
	"tslint",
	"codelyzer",
	"rxjs-tslint-rules",
	"tslint-eslint-rules",
	"tslint-microsoft-contrib",
	"tslint-consistent-codestyle",
	"tslint-immutable",
	"tslint-sonarts",
	"@totkeks/tslint-rules",
];
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

	if (metadata === undefined) {
		// TODO: infer partial metadata from filename
		console.warn(`no metadata for rule in ${match}`);
		return;
	}
	metadata.provider = provider;

	// repair metadata - TODO: maybe use class initializer instead?
	metadata.hasFix = metadata.hasFix || false;

	rules.push(metadata);
}

fs.writeFileSync("projects/explorer/src/assets/rules.json", JSON.stringify(rules));
