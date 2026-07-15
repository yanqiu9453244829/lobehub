import { describe, expect, it } from 'vitest';

import { filterChatOnlyActions } from './index';

describe('filterChatOnlyActions', () => {
  it('keeps attachments, formatting, and chat operations while hiding configuration actions', () => {
    expect(
      filterChatOnlyActions([
        'model',
        'search',
        'memory',
        'fileUpload',
        'tools',
        '---',
        ['typo', 'params', 'clear'],
      ]),
    ).toEqual(['fileUpload', '---', ['typo', 'clear']]);
  });

  it('keeps the unified attachments menu but hides the model selector', () => {
    expect(filterChatOnlyActions(['model', 'plus'])).toEqual(['plus']);
  });
});
