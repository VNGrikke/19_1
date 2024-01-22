function truecate(arr, n) {
    let afterDel = []
    for (let i = 0; i <arr.length-n; i++) {
        afterDel += arr[i];
    }
    afterDel+= '...';
    console.log(afterDel);
}

truecate("mai nghi hoc",3);