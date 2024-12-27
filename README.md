# Email Scraper Chrome Extension

A simple Chrome extension that scrapes all the email addresses present on the current webpage.

## Features

- Scrapes all email addresses from the current page
- Displays the list of scraped emails in the extension popup
- Easy-to-use interface

## Installation

### Prerequisites

- Google Chrome

### Steps

1. Clone the repository or download the project files.
2. Build the project by "npm run build" (A dist folder will be created)
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable **Developer mode** at the top-right.
5. Click **Load unpacked** and select the dist folder.
6. The extension will be added to your Chrome toolbar.

## Usage

1. Click on the Email Scraper extension icon in the Chrome toolbar.
2. The popup will display all email addresses found on the current webpage.
3. You can copy the emails or save them as needed.

## Technologies Used

- React
- TailwindCSS
- TypeScript
- Chrome Extensions API

## Development

To run the project locally for development:

1. Clone the repository:
   ```bash
   git clone https://github.com/subhajitorrin/email-scraper
   ```
2. Navigate into the project directory:
   ```bash
   cd email-scraper
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Load the extension in Chrome as described above.

### Building for Production

1. After making changes to the code, run the following command to build the project:
   ```bash
   npm run build
   ```

## Contributing

Feel free to fork the repository, submit issues, and create pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspired by the need to automate the extraction of emails for various tasks.
