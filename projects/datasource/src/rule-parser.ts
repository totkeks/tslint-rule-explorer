import * as glob from "glob";
import * as fs from "fs";
import * as gitUrlParse from "git-url-parse";
import * as path from "path";
import { RuleMetadata } from "./rule-metadata";
import paramCase = require("param-case");

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
	"rxjs-tslint-rules",
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
		// Whoopsie, that wasn't a rule file
		return;
	}
	let metadata = rule.metadata as RuleMetadata;

	if (metadata === undefined) {
		// The creator of this rule didn't add any metadata so let's make up some metadata
		metadata = {
			ruleName: paramCase(path.basename(match, ".js")),
			metadataMissing: true,
		};
	}
	metadata.provider = provider;

	const pkg = require(`${provider}/package.json`);
	if (pkg.repository && pkg.repository.url) {
		const parsedUrl = gitUrlParse(pkg.repository.url);
		metadata.gitUrl = `https://${parsedUrl.resource}/${parsedUrl.full_name}`;
		metadata.gitHost = parsedUrl.resource;
	}

	rules.push(metadata);
}

fs.writeFileSync("projects/explorer/src/assets/rules.json", JSON.stringify(rules));
