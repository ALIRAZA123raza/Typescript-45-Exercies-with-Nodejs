function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I Love Typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(text, " printe on shirt"));
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "I Love Typescript");
