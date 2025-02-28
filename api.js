let api_key = "AIzaSyAeVGU4KWAtN7RX8Bnpu43npgfVDu0CE5M";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
//let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 50,
    regionCode: 'IN'
}))
.then(res => res.json())
.then(data => {
     console.log(data);

})

