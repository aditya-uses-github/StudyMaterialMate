import uvicorn                                                    # for asgi
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Response
from youtube_data import YoutubeData


####### MODEL ########
import tensorflow as tf
import tensorflow_hub as hub
import tensorflow_text

model = tf.keras.models.load_model("bert_model.h5",
                                   compile=False,
                                   custom_objects={
                                       'KerasLayer': hub.KerasLayer}
                                   )

######## APP ##########
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.post("/predict")
def predict(data: YoutubeData):
    data = data.model_dump()
    title = data["title"]

    prediction = model.predict([title])
    print(prediction)

    if prediction > 0.6:
        prediction = 1
    else:
        prediction = 0

    return {"prediction": prediction}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
