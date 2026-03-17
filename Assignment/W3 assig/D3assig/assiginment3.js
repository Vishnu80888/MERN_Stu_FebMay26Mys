function mergeSettings(savedSettingsJSON, defaultSettings) {
  // 1. Convert JSON string to an object
  const savedSettings = JSON.parse(savedSettingsJSON);

  // 2.merged object
  const mergedObject = {
    ...defaultSettings,
    ...savedSettings
  };

  // 3.merged result back to a JSON string
  const mergedJSON = JSON.stringify(mergedObject);

  return {
    mergedObject,
    mergedJSON
  };
}
console.log(mergeSettings)
