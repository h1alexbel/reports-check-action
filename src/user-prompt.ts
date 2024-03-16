/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2023-2024 Tracehub.git
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * User prompt.
 */
export class UserPrompt {

  /**
   * Ctor.
   *
   * @param report Bug report
   */
  constructor(
    private readonly report: string | null | undefined
  ) {
    this.report = report;
  }

  /**
   * Build user prompt.
   */
  value(): string {
    return `
    Please strictly review the following bug report and generate a summary with quality problems related to this report formulation.
    The summary must include only star (*), no indent bullet points with quality problems that only this report has and tips on how to fix them, so author of this report can improve it.
    Don't suggest how to fix the bug, instead focus only on problems with bug report formulation.
    If you see that bug report don't have quality problems with it's formulation, then just say "Quality is awesome".
    Don't generate any other info.
    Summary example:
    * <>
    * <>
    * <>
    Bug report:
    ${this.report}
    `;
  }
}
