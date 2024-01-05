# Node Entry Point Creator

This Node.js CLI tool scans a specified directory for `.js` files (excluding `index.js`) and generates an `index.js` file that exports those modules. This utility is particularly useful for large projects to simplify imports and maintain a clean and organized structure.

## Features

- Scans a specified directory for `.js` files.
- Generates `module.exports` statements for each file.
- Creates an `index.js` in the target directory with all exports.
- Excludes `index.js` from being listed to avoid self-referencing issues.

## Prerequisites

Before running this script, ensure you have:

- Node.js installed on your system.

## Installation

No installation is required. Just place the script in your project or a designated scripts directory.

## Usage

To use the tool, navigate to your project's root directory in the terminal and run:

```bash
node src/index.js /path/to/your/module/directory
