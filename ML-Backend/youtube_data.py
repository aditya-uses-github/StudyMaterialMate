from pydantic import BaseModel

class YoutubeData(BaseModel):
    title: str