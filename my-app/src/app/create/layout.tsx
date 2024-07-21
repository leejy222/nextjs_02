import { common } from "@/type/index"

export default function Layout(props:common.props) {
    return(
        <form>
            <h2>Create</h2>
            {props.children}
        </form>
    )
}