/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
import * as React from 'react';
import { createSelector } from 'react-scoped-model';
import { GUI_VIEW_ERROR, GUI_VIEW_ERROR_TITLE } from '../theme';
import Data from '../hooks/Data';

const useData = createSelector(Data, (state) => state.error);

const ErrorView = React.memo(() => {
  const error = useData();

  if (!error) {
    return null;
  }

  const title = 'Uh oh!';
  const message = `Something went wrong ${error.code ? `(${error.code})` : ''}`;
  return (
    <div className={GUI_VIEW_ERROR}>
      <div>
        <div data-text={title} className={GUI_VIEW_ERROR_TITLE}>
          {title}
        </div>
        <div>{message}</div>
      </div>
    </div>
  );
});

export default ErrorView;
