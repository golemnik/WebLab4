function PushDot (dot) {
    fetch('api/dots',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(dot )
        })
}

export default PushDot