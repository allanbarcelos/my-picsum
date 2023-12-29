const express = require('express');
const Jimp = require('jimp');
const path = require('path');
const dotenv = require('dotenv');

// DotEnv
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();

app.get('/:width/:height', async (req, res) => {
  const { width, height } = req.params;

  if (isNaN(width) || isNaN(height)) {
    return res.status(400).json({ error: 'Width and height must be valid numbers' });
  }

  const image = new Jimp(+width, +height, '#707070');

  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
  const text = `${width} x ${height}`;

  image.print(font, 0, 0, { text, alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE }, +width, +height);

  image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
    res.set('Content-Type', Jimp.MIME_PNG);
    res.send(buffer);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
