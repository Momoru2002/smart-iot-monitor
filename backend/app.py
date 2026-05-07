from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/api/sensors')
def sensors():
    return jsonify({
        "temperature": random.randint(20, 40),
        "humidity": random.randint(30, 90),
        "energy": random.randint(100, 900),
        "air_quality": random.randint(40, 200)
    })

if __name__ == '__main__':
    app.run(debug=True)
