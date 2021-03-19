import React from 'react'

import Button from './Button'

/*入力画面で日付を選択する*/
const Day = () => {
    return (
        <div>
            <label for="Day">日付　</label>
            <Button onClick='' color='orange' text='<' />
            <input type="date" value="2021-03-19">
            </input>
            <Button onClick='' color='orange' text='>' />
        </div>
    )
}

export default Day;