import { readFile, writeFile } from "fs";

readFile("manifest.json", "utf8", (err, data) => {
    if (err) throw err;
    
    let manifest = JSON.parse(data);
    manifest.manifest_version = 2;

    writeFile("manifest_firefox.json", JSON.stringify(manifest, null, 2), (err) => {
        if (err) throw err;
        console.log("✅ Firefox manifest saved as manifest_firefox.json");
    });
});
