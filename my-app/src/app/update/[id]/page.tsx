import { common } from "@/type/index"

function page(props:common.props) {
  return (
    <>
      <h1>Update!!</h1>
      props ? : {props.params.id}
    </>
  )
}

export default page