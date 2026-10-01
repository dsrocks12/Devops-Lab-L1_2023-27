from flask import Flask, jsonify

app = Flask(__name__)


@app.get("/")
def hello():
    return jsonify(
        message="Hello World",
        feature="User authentication workflow demonstrated",
        student="Dakshit Singh",
    )


@app.get("/health")
def health():
    return jsonify(status="healthy")


if __name__ == "__main__":
    print("Starting the original Flask application")
    app.run(host="0.0.0.0", port=5000)
