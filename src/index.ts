export default {
  async fetch(request, env) {
    return await handleRequest(request)
  }
}

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
}

const html = `<!DOCTYPE html>
<body>
  <h1>Hello World</h1>
  <p>This is Takaaki Suzuki Serverless HTML Page test</p>
</body>`;

