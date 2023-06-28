const { src, dest, series } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const inject = require("gulp-inject");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

function minifyCss() {
  return src(["src/styles/*.css"])
    .pipe(cleanCSS())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("process/min-styles"));
}

function injectMinifiedCss() {
  return src("src/js/*.js")
    .pipe(
      inject(src(["process/min-styles/*.min.css"]), {
        starttag: "# inject:{{path}} ->",
        endtag: "<- end #",
        relative: true,
        removeTags: true,
        transform: function (filePath, file) {
          return file.contents.toString("utf8").replace(/"/g, "'");
        },
      })
    )
    .pipe(dest("process/injected-js"));
}

function minifyJs() {
  return src("process/injected-js/*.js")
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest("process/min-js"));
}

function injectJs() {
  return src("process/script_template.html")
    .pipe(
      inject(src(["process/min-js/*.min.js"]), {
        starttag: "// inject:{{path}} ->",
        endtag: "// <- endinject",
        relative: true,
        removeTags: true,
        transform: function (filePath, file) {
          return file.contents.toString("utf8");
        },
      })
    )
    .pipe(dest("dist/scripts"));
}

exports.default = series(minifyCss, injectMinifiedCss, minifyJs, injectJs);
