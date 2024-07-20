import { common } from "@/app/type/index"

export default function Read(props:common.props) {
    return(
        <>
            <h2>Read</h2>
            parameters : {props.params.id} !!
        </>
    )
}