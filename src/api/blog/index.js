import request from '@/utils/request'

export function fetchList(data) {
    return request({
        url: '/blogSunsetArticle/page',
        method: 'post',
        data
    })
}

export function getBlog(id) {
    return request({
        url: '/blogSunsetArticle/'+id,
        method: 'get'
    })
}

export function getTags(data){
    return request({
        url: '/blogSunsetCategory/page',
        method: 'post',
        data
    })
}