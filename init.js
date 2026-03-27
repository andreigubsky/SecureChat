import fs from "fs";
import path from "path";

const structure = {
    src: {
        api: {
            "axios.ts": "",
        },
        services: {
            "chatService.ts": "",
        },
        hooks: {
            "useMessages.ts": "",
        },
        components: {
            Chat: {
                "Chat.tsx": "",
                "MessageList.tsx": "",
                "MessageInput.tsx": "",
            },
        },
        types: {
            "message.ts": "",
        },
        "App.tsx": "",
        "main.tsx": "",
    },
};

function createStructure(basePath, obj) {
    for (const name in obj) {
        const fullPath = path.join(basePath, name);

        if (typeof obj[name] === "string") {
            // file
            fs.writeFileSync(fullPath, obj[name]);
            console.log("📄 File created:", fullPath);
        } else {
            // folder
            if (!fs.existsSync(fullPath)) {
                fs.mkdirSync(fullPath);
                console.log("📁 Folder created:", fullPath);
            }
            createStructure(fullPath, obj[name]);
        }
    }
}

// запуск
createStructure(process.cwd(), structure);