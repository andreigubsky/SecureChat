import fs from "fs";
import path from "path";

const structure = {
    src: {
        app: {
            providers: {},
            "App.tsx": "",
        },
        pages: {},
        widgets: {
            Chat: {},
        },
        features: {
            auth: {},
            messages: {
                api: {
                    "messageApi.ts": "",
                },
                services: {
                    "messageService.ts": "",
                },
                hooks: {
                    "useMessages.ts": "",
                },
            },
            user: {},
        },
        entities: {
            chat: {},
            messages: {},
            user: {},
        },
        shared: {
            api: {},
            lib: {},
            hooks: {},
            ui: {},
            types: {},
        },
        "index.tsx": "",
    },
};

function createStructure(basePath, obj) {
    for (const name in obj) {
        const fullPath = path.join(basePath, name);

        if (typeof obj[name] === "string") {
            if (!fs.existsSync(fullPath)) {
                fs.writeFileSync(fullPath, obj[name]);
                console.log("📄 File:", fullPath);
            }
        } else {
            if (!fs.existsSync(fullPath)) {
                fs.mkdirSync(fullPath);
                console.log("📁 Folder:", fullPath);
            }
            createStructure(fullPath, obj[name]);
        }
    }
}

createStructure(process.cwd(), structure);