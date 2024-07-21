import { common, topics } from "@/type/index"

export default async function Read(props:common.props) {
    const response = await fetch(`http://localhost:9999/topics/${props.params.id}`);
    const topic = await response.json() as topics.getData;
    return(
        <>
            <h2>Read</h2>
            parameters : {props.params.id} !!
            <br />
            title : {topic.title}
            <br />
            body : {topic.body}
        </>
    )
}