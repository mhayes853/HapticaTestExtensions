extension.registerManifest({
  name: "Test Logging",
  onExtensionLoaded: () => {
    const levels = ["trace", "debug", "info", "warn", "error"];
    for (let i = 0; i < 100; i++) {
      const index = i % levels.length;
      console[levels[index]](`Log #${i} is for level: ${levels[index]}`);
    }
  },
});
