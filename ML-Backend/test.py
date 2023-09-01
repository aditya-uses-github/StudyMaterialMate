import tensorflow as tf
import tensorflow_hub as hub
import tensorflow_text

model = tf.keras.models.load_model("bert_model.h5",
                                   compile=False,
                                   custom_objects={
                                       'KerasLayer': hub.KerasLayer}
                                   )

titles = ["What is Torque? - Torque basics explained",
          "Class 11 chapter 7 | Rotatational Motion 02 || Torque - Moment Of Force - Turning Effect Of Force |",
          "TORQUE: The HATED 'Fast and Furious' Parody",
          "Torque, Basic Introduction, Lever Arm, Moment of Force, Simple Machines & Mechanical Advantage",
          "One-of-a-Kind Track-Focused Superbike in South Asia | Torque Motorsports",
          "Play torque the game on xbox and playstation for free"
          ]

filtered_titles = []

for title in titles:
    if model.predict([title]) > 0.6:
        filtered_titles.append(title)

for title in filtered_titles:
    print(title)
