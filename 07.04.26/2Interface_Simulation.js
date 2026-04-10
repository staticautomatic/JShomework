class StorageProvider {
    constructor() {}

    upload(file) {}
    download(filename) {}
}

class LocalStorageProvider {
    constructor() {}

    upload() {}
    download() {}
}

class CloudStorageProvider {
    constructor() {}

    upload() {}
    download() {}
}

function useStorage(provider) {
    if(typeof provider.upload === "function" && typeof provider.download === "function") {
        console.log('Works');
        return;
    }  
    
    throw new Error("Invalid storage provider");
}

useStorage(new LocalStorageProvider());
// Works

useStorage({});
// Error: Invalid storage provide