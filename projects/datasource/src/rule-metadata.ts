export interface RuleMetadata {
	ruleName: string;
	description?: string; // can be markdown
	rationale?: string; // can be markdown
	optionsDescription?: string; // can be markdown
	options?: any; // json schema
	optionExamples?: Array<any>;
	type?: string;
	typescriptOnly?: boolean;
	hasFix?: boolean;

	provider?: string;
	metadataMissing?: boolean;
	gitUrl?: string;
	gitHost?: string;
}
