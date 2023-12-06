import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 100,
    duration: '90s',
};

export default function () {
    http.get('https://www.polinema.ac.id/');
    sleep(1);
}
