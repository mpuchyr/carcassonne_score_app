import React, { useEffect, useState, useRef } from 'react';

const TestFeature = () => {
    const [total, setTotal] = useState(0)
    const [points, setPoints] = useState(0)
    const [hasCathedral, setHasCathedral] = useState(false)
    const [isEndgame, setIsEndgame] = useState(false)


    const prevPointsRef = useRef()
    const prevCathedralRef = useRef()
    const prevEndgameRef = useRef()

    useEffect(() => {
        prevPointsRef.current = points
        prevCathedralRef.current = hasCathedral
        prevEndgameRef.current = isEndgame
        changeTotal()
    })

    const prevPoints = prevPointsRef.current
    const prevCathedral = prevCathedralRef.current
    const prevEndgame = prevEndgameRef.current

    const onPointsChange = (e) => {
        setPoints(e.target.value)
    }

    const onCathedralChange = () => {
        setHasCathedral(!hasCathedral)
    }

    const onEndGameChange = () => {
        setIsEndgame(!isEndgame)
    }

    const changeTotal = () => {
        if (hasCathedral && isEndgame) {
            setTotal(points * 0)
        } else if (hasCathedral) {
            setTotal(points * 3)
        } else if (isEndgame) {
            setTotal(points)
        } else {
            setTotal(points * 2)
        }
    }

    const displayPoints = () => {
        if (hasCathedral && isEndgame) {
            return (
                <p>Total: {points * 0}</p>
            )
        } else if (hasCathedral) {
            return (
                <p>Total: {points * 3}</p>
            )
        } else if (isEndgame) {
            return (
                <p>Total: {points}</p>
            )
        } else {
            return (
                <p>Total: {points * 2}</p>
            )
        }
    }
    
    return (
        <div>
            Test Feature
            <form>
                <input type="number" min="0" onChange={onPointsChange}/>
                <input type="checkbox" onChange={onCathedralChange}/>
                <label>city has Cathedral</label>
                <input type="checkbox" onChange={onEndGameChange}/>
                <label>this is the end game</label>
            </form>
            <p>Total: {points}, Prev. Points: {prevPoints}</p>
            <p>Has cathedral: {hasCathedral.toString()}</p>
            <p>Is endgame: {isEndgame.toString()}</p>
            <p>Final Total: {total}</p>
        </div>
    )
}

export default TestFeature