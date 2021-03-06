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
import { injectGlobal } from '@emotion/css';
import {
  GUI_BUTTON_STATE_ACTIVE,
  GUI_BUTTON_SELECT_OPTION,
  GUI_BUTTON_SETTINGS_BACK,
  GUI_BUTTON_SETTINGS_OPTIONS,
} from './button';

export const GUI_SETTINGS = 'igui__settings';
export const GUI_SETTINGS_NOOP = 'igui__settings--noop';
export const GUI_SETTINGS_SELECT_OPTION_INFO = 'igui__settings--select-option-info';
export const GUI_SETTINGS_SELECT = 'igui__settings--select';
export const GUI_SETTINGS_HEADER = 'igui__settings--header';

injectGlobal`
  .${GUI_SETTINGS} {
    position: absolute;
    right: 9px;
    bottom: 58px;
    background-color: #222222;
    border-radius: 2px;
    color: #fff;
    z-index: 1;
    min-width: 180px;
    overflow-y: auto;
  }

  .${GUI_SETTINGS_NOOP} {
    padding: 8px 16px;
  }

  .${GUI_SETTINGS_SELECT} {
    margin: 3px 0;

    & .${GUI_BUTTON_SELECT_OPTION} {
      display: block;
      padding: 8px 16px;
      width: 100%;
      text-align: left;

      &.${GUI_BUTTON_STATE_ACTIVE} {
        text-decoration: underline;
      }

      &:hover {
        background-color: #333333;
      }

      & .${GUI_SETTINGS_SELECT_OPTION_INFO} {
        float: right;
      }
    }
  }

  .${GUI_SETTINGS_HEADER} {
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #555555;
    display: flex;
    align-items: center;

    & .${GUI_BUTTON_SETTINGS_BACK} {
      margin-right: 8px;
      font-size: 16px;
    }

    & .${GUI_BUTTON_SETTINGS_OPTIONS} {
      margin-left: auto;
      font-size: 11px;
    }
  }
`;
