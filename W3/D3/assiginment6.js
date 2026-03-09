function auditReport(reportJSON) {
  // 1. Parse the JSON string into an object
  const report = JSON.parse(reportJSON);
  const modules = report.modules;

  let okCount = 0;
  let failCount = 0;

  // 2. Loop to scan 
  for (const key in modules) {
    if (modules[key] === "FAIL") {
      failCount++;
      // 3. Stop scanning immediately if a failure 
      break; 
    } else if (modules[key] === "OK") {
      okCount++;
    }
  }

  const summary = {
    app: report.app,
    status: report.status,
    okCount: okCount,
    failCount: failCount,
    healthCheck: failCount > 0 ? "CRITICAL" : "HEALTHY"
  };

  // 5. Convert summary back to JSON string
  const summaryJSON = JSON.stringify(summary);

  return {
    summary,
    summaryJSON
  };
}

const testInput = JSON.stringify({
  "app": "Portal",
  "status": "OK",
  "modules": { "auth": "OK", "payment": "FAIL", "results": "OK" }
});
console.log(testInput);