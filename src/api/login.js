import request from '@/utils/request'

export function login(data) {
    return request({
        //url: 'http://localhost:8090/admin/user/login',
        url: '/admin/user/login',
        method: 'post',
        data
    })
}