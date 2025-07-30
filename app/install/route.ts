export async function GET(): Promise<Response> {
    const url = "https://raw.githubusercontent.com/zen-editor/zen-landing/main/install/i.sh";
    const script = await fetch(url, {
        method: "GET"
    }).then(res => res.text());

    return new Response(script, {status: 200});
}