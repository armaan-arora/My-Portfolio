declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: any[];
    words: any[];
    lines: any[];
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    constructor(vars?: any);
    static create(vars?: any): ScrollSmoother;
    static refresh(...args: any[]): void;
    paused(...args: any[]): any;
    scrollTop(...args: any[]): any;
    scrollTo(...args: any[]): any;
  }
}
