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
import createModel, { createSelector, createSelectors } from 'react-scoped-model';
import React from 'react';
import SelectSubtitle from './SelectSubtitle';
import States from '../States';
import StateProps from '../StateProps';
import tuple from '../../utils/tuple';

export interface ToggleActiveSubtitleState {
  toggleActiveSubtitle: () => void;
}

const useStateProps = createSelectors(StateProps, (state) => tuple(
  state.instance,
  state.player,
));

const useStates = createSelector(States, (state) => state.lastActiveSubtitle);
const useSelectSubtitle = createSelector(SelectSubtitle, (state) => state.selectSubtitle);

const ToggleActiveSubtitle = createModel<ToggleActiveSubtitleState>(() => {
  const [instance, player] = useStateProps();
  const lastActiveSubtitle = useStates();
  const selectSubtitle = useSelectSubtitle();

  const toggleActiveSubtitle = React.useCallback(() => {
    let last = lastActiveSubtitle;
    if (!last) {
      [last] = instance.config.subtitles;
    }

    if (!player.subtitle) {
      selectSubtitle(last);
    }
  }, [instance.config.subtitles, lastActiveSubtitle, player.subtitle, selectSubtitle]);

  return {
    toggleActiveSubtitle,
  };
});

export default ToggleActiveSubtitle;
