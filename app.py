from http.server import BaseHTTPRequestHandler, HTTPServer

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"err-test python: ok\n")

HTTPServer(("0.0.0.0", 3000), Handler).serve_forever()
