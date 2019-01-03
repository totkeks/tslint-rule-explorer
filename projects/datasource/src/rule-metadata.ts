export interface RuleMetadata {
	ruleName: string;
	description: string;
	rationale: string;
	optionsDescription: string;
	options: any; // json schema
	optionExamples: Array<any>;
	type: string;
	typescriptOnly: boolean;
	hasFix: boolean;

	provider: string;
}
