
export const processAPIdata = async (type) => {
    let finalResult = [];
    return await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json').then(res => res.json())
        .then(data => {
            console.log(data);
            finalResult = data.entries.filter((data) => { return data.releaseYear > 2010 && data.programType === type }).sort((x, y) => { return x.title > y.title ? 1 : -1 });
            console.log(finalResult.slice(0, 21));
            console.log("Final result:", finalResult);
            return finalResult;
        })
        .catch(err => <p>Oops!! Something Went Wrong</p>)

}
