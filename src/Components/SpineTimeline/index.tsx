import { useEffect } from "react";
import "./styles.scss"

interface TimelineProps {
    points: string[];
    selectedPoint: number;
    selectedPointProgress: number;
}

const SpineTimeline = (props: TimelineProps) => {

    // useEffect(() => {
    //     const spinePointsCollection = document.getElementsByClassName('spinePoint');
    //     const spinePointsArray = Array.from(spinePointsCollection);
    // }, [])
    return (
        <ul className="spine">
            {props.points.map(point => (
                <li className='spinePoint' data-label={point} data-progress={100}>
                    <label>{point}</label>
                </li>
            ))}
        </ul>
    )
}

export default SpineTimeline;