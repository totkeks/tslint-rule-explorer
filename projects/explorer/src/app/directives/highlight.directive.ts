// Based on: https://github.com/akveo/ng2-smart-table/blob/master/src/app/shared/directives/highlight.directive.ts
import { Directive, ElementRef, AfterViewInit } from "@angular/core";
import * as hljs from "highlight.js";

@Directive({
	selector: "code",
})
export class HighlightCodeDirective implements AfterViewInit {
	constructor(private elRef: ElementRef) {}

	ngAfterViewInit() {
		hljs.highlightBlock(this.elRef.nativeElement);
	}
}
