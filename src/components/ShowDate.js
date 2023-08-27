import ShowDateText from "./ShowDateText"

const ShowDate = ({ text }) => {

    return (
        <time dateTime="2023-08-23">
            <ShowDateText text={text} />
        </time>
    )

}


export default ShowDate