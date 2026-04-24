import { NextRequest, NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = "Mario-Rocha/huxleypartners";
const FILE_PATH = "public/site-config.json";

export async function POST(req: NextRequest) {
  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "GITHUB_TOKEN no configurado en variables de entorno" },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  // 1. Obtener el SHA actual del archivo (requerido por GitHub API para actualizarlo)
  const fileRes = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${FILE_PATH}`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!fileRes.ok) {
    const errText = await fileRes.text();
    return NextResponse.json(
      { error: `No se pudo obtener el archivo actual: ${errText}` },
      { status: 500 }
    );
  }

  const fileData = await fileRes.json();
  const newContent = Buffer.from(JSON.stringify(body, null, 2) + "\n").toString("base64");

  // 2. Hacer commit con el nuevo contenido
  const updateRes = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${FILE_PATH}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "🔧 Admin: actualizar configuración del sitio",
        content: newContent,
        sha: fileData.sha,
      }),
    }
  );

  if (!updateRes.ok) {
    const errText = await updateRes.text();
    return NextResponse.json(
      { error: `No se pudo publicar: ${errText}` },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
