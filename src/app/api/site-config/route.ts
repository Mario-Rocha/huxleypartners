import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "huxley2026";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO = "Mario-Rocha/huxleypartners";
const FILE_PATH = "public/site-config.json";
const BRANCH = "main";

// GET /api/site-config — return current config
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "site-config.json");
    const raw = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(raw);
    return NextResponse.json(data, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({}, { status: 200 });
  }
}

// POST /api/site-config — save config (requires password or token)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { password, token, data } = body;

    // Validate auth
    let authed = false;
    if (password && password === ADMIN_PASSWORD) {
      authed = true;
    } else if (token) {
      try {
        const decoded = Buffer.from(token, "base64").toString();
        const [pwd] = decoded.split(":");
        if (pwd === ADMIN_PASSWORD) authed = true;
      } catch {
        authed = false;
      }
    }

    if (!authed) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    if (!data || typeof data !== "object") {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    const jsonStr = JSON.stringify(data, null, 2);

    // 1. Update local file so preview updates immediately
    const filePath = path.join(process.cwd(), "public", "site-config.json");
    await fs.writeFile(filePath, jsonStr, "utf-8");

    // 2. Push to GitHub so Vercel redeploys and all visitors see changes
    if (GITHUB_TOKEN) {
      // Get current file SHA
      const getRes = await fetch(
        `https://api.github.com/repos/${REPO}/contents/${FILE_PATH}?ref=${BRANCH}`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (getRes.ok) {
        const fileData = await getRes.json();
        const currentSha = fileData.sha;

        const contentBase64 = Buffer.from(jsonStr).toString("base64");

        const updateRes = await fetch(
          `https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
              "Content-Type": "application/json",
              Accept: "application/vnd.github.v3+json",
            },
            body: JSON.stringify({
              message: "Actualizar configuración del sitio desde panel admin",
              content: contentBase64,
              sha: currentSha,
              branch: BRANCH,
            }),
          }
        );

        if (!updateRes.ok) {
          const err = await updateRes.text();
          console.error("GitHub update error:", err);
          // Still return success — local file was saved
          return NextResponse.json({
            success: true,
            message: "Guardado localmente. Error al sincronizar con GitHub.",
            githubError: err,
          });
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: GITHUB_TOKEN
        ? "Cambios publicados. El sitio se actualizará en 1-2 minutos."
        : "Cambios guardados (configura GITHUB_TOKEN en Vercel para publicar en vivo).",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error del servidor", details: String(error) },
      { status: 500 }
    );
  }
}
