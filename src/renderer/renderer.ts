const WriteVersion = () => {
    document.write('We are using node ' + process.versions.node);
    document.write('Chrome ' + process.versions.zlib);
    document.write('and Electron ' + process.versions.v8);
}

WriteVersion();
