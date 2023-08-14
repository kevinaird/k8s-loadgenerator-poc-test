import http from "k6/http";
import { check } from "k6";


export let options = {
    scenarios: {
        sc1: {
            executor: 'constant-arrival-rate',
            preAllocatedVUs: 30,
            maxVUs: 30,
            rate: 30,
            duration: '5m',
        },
    },
}

export default function(){

    let response = http.get("https://paulaaird.com/lifechallengev2/");

    check(response, {
        "is status 200": (r) => r.status === 200
    });

}
