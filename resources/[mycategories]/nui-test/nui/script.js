window.addEventListener('message', (event) => {
    const data = event.data;

    if ( data.type === 'position') {
        document.getElementById('heading-output').textContent = Math.round(data.heading);
        document.getElementById('pos-x-output').textContent = Math.round(data.x);
        document.getElementById('pos-y-output').textContent = Math.round(data.y);
        document.getElementById('pos-z-output').textContent = Math.round(data.z);

    }
});
