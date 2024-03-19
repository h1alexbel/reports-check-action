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
 * Ranged content.
 */
export class Ranged implements Scalar<Promise<any>> {

  /**
   * Ctor.
   * @param origin Origin content
   * @param range Range
   */
  constructor(
    private readonly origin: Scalar<Promise<string[]>>,
    private readonly range: any
  ) {
  }

  /**
   * Blob as text.
   */
  async value() {
    let result;
    const content = await this.origin.value();
    if (this.range.includes('-')) {
      const start = this.range.split("-")[0] - 1;
      const end = this.range.split("-")[1];
      result = content.splice(start, end).join("\r\n");
    } else if (parseInt(this.range)) {
      result = content[parseInt(this.range) - 1];
    }
    return result;
  }
}
