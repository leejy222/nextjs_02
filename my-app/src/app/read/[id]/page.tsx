import { common, topics } from "@/type/index"

export default async function Read(props:common.props) {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+`/topics/${props.params.id}`,{ cache: 'no-store'});
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