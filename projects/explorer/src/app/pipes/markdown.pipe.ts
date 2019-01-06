import { Pipe, PipeTransform } from "@angular/core";
import * as marked from "marked";

@Pipe({
	name: "md",
})
export class MarkdownPipe implements PipeTransform {
	public transform(markdown: string): string {
		if (markdown === undefined) {
			return "";
		}

		return marked(markdown);
	}
}
