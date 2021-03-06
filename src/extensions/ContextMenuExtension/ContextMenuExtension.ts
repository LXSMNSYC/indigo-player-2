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
import Module from '../../module';
import { InstanceInterface } from '../../types';
import CONTEXT_MENU_STYLE from './styles';

export default class ContextMenuExtension extends Module {
  public name = 'ContextMenuExtension';

  private contextMenu: HTMLDivElement;

  constructor(instance: InstanceInterface) {
    super(instance);

    const onContextMenu = (event: MouseEvent): void => {
      event.preventDefault();

      this.contextMenu.style.left = 'initial';
      this.contextMenu.style.right = 'initial';
      this.contextMenu.style.top = 'initial';
      this.contextMenu.style.bottom = 'initial';
      this.contextMenu.style.opacity = '1';
      this.contextMenu.style.pointerEvents = 'auto';

      const rect = this.instance.container.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (x + this.contextMenu.offsetWidth >= rect.width) {
        this.contextMenu.style.right = `${rect.width - x}px`;
      } else {
        this.contextMenu.style.left = `${x}px`;
      }

      if (y + this.contextMenu.offsetHeight >= rect.height) {
        this.contextMenu.style.bottom = `${rect.height - y}px`;
      } else {
        this.contextMenu.style.top = `${y}px`;
      }

      const onClick = (): void => {
        this.contextMenu.style.opacity = '0';
        this.contextMenu.style.pointerEvents = 'none';
        window.removeEventListener('click', onClick);
      };

      window.addEventListener('click', onClick);
    };

    instance.container.addEventListener('contextmenu', onContextMenu);

    this.contextMenu = document.createElement('div');
    this.contextMenu.classList.add(CONTEXT_MENU_STYLE);
    this.contextMenu.style.opacity = '0';
    instance.container.appendChild(this.contextMenu);

    this.addItem('Powered by <b>Lyon</b>', () => null);
  }

  public addItem(html: string, onClick: (ev: MouseEvent) => void): void {
    const item = document.createElement('button');
    item.innerHTML = html;
    item.addEventListener('click', onClick);
    this.contextMenu.appendChild(item);
  }
}
