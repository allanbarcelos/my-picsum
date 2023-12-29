# Dynamic Image Generator with Express and Jimp

This simple Express.js application generates dynamic images based on the provided width and height parameters. It uses the Jimp library to create images with a specified size and displays the dimensions as text.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project and set your desired port:

   ```env
   PORT=3000
   ```

   Adjust the port number as needed.

5. Start the server:

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:<your-port>`.

## Usage

Access the dynamic image generator by visiting the following URL:

```txt
http://localhost:<your-port>/:width/:height
```

Replace `:width` and `:height` with the desired dimensions for the generated image.

Example:

```txt
http://localhost:3000/500/300
```

This will generate a 500x300 image with the text displaying the dimensions.

## Error Handling

- If either the width or height provided is not a valid number, a 400 Bad Request response will be returned with a JSON error message.

## Libraries Used

- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Jimp](https://github.com/oliver-moran/jimp): An image processing library for Node written entirely in JavaScript, with zero external or native dependencies.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
