const sleep = (millis) => {
  // NB: setTimeout isn't available in JavaScriptCore, so use this abort controll hack instead.
  return new Promise((resolve) => {
    const signal = AbortSignal.timeout(millis);
    signal.addEventListener("abort", () => resolve());
  });
};

extension.registerManifest({
  name: "Test Logging",
  description:
    "An extension that will console log every second for 15 minutes.",
  author: "Somebody",
  onExtensionLoaded: async () => {
    const levels = ["trace", "debug", "info", "warn", "error"];
    for (let i = 0; i < 900; i++) {
      const levelIndex = i % levels.length;
      console[levels[levelIndex]](
        `Log #${i} is of level ${levels[levelIndex]}.`,
      );
      await sleep(1000);
    }
  },
});
