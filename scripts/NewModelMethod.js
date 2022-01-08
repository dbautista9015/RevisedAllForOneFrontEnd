const ModelMethod = (url, model) => {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(model),
    })
    .then((response) => response.text())
    .then((data) => answer.textContent = data);
}

export {ModelMethod}