let scedule = {
    // John: 100,
    // Ann: 160,
    // Pete: 130
    };
        function isEmpty(scedule) {
        let entries = Object.entries(scedule);
        return (entries == '' ? true : false)
    };
    //console.log(entries)

    alert (isEmpty(scedule));
