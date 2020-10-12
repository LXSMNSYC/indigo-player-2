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
import createModel, { createSelector } from 'react-scoped-model';
import React from 'react';
import useConstantCallback from '../useConstantCallback';
import { SettingsTabs } from '../../types';
import { GUI_SETTINGS, GUI_BUTTON_SETTINGS } from '../../theme';
import StateProps from '../StateProps';
import States from '../States';

interface SettingsTabState {
  toggleSettings: () => void;
  closeSettings: (event: MouseEvent) => void;
}

const useStateProps = createSelector(StateProps, (state) => state.instance);
const useStates = createSelector(States, (state) => state.setSettingsTab);

const SettingsTab = createModel<SettingsTabState>(() => {
  const instance = useStateProps();
  const setSettingsTab = useStates();

  const toggleSettings = useConstantCallback(() => {
    setSettingsTab((prev) => {
      if (prev || prev !== SettingsTabs.NONE) {
        return SettingsTabs.NONE;
      }
      return SettingsTabs.OPTIONS;
    });
  });

  const closeSettings = React.useCallback((event: MouseEvent): void => {
    const { target } = event;
    const isOver = (className: string): boolean => {
      const container = instance.container.querySelector(`.${className}`);
      return (
        !!container && (container === target || container.contains(target as Node))
      );
    };

    if (isOver(GUI_SETTINGS) || isOver(GUI_BUTTON_SETTINGS)) {
      return;
    }

    setSettingsTab(SettingsTabs.NONE);
  }, [instance.container, setSettingsTab]);

  return {
    toggleSettings,
    closeSettings,
  };
});

export default SettingsTab;
