import numpy as np
import pandas as pd
import tensorflow as tf
import collections
from flask import Flask, request, jsonify, redirect
from flask_cors import CORS
import openpyxl

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load the trained model
model = tf.keras.models.load_model("model/mental_health_classification_model.h5")

@app.route("/mental_health/predict", methods=["POST"])
def predict():
    print("I am at model prediction")
    try:
        file = request.files['file']
        file.save('uploads/{}'.format(file.filename))

        # Load wearable data file (assuming CSV format)
        test_data = pd.read_excel('uploads/{}'.format(file.filename), engine="openpyxl")
        
        # Use raw test data without scaling
        test_scaled = test_data
        
        # Make predictions
        predictions = model.predict(test_scaled)
        predictions = np.array([1 if p > 0.5 else 0 for p in predictions.flatten()])
        
        # Count prediction outcomes
        prediction_counts = collections.Counter(predictions)

        # Define threshold for mental health concern
        concern_threshold = 0.5  # Example threshold
        concern_rate = prediction_counts[1] / (prediction_counts[0] + prediction_counts[1])
        result = 1 if concern_rate > concern_threshold else 0

        return jsonify({"prediction": result})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True, port=8000)
