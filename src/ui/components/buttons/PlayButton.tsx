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
import React from 'react';
import { createSelector, createSelectors } from 'react-scoped-model';
import Data from '../../hooks/Data';
import { ICON_TAG, GUI_BUTTON_PLAY } from '../../theme';
import PlayOrPause from '../../hooks/actions/PlayOrPause';
import Button from '../Button';
import tuple from '../../utils/tuple';

const useData = createSelectors(Data, (state) => {
  const createTooltipText = (text: string, shortcut?: string): string => `${state.getTranslation(text)} ${
    shortcut ? `(${shortcut})` : ''
  }`.trim();

  return tuple(
    state.playRequested ? ICON_TAG.PAUSE : ICON_TAG.PLAY,
    createTooltipText(
      state.playRequested ? 'Pause' : 'Play',
      'k',
    ),
  );
});

const usePlayOrPause = createSelector(PlayOrPause, (state) => state.playOrPause);

const PlayButton = React.memo(() => {
  const [
    playIcon,
    playTooltipText,
  ] = useData();

  const playOrPause = usePlayOrPause();

  const click = React.useCallback(() => {
    playOrPause();
  }, [playOrPause]);

  return (
    <Button
      className={GUI_BUTTON_PLAY}
      icon={playIcon}
      onClick={click}
      tooltip={playTooltipText}
    />
  );
});

export default PlayButton;
