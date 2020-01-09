function mediaSourceEngineSupported(): boolean {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  return !!(window as any).MediaSource && !!MediaSource.isTypeSupported;
}

function drmEngineSupported(): boolean {
  const basic = !!(window as any).MediaKeys
    && !!(window as any).navigator
    && !!(window as any).navigator.requestMediaKeySystemAccess
    && !!(window as any).MediaKeySystemAccess
    && !!(window as any).MediaKeySystemAccess.prototype.getConfiguration;

  return basic;
}

export const isBrowserSupported = (): boolean => {
  const basic = !!(window as any).Promise
    && !!(window as any).Uint8Array
    // eslint-disable-next-line @typescript-eslint/unbound-method
    && !!Array.prototype.forEach;

  return basic && mediaSourceEngineSupported();
};

export const isBrowserSupportedDRM = (): boolean => isBrowserSupported() && drmEngineSupported();
