import "./styles.scss"

interface TimelineProps {
    points: string[];
    selectedPoint: number;
    selectedPointProgress: number;
}

const SpineTimeline = (props: TimelineProps) => {
    return (
        <div className="spine">
            {props.points.map(point => (
                <div className='spinePoint' data-text={point}/>
            ))}
        </div>
    )
}

export default SpineTimeline;