import * as reporter from 'cucumber-html-reporter';

const options: reporter.Options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "Test Environment": "STAGING",
    "Browser": "Chrome 115.0",
    "Platform": "Windows 10",
    "Executed": "Local"
  }
};

reporter.generate(options);