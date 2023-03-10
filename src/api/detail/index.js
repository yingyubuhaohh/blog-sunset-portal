import request from '@/utils/request'


export function getBlog(id) {
    return request({
        url: '/blog/'+id,
        method: 'get'
    })
}