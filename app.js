// const data = {
//     prompt: "Write a poem about a dog wearing skis", // insert a variable
//     temperature: 0.5,
//     max_tokens: 64,
//     top_p: 1.0,
//     frequency_penalty: 0.0,
//     presence_penalty: 0.0,
// };

const funWithAI = {};

funWithAI.init = () => {
    getResponse();
}

funWithAI.data = {
    prompt: "Write a poem about a dog wearing skis", // insert a variable
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
};

funWithAI.getResponse = () => {
    const url = new URL('https://api.openai.com/v1/engines/text-curie-001/completions');

    // async function getAIAnswer() {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);
    // }

    // fetch(url)
    //     .then((results) => {
    //         if (results.ok) {
    //             return results.json();
    //         } else {
    //             throw new Error("The call to the Open AI API wasn't successful");
    //         }
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })

    fetch(url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
            },
            body: JSON.stringify(data),
        });
        console.log(data);

}