// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost":
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "BSD 2":
      return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "Eclipse":
      return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "IBM":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      break;
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Perl":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case "Artistic":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case "SIL":
      return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
      break;
    case "Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    case "WTFPL":
      return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
      break;
    case "Zlib":
      return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
      break;
    default:
      return "";
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache":
      return "[Apache](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost":
      return "[Boost](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "BSD 3":
      return "[BSD 3](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "BSD 2":
      return "[BSD 2](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "Eclipse":
      return "[Eclipse](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "IBM":
      return "[IBM](https://opensource.org/licenses/IPL-1.0)";
      break;
    case "ISC":
      return "[ISC](https://opensource.org/licenses/ISC)";
      break;
    case "MIT":
      return "[MIT](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla":
      return "[Mozilla](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Perl":
      return "[Perl](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case "Artistic":
      return "[Artistic](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case "SIL":
      return "[SIL](https://opensource.org/licenses/OFL-1.1)";
      break;
    case "Unlicense":
      return "[Unlicense](http://unlicense.org/)";
      break;
    case "WTFPL":
      return "[WTFPL](http://www.wtfpl.net/about/)";
      break;
    case "Zlib":
      return "[Zlib](https://opensource.org/licenses/Zlib)";
      break;
    default:
      return "";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
