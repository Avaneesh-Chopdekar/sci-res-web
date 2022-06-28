const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        boards: resolve(__dirname, "boards/index.html"),
        eleventh: resolve(__dirname, "boards/11th/index.html"),
        twelveth: resolve(__dirname, "boards/12th/index.html"),
        info: resolve(__dirname, "info/index.html"),
        pyqs: resolve(__dirname, "pyqs/index.html"),
        phypyqs: resolve(__dirname, "pyqs/phy/index.html"),
        mathspyqs: resolve(__dirname, "pyqs/maths/index.html"),
        chempyqs: resolve(__dirname, "pyqs/chem/index.html"),
        jee: resolve(__dirname, "jee/index.html"),
        phyjee: resolve(__dirname, "jee/phy/index.html"),
        mathsjee: resolve(__dirname, "jee/maths/index.html"),
        chemjee: resolve(__dirname, "jee/chem/index.html"),
        404: resolve(__dirname, "404.html"),
      },
    },
  },
};
