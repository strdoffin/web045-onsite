import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
    const imageUrl = "/path-to-your-image.png";

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
                    src={imageUrl}
                    alt="KU Icon"
                    width={24}
                    height={24}
                    style={{ objectFit: "contain" }}
                />
            </div>
        ),
        { ...size }
    );
}
