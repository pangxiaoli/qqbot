const axios = require('axios')

const getMusic = (music_name, callback) => {
    const url = 'https://c.y.qq.com/soso/fcgi-bin/client_search_cp?w=' + encodeURIComponent(music_name);
    axios.get(url)
    .then(res => {
        let str = res.data.replace('callback(', '')
        let music_list = JSON.parse(str.substring(0, str.length - 1))
        callback(music_list.data.song.list[0].songid)
    })
}

module.exports = getMusic