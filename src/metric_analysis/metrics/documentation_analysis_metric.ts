import { Component } from "../../parser/parse_result/component";
import { MetricResultBuilder } from "../metric_result_builder";

export const MAX_SCORE = 100;
export const MIN_SCORE = 0;
/**
 * This is the abstract base class for all metrics
 */
export  abstract class DocumentationAnalysisMetric {
    private uniqueName:string;
    private params:any;
    /**
     * should analyze the documentation of a single component and processes the result of the analysis using the given @see[MetricResultBuilder]
     * @param component The Component to analyze
     * @param builder The builder to process all results of the component and its children
     */
    public abstract analyze(component: Component, builder: MetricResultBuilder| undefined): void
    /**
     * 
     * @param component Determines whether a component is worth checking
     */
    public abstract shallConsider(component: Component): boolean;

    public constructor(name:string,params:any){
        this.uniqueName=name;
        this.params=params;
    }
    public getUniqueName():string{
        return this.uniqueName;
    }
    public getParams():any{
        return this.params;
    }

}