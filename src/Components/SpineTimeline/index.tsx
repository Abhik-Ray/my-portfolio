import { useEffect } from "react";
import "./styles.scss"

interface TimelineProps {
    points: string[];
    selectedPoint: number;
    selectedPointProgress: number;
}

const SpineTimeline = (props: TimelineProps) => {

    const changeProgressValue = (pointElement: HTMLElement, progress: number = 100) => {
        pointElement.style.setProperty('--progress-value', `${progress}%`);
    }

    const calculateProgressForPoint = (index: number, pointElement: number, progress: number, totalPoints: number) => {
        if(index === totalPoints - 1 || index > pointElement){
            return 0;
        } else if(index === pointElement){
            return progress;
        } else {
            return 100;
        }
    }

    const calculateProgress = (progress: number, totalPoints: number, selectedPoint: number) => {
        const spinePointsCollection = document.getElementsByClassName('spinePoint');
        const spinePoints = Array.from(spinePointsCollection);
        spinePoints.forEach((spinePoint, index) => {
            if (spinePoint instanceof HTMLElement) {
                changeProgressValue(spinePoint, calculateProgressForPoint(index, selectedPoint, progress, totalPoints));
            }
        });
    }
    useEffect(() => {
        calculateProgress(props.selectedPointProgress, props.points.length, props.selectedPoint);
    }, [props.selectedPointProgress]);
    
    return (
        <ul className="spine">
            {props.points.map((point, index) => (
                <li key={`${index}-spine`} className='spinePoint' data-label={point} data-progress={100}>
                    <label>{point}</label>
                </li>
            ))}
        </ul>
    )
}

export default SpineTimeline;