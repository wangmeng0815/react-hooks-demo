import request from './request';
import '../mock';

export function getData() {
    return request({
        url: "/data"
    })
}
