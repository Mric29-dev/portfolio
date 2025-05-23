
export function sendEmail(data: any) {
    const apiEndpoint = '/api/email';

    return fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .catch((err) => {
            alert(err);
        });
}