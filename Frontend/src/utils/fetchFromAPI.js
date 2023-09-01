import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

const BACKEND_ML_URL = "http://127.0.0.1:8000/predict";


// -------------------------------------------------------------------------------------------------------------------------
// Google Search
const GOOGLE_SEARCH_BASE_URL = "https://www.googleapis.com/customsearch/v1";
// const GOOGLE_SEARCH_API_KEY = "AIzaSyDKp9Gzh-dW__jTJRMqK69AIiFPw--dKi8";
const GOOGLE_SEARCH_API_KEY = "AIzaSyCtYjsltojEkhxxu-gh1hlorjYs664g8aU";
const GOOGLE_SEARCH_SEARCH_ENGINE_ID = "93d05d8331aec421b";

export const fetchFromGoogleSearch = async (term) => {
    const res = [];
    for (let r = 0; r < 1; r++) {
        const { data } = await axios.get(
            `${GOOGLE_SEARCH_BASE_URL}?key=${GOOGLE_SEARCH_API_KEY}&cx=${GOOGLE_SEARCH_SEARCH_ENGINE_ID}&start=${
                r * 10 + r
            }&q=${term}`
        );
        for (let i = 0; i < 10; i++) res.push(data.items[i]);
    }

    return res;
};

// -------------------------------------------------------------------------------------------------------------------------
// Youtube videos
const RAPID_API_KEY = "cfe5cb1a51mshebc81040bfbd2b1p119cd5jsnc6a3e122fee0";
const YT_BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options_youtube = {
    params: {
        maxResults: 50,
        type: "video",
    },
    headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

async function filter(videos){
    videos.map(async (item)=>{

        const res = await fetch(BACKEND_ML_URL, {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            title: item.snippet.title
                        })
                    });

        const prediction = await res.json();

        if(prediction["prediction"]==1)
            item.snippet.tag = 1;
        else 
            item.snippet.tag = 0;
    })
}

export const fetchYoutubeVideosAPI = async (url) => {
    console.log("api request sent to database")
    const { data } = await axios.get(`${YT_BASE_URL}/${url}`, options_youtube);
    const videos = data.items;

    await filter(videos);
    console.log("videos are filtered");

    console.log("returning filtered data to the frontend");
    return videos;
};

// -------------------------------------------------------------------------------------------------------------------------
// Chat GPT
const CHAT_GPT_API_KEY = "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";

const configuration = new Configuration({
    apiKey: CHAT_GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const fetchFromChatGpt = async (option) => {
    const response = await openai.createCompletion(option);
    return response;
};
