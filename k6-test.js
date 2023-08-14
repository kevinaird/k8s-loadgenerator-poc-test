import http from "k6/http";
import { check } from "k6";


export let options = {
    preAllocatedVUs: 30,
    maxVUs: 30,
    rate: 30,
    duration: '5m',
    thresholds:{
        //Define requirements
        'failed requests': ['rate<0.1'], // less than 10 percent failures
        'http_req_duration': ['p(95)<200','p(99)<300'],
        'checks':['rate>0.95']
    }

}

export default function(){

    let response = http.get("https://paulaaird.com/lifechallengev2/");

    check(response, {
        "is status 200": (r) => r.status === 200
    });

}
