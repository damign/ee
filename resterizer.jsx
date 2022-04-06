var Rasterizer = function (resolution) {
    this.doc = app.activeDocument;
    this.selection = this.doc.selection;
    this.options = new RasterizeOptions();
    this.options.resolution = resolution || 72;
    this.options.transparency = true;
    this.options.antiAliasingMethod = AntiAliasingMethod.ARTOPTIMIZED;
};
Rasterizer.prototype.run = function () {
    var n = this.selection.length;
    for (var i = 0; i < n; i++) {
        var sourceArt = this.selection[i];
        var clipBounds = sourceArt.visibleBounds;
        this.doc.rasterize(sourceArt, clipBounds, this.options);
    }
};

var rasterizer = new Rasterizer();
rasterizer.run();
