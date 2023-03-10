import request from '@/utils/request'

export function fetchList() {
    return request({
        url: '/blog/findAllBlogs',
        method: 'get'
    })
}

export function getBlog(id) {
    return request({
        url: '/blog/'+id,
        method: 'get'
    })
}

