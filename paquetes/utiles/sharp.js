const sharp = require("sharp");

sharp("original.png").negate().resize(80).toFile("resize.png");
