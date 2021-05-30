function parseProxy(proxy: any) {
  try {
    return JSON.parse(JSON.stringify(proxy));
  } catch (e) {
    return null;
  }
}

export { parseProxy };
