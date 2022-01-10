import { Component } from "../../parser/parse_result/component";
import { FileComponent } from "../../parser/parse_result/file_component";
import { LogMessage } from "../log_message";
import { MetricResult } from "../metric_result";
import { MetricResultBuilder } from "../metric_result_builder";
import { ComponentBasedMetric } from "./component_based_,metric";
import { DocumentationAnalysisMetric, MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";

/**
 * This metric simply check whether a comment is present
 */
export class SimpleCommentPresentMetric extends ComponentBasedMetric {
    
    analyze(component: Component, builder: MetricResultBuilder): void {
        let score = 0;
        let logMessages: LogMessage[] = []
        if (component.getComment() != null) {
            score = MAX_SCORE;
        }
        else {
            score = MIN_SCORE;
            logMessages.push(new LogMessage(`Component ${component.getQualifiedName()} has no documentation`))
        }
        builder.processResult(new MetricResult(score, logMessages, this.getUniqueName()));
    }


}