import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "black",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    src="https://sdmntprcentralus.oaiusercontent.com/files/00000000-6dc8-61f5-9260-503b298ade46/raw?se=2025-05-11T06%3A34%3A13Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=04233560-0ad7-493e-8bf0-1347c317d021&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-10T20%3A30%3A44Z&ske=2025-05-11T20%3A30%3A44Z&sks=b&skv=2024-08-04&sig=VzgRWqpCHEKHQBzK1XlWftSxSpZGnbp6ARqtsuUe8Cg%3D"
                    alt="KU Icon"
                    width={34}
                    height={34}
                    style={{ objectFit: "contain" }}
                />
            </div>
        ),
        { ...size }
    );
}
