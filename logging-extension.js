extension.registerManifest({
  name: "Test Logging",
  onExtensionLoaded: () => {
    const levels = ["trace", "info", "warn", "error"];
    for (let i = 0; i < 100; i++) {
      console[levels[i]](`Log #${i} is for level: ${levels[i]}`);
    }
  },
});
